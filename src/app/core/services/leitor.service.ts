import { Injectable } from '@angular/core';
import * as converter from "xml-js";

@Injectable({
  providedIn: 'root'
})
export class LeitorService {

  constructor() {
  }

  async change(e): Promise<any[]> {
    var files = e.target.files;
    files = [...Object.values(files)];
    if (files) {
      var promises = [];
      var result = [];
      await files.forEach(file => {
        promises.push(this.read(file))
      });
      await Promise.all(promises)
        .then(res => {
          result = res;
        })
        .catch(e => console.log(e));
      return result;
    }
  }
  read(file): Promise<any> {
    if (/\.(xml)$/i.test(file.name)) {
      return new Promise((resolve, reject) => {
        let reader = new FileReader();
        reader.readAsText(file);
        reader.onload = () => {
          let xml = reader.result as string;
          let result = converter.xml2json(xml, { compact: true, spaces: 2 });
          let JSONData = JSON.parse(result);
          resolve(JSONData);
        };
      })
    }
  }
}

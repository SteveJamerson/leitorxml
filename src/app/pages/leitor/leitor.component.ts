import { AfterViewInit, Component, OnChanges, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl } from '@angular/forms';
import { LeitorService } from 'src/app/core/services/leitor.service';

@Component({
  selector: 'app-leitor',
  templateUrl: './leitor.component.html',
  styleUrls: ['./leitor.component.scss']
})
export class LeitorComponent {

  form = this.fb.group({
    input: [''],
    files: [],
  })

  get input(): FormControl {
    return this.form.get('input') as FormControl
  }
  get files(): FormArray {
    return this.form.get('files') as FormArray
  }

  constructor(
    public leitorService: LeitorService,
    private fb: FormBuilder
  ) { }

  add(e): void {
    this.leitorService.change(e)
      .then(result => {
        const value = [].concat(this.files.value, result)
          .filter(i => i != null)
        this.files.patchValue(value);
        console.log(this.files.value);

      })
  }

}

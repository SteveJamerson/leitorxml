export interface Endereco {
  CEP: string;
  numero: string;
  logradouro: string;
  municipio: string;
  complemento: string;
}

export interface Emitente {
  cnpj: string;
  ie: string;
  nome: string;
  resgistro: string;
}

export interface Destinatario {
  CNPJ?: string;
  nome?: string
}

export interface Produtos {
  nome: string;
  codigo: string;
  quantidade: string;
  unidade: string;
  valor: string;
  desconto: string;
  valor_unitario: string;
  valor_produto: string;
  cfop: string;
  ncm: string;
}

export interface Imposto {
  COFINS: {
    CST: string;
    percentual_COFINS: string;
    base_calculo: string;
    valor_COFINS: string;
  };
  ICMS: {
    CST: string;
    origem: string;
    percentual_ICMS: string;
    valor_ICMS: string;
  };
  PIS: {
    CST: string;
    percentual_PIS: string;
    base_calculo: string;
    valor_PIS: string;
  }
  valor: string;
  vItem12741: string;
}

export interface Identificacao {
  CNPJ: string;
  assinatura_QRCODE: string;
  assinatura: string;
  numero_sat: string;
  numero_caixa: string;
  numero_cfe: string;
  uf: string;
  nf: string;
  dv: string;
  data: string;
  hora: string;
}

export interface Pagamento{
  metodo: string;
  valor_metodo: string;
  icms: {
    COFINS: string;
    COFINSST: string;
    Desc: string;
    ICMS: string;
    Outro: string;
    PIS: string;
    PISST: string;
    Prod: string;
  };
  valor: string;
  vCFeLei12741: string;
}


export interface SAT {
  numero: string;
  chave: string;
  modelo: string;
  emitente: Emitente;
  produtos: Produtos[];
  imposto: Imposto;
  identificacao: Identificacao;
  pagamento: Pagamento;
}

export interface NFE {
  numero: string;
  destinatario?: Destinatario;
  chave: string;
  modelo: string;
  emitente: Emitente;
  produtos: Produtos[];
  imposto: Imposto;
  identificacao: Identificacao;
  pagamento: Pagamento;
}

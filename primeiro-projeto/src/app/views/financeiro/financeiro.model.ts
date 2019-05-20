import { Categoria } from '../categoria/shared/categoria.model';

export class Financeiro {
  constructor(public id?: number,
              public descricao?: string,
              public idCategoria?: number,
              public categoria?: Categoria,
              public isPago?: boolean,
              public data?: Date,
              public valor?: number,
              public tipo?: string,
              public observacao?: string) {
  }
}

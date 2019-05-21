import { Injectable, Injector } from '@angular/core';

import { BaseService } from './../../../base/core/services/base.service';

import { Categoria } from './categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService extends BaseService<Categoria> {

  constructor(protected injector: Injector) {
    super('categoria', injector);
  }
}

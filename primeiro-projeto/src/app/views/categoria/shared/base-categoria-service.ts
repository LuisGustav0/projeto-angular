import { BaseService } from 'src/app/core/services/base.service';
import { Categoria } from './categoria.model';

import { BaseHttpClient } from 'src/app/core/seguranca/base-http-client';

export class BaseCategoriaService extends BaseService<Categoria> {
  constructor(protected http: BaseHttpClient) {
    super(http);

    this.entity = new Categoria();
  }
}

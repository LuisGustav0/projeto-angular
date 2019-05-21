import { BaseService } from 'src/app/base/core/services/base.service';
import { Categoria } from './categoria.model';

import { BaseHttpClient } from 'src/app/base/core/components/seguranca/base-http-client';

export class BaseCategoriaService extends BaseService<Categoria> {
  constructor(protected http: BaseHttpClient) {
    super(http);

    this.entity = new Categoria();
  }
}

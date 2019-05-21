import { Injectable } from '@angular/core';

import { BaseHttpClient } from 'src/app/base/core/components/seguranca/base-http-client';
import { BaseCategoriaService } from './base-categoria-service';

@Injectable()
export class CategoriaService {
  constructor(protected http: BaseHttpClient) { }

  getBaseService(): BaseCategoriaService {
    return new BaseCategoriaService(this.http);
  }
}


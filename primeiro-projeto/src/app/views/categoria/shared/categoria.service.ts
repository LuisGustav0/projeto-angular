import { Injectable } from '@angular/core';

import { BaseHttpClient } from 'src/app/core/seguranca/base-http-client';
import { BaseCategoriaService } from './base-categoria-service';

@Injectable()
export class CategoriaService {
  constructor(protected http: BaseHttpClient) { }

  getBaseService(): BaseCategoriaService {
    return new BaseCategoriaService(this.http);
  }
}


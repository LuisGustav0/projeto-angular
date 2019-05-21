import { Injectable } from '@angular/core';

import { BaseEntity } from './entity/base-entity';
import { BaseHttpClient } from '../components/seguranca/base-http-client';

@Injectable({
  providedIn: 'root'
})
export class BaseService<T extends BaseEntity>  {
  private _entity: T;

  constructor(protected http: BaseHttpClient) {
  }

  get entity(): T {
    return this._entity;
  }

  set entity(value: T) {
    this._entity = value;
  }
}

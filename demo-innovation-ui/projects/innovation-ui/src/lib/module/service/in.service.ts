import { HttpClient } from '@angular/common/http';

import { InEntity } from './entity/in-entity';
import { Observable } from 'rxjs';

export abstract class InService<T extends InEntity> {

  protected http: HttpClient;

  constructor(protected apiPath: string) { }

  findAll(): Observable<T[]> {
    return;
  }
}

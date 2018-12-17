
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from './category.model';

import { InService } from 'projects/innovation-ui/src/lib/module/service/in.service';

@Injectable()
export class CategoryService extends InService<Category> {

  constructor(protected http: HttpClient) {
    super('api/categories', http);
  }
}

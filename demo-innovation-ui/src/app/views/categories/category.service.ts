
import {
  Injectable,
  Injector
} from '@angular/core';
import { Category } from './category.model';

import { InService } from 'projects/innovation-ui/src/lib/module/service/in.service';

@Injectable()
export class CategoryService extends InService<Category> {

  constructor(protected injector: Injector) {
    super('api/categories', injector);
  }
}

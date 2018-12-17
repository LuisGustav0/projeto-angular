import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CategoryService {

    private apiPath: 'api/categories';

    constructor(private http: HttpClient) {
    }
}

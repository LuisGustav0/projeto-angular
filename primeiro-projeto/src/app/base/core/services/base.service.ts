import { Injectable } from '@angular/core';

import { Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {
  Observable,
  throwError
} from 'rxjs';

import {
  map,
  catchError
} from 'rxjs/operators';

import { BaseEntity } from './entity/base-entity';

@Injectable()
export abstract class BaseService<T extends BaseEntity>  {
  protected http: HttpClient;

  constructor(protected controller: string,
              protected injector: Injector) {
    this.http = injector.get(HttpClient);
  }

  save(resource: T): Observable<T> {
    return this.http.post(this.controller, resource).pipe(
      map(this.jsonDataToResource.bind(this)),
      catchError(this.handleError)
    );
  }

  update(resource: T): Observable<T> {
    const url = `${this.controller}/${resource.id}`;

    return this.http.put(url, resource).pipe(
      map(() => resource),
      catchError(this.handleError)
    );
  }

  delete(id: number): Observable<any> {
    const url = `${this.controller}/${id}`;

    return this.http.delete(url).pipe(
      map(() => null),
      catchError(this.handleError)
    );
  }

  findAll(): Observable<T[]> {
    return this.http.get(this.controller).pipe(
      map(this.jsonDataToResources.bind(this)),
      catchError(this.handleError)
    )
  }

  findById(id: number): Observable<T> {
    const url = `${this.controller}/${id}`;

    return this.http.get(url).pipe(
      map(this.jsonDataToResource.bind(this)),
      catchError(this.handleError)
    );
  }

  // PROTECTED METHODS
  protected jsonDataToResources(jsonData: any[]): T[] {
    const resources: T[] = [];
    jsonData.forEach(
      element => resources.push(this.jsonDataToResourceFn(element))
    );
    return resources;
  }

  protected jsonDataToResource(jsonData: any): T {
    return this.jsonDataToResourceFn(jsonData);
  }

  protected handleError(error: any): Observable<any> {
    console.log('ERRO NA REQUISIÇÃO => ', error);
    return throwError(error);
  }
}

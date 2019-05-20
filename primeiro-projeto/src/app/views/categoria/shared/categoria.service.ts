import { Injectable } from '@angular/core';

import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';

import {
  Observable,
  throwError
} from 'rxjs';

import {
  map,
  catchError,
  flatMap
} from 'rxjs/operators';

import { Categoria } from './categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private apiPath = 'api/categoria';

  constructor(private http: HttpClient) {

  }

  save(categoria: Categoria): Observable<Categoria> {
    return this.http.post(this.apiPath, categoria)
    .pipe(
      catchError(this.handleError),
      map(this.jsonDataToCategoria)
    );
  }

  update(categoria: Categoria): Observable<Categoria> {
    const url = `${this.apiPath}/${categoria.id}`;

    return this.http.put(url, categoria)
    .pipe(
      catchError(this.handleError),
      map(() => null)
    );
  }

  delete(id: number): Observable<any> {
    const url = `${this.apiPath}/${id}`;

    return this.http.delete(url)
    .pipe(
      catchError(this.handleError),
      map(this.jsonDataToCategoria)
    );
  }

  findById(id: number): Observable<Categoria> {
    const url = `${this.apiPath}/${id}`;

    return this.http.get(this.apiPath)
    .pipe(
        catchError(this.handleError),
        map(this.jsonDataToCategoria)
    );
  }

  findAll(): Observable<Categoria[]> {
    return this.http.get(this.apiPath)
    .pipe(
        catchError(this.handleError),
        map(this.jsonDataToListaCategoria)
    );
  }

  private jsonDataToCategoria(jsonData: any[]): Categoria {
    return jsonData as Categoria;
  }

  private jsonDataToListaCategoria(jsonData: any[]): Categoria[] {
    const listaCategoria: Categoria[] = [];

    jsonData.forEach(categoria => {
      listaCategoria.push(categoria);
    });

    return listaCategoria;
  }

  private handleError(error: any): Observable<any> {
    console.log('ERRO NA REQUISIÇÃO => ', error);

    return throwError(error);
  }
}

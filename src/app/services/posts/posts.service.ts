import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from '../api/api.service';

@Injectable({ providedIn: 'root' })
export class PostsService {
  private endpoint = 'posts';

  constructor(private api: ApiService) {}

  /**
   * Lista os posts do WordPress com filtros opcionais.
   *
   * @param {HttpParams} [params] - Parâmetros de consulta opcionais para filtrar os posts.
   * @returns {Observable<any>} - Observable com a lista de posts.
   */
  list(params?: HttpParams): Observable<any> {
    return this.api.getFromWordpress(this.endpoint, params);
  }

  /**
   * Obtém os dados de um post específico pelo ID.
   *
   * @param {number} id - ID do post a ser obtido.
   * @returns {Observable<any>} - Observable com os dados do post.
   */
  get(id: number): Observable<any> {
    return this.api.getFromWordpress(`${this.endpoint}/${id}`);
  }

  /**
   * Cria um novo post no WordPress.
   *
   * @param {any} data - Dados do post a serem enviados para criação.
   * @returns {Observable<any>} - Observable com a resposta da API.
   */
  create(data: any): Observable<any> {
    return this.api.postToWordpress(this.endpoint, data);
  }

  /**
   * Atualiza um post existente pelo ID.
   *
   * @param {number} id - ID do post a ser atualizado.
   * @param {any} data - Dados atualizados do post.
   * @returns {Observable<any>} - Observable com a resposta da API.
   */
  update(id: number, data: any): Observable<any> {
    return this.api.putToWordpress(`${this.endpoint}/${id}`, data);
  }

  /**
   * Exclui um post pelo ID.
   *
   * @param {number} id - ID do post a ser excluído.
   * @returns {Observable<any>} - Observable com a resposta da API.
   */
  delete(id: number): Observable<any> {
    return this.api.deleteFromWordpress(`${this.endpoint}/${id}`);
  }
}

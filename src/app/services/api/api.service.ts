import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private wordpressBaseUrl = environment.wordpressBaseUrl;
  private woocommerceBaseUrl = environment.woocommerceBaseUrl;
  private consumerKey = environment.consumerKey;
  private consumerSecret = environment.consumerSecret;

  constructor(
    private http: HttpClient
  ) {
  }
  /**
   * Gera e retorna os parâmetros de autenticação como uma instância de HttpParams.
   *
   * @returns {HttpParams} Objeto HttpParams contendo a consumer key e consumer secret para autenticação.
   */
  private getAuthParams() {
    return new HttpParams()
      .set('consumer_key', this.consumerKey)
      .set('consumer_secret', this.consumerSecret);
  }

  /**
   * Realiza uma requisição GET para um endpoint da API do WordPress.
   *
   * @param {string} endpoint - O endpoint específico da API do WordPress a ser consultado.
   * @param {HttpParams} [params] - Parâmetros de consulta opcionais para a requisição.
   * @returns {Observable<any>} Observable com a resposta da API do WordPress.
   */
  getFromWordpress(endpoint: string, params?: HttpParams): Observable<any> {
    const url = `${this.wordpressBaseUrl}/${endpoint}`;
    return this.http.get(url, { params });
  }

  /**
   * Realiza uma requisição GET para um endpoint da API do WooCommerce,
   * adicionando automaticamente os parâmetros de autenticação necessários.
   *
   * @param {string} endpoint - O endpoint da API do WooCommerce a ser consultado.
   * @param {HttpParams} [params] - Parâmetros de consulta opcionais para a requisição.
   * @returns {Observable<any>} Observable com a resposta da API do WooCommerce.
   */
  getFromWoocommerce(endpoint: string, params?: HttpParams): Observable<any> {
    const url = `${this.woocommerceBaseUrl}/${endpoint}`;

    let allParams = params || new HttpParams();
    const authParams = this.getAuthParams();

    // Itera sobre todas as chaves do authParams e adiciona no allParams
    authParams.keys().forEach(key => {
      authParams.getAll(key)?.forEach(value => {
        allParams = allParams.append(key, value);
      });
    });

    return this.http.get(url, { params: allParams });
  }

  /**
   * Envia uma requisição POST para um endpoint específico do WordPress com os dados fornecidos.
   *
   * @param {string} endpoint - O endpoint da API do WordPress para o qual os dados serão enviados.
   * @param {any} data - Os dados que serão enviados no corpo da requisição POST.
   * @returns {Observable<any>} Um Observable representando a resposta HTTP da API do WordPress.
   */
  postToWordpress(endpoint: string, data: any) {
    const url = `${this.wordpressBaseUrl}/${endpoint}`;
    return this.http.post(url, data);
  }

  /**
   * Envia uma requisição PUT para um endpoint específico do WordPress com os dados fornecidos.
   *
   * @param {string} endpoint - O endpoint da API do WordPress para o qual a requisição será enviada.
   * @param {any} data - Os dados que serão enviados no corpo da requisição PUT.
   * @returns {Observable<any>} Um Observable contendo a resposta da API do WordPress.
   */
  putToWordpress(endpoint: string, data: any) {
    const url = `${this.wordpressBaseUrl}/${endpoint}`;
    return this.http.put(url, data);
  }

  /**
   * Envia uma requisição DELETE para excluir um recurso em um endpoint específico do WordPress.
   *
   * @param {string} endpoint - O caminho do endpoint relativo à URL base do WordPress, apontando para o recurso a ser excluído.
   * @returns {Observable<any>} Um Observable que emite a resposta do servidor à requisição DELETE.
   */
  deleteFromWordpress(endpoint: string) {
    const url = `${this.wordpressBaseUrl}/${endpoint}`;
    return this.http.delete(url);
  }



}

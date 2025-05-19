import {Injectable} from '@angular/core';
import {ApiService} from '../api/api.service';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class NavigationService {
  private navigationEndpoint = 'navigation';

  constructor(private api: ApiService) {
  }

  /**
   * Lista todos os menus de navegação disponíveis.
   * @returns Observable com array de menus
   */
  listMenus(): Observable<any> {
    return this.api.getFromWordpress(this.navigationEndpoint);
  }

  /**
   * Obtém um menu de navegação específico pelo ID.
   * @param id ID do menu
   * @returns Observable com dados do menu
   */
  getMenu(id: number): Observable<any> {
    return this.api.getFromWordpress(`${this.navigationEndpoint}/${id}`);
  }

  /**
   * Cria um novo menu de navegação.
   * @param data Dados do menu (ex: name, description)
   * @returns Observable com resposta da API
   */
  createMenu(data: any): Observable<any> {
    return this.api.postToWordpress(this.navigationEndpoint, data);
  }

  /**
   * Atualiza um menu de navegação existente.
   * @param id ID do menu
   * @param data Dados para atualização
   * @returns Observable com resposta da API
   */
  updateMenu(id: number, data: any): Observable<any> {
    return this.api.putToWordpress(`${this.navigationEndpoint}/${id}`, data);
  }

  /**
   * Remove um menu de navegação pelo ID.
   * @param id ID do menu
   * @returns Observable com resposta da API
   */
  deleteMenu(id: number): Observable<any> {
    return this.api.deleteFromWordpress(`${this.navigationEndpoint}/${id}`);
  }
}

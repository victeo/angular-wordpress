import { Injectable } from '@angular/core';
import {ApiService} from '../api/api.service';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MenuService {
  private menuItemsEndpoint = 'menu-items';
  private navigationEndpoint = 'navigation';

  constructor(private api: ApiService) {}

  /**
   * Lista todos os itens de menu com parâmetros opcionais (ex: menu ID).
   * @param params Parâmetros opcionais para filtro (ex: menu, parent, order)
   */
  listMenuItems(params?: HttpParams): Observable<any> {
    return this.api.getFromWordpress(this.menuItemsEndpoint, params);
  }

  /**
   * Obtém um item de menu específico pelo ID.
   * @param id ID do item de menu
   */
  getMenuItem(id: number): Observable<any> {
    return this.api.getFromWordpress(`${this.menuItemsEndpoint}/${id}`);
  }

  /**
   * Cria um novo item de menu.
   * @param data Dados do item de menu (title, url, menu, parent, order, etc)
   */
  createMenuItem(data: any): Observable<any> {
    return this.api.postToWordpress(this.menuItemsEndpoint, data);
  }

  /**
   * Atualiza um item de menu existente.
   * @param id ID do item de menu
   * @param data Dados para atualizar
   */
  updateMenuItem(id: number, data: any): Observable<any> {
    return this.api.putToWordpress(`${this.menuItemsEndpoint}/${id}`, data);
  }

  /**
   * Remove um item de menu pelo ID.
   * @param id ID do item de menu
   */
  deleteMenuItem(id: number): Observable<any> {
    return this.api.deleteFromWordpress(`${this.menuItemsEndpoint}/${id}`);
  }

  /**
   * Lista menus de navegação disponíveis.
   */
  listNavigation(): Observable<any> {
    return this.api.getFromWordpress(this.navigationEndpoint);
  }

  /**
   * Obtém um menu de navegação específico pelo ID.
   * @param id ID do menu
   */
  getNavigation(id: number): Observable<any> {
    return this.api.getFromWordpress(`${this.navigationEndpoint}/${id}`);
  }

  /**
   * Cria um novo menu de navegação.
   * @param data Dados do menu de navegação
   */
  createNavigation(data: any): Observable<any> {
    return this.api.postToWordpress(this.navigationEndpoint, data);
  }

  /**
   * Atualiza um menu de navegação existente.
   * @param id ID do menu
   * @param data Dados para atualizar
   */
  updateNavigation(id: number, data: any): Observable<any> {
    return this.api.putToWordpress(`${this.navigationEndpoint}/${id}`, data);
  }

  /**
   * Remove um menu de navegação pelo ID.
   * @param id ID do menu
   */
  deleteNavigation(id: number): Observable<any> {
    return this.api.deleteFromWordpress(`${this.navigationEndpoint}/${id}`);
  }
}

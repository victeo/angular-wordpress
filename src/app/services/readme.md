# Lista de Rotas Disponíveis no WordPress REST API (`wp/v2`) e suas Funções

---

### 1. `/wp/v2/posts`

* **O que faz:** Gerencia posts (artigos, blog posts).
* **Métodos:**

  * `GET`: Lista posts com filtros (autor, categoria, status, etc).
  * `POST`: Cria um novo post.
* **Usos comuns:** Buscar, criar e filtrar artigos.

---

### 2. `/wp/v2/posts/{id}`

* **O que faz:** Gerencia post específico pelo ID.
* **Métodos:**

  * `GET`: Retorna um post.
  * `POST`, `PUT`, `PATCH`: Atualiza post.
  * `DELETE`: Exclui post.

---

### 3. `/wp/v2/pages`

* **O que faz:** Gerencia páginas estáticas (ex: Sobre, Contato).
* **Métodos:** `GET`, `POST`

---

### 4. `/wp/v2/pages/{id}`

* **O que faz:** Gerencia página específica.
* **Métodos:** `GET`, `POST`, `PUT`, `PATCH`, `DELETE`

---

### 5. `/wp/v2/media`

* **O que faz:** Gerencia arquivos de mídia (imagens, vídeos, documentos).
* **Métodos:** `GET`, `POST`

---

### 6. `/wp/v2/media/{id}`

* **O que faz:** Gerencia mídia específica.
* **Métodos:** `GET`, `POST`, `PUT`, `PATCH`, `DELETE`

---

### 7. `/wp/v2/comments`

* **O que faz:** Gerencia comentários.
* **Métodos:** `GET`, `POST`

---

### 8. `/wp/v2/comments/{id}`

* **O que faz:** Gerencia comentário específico.
* **Métodos:** `GET`, `POST`, `PUT`, `PATCH`, `DELETE`

---

### 9. `/wp/v2/users`

* **O que faz:** Gerencia usuários do sistema.
* **Métodos:** `GET`, `POST`

---

### 10. `/wp/v2/users/{id}`

* **O que faz:** Gerencia usuário específico.
* **Métodos:** `GET`, `POST`, `PUT`, `PATCH`, `DELETE`

---

### 11. `/wp/v2/categories`

* **O que faz:** Gerencia categorias de posts.
* **Métodos:** `GET`, `POST`

---

### 12. `/wp/v2/categories/{id}`

* **O que faz:** Gerencia categoria específica.
* **Métodos:** `GET`, `POST`, `PUT`, `PATCH`, `DELETE`

---

### 13. `/wp/v2/tags`

* **O que faz:** Gerencia tags (etiquetas) de posts.
* **Métodos:** `GET`, `POST`

---

### 14. `/wp/v2/tags/{id}`

* **O que faz:** Gerencia tag específica.
* **Métodos:** `GET`, `POST`, `PUT`, `PATCH`, `DELETE`

---

### 15. `/wp/v2/menu-items`

* **O que faz:** Gerencia itens de menus de navegação.
* **Métodos:** `GET`, `POST`

---

### 16. `/wp/v2/menu-items/{id}`

* **O que faz:** Gerencia item específico do menu.
* **Métodos:** `GET`, `POST`, `PUT`, `PATCH`, `DELETE`

---

### 17. `/wp/v2/navigation`

* **O que faz:** Gerencia menus de navegação.
* **Métodos:** `GET`, `POST`

---

### 18. `/wp/v2/navigation/{id}`

* **O que faz:** Gerencia menu específico.
* **Métodos:** `GET`, `POST`, `PUT`, `PATCH`, `DELETE`

---

### 19. `/wp/v2/types`

* **O que faz:** Lista os tipos de posts (post, page, attachment, etc).
* **Métodos:** `GET`

---

### 20. `/wp/v2/types/{type}`

* **O que faz:** Detalha um tipo específico de post.
* **Métodos:** `GET`

---

### 21. `/wp/v2/statuses`

* **O que faz:** Lista status possíveis para posts (publish, draft, pending, etc).
* **Métodos:** `GET`

---

### 22. `/wp/v2/statuses/{status}`

* **O que faz:** Detalha um status específico.
* **Métodos:** `GET`

---

### 23. `/wp/v2/taxonomies`

* **O que faz:** Lista as taxonomias (categorias, tags, custom taxonomies).
* **Métodos:** `GET`

---

### 24. `/wp/v2/taxonomies/{taxonomy}`

* **O que faz:** Detalha uma taxonomia específica.
* **Métodos:** `GET`

---

### 25. `/wp/v2/settings`

* **O que faz:** Configurações gerais do site (título, descrição, email, etc).
* **Métodos:** `GET`, `POST`, `PUT`, `PATCH`

---

### 26. `/wp/v2/themes`

* **O que faz:** Lista temas instalados no WordPress.
* **Métodos:** `GET`

---

### 27. `/wp/v2/plugins`

* **O que faz:** Lista e gerencia plugins instalados.
* **Métodos:** `GET`, `POST`

---

### 28. `/wp/v2/widgets`

* **O que faz:** Gerencia widgets do WordPress.
* **Métodos:** `GET`, `POST`

---

### 29. `/wp/v2/widget-types`

* **O que faz:** Lista tipos de widgets disponíveis.
* **Métodos:** `GET`

---

### 30. `/wp/v2/search`

* **O que faz:** Busca no site, retorna posts, páginas, termos relacionados.
* **Métodos:** `GET`

---

### 31. `/wp/v2/block-renderer/{name}`

* **O que faz:** Renderiza um bloco Gutenberg pelo nome.
* **Métodos:** `GET`, `POST`

---

### 32. `/wp/v2/block-types`

* **O que faz:** Lista os tipos de blocos Gutenberg.
* **Métodos:** `GET`

---

### 33. `/wp/v2/block-types/{namespace}`

* **O que faz:** Detalha blocos de um namespace específico.
* **Métodos:** `GET`

---

### 34. `/wp/v2/global-styles`

* **O que faz:** Gerencia estilos globais para o tema.
* **Métodos:** `GET`, `POST`, `PUT`, `PATCH`

---

### 35. `/wp/v2/font-families` e `/wp/v2/font-collections`

* **O que faz:** Gerencia famílias e coleções de fontes para o tema.
* **Métodos:** `GET`, `POST`

---

# Observação

* Muitas rotas aceitam parâmetros para filtrar, ordenar, paginar os resultados.
* Operações que modificam dados (POST, PUT, DELETE) exigem autenticação.
* Algumas rotas específicas para Gutenberg (blocos, patterns, templates) permitem personalização avançada do editor.

---
# Passo a passo para organizar os serviços de API no Angular

### 1. Estrutura recomendada de serviços

* `api.service.ts` — service genérico que já temos (base, get, post, autenticação)
* `posts.service.ts` — gerencia `/wp/v2/posts`
* `pages.service.ts` — gerencia `/wp/v2/pages`
* `media.service.ts` — gerencia `/wp/v2/media`
* `comments.service.ts` — gerencia `/wp/v2/comments`
* `users.service.ts` — gerencia `/wp/v2/users`
* `categories.service.ts` — gerencia `/wp/v2/categories`
* `tags.service.ts` — gerencia `/wp/v2/tags`
* `menu.service.ts` — gerencia menus e itens `/wp/v2/menu-items` e `/wp/v2/navigation`
* `types.service.ts` — gerencia `/wp/v2/types`
* `statuses.service.ts` — gerencia `/wp/v2/statuses`
* `taxonomies.service.ts` — gerencia `/wp/v2/taxonomies`
* `settings.service.ts` — gerencia `/wp/v2/settings`
* `themes.service.ts` — gerencia `/wp/v2/themes`
* `plugins.service.ts` — gerencia `/wp/v2/plugins`
* `widgets.service.ts` — gerencia `/wp/v2/widgets`
* `search.service.ts` — gerencia `/wp/v2/search`
* `blocks.service.ts` — gerencia `/wp/v2/block-renderer` e `/wp/v2/block-types`
* `global-styles.service.ts` — gerencia `/wp/v2/global-styles`
* `fonts.service.ts` — gerencia `/wp/v2/font-families` e `/wp/v2/font-collections`

---

### 2. Exemplo genérico de serviço para posts (posts.service.ts)

```typescript
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PostsService {
  private endpoint = 'posts';

  constructor(private api: ApiService) {}

  list(params?: HttpParams): Observable<any> {
    return this.api.getFromWordpress(this.endpoint, params);
  }

  get(id: number): Observable<any> {
    return this.api.getFromWordpress(`${this.endpoint}/${id}`);
  }

  create(data: any): Observable<any> {
    // implementar post se ApiService tiver método POST
    return this.api.postToWordpress(this.endpoint, data);
  }

  update(id: number, data: any): Observable<any> {
    return this.api.putToWordpress(`${this.endpoint}/${id}`, data);
  }

  delete(id: number): Observable<any> {
    return this.api.deleteFromWordpress(`${this.endpoint}/${id}`);
  }
}
```

---

### 3. Método POST, PUT, DELETE no ApiService (complemento)

No seu `api.service.ts` adicione:

```typescript
postToWordpress(endpoint: string, data: any) {
  const url = `${this.wordpressBaseUrl}/${endpoint}`;
  return this.http.post(url, data);
}

putToWordpress(endpoint: string, data: any) {
  const url = `${this.wordpressBaseUrl}/${endpoint}`;
  return this.http.put(url, data);
}

deleteFromWordpress(endpoint: string) {
  const url = `${this.wordpressBaseUrl}/${endpoint}`;
  return this.http.delete(url);
}
```

---

### 4. Criar serviços para outras rotas

Você pode criar serviços análogos a `PostsService` para as outras rotas, só mudando o `endpoint` para cada recurso.

Exemplo rápido para `pages.service.ts`:

```typescript
@Injectable({ providedIn: 'root' })
export class PagesService {
  private endpoint = 'pages';
  constructor(private api: ApiService) {}

  list(params?: HttpParams) {
    return this.api.getFromWordpress(this.endpoint, params);
  }

  get(id: number) {
    return this.api.getFromWordpress(`${this.endpoint}/${id}`);
  }
}
```

---

### 5. Uso no componente Angular

```typescript
constructor(private postsService: PostsService) {}

ngOnInit() {
  this.postsService.list().subscribe(posts => {
    console.log(posts);
  });
}
```


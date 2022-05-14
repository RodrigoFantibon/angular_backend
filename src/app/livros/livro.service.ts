import { from, Subject } from "rxjs";
import { Livro } from "./livro.model"

export class LivroService{
  private livros: Livro[] = [];
  private listaLivrosAtualizada = new Subject<Livro[]>();

  getLivros(): Livro[]{
  return [...this.livros];
    }

    adicionarLivro(id: number, titulo: string, autor: string, numero_paginas: number):void{
        this.livros.push({
          // id: id, titulo: titulo,  autor : autor, numero_paginas: numero_paginas
          id, titulo, autor,
          numero_paginas
        })
        this.listaLivrosAtualizada.next([...this.livros])
    }

    getListaDeLivrosAtualizadaObservable(){
      return this.listaLivrosAtualizada.asObservable()
    }


}

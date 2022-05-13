import { Component,  OnInit } from '@angular/core';
import { Livro } from '../livro.model';
import { LivroService } from '../livro.service';

@Component({
  selector: 'app-livro-lista',
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.css']
})
export class LivroListaComponent implements OnInit {



  livros: Livro[] = []

  constructor(private livroService: LivroService){

  }

  ngOnInit(): void {
    this.livros = this.livroService.getLivros()
    this.livroService.getListaDeLivrosAtualizadaObservable()
    .subscribe((livros: Livro[])=>{
      this.livros = livros
    })
  }



}

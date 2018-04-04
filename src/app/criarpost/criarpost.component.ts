import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { Post } from './../post/post.model';

@Component({
  selector: 'app-criarpost',
  templateUrl: './criarpost.component.html',
  styleUrls: ['./criarpost.component.css']
})
export class CriarpostComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output() newPost = new EventEmitter();
  idPost: String;
  autorPost: String =  "";
  textoPost: String = "";
  qtdLikes: number;


  onSubmit(event){
    event.preventDefault();
    this.newPost.emit(new Post(this.idPost, this.autorPost, this.textoPost));
    alert("Post criado com sucesso!");
  }

}

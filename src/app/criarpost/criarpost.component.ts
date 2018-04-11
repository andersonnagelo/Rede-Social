import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { Post } from './../post/post.model';
import { NgModel } from '@angular/forms';
import {PostService} from './../services/post.service'

@Component({
  selector: 'app-criarpost',
  templateUrl: './criarpost.component.html',
  styleUrls: ['./criarpost.component.css']
})
export class CriarpostComponent implements OnInit  {

  id: string = "";
  autorPost: string =  "";
  textoPost: string = "";
  qtdLikes = 0;
  mudarCor: boolean = false;
  post:Post;

  constructor(private postService: PostService) { }

  ngOnInit() {
  } 

  onSubmit(autor:string,texto:string){
    event.preventDefault();
    console.log(this.id)
    this.post = new Post(this.id,autor, texto, this.qtdLikes, this.mudarCor, );
    this.postService.adicionarPost(this.post)
    .subscribe((data)=>{
    })
    alert ("Post criado com sucesso!");
  }


}

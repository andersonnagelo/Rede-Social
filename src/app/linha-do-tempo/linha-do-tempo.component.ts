import { Component, OnInit, Input } from '@angular/core';
import {Post} from './../post/post.model'
import {PostService} from './../services/post.service'

@Component({
  selector: 'app-linha-do-tempo',
  templateUrl: './linha-do-tempo.component.html',
  styleUrls: ['./linha-do-tempo.component.css']
  
})
export class LinhaDoTempoComponent implements OnInit {

  constructor(private postService: PostService) { }
   listaPosts: Post [];
  capturarEvento($event){

  }
  ngOnInit() {
    this.preencher();

  }

  preencher() {
    this.postService.getPosts()
      .subscribe((data) => {
         this.listaPosts = data;
       },
         (error) => console.log(error));
  }
  removerPost(post:Post){
    console.log(post)
    this.postService.removerPost(post)
      .subscribe((data) => {
        this.preencher();
       },
         (error) => console.log(error));
  }

  postRecebeuLike(post:Post){
    post.qtdLikes = post.qtdLikes +1;
     this.postService.recebeuLike(post)
       .subscribe((data) => {
        },
          (error) => console.log(error));
   }
  
}

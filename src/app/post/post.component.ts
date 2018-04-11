import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from './post.model';
import {PostService} from './../services/post.service'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post: Post;
  @Output() removerPost = new EventEmitter();
  @Output () recebeuLike = new EventEmitter();

  constructor(private postService: PostService) { 
  }

  ngOnInit() {
  } 
  deulike = false;
  
  onClickRemove(){
    event.preventDefault();
    this.removerPost.emit(this.post);
    
  }
  onClickLike(post:Post){
    event.preventDefault();
    this.postService.recebeuLike(this.post);
    this.recebeuLike.emit(this.post);
  }

}

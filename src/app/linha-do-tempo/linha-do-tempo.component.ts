import { Component, OnInit, Input } from '@angular/core';
import {Post} from './../post/post.model'
import {PostService} from './../services/post.service'

@Component({
  selector: 'app-linha-do-tempo',
  templateUrl: './linha-do-tempo.component.html',
  styleUrls: ['./linha-do-tempo.component.css'],
  providers: [PostService]
})
export class LinhaDoTempoComponent implements OnInit {

  constructor(private postService: PostService) { }
  @Input () listaPosts: Post [];
  capturarEvento($event){
    
  }

  ngOnInit() {
    this.listaPosts = this.postService.getPosts();
  }
}

import { Injectable } from '@angular/core'
import { Post } from '../post/post.model'
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

@Injectable()

export class PostService {

    url:string = "http://rest.learncode.academy/api/anderson/rede-social";

    constructor(private http: Http){}

    listaPosts: Post [] = [];
    
    getPosts() {
    
         return this.http.get(this.url)
                 .map((response:Response) => {
                     this.listaPosts = [];
                    for(let p of response.json()){
                         this.listaPosts.push(new Post( p.id, p.autorPost, p.textoPost,p.qtdLikes, p.mudarCor))
                     }
                     console.log(this.listaPosts)
                     return this.listaPosts;
                 })
                 .catch((error: Response) => Observable.throw(error))
    }

    adicionarPost(post: Post){
        return this.http.post(this.url, post)
        .map((response: Response) =>  response.json())
        .catch((error: Response) => Observable.throw(error))
    }

    removerPost(post:Post){
        console.log(post.id)
        return this.http.delete(this.url + "/" + post.id)
        .catch((error: Response) => Observable.throw(error)); 
    }
    recebeuLike (post:Post) {
        console.log(post)
         return this.http.put(this.url + '/' + post.id, { autorPost:post.autorPost,idpost:post.id,mudarCor:post.mudarCor,qtdLikes:post.qtdLikes,textoPost:post.textoPost})
         .map((response: Response) =>  response)
         .catch((error: Response) => Observable.throw(error)); 
            }
    };

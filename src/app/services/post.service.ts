import { Injectable } from '@angular/core'
import { Post } from '../post/post.model'

@Injectable()

export class PostService {
    listaPosts = [
        new Post(1,"Lia Andrade","Talvez você esteja preocupado(a) demais,desanimado com essa ou aquela situação.Vivendo sob grande tensão.Sem saber por onde ir ou como fazer.Pois vou lhe dar alguns motivos para melhorar.mesmo sem grandes recursos financeiros,mesmo sem médico, sem analista e sem dor."),
        new Post(2,"Mia Maia","Inspire-se!"),
        new Post(3,"Rebeca Lima","Mude de hábito!")
    ];

    getPosts() {
        return this.listaPosts;
    }

    addPost(post: Post){
        this.listaPosts.push(post);
    }

    removerPost(post:Post){
        let index = this.listaPosts.indexOf(post);
        this.listaPosts.splice(index,1);
          console.log("Funfou!");
    }
    recebeuLike (post:Post, deuLike:boolean) {
        let index = this.listaPosts.indexOf(post);
        if(deuLike){
           this.listaPosts[index].mudarCor = true;
            this.listaPosts[index].qtdLikes ++;
        }
        else{
        this.listaPosts[index].qtdLikes --;
        this.listaPosts[index].mudarCor = false;
        }
      } 
};

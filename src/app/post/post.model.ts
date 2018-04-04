export class Post {

    idPost: number;
    autorPost: string;
    textoPost: string;
    qtdLikes: number;
    mudarCor: boolean;
   

    constructor (idPost, autorPost, textoPost) {
        this.idPost = idPost;
        this.autorPost = autorPost;
        this.textoPost = textoPost;
        this.qtdLikes = 0;
        this.mudarCor = false;
       
    }
}
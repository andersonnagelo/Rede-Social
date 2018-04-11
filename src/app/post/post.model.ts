export class Post {

    constructor (
        public id: string,
        public autorPost: string,
        public textoPost: string,
        public qtdLikes = 0 ,
        public mudarCor: boolean
    ) {
        
       
    }
}
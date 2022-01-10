// this model class which help to map the rest api json data. 
export class Product {
    constructor(
        public pid:number,
        public pname:string,
        public price:number,
        public url:string
    ){}
}

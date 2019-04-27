  private experiencia:Expe[] = [
      {
        nombre: "titulo 1",
        lugar: "lugar donde se adquirio",
        fecha-inicio: "1941-11-01",
        fecha-fin: "1941-11-01",
        descripcion:"descripcion del titulo"
      },
      
      {
        nombre: "titulo 2",
        lugar: "lugar donde se adquirio",
        fecha-inicio: "1941-11-01",
        fecha-fin: "1941-11-01",
        descripcion:"descripcion del titulo"
      }
    ];

  constructor() {
   }

   gerTodaExperiencia(){
     return this.experiencia;
   }
   gerExpe(idx:number){
     return this.experiencia[idx];
   }

}


export interface Expe {
  nombre: string;
  lugar: string;
  fecha-inicio: string;
  fecha-fin: string;
  descripcion?: string;
  idx?:number;
}

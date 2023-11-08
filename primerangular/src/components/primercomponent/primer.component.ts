import { Component } from "@angular/core";

@Component ({
    //debemos indicar el nombre del component
    //mediante selector. Se utilizan guiones para
    //separar cada palabra del nombre del component
    selector: "primer-component",
    //como no queremos un fichero html de template, se utiliza
    //la palabra template para indicar todo el dibujo aqui
    templateUrl: "./primer.component.html",
    styleUrls: ["./primer.component.css"]
})

//todo component debe ser declarado como clase. Dicho nombre de clase
//sera utilizado posteriormente en app.module.ts
export class PrimerComponent {
    //las propiedades de un component se pueden en su dibujo
    //dichas propiedades son tipadas
    public titulo: string;
    public descripcion: string;
    public anyo: number;
    //el contructor de una clase es el primer metodo por el que
    //entra cualquier component. Aqui podemos inicializar los
    //valores de las propiedades
    constructor(){
        //para acceder a las propiedades de una clase se utiliza
        //la palabra this
        this.titulo = "Miercoles de Puente";
        this.descripcion = "Aprendiendo Angular por un Tubo xd.";
        this.anyo = 2023;
    }
}
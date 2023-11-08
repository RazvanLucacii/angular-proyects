import { Component, OnInit, DoCheck } from "@angular/core";

@Component ({
    selector: "hooks-angular",
    templateUrl: "./hooksangular.component.html"
})

export class HooksAngular implements OnInit{
    public mensaje: string;
    constructor(){
        console.log("Soy el constructor Hooks Angular");
        this.mensaje = "Soy Hooks de Angular";
    }
    ngOnInit(): void {
        console.log("Ejecutando el metodo OnInit");
    }

    ngDoCheck(): void {
        console.log("Ejecutando ngDoCheck");
    }
    //creamos un metodo personalizado
    cambiarMensaje() :void {
        this.mensaje = "Suuuuuuuuuuu";
    }
}
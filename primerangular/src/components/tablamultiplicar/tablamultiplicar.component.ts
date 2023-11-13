import { Component, ElementRef, ViewChild } from "@angular/core";

@Component ({
    selector: "app-tabla-multiplicar",
    templateUrl: "./tablamultiplicar.component.html"
})

export class TablaMultiplicarComponent {
    @ViewChild("cajanumero") cajaNumeroRef!: ElementRef;
    public numeros: Array<number>;
    public numero!: number;

    constructor(){
        this.numeros = new Array<number>();
        
    }

    mostrarOperacion(): void{
        this.numero = parseInt(this.cajaNumeroRef.nativeElement.value);
        var aux = new Array<number>();
        for (let index = 1; index <= 10; index++) {
            let resultado = this.numero * index;
            aux.push(resultado);
        }
        this.numeros = aux;
    }
}
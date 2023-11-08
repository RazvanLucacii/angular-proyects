import { Component, ElementRef, ViewChild } from "@angular/core";

@Component ({
    selector: "app-tabla-multiplicar",
    templateUrl: "./tablamultiplicar.component.html"
})

export class TablaMultiplicarComponent {
    @ViewChild("cajanumero") cajaNumeroRef: ElementRef;
    public resultado: number;

    constructor(){
        this.resultado = 0;
        this.cajaNumeroRef = new ElementRef(0);
        
    }

    mostrarOperacion(): void{
        var num = this.cajaNumeroRef.nativeElement.value;
        for (let index = 0; index < 10; index++) {
            this.resultado = parseInt(num) + index;
        }

    }
}
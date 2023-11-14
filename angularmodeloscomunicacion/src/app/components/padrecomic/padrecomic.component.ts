import { Component, ViewChild, ElementRef } from '@angular/core';
import { Comic } from 'src/app/models/Comic';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-padrecomic',
  templateUrl: './padrecomic.component.html',
  styleUrls: ['./padrecomic.component.css']
})
export class PadrecomicComponent {
  @ViewChild("cajanombre") cajaNombreRef!: ElementRef;
  @ViewChild("cajaimagen") cajaImagenRef!: ElementRef;
  @ViewChild("cajadescripcion") cajaDescripcionRef!: ElementRef;
  public comics: Array<Comic>;
  public comicFavorito!: Comic;

  //tendremos un metodo para recibir datos desde el hijo
  seleccionarFavoritoPadre( comic: Comic): void{
    this.comicFavorito = comic;
  }

  crearPadre(): void{
    var nombre = this.cajaNombreRef.nativeElement.value;
    var imagen = this.cajaImagenRef.nativeElement.value;
    var descripcion = this.cajaDescripcionRef.nativeElement.value;
    var newComic = new Comic (nombre, imagen, descripcion);
    this.comics.push(newComic);
  }
  eliminarPadre( comic: Comic): void{
    this.comics.splice(this.comics.indexOf(comic), 1);
  }

  modificarPadre(comic: number): void{
    var nombre = this.cajaNombreRef.nativeElement.value;
    var imagen = this.cajaImagenRef.nativeElement.value;
    var descripcion = this.cajaDescripcionRef.nativeElement.value;
    this.comics[comic] = new Comic(nombre, imagen, descripcion);
  }

  constructor(private _activeRoute: ActivatedRoute) {
    this.comics = [
      new Comic(
        "Spiderman",
        "https://images-na.ssl-images-amazon.com/images/I/61AYfL5069L.jpg",
        "Hombre araña"
      ),
      new Comic(
        "Wolverine",
        "https://i.etsystatic.com/9340224/r/il/42f0e1/1667448004/il_570xN.1667448004_sqy0.jpg",
        "Lobezno"
      ),
      new Comic(
        "Guardianes de la Galaxia",
        "https://cdn.normacomics.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/g/u/guardianes_galaxia_guadianes_infinito.jpg",
        "Yo soy Groot"
      ),
      new Comic(
      "Avengers",
      "https://d26lpennugtm8s.cloudfront.net/stores/057/977/products/ma_avengers_01_01-891178138c020318f315132687055371-640-0.jpg",
      "Los Vengadores"
      ),
      new Comic(
      "Spawn",
      "https://i.pinimg.com/originals/e1/d8/ff/e1d8ff4aeab5e567798635008fe98ee1.png",
      "Todd MacFarlane"
      )
    ]
  }
}

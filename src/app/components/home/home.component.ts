import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  // paises: any[] = [];

  // constructor( private http: HttpClient ) {
  //   console.log( 'paises' );


  //   this.http.get('https://restcountries.eu/rest/v2/lang/es')
  //         .subscribe( (resp: any) => {
  //           this.paises = resp;
  //           console.log(resp);
  //         });
  //  }

  nuevosAlbunes: any[] = [];
   constructor( private spotify: SpotifyService ) {

    spotify.getNewRelease().subscribe( ( data: any) => {
      console.log(data.albums.items);

      this.nuevosAlbunes = data.albums.items;


    });

   }

  ngOnInit() {
  }

}

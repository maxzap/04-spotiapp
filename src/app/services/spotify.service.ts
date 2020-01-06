import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Servicio Spotify Funcionando');

   }

   getNewRelease(){

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCNZQjiKjWr8XykSctX2CO3OnOfTVS_e8CFWtBwDc-e2dyS5Dbkl3ImtptM2pMbHbV6L9SJrV7k8LiQBTk'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
   }

   getArtista(termino: string){

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCNZQjiKjWr8XykSctX2CO3OnOfTVS_e8CFWtBwDc-e2dyS5Dbkl3ImtptM2pMbHbV6L9SJrV7k8LiQBTk'
    });
    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`, { headers });
   }
}

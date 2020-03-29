import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { 
    console.log('Spotify Service listo');
  }

  getNewReleases() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCAnzHbS9DkY9JRlaFldqkjA930ynrVj7QaSOUDhPb8yHx4Qui7VniCKrDmO4TUNvO4jGJiF_IHe3sR5-c'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20',{ headers })
                .pipe( map( data => data['albums'].items));
  }

  getArtista( termino: string ){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCAnzHbS9DkY9JRlaFldqkjA930ynrVj7QaSOUDhPb8yHx4Qui7VniCKrDmO4TUNvO4jGJiF_IHe3sR5-c'
    });
    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`,{ headers })
                .pipe( map( data => data['artists'].items));

  }


}

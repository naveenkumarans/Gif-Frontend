import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GifServiceService {

  private baseUrl = 'http://localhost:8080/api/gifs';

  constructor(private http: HttpClient) {}

  getAllGifs(): Observable<any> {
    return this.http.get(`${this.baseUrl}/ranked`);
  }

  saveGif(gif: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/save`, gif);
  }

  searchGifs(tag: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/search`, { params: { tag } });
  }

  recordClick(id: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/${id}/click`, {});
  }

  recordShare(id: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/${id}/share`, {});
  }
}

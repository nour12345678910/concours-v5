import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, of, tap } from 'rxjs';
import { User } from '../models/User';
@Injectable({
  providedIn: 'root'
})
export class InscriptionServiceService {
  baseUrl = environment.apiBaseUrl + '/api/user';
  isLoggedIn:boolean;
    constructor(private http: HttpClient) {}

    inscrire(user: User): Observable<User> {
      return this.http.post<User>(`${this.baseUrl}`, user);
    }



    // inscrire(user: User): Observable<User> {
    //   if(user.role=="CANDIDAT")
    //   return this.http.post<User>(`${this.baseUrl}`, user);
    //   else if(user.role=="ADMIN")
    //   return this.http.post<User>(`${this.baseUrl}`+ '/addAdmin', user);
    //   else if(user.role=="RESPONSABLE")
    //   return this.http.post<User>(`${this.baseUrl}`+ '/addResponsable', user);

    // }


    ajouter(user: User): Observable<User> {
      return this.http.post<User>(`${this.baseUrl}`+ '/login', user);
    }

    // login(cin: string, motdepasse: string): Observable<User> {
    //   this.isLoggedIn=true;
    //   let params = new HttpParams()
    //     .append('cin', cin)
    //     .append('motdepasse', motdepasse);

    //   return this.http.get<User>(`${this.baseUrl}`+ '/login', { params: params });

    // }
    login(cin: string, motdepasse: string): Observable<User> {
      this.isLoggedIn=true;
      let params = new HttpParams()
        .append('cin', cin)
        .append('motdepasse', motdepasse);

      return this.http.get<User>(`${this.baseUrl}`+ '/login', { params: params });

    }

    // login(cin: string, motdepasse: string): Observable<User> {
    //   this.isLoggedIn=true;
    //   let params = new HttpParams()
    //     .append('cin', cin)
    //     .append('motdepasse', motdepasse);

    //     return this.http.get<User>(`${this.baseUrl}`+ '/login', { params: params })
    //     .pipe(
    //       tap((user: User) => console.log('L\'utilisateur ' + user.id + ' est connecté avec succès ! userId : ' + localStorage.getItem('userId'))),
    //       catchError(this.handleError<User>('login'))
    //     );

    // }
    // private handleError<T>(operation = 'operation', result?: T) {
    //   return (error: any): Observable<T> => {

    //     console.error(error);

    //     console.log(`${operation} failed: ${error.message}`);

    //     return of(result as T);
    //   };
    // }


    modifier(user:User):Observable<User>{
      return this.http.put<User>(`${this.baseUrl}`+'/update', user);
    }

    logoutUser() {
      this.isLoggedIn=false;
      localStorage.removeItem('user');

    }

  }

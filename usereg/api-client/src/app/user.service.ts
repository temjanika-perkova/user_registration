import { Injectable } from '@angular/core';
import {User} from "./user";
import {HttpClient, HttpHeaders, HttpRequest, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

/**
 * This is the service which interacts with the API Rest via httpclient methods
 */
@Injectable()
export class UserService {

  private url = 'http://localhost:8080/users';
  constructor(private client: HttpClient) { }

  /**
   * This is the creation of the user using the HttpClient POST Method
   * @param {User} user
   * @returns {Observable<HttpResponse<User>>}
   */
  createUser(user: User): Observable<HttpResponse<User>>{
    let httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json'
    });
    return this.client.post<User>(this.url, user,
      {
        headers: httpHeaders,
        observe: 'response'
      }
    );
  }

  /**
   * This is a method that return a user by their id using HttpClient GET Method
   * @param userId
   * @returns {Observable<any>}
   */
  getUser(userId):Observable<any>{
    const userUrl = this.url + '/' + userId;
    const headers = new HttpHeaders();
    headers.append('Accept', 'application/json');
    return this.client.get(userUrl,{headers : headers, responseType: "json"});
  }

  /**
   * This is a method that returns a list of all the users
   * @returns {Observable<Array<User>>}
   */
  getUsers():Observable<Array<User>>{
    const headers = new HttpHeaders();
    headers.append('Accept', 'application/json');
    return this.client.get<Array<User>>(this.url,{headers : headers, responseType: "json"});
  }

}

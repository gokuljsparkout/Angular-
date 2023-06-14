import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Post } from './post.model';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';
@Injectable()
export class PostService {
  constructor(private http: HttpClient) {}

  error = new Subject<string>();
  createAndStorePost(title: string, content: string) {
    const postData: Post = { title: title, content: content };
    this.http
      .post<{ name: string }>(
        'https://angulardb-899bf-default-rtdb.firebaseio.com/posts.json',
        postData
      )
      .subscribe(
        (responseData) => {
          console.log(responseData);
        },
        (error) => {
          this.error.next(error.message);
        }
      );
  }

  fetchPost() {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('print', 'pretty');
    searchParams = searchParams.append('custom', 'key');
    return this.http
      .get<{ [key: string]: Post }>(
        'https://angulardb-899bf-default-rtdb.firebaseio.com/posts.json',
        {
          headers: new HttpHeaders({
            'Custom-Header': 'Hello',
          }),
          params: searchParams,
        }
      )
      .pipe(
        map((responseData) => {
          const postArray: Post[] = [];
          for (const key in responseData) {
            postArray.push({ ...responseData[key], id: key });
          }
          return postArray;
        }),
        catchError((errorRes) => {
          return throwError(errorRes);
        })
      );
  }

  clearPost() {
    return this.http.delete(
      'https://angulardb-899bf-default-rtdb.firebaseio.com/posts.json'
    );
  }
}

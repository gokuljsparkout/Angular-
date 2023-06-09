import { HttpClient } from '@angular/common/http';
import { Post } from './post.model';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
@Injectable()
export class PostService {
  constructor(private http: HttpClient) {}
  createAndStorePost(title: string, content: string) {
    const postData: Post = { title: title, content: content };
    this.http
      .post<{ name: string }>(
        'https://angulardb-899bf-default-rtdb.firebaseio.com/posts.json',
        postData
      )
      .subscribe((responseData) => {
        console.log(responseData);
      });
  }

  fetchPost() {
    this.http
      .get<{ [key: string]: Post }>(
        'https://angulardb-899bf-default-rtdb.firebaseio.com/posts.json'
      )
      .pipe(
        map((responseData) => {
          const postArray: Post[] = [];
          for (const key in responseData) {
            postArray.push({ ...responseData[key], id: key });
          }
          return postArray;
        })
      )
      .subscribe((postsArray) => {});
  }
} 

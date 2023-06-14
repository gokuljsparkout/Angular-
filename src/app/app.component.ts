import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Post } from './post.model';
import { PostService } from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  isFetching: boolean = false;
  loadedPosts = [];
  error = null;

  constructor(private http: HttpClient, private postService: PostService) {}

  ngOnInit() {
    this.isFetching = true;
    this.postService.fetchPost().subscribe(
      (postsArray) => {
        this.loadedPosts = postsArray;
        this.isFetching = false;
      },
      (error) => {
        console.log(error);
        this.error = error.error.error;
      }
    );

    this.postService.error.subscribe((error) => {
      this.error = error;
    });
  }

  onCreatePost(postData: Post) {
    this.postService.createAndStorePost(postData.title, postData.content);
  }

  onFetchPosts() {
    this.fetchPosts();
  }

  onClearPosts() {
    this.postService.clearPost().subscribe(
      () => {
        this.loadedPosts = [];
      },
      (error) => {
        this.error = error.error;
      }
    );
  }

  fetchPosts() {
    this.isFetching = true;
    this.postService.fetchPost().subscribe(
      (postsArray) => {
        this.loadedPosts = postsArray;
        this.isFetching = false;
      },
      (error) => {
        this.isFetching = false;
        this.error = error.message;
      }
    );
  }

  onHandleError() {
    this.error = null;
  }
}

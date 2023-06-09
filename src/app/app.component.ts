import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs-compat';
import { map } from 'rxjs/operators';
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

  constructor(private http: HttpClient, private postService: PostService) {}

  ngOnInit() {
    this.isFetching = true;
    this.postService.fetchPost().subscribe((postsArray) => {
      this.loadedPosts = postsArray;
      this.isFetching = false;
    });
  }

  onCreatePost(postData: Post) {
    this.postService.createAndStorePost(postData.title, postData.content);
  }

  onFetchPosts() {
    this.fetchPosts();
  }

  onClearPosts() {
    this.postService.clearPost().subscribe(() => {
      this.loadedPosts = [];
    });
  }

  fetchPosts() {
    this.isFetching = true;
    this.postService.fetchPost().subscribe((postsArray) => {
      this.loadedPosts = postsArray;
      this.isFetching = false;
    });
  }
}

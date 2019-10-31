import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PostService } from '../services/post.service';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  post = '';
  constructor(private postService: PostService) { }
  ngOnInit() {
    this.fetchData();
  }

  async fetchData() {
    this.post = await this.postService.getData();
    if (this.post.success == "false") {
      alert("Err: Failed fetching data");
    }
    document.getElementById("titleInput").focus();
  }

  async onBtnClck() {
    if (this.post.title != '' && this.post.content != '') {
      await this.postService.addPost({ ...this.post })
        .then(res => {
          if (res.success) {
            alert("Success: Data posted!");
          }
        });
      this.post.title = '';
      this.post.content = '';
      document.getElementById("titleInput").focus();
    }
    else {
      alert("Err: empty fields!");
    }
  }

}




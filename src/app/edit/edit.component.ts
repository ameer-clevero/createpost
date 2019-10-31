import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  post = { id: '', title: '', content: '' };
  constructor(private route: ActivatedRoute, private postService: PostService, private router: Router) { }

  ngOnInit() {
    this.post = {
      id: this.route.snapshot.params['id'],
      title: this.route.snapshot.params['title'],
      content: this.route.snapshot.params['content']
    };
  }
  editPost = async () => {
    await this.postService.editPost({ ...this.post })
      .then(res => {
        if (res.success) {
          alert("Success: Data edited!");
          this.router.navigate(['/posts']);
        }
      }
      );

  }
}

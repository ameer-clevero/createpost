import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() post;
  @Output() updateData = new EventEmitter();
  constructor(private postService: PostService, private router: Router) { }
  ngOnInit() {
  }

  async onDltBtn(id) {
    if (confirm("Delete entry?")) {
      await this.postService.deletePost(id);
      setTimeout(() => {
        this.updateData.emit(null);
      }, 300);
    }
  }
  editData(id, title, content) {
    this.router.navigate(['/edit', id, title, content]);
  }
}

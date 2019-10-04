import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { PostService } from '../services/post.service';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() post;
  constructor(private postService: PostService) { }
  @Output() updatecards: EventEmitter<string> = new EventEmitter<string>();
  ngOnInit() {
  }
  updatecard = () => {
    this.updatecards.emit();
  }
}

import { Component, OnInit, Input } from '@angular/core';

import { Article } from '../article/article.model';

@Component({
  selector: 'article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})

export class ArticleComponent implements OnInit {
  @Input() article: Article;
    
  constructor() { 
    this.article  = new Article('Angular', 'www.google.com', 10); 
  }

  ngOnInit(): void {
  }

  voteUp():boolean{
    this.article.voteUp();
    return false;
  }

  voteDown():boolean{
    this.article.voteDown();
    return false;
  }
}

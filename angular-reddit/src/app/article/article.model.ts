export class Article {
  title: string;
  link: string;
  votes: number;

  constructor(_title: string, _link: string, _votes: number){
    this.title = _title;
    this.link = _link;
    this.votes = _votes || 0;
  }

  voteUp(): void{
    this.votes+=1;
  }
  voteDown(): void{
    this.votes-=1;
  }

  domain(): string{
    try{
      const domainAndPath: string = this.link.split('//')[1];
      return domainAndPath.split('/')[0];

    } catch(err){
      return null;
    }

  }


}
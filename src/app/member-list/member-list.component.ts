import { Component, OnInit } from '@angular/core';
import { MemberService } from '../shared/services/member.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss']
})
export class MemberListComponent implements OnInit {

  heroes!:any[];
  posts!:any;
  constructor(private memberService: MemberService) {
    // memberService.getHeroes().subscribe(data => this.heroes = data);
    memberService.getPosts().subscribe(data => this.posts = data);
   }

  ngOnInit(): void {
  }

}

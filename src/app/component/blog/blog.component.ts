import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  showIRL: boolean = false;
  showIns: boolean = false;
  showDivBlog(id:string) {
    if (id === 'ELITE IRL') {
      this.showIRL = true;
      this.showIns = false;
    } else if (id === 'Inspiration') {
      this.showIRL = false;
      this.showIns = true;
    }
  }
}

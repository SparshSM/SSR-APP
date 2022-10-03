import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {
    this.getuser();
    // this.isBrowser ? this.getuser() : this.getposts();
    this.isBrowser ? console.log("ssr") : console.log("browser");
    }
  users:any={}
  posts:any={}
  private isBrowser: boolean;
  constructor(private service2:UserService,@Inject(PLATFORM_ID) platformId: Object) { this.isBrowser = isPlatformBrowser(platformId);}
  title = 'newapp';
  getuser(){
    return this.service2.getusers().subscribe(item=>{
      this.users=item;
      ;
  })}
  // getposts(){
  //   return this.service2.getposts().subscribe(item=>{
  //     this.posts=item;
  //     ;
  // })
  // }

}

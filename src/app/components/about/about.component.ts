import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  ngOnInit(): void {
    // this.getpost();
    }
  comments:any={}
  constructor(private service2:UserService) { }
  title = 'newapp';
  // getpost(){
  //   return this.service2.getdetails().subscribe(item=>{
  //     // console.log("USERS",item);
  //     this.comments=item;
  // })
  // }

}

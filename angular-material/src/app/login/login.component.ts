import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'am-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  username:string = '';
  password:string = '';

  constructor() { }

  ngOnInit() {
  }

  onKeyUsername(event:any) {    
    this.username = event.target.value;
  }

  onKeyPassword(event:any) {    
    this.password = event.target.value;
  }
  
  onButtonLogin(): void {
    console.log("login - username: " + this.username + " - passoword: " + this.password);
    if(this.username == 'admin' && this.password == 'admin')
    {
      console.log("credentials ok");            
      window.location.href = '/dashboard';
    }
    else
    { 
      alert("Username and password, incorrect...");
    }
  }

}

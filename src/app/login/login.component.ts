import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {IUser} from '../model/user.model'
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(
    private auth: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) { 
    this.auth.$user.subscribe(user=>{
      console.log('login component-->',user)
      if(user){
        this.router.navigate(['/dashboard/home'])
      }
    });
    this.form = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required],
      // countkey:["",Validators.required]
    })
  }

  ngOnInit(): void {
  }
  submit(){
    let resp= this.auth.usernamePasswordSignin(this.form.value.email,this.form.value.password)
    .then(resp=>{
      console.log("resppp->",resp);
    })
    
  }

}

import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import { User } from "../user";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.component.html',
  styleUrls: ['./registeruser.component.css']
})
/**
 * This is the component class for registering the user by submitting a form
 */
export class RegisteruserComponent implements OnInit {
  /**
   * This is the new user to be added
   * @type {User}
   */
  newUser : User = new User();
  /**
   * This is the list of users
   * @type {any[]}
   */
  users = new Array();

  /**
   *
   * @param {Router} router
   * @param {ActivatedRoute} route
   * @param {UserService} userService
   */
  constructor(private router: Router, private route: ActivatedRoute, private userService: UserService) { }

  /**
   * This is the method of initialization which retrieves all the users that have been registered in the site
   */
  ngOnInit() {
    this.userService.getUsers().subscribe(
      data => {this.users = data});
  }

  /**
   * This method checks whether the user within the email address exists already
   * @param {string} email
   * @returns {boolean}
   */
  checkUserExist(email:string):boolean{
    for(var i=0;i< this.users.length;i++){
      if(this.users[i]['email']==email){
        console.log("User already exists");
        return true;
      }
    }
    return false;
  }

  /**
   * This is the method of adding/registering the user
   */
  addUser(){
    //if the input field of email or the password are empty then it's impossible to register
    if(this.newUser.email==undefined || this.newUser.password==undefined){
      alert("Email or Password can not be null");
    }
    //if the specified country of the user is other than France then it's impossible to register
    else if(this.newUser.country!="France"){
      alert("Only users living in France can register");
    }
    //if the user's age is under 18 then impossible to register
    else if(this.newUser.age<18){
      alert("Only users above 18 can register");
    }
    //if the user's email already exists then it's impossible to register
    else if(this.checkUserExist(this.newUser.email)){
      alert("User already exists having this email");
    }
    //otherwise we subscribe the method of creation via the user service
    else {
      this.userService.createUser(this.newUser).subscribe(
        res => {
          let usr: User = res.body;
          //after the successful registration the user is redirected to its account page whereas they could consult their information
          this.router.navigate(['detailsUser/' + usr.id]);
        },
        err => {
          alert("Error "+err.message);
          return Observable.throw(err);
        },
        ()=>{
          alert("User registered successfully");
        }
        );
    }

  }
}

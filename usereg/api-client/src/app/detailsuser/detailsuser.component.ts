import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../user.service";
import {User} from "../user";


@Component({
  selector: 'app-detailsuser',
  templateUrl: './detailsuser.component.html',
  styleUrls: ['./detailsuser.component.css']
})
/**
 * This is the component class for the user's details
 */
export class DetailsuserComponent implements OnInit {

  /**
   * This is the current user
   * @type {User}
   */
  currentUser: User = new User();

  /**
   * This is the constructor
   * @param {Router} router
   * @param {ActivatedRoute} route
   * @param {UserService} userService
   */
  constructor(private router: Router,
              private route : ActivatedRoute,
              private userService: UserService) { }

  /**
   * This is the method that initialize the component.
   * We get the id of the user and we retrieve the user's information by this id.
   * If error then we navigate through the router to the home page.
   */
  ngOnInit() {
    this.route.params.subscribe(params => {
      const  idCurrentUser = params['id'];
      this.userService.getUser(idCurrentUser).subscribe(
        response =>{
          this.currentUser = response;
        },
        error2 => {
          alert("Error getting the user "+error2);
          this.router.navigate(['/']);
        });
    });
  }

}

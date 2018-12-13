import { TestBed, inject, async } from '@angular/core/testing';

import { UserService } from './user.service';
import {User} from "./user";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {HttpClientModule} from "@angular/common/http";

describe('UserService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [HttpTestingController,UserService]
    });
  });

  it('should be created', inject([HttpTestingController,UserService], (httpclient: HttpTestingController,service: UserService) => {
    const user = new User();
    user.email='toto@test.com';
    user.password='1234toto356';
    user.name='Toto';
    user.surname='Titi';
    user.age=25;
    user.country='France';
    service.createUser(user).subscribe(res => {
      console.log(res.body);
    });
    expect(service).toBeTruthy();
  }));
});

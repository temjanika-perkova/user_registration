import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';

import { DetailsuserComponent } from './detailsuser.component';
import {Router, RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {RouterTestingModule} from "@angular/router/testing";
import {UserService} from "../user.service";
import {HttpClientModule} from "@angular/common/http";

describe('DetailsuserComponent', () => {
  let component: DetailsuserComponent;
  let fixture: ComponentFixture<DetailsuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule,RouterTestingModule,HttpClientModule],
      declarations: [ DetailsuserComponent ],
      providers: [UserService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsuserComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create', inject([RouterTestingModule],(router:RouterTestingModule) => {
    expect(component).toBeTruthy();
  }));
});

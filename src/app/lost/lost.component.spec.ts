/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LostComponent } from './lost.component';

describe('LostComponent', () => {
  let component: LostComponent;
  let fixture: ComponentFixture<LostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

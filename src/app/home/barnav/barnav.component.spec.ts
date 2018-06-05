/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BarnavComponent } from './barnav.component';

describe('BarnavComponent', () => {
  let component: BarnavComponent;
  let fixture: ComponentFixture<BarnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SchemesComponent } from './schemes.component';

describe('SchemesComponent', () => {
  let component: SchemesComponent;
  let fixture: ComponentFixture<SchemesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchemesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

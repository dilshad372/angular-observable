import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetroCityDelhiComponent } from './metro-city-delhi.component';

describe('MetroCityDelhiComponent', () => {
  let component: MetroCityDelhiComponent;
  let fixture: ComponentFixture<MetroCityDelhiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetroCityDelhiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetroCityDelhiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

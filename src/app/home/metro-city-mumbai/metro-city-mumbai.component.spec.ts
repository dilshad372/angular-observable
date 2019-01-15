import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetroCityMumbaiComponent } from './metro-city-mumbai.component';

describe('MetroCityMumbaiComponent', () => {
  let component: MetroCityMumbaiComponent;
  let fixture: ComponentFixture<MetroCityMumbaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetroCityMumbaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetroCityMumbaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

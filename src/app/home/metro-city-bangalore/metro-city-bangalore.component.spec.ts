import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetroCityBangaloreComponent } from './metro-city-bangalore.component';

describe('MetroCityBangaloreComponent', () => {
  let component: MetroCityBangaloreComponent;
  let fixture: ComponentFixture<MetroCityBangaloreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetroCityBangaloreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetroCityBangaloreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

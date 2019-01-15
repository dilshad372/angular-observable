import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetroCityKolkataComponent } from './metro-city-kolkata.component';

describe('MetroCityKolkataComponent', () => {
  let component: MetroCityKolkataComponent;
  let fixture: ComponentFixture<MetroCityKolkataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetroCityKolkataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetroCityKolkataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

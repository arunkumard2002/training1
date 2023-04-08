import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestrcitedComponent } from './restrcited.component';

describe('RestrcitedComponent', () => {
  let component: RestrcitedComponent;
  let fixture: ComponentFixture<RestrcitedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestrcitedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestrcitedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

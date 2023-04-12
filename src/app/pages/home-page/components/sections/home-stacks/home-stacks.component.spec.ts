import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeStacksComponent } from './home-stacks.component';

describe('HomeStacksComponent', () => {
  let component: HomeStacksComponent;
  let fixture: ComponentFixture<HomeStacksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeStacksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeStacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaygroundCrudProductsComponent } from './playground-crud-products.component';

describe('PlaygroundCrudProductsComponent', () => {
  let component: PlaygroundCrudProductsComponent;
  let fixture: ComponentFixture<PlaygroundCrudProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaygroundCrudProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaygroundCrudProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

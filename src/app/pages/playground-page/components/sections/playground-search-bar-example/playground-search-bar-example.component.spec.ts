import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaygroundSearchBarExampleComponent } from './playground-search-bar-example.component';

describe('PlaygroundSearchBarExampleComponent', () => {
  let component: PlaygroundSearchBarExampleComponent;
  let fixture: ComponentFixture<PlaygroundSearchBarExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaygroundSearchBarExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaygroundSearchBarExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

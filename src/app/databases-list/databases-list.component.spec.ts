import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabasesListComponent } from './databases-list.component';

describe('DatabasesListComponent', () => {
  let component: DatabasesListComponent;
  let fixture: ComponentFixture<DatabasesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatabasesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabasesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

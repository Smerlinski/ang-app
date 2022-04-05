import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskNewItemComponent } from './task-new-item.component';

describe('TaskNewItemComponent', () => {
  let component: TaskNewItemComponent;
  let fixture: ComponentFixture<TaskNewItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskNewItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskNewItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

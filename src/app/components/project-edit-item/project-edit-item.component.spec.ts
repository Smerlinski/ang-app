import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectEditItemComponent } from './project-edit-item.component';

describe('ProjectEditItemComponent', () => {
  let component: ProjectEditItemComponent;
  let fixture: ComponentFixture<ProjectEditItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectEditItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectEditItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

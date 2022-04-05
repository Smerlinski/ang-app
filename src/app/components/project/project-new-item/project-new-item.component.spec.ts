import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectNewItemComponent } from './project-new-item.component';

describe('ProjectNewItemComponent', () => {
  let component: ProjectNewItemComponent;
  let fixture: ComponentFixture<ProjectNewItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectNewItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectNewItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

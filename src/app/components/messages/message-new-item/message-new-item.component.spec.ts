import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageNewItemComponent } from './message-new-item.component';

describe('MessageNewItemComponent', () => {
  let component: MessageNewItemComponent;
  let fixture: ComponentFixture<MessageNewItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageNewItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageNewItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

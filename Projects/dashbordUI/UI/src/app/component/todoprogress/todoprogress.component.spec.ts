import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoprogressComponent } from './todoprogress.component';

describe('TodoprogressComponent', () => {
  let component: TodoprogressComponent;
  let fixture: ComponentFixture<TodoprogressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoprogressComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodoprogressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

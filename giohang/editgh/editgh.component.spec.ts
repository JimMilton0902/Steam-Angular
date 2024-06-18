import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditghComponent } from './editgh.component';

describe('EditghComponent', () => {
  let component: EditghComponent;
  let fixture: ComponentFixture<EditghComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditghComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditghComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

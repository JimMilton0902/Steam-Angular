import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateghComponent } from './creategh.component';

describe('CreateghComponent', () => {
  let component: CreateghComponent;
  let fixture: ComponentFixture<CreateghComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateghComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateghComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewghComponent } from './viewgh.component';

describe('ViewghComponent', () => {
  let component: ViewghComponent;
  let fixture: ComponentFixture<ViewghComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewghComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewghComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

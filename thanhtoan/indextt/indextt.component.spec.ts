import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexttComponent } from './indextt.component';

describe('IndexttComponent', () => {
  let component: IndexttComponent;
  let fixture: ComponentFixture<IndexttComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexttComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndexttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

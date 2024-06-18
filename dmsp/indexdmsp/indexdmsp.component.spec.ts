import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexdmspComponent } from './indexdmsp.component';

describe('IndexdmspComponent', () => {
  let component: IndexdmspComponent;
  let fixture: ComponentFixture<IndexdmspComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexdmspComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndexdmspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

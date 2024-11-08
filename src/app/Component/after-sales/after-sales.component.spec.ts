import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterSalesComponent } from './after-sales.component';

describe('AfterSalesComponent', () => {
  let component: AfterSalesComponent;
  let fixture: ComponentFixture<AfterSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AfterSalesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfterSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

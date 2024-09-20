import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnearComponent } from './partnear.component';

describe('PartnearComponent', () => {
  let component: PartnearComponent;
  let fixture: ComponentFixture<PartnearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartnearComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartnearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

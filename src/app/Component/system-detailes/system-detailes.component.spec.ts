import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemDetailesComponent } from './system-detailes.component';

describe('SystemDetailesComponent', () => {
  let component: SystemDetailesComponent;
  let fixture: ComponentFixture<SystemDetailesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SystemDetailesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SystemDetailesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

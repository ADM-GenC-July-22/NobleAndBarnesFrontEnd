import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingCustomerpageComponent } from './existing-customerpage.component';

describe('ExistingCustomerpageComponent', () => {
  let component: ExistingCustomerpageComponent;
  let fixture: ComponentFixture<ExistingCustomerpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExistingCustomerpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExistingCustomerpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

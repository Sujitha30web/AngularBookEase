import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthdayhalloneComponent } from './birthdayhallone.component';

describe('BirthdayhalloneComponent', () => {
  let component: BirthdayhalloneComponent;
  let fixture: ComponentFixture<BirthdayhalloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirthdayhalloneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BirthdayhalloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

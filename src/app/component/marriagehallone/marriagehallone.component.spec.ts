import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarriagehalloneComponent } from './marriagehallone.component';

describe('MarriagehalloneComponent', () => {
  let component: MarriagehalloneComponent;
  let fixture: ComponentFixture<MarriagehalloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarriagehalloneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarriagehalloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

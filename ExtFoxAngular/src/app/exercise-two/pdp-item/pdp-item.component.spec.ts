import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdpItemComponent } from './pdp-item.component';

describe('PdpItemComponent', () => {
  let component: PdpItemComponent;
  let fixture: ComponentFixture<PdpItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdpItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdpItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrezeComponent } from './treze.component';

describe('TrezeComponent', () => {
  let component: TrezeComponent;
  let fixture: ComponentFixture<TrezeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrezeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrezeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

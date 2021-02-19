import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediosdepagoyenvioComponent } from './mediosdepagoyenvio.component';

describe('MediosdepagoyenvioComponent', () => {
  let component: MediosdepagoyenvioComponent;
  let fixture: ComponentFixture<MediosdepagoyenvioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediosdepagoyenvioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediosdepagoyenvioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

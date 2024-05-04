import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionSwitchComponent } from './option-switch.component';

describe('OptionSwitchComponent', () => {
  let component: OptionSwitchComponent;
  let fixture: ComponentFixture<OptionSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OptionSwitchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OptionSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

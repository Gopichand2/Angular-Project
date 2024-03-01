import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OddEveComponent } from './odd-eve.component';

describe('OddEveComponent', () => {
  let component: OddEveComponent;
  let fixture: ComponentFixture<OddEveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OddEveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OddEveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

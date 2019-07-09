import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AchievenotesComponent } from './achievenotes.component';

describe('AchievenotesComponent', () => {
  let component: AchievenotesComponent;
  let fixture: ComponentFixture<AchievenotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AchievenotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AchievenotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

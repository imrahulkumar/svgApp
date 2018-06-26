import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulbActivityComponent } from './bulb-activity.component';

describe('BulbActivityComponent', () => {
  let component: BulbActivityComponent;
  let fixture: ComponentFixture<BulbActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulbActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulbActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

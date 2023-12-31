import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrocessaryListComponent } from './grocessary-list.component';

describe('GrocessaryListComponent', () => {
  let component: GrocessaryListComponent;
  let fixture: ComponentFixture<GrocessaryListComponent>;

  beforeEach(async () => {

    // Configure the testing module with the component to be tested
    await TestBed.configureTestingModule({
      declarations: [ GrocessaryListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrocessaryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

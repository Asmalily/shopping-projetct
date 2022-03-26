import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimgComponent } from './testimg.component';

describe('TestimgComponent', () => {
  let component: TestimgComponent;
  let fixture: ComponentFixture<TestimgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestimgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopMenuuComponent } from './top-menuu.component';

describe('TopMenuuComponent', () => {
  let component: TopMenuuComponent;
  let fixture: ComponentFixture<TopMenuuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopMenuuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopMenuuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

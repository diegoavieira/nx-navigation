import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NxToolbarNavigationComponent } from './nx-toolbar-navigation.component';

describe('NxToolbarNavigationComponent', () => {
  let component: NxToolbarNavigationComponent;
  let fixture: ComponentFixture<NxToolbarNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NxToolbarNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NxToolbarNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NxSidenavNavigationComponent } from './nx-sidenav-navigation.component';

describe('NxSidenavNavigationComponent', () => {
  let component: NxSidenavNavigationComponent;
  let fixture: ComponentFixture<NxSidenavNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NxSidenavNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NxSidenavNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

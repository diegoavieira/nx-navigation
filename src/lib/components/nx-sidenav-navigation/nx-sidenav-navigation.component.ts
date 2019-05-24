import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'nx-sidenav-navigation',
  templateUrl: './nx-sidenav-navigation.component.html',
  styleUrls: ['./nx-sidenav-navigation.component.scss']
})
export class NxSidenavNavigationComponent implements OnInit {

  @Input() isMobile: boolean;
  @Input() opened: boolean;
  @Input() toolbarShow: boolean;

  @Output() sidenavToggle = new EventEmitter();
  @Output() showToolbar = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onToggleSidenav(): void {
    if (this.isMobile) {
      this.sidenavToggle.emit();
    }
  }

  onRouterActivate(data) {
    this.toolbarShow = data.showToolbar;
    this.showToolbar.emit(data.showToolbar);
  }

}

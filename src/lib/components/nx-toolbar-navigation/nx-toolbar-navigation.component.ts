import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'nx-toolbar-navigation',
  templateUrl: './nx-toolbar-navigation.component.html',
  styleUrls: ['./nx-toolbar-navigation.component.scss']
})
export class NxToolbarNavigationComponent implements OnInit {

  @Output() sidenavToggle = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onToggleSidenav(): void {
    this.sidenavToggle.emit();
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'nx-navigation',
  templateUrl: './nx-navigation.component.html',
  styleUrls: ['./nx-navigation.component.scss']
})
export class NxNavigationComponent implements OnInit {

  @Input() isMobile: boolean;

  opened: boolean;
  showToolbar: boolean;

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe('(max-width: 599px)')
      .subscribe(breakpoint => {
        this.isMobile = breakpoint.matches;
        this.opened = !this.isMobile;
        this.showToolbar = true;
      });
  }

  ngOnInit() {
  }

  @Input() onToggleSidenav(): void {
    this.opened = !this.opened;
  }

  onShowToolbar(show): void {
    if (this.isMobile) {
      this.showToolbar = show;
    }
  }

}

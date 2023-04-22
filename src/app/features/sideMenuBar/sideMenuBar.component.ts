import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

@Component({
  selector: 'app-sideMenuBar',
  templateUrl: './sideMenuBar.component.html',
  styleUrls: ['./sideMenuBar.component.css']
})
export class SideMenuBarComponent implements OnInit {

  @Input() isExpanded: boolean = false
  @Output() toggleSidebar: EventEmitter<boolean> = new EventEmitter<boolean>()

  constructor() { }

  ngOnInit() { }

  handleSidebarToggle(): void {
    this.toggleSidebar.emit(!this.isExpanded)
  }

}

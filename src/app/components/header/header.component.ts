import { Component } from '@angular/core';
import {ButtonComponent} from "../button/button.component";
import {Subscription} from "rxjs";
import {UiService} from "../../services/ui.service";
import {Router} from "@angular/router";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    ButtonComponent,
    NgIf
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title = 'angular-crash';
  showAddTask = false;
  subscription?: Subscription

  constructor(private uiService: UiService,
              private router: Router) {
    this.subscription = this.uiService.onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }

  toggleAddTask() {
    this.uiService.toggleAddTask();
  }

  hasRoute(route: string) {
    return this.router.url === route;
  }
}

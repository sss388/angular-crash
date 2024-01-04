import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, RouterOutlet, Routes} from '@angular/router';
import {HeaderComponent} from "./components/header/header.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {TasksComponent} from "./components/tasks/tasks.component";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {AboutComponent} from "./components/about/about.component";
import {FooterComponent} from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    TasksComponent,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}

import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  @Input() doctolibButton!: any;
  @Input() homeButton!: any;
  @Input() phoneButton!: any;
  ngOnInit() {};
  headerTitle: string = "Et si vous repartiez du bon pied ?";
  headerSubtitle1: string = "Je suis Florine, Ostéopathe D.O., et je vous reçois à Grasse ou à votre domicile.";
}

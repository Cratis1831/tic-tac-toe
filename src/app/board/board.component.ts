import { Component, OnInit, Output, Input } from '@angular/core';
import { SquareComponent } from '../square/square.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit {
  @Output() rows: number[] = [1, 2, 3];
  constructor(private square: SquareComponent) {}

  ngOnInit(): void {}
}

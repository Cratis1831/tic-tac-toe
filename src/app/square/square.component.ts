import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css'],
})
export class SquareComponent implements OnInit {
  rows: number[] = [1, 2, 3];
  xo: string = 'o';
  constructor() {}

  ngOnInit(): void {}
  onTileClick(event: Event) {
    this.xo = this.xo === 'C' ? 'W' : 'C';
    let result = '';
    result = (event.target as HTMLInputElement).id;
    console.log(result);
    (event.target as HTMLInputElement).value = this.xo;
    document.getElementById(result)!.innerHTML = this.xo;
  }
}

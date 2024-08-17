import { GifServiceService } from './../gif-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-gif',
  templateUrl: './gif.component.html',
  styleUrls: ['./gif.component.scss']
})
export class GifComponent {
  gifs: any[] = [];

  constructor(private gifService: GifServiceService) {}

  ngOnInit(): void {
    this.loadGifs();
  }

  loadGifs(): void {
    this.gifService.getAllGifs().subscribe(data => {
      this.gifs = data;
    });
  }

  recordClick(id: string): void {
    this.gifService.recordClick(id).subscribe(() => {
      this.loadGifs(); // Refresh the list after a click
    });
  }

  recordShare(id: string): void {
    this.gifService.recordShare(id).subscribe(() => {
      this.loadGifs(); // Refresh the list after a share
    });
  }
}

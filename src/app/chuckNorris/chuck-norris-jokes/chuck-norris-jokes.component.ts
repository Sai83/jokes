import { Component, OnInit } from '@angular/core';
import { ChuckNorris } from 'src/app/shared/chuck-norris';
import { ChuckNorrisService } from '../../shared/chuck-norris.service';

@Component({
  selector: 'app-chuck-norris-jokes',
  templateUrl: './chuck-norris-jokes.component.html',
  styleUrls: ['./chuck-norris-jokes.component.css']
})
export class ChuckNorrisJokesComponent implements OnInit {

   chuckNorrisData: ChuckNorris[] = [];

constructor(private chuckNorrisService: ChuckNorrisService) { }

ngOnInit() {
    this.chuckNorrisService.getChuckNorris().subscribe(chuckNorrisData => {
      this.chuckNorrisData = chuckNorrisData;
    });

  }

}

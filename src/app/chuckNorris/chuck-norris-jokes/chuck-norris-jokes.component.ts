import { Component, OnInit } from '@angular/core';
import { IChuckNorris } from 'src/app/shared/chuck-norris';
import { ChuckNorrisService } from '../../shared/chuck-norris.service';
import { IChuckNorrisChild } from 'src/app/shared/chuck-norris-child';

@Component({
  selector: 'app-chuck-norris-jokes',
  templateUrl: './chuck-norris-jokes.component.html',
  styleUrls: ['./chuck-norris-jokes.component.css']
})
export class ChuckNorrisJokesComponent implements OnInit {

   chuckNorrisData: IChuckNorris[] = [];
    result: IChuckNorrisChild[];


constructor(private chuckNorrisService: ChuckNorrisService) { }

ngOnInit() {
    this.chuckNorrisService.getChuckNorris().subscribe(chuckNorrisData => {
      this.chuckNorrisData = chuckNorrisData;



    });

  }

}

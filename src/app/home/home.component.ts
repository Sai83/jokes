import { Component, OnInit, ErrorHandler } from '@angular/core';
import { Jokes } from '../shared/jokes';
import { ServiceJokesService } from '../shared/service-jokes.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  rowData: Jokes[] = [];
  columnDefs = [{
    headerName: 'Id ',
    field: 'id'
  }, {
    headerName: 'Type',
    field: 'type'
  }, {
    headerName: 'Setup',
    field: 'setup',
    resizable: true
  }, {
    headerName: 'Punch Line',
    field: 'punchline',
    resizable: true
  }];

   constructor(private jokesService: ServiceJokesService) { }

   getJokes() {
      this.jokesService.getJokes().subscribe(rowData => {
        this.rowData  = rowData;
      });

   }



  ngOnInit() {
        this.getJokes();


  }

}

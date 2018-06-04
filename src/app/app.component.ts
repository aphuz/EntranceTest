import { Component } from '@angular/core';
import { LoaderService } from './shared/services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  	title = 'app';
   	showLoader: boolean;
   	constructor(private loaderService: LoaderService) { }
	//for the spinner
	ngOnInit() {
	    this.loaderService.status.subscribe((val: boolean) => {
	      this.showLoader = val;
	    });
	}
}

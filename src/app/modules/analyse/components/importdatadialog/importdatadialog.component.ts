import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { FileService } from '../../../../shared/services/file.service';
import { LoaderService } from '../../../../shared/services/loader.service';

@Component({
  selector: 'app-importdatadialog',
  templateUrl: './importdatadialog.component.html',
  styleUrls: ['./importdatadialog.component.css']
})
export class ImportdatadialogComponent implements OnInit {

  constructor(
              private fileService: FileService,
              private loaderService: LoaderService,
              public importDataDialog: MatDialogRef<ImportdatadialogComponent>,
  			      @Inject(MAT_DIALOG_DATA) public data: any
              ) { }
  
  fileToUpload: File = null;

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  } 

  uploadFileToActivity() {
    if(this.fileToUpload != null){
      this.importDataDialog.close();
      this.loaderService.display(true);
      this.fileService.postFile(this.fileToUpload).subscribe(data => {
            this.loaderService.display(false);
            alert("Import Successfully!");     
      }, error => {
        console.log(error);        
        alert("Import Failed!");
      });   
    }
    else {
      this.loaderService.display(false);
      alert("Please input the import file!");
    }

  }

  ngOnInit() {
  }

  onNoClick(): void {
    this.importDataDialog.close();
  }

}

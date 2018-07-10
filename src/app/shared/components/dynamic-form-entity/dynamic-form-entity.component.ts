import { Component, Input } from '@angular/core';
import { FormGroup }        from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { EntityBase }     from '../../models/entity-base';
 
@Component({
  selector: 'app-dynamic-form-entity',
  templateUrl: './dynamic-form-entity.component.html'
})
export class DynamicFormEntityComponent {
  @Input() entity: EntityBase<any>;
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.entity.key].valid; }
}
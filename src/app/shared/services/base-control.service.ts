import { Injectable }   from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { EntityBase } from '../models/entity-base';

@Injectable()
export class BaseControlService {
  constructor() { }

  toFormGroup(entities: EntityBase<any>[] ) {
    let group: any = {};

    entities.forEach(entitie => {
      group[entitie.key] = entitie.required ? new FormControl(entitie.value || '', Validators.required)
                                              : new FormControl(entitie.value || '');
    });
    return new FormGroup(group);
  }
}
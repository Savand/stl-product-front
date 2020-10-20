import {AbstractControl, ValidationErrors} from "@angular/forms";
import {Observable} from "rxjs";

export class PasswordValidator {

  static correctPassword(control: AbstractControl): Promise<ValidationErrors | null> {

    return new Promise((resolve, reject) => {
      setTimeout(() => {

        if(control.value !== '123')
          resolve ({correctPassword: true});
        else
          resolve (null);

      }, 2000);

    });
  }
}

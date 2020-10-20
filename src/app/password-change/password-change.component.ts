import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PasswordValidator} from "./PasswordValidator.validators";

@Component({
  selector: 'password-change',
  templateUrl: './password-change.component.html',
  styleUrls: ['./password-change.component.css']
})
export class PasswordChangeComponent {

  get equalPasswords(): boolean {
    return this._equalPasswords;
  }

  form = new FormGroup({
      oldPassword: new FormControl('', Validators.required, PasswordValidator.correctPassword),
      confirmGroup: new FormGroup({
        confirmPassword: new FormControl('', Validators.required),
        newPassword: new FormControl('', Validators.required)
      })
    });

  private _equalPasswords: boolean = true;

  get oldPassword() {
    return this.form.get('oldPassword');
  }

  get newPassword() {
    return this.form.get('confirmGroup.newPassword');
  }

  get confirmPassword() {
    return this.form.get('confirmGroup.confirmPassword');
  }


  onChange() {
    this._equalPasswords = this.newPassword.value == this.confirmPassword.value
  }
}

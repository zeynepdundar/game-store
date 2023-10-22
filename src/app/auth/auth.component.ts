import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  searchedGame: string = '';
  isLoginMode = true;

  constructor() {}

  ngOnInit(): void {
    console.log('', this.isLoginMode);
  }

  save(): void {}

  onSwitchMode(): void {
    this.isLoginMode = !this.isLoginMode;
    console.log('', this.isLoginMode);
  }

  onSubmit(form: NgForm): void {
    form.reset()
  }
}

import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { GameService } from './../service/game.service';
import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css'],
})
export class NewGameComponent implements OnInit {
  @Output() gameAdded = new EventEmitter<{}>();
  gameCreated = false;
  gameform: FormGroup;
  faPaperclip = faPaperclip;

  constructor(private gameService: GameService, private fb: FormBuilder) {
    this.gameform = this.fb.group({
      gameName: ['', [Validators.required]],
      owner: ['', [Validators.required]],
      bundle: [
        '',
        [
          Validators.required,
          Validators.pattern('^([A-Za-z]{1}[A-Za-zd_]*.)+[A-Za-z][A-Za-zd_]*$'),
        ],
      ],

      id: [0, [Validators.required]],
      icon: [null, [Validators.required]],
    });
  }

  ngOnInit(): void {}

  save() {
    const newId = this.gameService.getGames().length;

    // if(newId !== undefined || newId===0){
    //    this.gameform.setValue('id')
    // }
    // else{
    //    obj.id = 0;
    // }
    // this.userArray.push(obj);

    if (this.gameform.invalid)
      // true if any form validation fail
      return;

    if (this.gameform.get('id')?.value === 0) {
      // on Create New User
      this.gameService.addGame(this.gameform.value);
    }
    console.log('New game created!', this.gameform);

    //Redirecting to user List page after save or update
    // this.router.navigate(['/user']);
  }
}

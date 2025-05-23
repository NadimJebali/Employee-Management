import { Component, Input } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-cardprofile',
  imports: [],
  templateUrl: './cardprofile.component.html',
  styleUrl: './cardprofile.component.css'
})
export class CardprofileComponent {

  @Input()  user : User = new User();
}

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Profile } from '../models';

@Component({
  selector: 'app-profile-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss']
})
export class ProfileViewComponent {
  @Input()  data?: Profile;

}

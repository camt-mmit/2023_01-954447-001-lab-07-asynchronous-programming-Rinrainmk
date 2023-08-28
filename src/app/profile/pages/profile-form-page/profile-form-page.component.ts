import { Profile } from './../../models';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileDataService } from '../../services/profile-data.service';
import { ProfileFormComponent } from '../../profile-form/profile-form.component';



@Component({
  selector: 'app-profile-form-page',
  standalone: true,
  imports: [CommonModule,ProfileFormComponent],
  templateUrl: './profile-form-page.component.html',
  styleUrls: ['./profile-form-page.component.scss']
})
export class ProfileFormPageComponent {
  private readonly ProfileData = inject(ProfileDataService);

  protected readonly data$ = this.ProfileData
  .getDate()
  .then((value) => value ?? ('undefined' as const));

  protected async save(data: Profile): Promise<void> {
    await this.ProfileData.setData(data);
  }
}

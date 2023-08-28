import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileViewPageComponent } from './profile-view-page.component';

describe('ProfileViewPageComponent', () => {
  let component: ProfileViewPageComponent;
  let fixture: ComponentFixture<ProfileViewPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ProfileViewPageComponent]
    });
    fixture = TestBed.createComponent(ProfileViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

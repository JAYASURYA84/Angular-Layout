import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  selectedNotification: string = '';  // Stores the selected notification type
  selectedTheme: string = 'light';    // Default theme

  // Save Notification Settings
  saveNotifications() {
    if (this.selectedNotification) {
      console.log('Notification Preference:', this.selectedNotification);
      // Perform the save action (API call or local storage update)
    }
  }

  // Save Profile Settings
  saveProfile() {
    // Logic for saving profile information
    console.log('Profile saved!');
  }

  // Apply Theme
  applyTheme() {
    document.body.className = this.selectedTheme;  // Example: Applying theme class to body
    console.log('Theme applied:', this.selectedTheme);
  }
}

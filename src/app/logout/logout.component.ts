import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {

  constructor(private router: Router) {}

  // Handle Cancel Logout
  cancelLogout() {
    // Redirect the user to the previous page or home page
    this.router.navigate(['/home']);
  }

  // Handle Confirm Logout
  confirmLogout() {
    // Clear the user session, such as removing the authentication token or session data
    localStorage.removeItem('userToken'); // Example: clear stored token
    sessionStorage.clear(); // Example: clear session data

    // Optionally, you could reset any other relevant data if needed
    alert('You have been logged out successfully.');

    // Redirect to the home page or anywhere you prefer after logout
    this.router.navigate(['/home']); // Redirect to home page after logging out
  }
}

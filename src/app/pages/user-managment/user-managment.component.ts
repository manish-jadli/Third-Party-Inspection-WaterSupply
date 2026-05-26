import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-managment.component.html',
  styleUrls: ['./user-managment.component.css'],
})
export class UserManagementComponent {
  role: any = '';

  users: any[] = [
    {
      id: 1,
      name: 'State Admin',
      username: 'state',
      email: 'state@gmail.com',
      role: 'state',
      district: 'All',
    },
    {
      id: 2,
      name: 'Division User',
      username: 'division',
      email: 'division@gmail.com',
      role: 'division',
      district: 'Dehradun',
    },
    {
      id: 3,
      name: 'TPI User',
      username: 'tpi',
      email: 'tpi@gmail.com',
      role: 'tpi',
      district: 'Haridwar',
    },
  ];

  userModel: any = {
    id: 0,
    name: '',
    username: '',
    email: '',
    password: '',
    role: '',
    district: '',
  };

  constructor() {
    this.role = localStorage.getItem('userRole');
  }

  // SAVE USER

  saveUser() {
    if (this.userModel.id == 0) {
      this.userModel.id = this.users.length + 1;

      this.users.push({
        ...this.userModel,
      });

      alert('User Added Successfully');
    } else {
      const index = this.users.findIndex((x) => x.id == this.userModel.id);

      this.users[index] = {
        ...this.userModel,
      };

      alert('User Updated Successfully');
    }

    this.resetForm();
  }

  // EDIT USER

  editUser(user: any) {
    this.userModel = {
      ...user,
    };

    const modal: any = document.getElementById('userModal');

    const bootstrapModal = new (window as any).bootstrap.Modal(modal);

    bootstrapModal.show();
  }

  // DELETE USER

  deleteUser(user: any) {
    if (confirm('Are you sure to delete user?')) {
      this.users = this.users.filter((x) => x.id != user.id);

      alert('User Deleted');
    }
  }

  // RESET FORM

  resetForm() {
    this.userModel = {
      id: 0,
      name: '',
      username: '',
      email: '',
      password: '',
      role: '',
      district: '',
    };
  }
}

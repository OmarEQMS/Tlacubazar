import { Address } from './Address';

export class User {

  idUser?: number;
  email?: string;
  firstName?:	string;
  lastName?: string;
  isVendor?: number;
  phone?: string;
  cacaoBalance?: number;
  readUserCourse?: number;
  readVendorCourse?: number;
  fkAddress?: number;

  // Has many

  // Belongs to
  address?: Address;

  constructor(user?: User) {
    if (user != null) {
      this.idUser = user.idUser;
      this.email = user.email;
      this.firstName = user.firstName;
      this.lastName = user.lastName;
      this.isVendor = user.isVendor;
      this.phone = user.phone;
      this.cacaoBalance = user.cacaoBalance;
      this.readUserCourse = user.readUserCourse;
      this.readVendorCourse = user.readVendorCourse;
      this.fkAddress = user.fkAddress;
      if (user.address) {
        this.address = user.address;
      } else {
        this.address = new Address();
      }
    }

  }
}

export class UserPojo {
  private regId: number;
  private firstName: string;
  private lastName: string;
  private email: string;
  private mobileNumber: string;
  private username: string;
  private password: string;

  constructor(
    regId: number,
    firstName: string,
    lastName: string,
    email: string,
    mobileNumber: string,
    username: string,
    password: string
  ) {
    this.regId = regId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.mobileNumber = mobileNumber;
    this.username = username;
    this.password = password;
  }


  
}

class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName() {
    return this.firstName + " " + this.lastName;
  }
  setFullName(fullName) {
    [this.firstName, this.lastName] = fullName.split(" ");
  }
  toString() {
    return this.getFullName();
  }
}

class UserRole extends User {
  constructor(firstName, lastName, role) {
    super(firstName, lastName); //calling base class contructor
    this.role = role.toUpperCase();
  }
  toString() {
    return super.toString() + " is a(n) " + this.role;
  }
}

// const admin = new User("Aasaithambi", "Jay");
// admin.firstName = "Testing";
// console.log(admin);
// document.write(admin);

const user = new UserRole("Houshik", "Raghav", "admin");
console.log(user);
document.write(user);
const guest = new UserRole("Aasaithambi", "Jay", "Guest");
document.write(guest);

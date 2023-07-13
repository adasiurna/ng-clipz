export class RegisterValidators {

  test = 5
  static match() {
    console.log(this.test);
  }
}

// new RegisterValidators.match()   <~ without static
// RegisterValidators.match()       <~ with static
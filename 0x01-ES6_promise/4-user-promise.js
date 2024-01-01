function signUpUser(firstName, lastName) {
    // Use Promise.resolve() to create a resolved promise
    return Promise.resolve({
      firstName: firstName,
      lastName: lastName,
    });
  }
function APISimulator() {}

APISimulator.prototype.getFullResponseFromAPI = function (success) {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous API call (e.g., using setTimeout)
    setTimeout(() => {
      if (success) {
        resolve({
          status: 200,
          body: 'Success',
        });
      } else {
        reject(new Error('The fake API is not working currently'));
      }
    }, 1000); // Simulating a 1-second delay
  });
};
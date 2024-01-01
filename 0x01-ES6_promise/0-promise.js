function MyAPI() {}

MyAPI.prototype.getResponseFromAPI = function () {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous API call (e.g., using setTimeout)
    setTimeout(() => {
      const success = true; // Change this based on your logic

      if (success) {
        resolve('API response data');
      } else {
        reject(new Error('Failed to get response from API'));
      }
    }, 1000); // Simulating a 1-second delay
  });
};

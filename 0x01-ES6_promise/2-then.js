function handleResponseFromAPI(promise) {
    return promise
      .then((data) => {
        console.log('Got a response from the API');
        return {
          status: 200,
          body: 'success',
        };
      })
      .catch((error) => {
        console.error('Error:', error.message);
        return new Error(); // Return an empty Error object for rejection
      });
  }
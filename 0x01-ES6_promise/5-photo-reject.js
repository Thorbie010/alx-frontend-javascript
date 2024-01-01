
export default function uploadPhoto(fileName) {
  return new Promise((resolve, reject) => {
    // Simulate processing the photo (you can replace this with your actual logic)
    // For simplicity, let's reject the promise with an error message
    reject(new Error(`"${fileName}" cannot be processed`));
  });
}
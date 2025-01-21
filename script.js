// script.js
document.getElementById('uploadButton').addEventListener('click', async () => {
    const fileInput = document.getElementById('imageInput');
    const file = fileInput.files[0];

    if (!file) {
        alert('Please select an image to upload.');
        return;
    }

    const formData = new FormData();
    formData.append('file', file);  // Ensure the field name matches in the Flask app

    try {
        const response = await fetch('https://7722-34-147-88-137.ngrok-free.app/predict', {  // Update with your Ngrok URL
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        document.getElementById('result').innerText = JSON.stringify(data);
    } catch (error) {
        console.error('Error uploading image:', error);
        document.getElementById('result').innerText = 'Error uploading image.';
    }
});




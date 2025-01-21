

# AI Fashion Assistant

The AI Fashion Assistant is a web application designed to recognize clothing items, predict fashion trends, and allow users to input their preferences. This project utilizes Flask for the backend, TensorFlow/Keras for machine learning, and HTML/CSS/JavaScript for the frontend.

## Table of Contents

## Project Goals

- Implement image recognition to classify clothing items.
- Predict fashion trends based on user inputs.
- Manage user preferences for personalized outfit recommendations.

## Technologies Used

- **Backend**: Flask
- **Machine Learning**: TensorFlow/Keras
- **Frontend**: HTML, CSS, JavaScript
- **Database**: SQLite (or MongoDB/MySQL)
- **Hosting**: Ngrok for exposing the Flask API

## Installation

### Prerequisites

- Python 3.x
- Pip (Python package installer)

### Backend Development Environment Setup

- The backend will be developed in Google Colab for initial API development and model training.

### Model Training

- The project will use the Fashion-MNIST dataset to train a neural network for clothing type classification. 

### Flask API

- A Flask application will be created to handle requests, with endpoints for image uploads and predictions.

### Database Integration

Set up an SQLite (or MongoDB/MySQL) database to store user preferences and clothing metadata. Define a schema with a Users table that includes fields for `id`, `color_preference`, `style_preference`, and `clothing_type`. Use SQLAlchemy to manage interactions in your Flask app, ensuring user preferences are saved upon image upload. Implement functionality to retrieve user data for personalized outfit suggestions. Initialize the database and create necessary tables when the application starts.

## Frontend Development

- The frontend will consist of an HTML interface for uploading images and displaying predictions, styled with CSS for enhanced user experience. JavaScript will be used to manage interactions and communicate with the Flask API.

## Running the Application

- The Flask API should be run in Google Colab and exposed via Ngrok, while the frontend will be accessed through a web browser.

## Integration Steps

- The Ngrok URL will need to be integrated into the frontend JavaScript to allow communication between the front-end and back-end.

## Testing

- The application should be tested by uploading clothing images and checking the accuracy of predictions and suggestions.

## Troubleshooting

- Common issues may include ensuring that all dependencies are installed, verifying that the Flask app is running, and checking the Ngrok configuration.

## Contributions

- Contributions are welcome. Please submit a pull request or open an issue for suggestions and improvements.



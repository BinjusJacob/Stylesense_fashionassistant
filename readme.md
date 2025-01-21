# AI Fashion Assistant

## Overview
The AI Fashion Assistant is a web application designed to recognize clothing items, predict fashion trends, and allow users to input their preferences. This project utilizes Flask for the backend, TensorFlow/Keras for machine learning, and HTML/CSS/JavaScript for the frontend.

## Table of Contents
1. [Project Goals](#project-goals)
2. [Technologies Used](#technologies-used)
3. [Installation](#installation)
4. [Backend Development](#backend-development)
5. [Frontend Development](#frontend-development)
6. [Running the Application](#running-the-application)
7. [Testing](#testing)
8. [Troubleshooting](#troubleshooting)
9. [Contributions](#contributions)
10. [License](#license)

## Project Goals
- Implement image recognition to classify clothing items.
- Predict fashion trends based on user inputs.
- Manage user preferences for personalized outfit recommendations.

## Technologies Used
- **Backend:** Flask
- **Machine Learning:** TensorFlow/Keras
- **Frontend:** HTML, CSS, JavaScript
- **Database:** (if applicable, e.g., MongoDB or MySQL)
- **Hosting:** Ngrok for exposing the Flask API

## Installation
### Prerequisites
- Python 3.x
- Pip (Python package installer)


- Backend Development
Environment Setup
Developed in Google Colab for initial Flask API development.
Model Training
Loaded the Fashion-MNIST dataset.
Built and trained a neural network to classify clothing types.
Saved the model as fashion_mnist_model.h5.
Flask API
Created a Flask application with the following endpoints:
POST /predict: Accepts an image upload and returns predictions.
- Frontend Development
Designed the HTML interface for image upload and displaying predictions.
Styled the application with CSS for better visual appeal.
Used JavaScript to handle image uploads and communicate with the Flask API.

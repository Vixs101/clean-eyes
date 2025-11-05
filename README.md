# clean-eyes

A simple Node.js Express application with a single endpoint that returns a JSON response.

## Description

This project is a simple Express server with two endpoints:
- `/`: A simple endpoint to check if the server is running.
- `/clean-eyes`: An endpoint that returns a JSON object containing a name, Slack handle, an apology, a lesson learned, and a word count of the apology.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Vixs101/clean-eyes.git
   ```
2. Navigate to the project directory:
   ```bash
   cd clean-eyes
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

## Usage

- To start the server, run the following command:
  ```bash
  npm start
  ```
- To start the server in development mode with auto-reloading, run:
  ```bash
  npm run dev
  ```

The server will start on port 3000. You can access the endpoints at:
- `http://localhost:3000/`
- `http://localhost:3000/clean-eyes`

## Dependencies

- `express`: A fast, unopinionated, minimalist web framework for Node.js.

## Dev Dependencies

- `nodemon`: A tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.

## API Endpoints

### GET /

- **Description:** A simple endpoint to check if the server is running.
- **Response:**
  ```
  Server is running! Visit /clean-eyes for the API endpoint.
  ```

### GET /clean-eyes

- **Description:** Returns a JSON object with a name, Slack handle, an apology, a lesson learned, and a word count of the apology.
- **Response:**
  ```json
  {
    "name": "Elijah Victor",
    "slack_handle": "@Vixs",
    "apology": "I sincerely apologize for the incident that occurred and the misinterpretation that followed. What happened was a genuine misunderstanding on my part, where my mind processed visual information in a way that led to an inappropriate conclusion. I take full responsibility for allowing my thoughts to wander in that direction instead of maintaining the professional mindset required during this internship. The reason my mind went that way was due to a momentary lapse in focus and perhaps post traumatic disorder from the previous cohort. I realize now that I should have been more conscious of my thought patterns and more deliberate about keeping my attention on work-related matters. This experience has taught me the critical importance of mental discipline in the workplace. Moving forward, I am committed to ensuring that my eyes and mind remain pure and focused during all internship hours. I will purify and train my mind not to see any bad thing again by implementing several strategies to prevent this from happening again, including taking regular breaks to reset my mental state, practicing mindfulness techniques to catch wandering thoughts early, and actively redirecting my attention to productive tasks whenever I notice my focus drifting. I understand that professionalism is not just about external actions but also about maintaining appropriate internal thoughts and perspectives. I am deeply committed to upholding the highest standards of conduct and will work diligently to ensure that my presence in the workplace reflects maturity, respect, and unwavering focus on the responsibilities entrusted to me during this internship.",
    "lesson_learned": "I will now maintain unwavering focus and professionalism by being mindful of my thoughts, taking responsibility for my mental discipline, and ensuring that my attention remains solely on productive work during internship hours.",
    "word_count": 225
  }
  ```

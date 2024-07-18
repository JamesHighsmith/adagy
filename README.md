### README for Adagy Robotics


## Project Overview

Adagy Robotics is a 24/7 remote intervention service for autonomous robots. This project is for Adagy Robotics, showcasing its features, team, FAQ, contact information. The page highlights the company's ability to rescue robots from a team who has worked at prominent institutions like Tesla, Boston Dynamics, MIT, and Penn.

## Table of Contents

1. [Features](#features)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Docker Setup](#docker-setup)
5. [File Structure](#file-structure)
6. [Contributing](#contributing)
7. [License](#license)

## Features

- **Dynamic Hero Section**: The hero title dynamically changes between "Reduce Robot Downtime" and "Increase Robot Uptime" every 3 seconds.
- **Responsive Design**: The page is fully responsive, ensuring a seamless experience across devices.
- **Strong Call to Action**: Encourages users to book a demo and contact the team for more information.
- **Showcasing Achievements**: Highlights the company’s capability by mentioning robots rescued from top institutions.
- **Comprehensive Sections**: Includes sections like Features, About, FAQ, and Contact.

## Installation

To get started with this project, follow these steps:

1. **Clone the Repository**:
    ```sh
    git clone https://github.com/your-username/adagy-robotics-landing-page.git
    cd adagy-robotics-landing-page
    ```

2. **Install Dependencies**:
    ```sh
    npm install
    ```

3. **Start the Development Server**:
    ```sh
    npm start
    ```

This will start the development server and you can view the project at `http://localhost:3000`.

## Usage

1. **Viewing the Landing Page**: Once the development server is running, open your browser and navigate to `http://localhost:3000` to view the landing page.
2. **Customization**: Modify the content in the React components and CSS files as needed to customize the landing page.

## Docker Setup

To run the project using Docker, follow these steps:

1. **Ensure Docker is installed** on your machine. You can download it from [here](https://www.docker.com/products/docker-desktop).

2. **Build and Run the Docker Containers**:
    ```sh
    docker-compose up --build
    ```

This will start both the backend and frontend services. The frontend will be available at `http://localhost:3000` and the backend will be available at `http://localhost:8000`.

## File Structure

Here is a brief overview of the project's file structure:

```
adagy-robotics-landing-page/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── AdagyLanding.js
│   │   ├── DynamicHeroTitle.js
│   │   └── ...
│   ├── styles/
│   │   ├── AdagyLanding.css
│   │   └── ...
│   ├── App.js
│   ├── index.js
│   └── ...
├── robot_control_backend/
│   ├── requirements.txt
│   ├── manage.py
│   └── ...
├── robot_control_frontend/
│   ├── package.json
│   ├── src/
│   └── ...
├── backend_dockerfile
├── docker-compose.yml
├── .gitignore
├── package.json
└── README.md
```

## Contributing

We welcome contributions to enhance the functionality and design of the Adagy Robotics landing page. To contribute, please follow these steps:

1. **Fork the Repository**: Click the "Fork" button at the top right of this page.
2. **Clone Your Fork**:
    ```sh
    git clone https://github.com/your-username/adagy-robotics-landing-page.git
    cd adagy-robotics-landing-page
    ```
3. **Create a Branch**:
    ```sh
    git checkout -b feature/your-feature-name
    ```
4. **Make Your Changes**: Edit the code and add your feature.
5. **Commit Your Changes**:
    ```sh
    git add .
    git commit -m "Add your feature"
    ```
6. **Push to Your Fork**:
    ```sh
    git push origin feature/your-feature-name
    ```
7. **Submit a Pull Request**: Go to the original repository and create a new pull request from your fork.

## License

This project is licensed under the MIT License. You are free to use, modify, and distribute this project as you see fit.

---

We hope you find this landing page useful and look forward to any contributions you might have. If you have any questions, feel free to open an issue or contact us.

Thank you for using Adagy Robotics!

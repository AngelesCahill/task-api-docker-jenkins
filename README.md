# Task API Project

This project demonstrates a simple Node.js API for managing tasks, integrated with Docker for containerization and Jenkins for CI/CD pipeline.

## Features

- List all tasks  
### localhost:3000/tasks
- Get task by ID
### localhost:3000/tasks/1

## Running Locally

1. Install dependencies: `npm install`  
2. Start the server: `npm start`
3. Install devDenpencies: `npm i -D eslint supertest jest`

## Running with Docker

1. Build the image: `docker build -t task-api .`  
2. Run the container: `docker run -p 3000:3000 task-api`

## Repositoria github
### https://github.com/AngelesCahill/task-api-docker-jenkins

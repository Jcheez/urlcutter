# URLcutter

URLcutter is a self-host URL shortener that allows you to shorten long and complicated URLS into bite sized links so that it is easier to remember.

## Features

- Shorten long links into short ones
- Redirect to long links when short links is keyed into the browser
- Localstorage of links to remember the history of generated links

## Requirements

- Docker
- docker-compose

## Getting Started

- Clone the repository onto your local machine
- Navigate into the project where `docker-compose.yml` resides
- Run the following code `docker-compose up --build`
- Open up `localhost:3000` to start using the application!

## Tech Stack
- Frontend: React JS
- Backend: Express JS
- DB: MongoDB
- Container: Docker
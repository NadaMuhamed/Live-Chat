# Live Chat – Microservices Backend

A real-time chat backend built with a microservices architecture. This is a **learning project**: I am building it by following a video course while practicing the tools in it, and it is **still in progress**.

> **Course I'm following:** [Course video](https://www.youtube.com/watch?v=uosSnR_3MB8)
> <!-- TODO: replace "Course video" with the real course title and the author's name -->

## Status

| Part | Status |
| --- | --- |
| Backend services | In progress |
| Frontend | Not started yet |

## What I'm practicing

- **TypeScript** for the backend code
- **Socket.IO** for real-time messaging
- **OTP email authentication**
- **RabbitMQ** for messaging between services
- **Redis** for caching
- **Docker** to containerize the services

## Project structure

```
Live-Chat/
└── Backend/        # microservices (in progress)
```

<!-- TODO: list each service inside Backend/ with one line about what it does -->

## Getting started

### Prerequisites

- Node.js (v18 or newer)
- Docker and Docker Compose
- <!-- TODO: add anything else the project needs (for example an email provider for OTP) -->

### Run locally

```bash
git clone https://github.com/NadaMuhamed/Live-Chat.git
cd Live-Chat
npm install
```

<!-- TODO: add the exact commands you use to start the services (docker compose up, npm run dev, ...) -->

### Environment variables

Create a `.env` file (never commit it) based on `.env.example`:

```
# TODO: list the variable names only, without real values
```

## What I learned so far

<!-- TODO: write 3 to 5 short lines in your own words, for example:
- How services communicate through a message broker instead of calling each other directly
- Why Redis is used for caching
- How OTP authentication works
-->

## Next steps

- [ ] Finish the remaining backend parts
- [ ] Add tests
- [ ] Build a React frontend
- [ ] Add API documentation

## Credits

The architecture and structure follow the course linked above. Any changes or additions I make on my own will be noted here.

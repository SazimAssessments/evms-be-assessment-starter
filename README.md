# NestJS + MikroORM Template

This is bare bones template for building backend services with NestJS and MikroORM. This template is designed to help you get started quickly with a backend setup.

## Prerequisites

- Node.js (v18 or higher)
- PostgreSQL (v14 or higher)
- npm or yarn

## Getting Started

1. Clone this repository
```bash
git clone <your-fork-url>
cd evms-be-assessment-starter
```

2. Install dependencies
```bash
npm install
```

3. Copy the environment file
```bash
cp .env.example .env
```

4. Update your `.env` file with your PostgreSQL credentials

## Available Scripts

### Development

- `npm run start`: Starts the application in production mode
- `npm run start:dev`: Starts the application in development mode with hot-reload
- `npm run start:debug`: Starts the application in debug mode
- `npm run start:prod`: Starts the application in production mode

### Testing

- `npm run test`: Runs all tests
- `npm run test:watch`: Runs tests in watch mode
- `npm run test:cov`: Runs tests with coverage report
- `npm run test:debug`: Runs tests in debug mode
- `npm run test:e2e`: Runs end-to-end tests

### Database Management

#### Migrations

- `npm run -- db:migration:create --name=<migration-name>`: Creates a new migration file
  - **Important**: The `--name` parameter can be passed after `--`
  - Example: `npm run -- db:migration:create --name=users_table`
  - If the name parameter is not passed, the migration will be named `Migration<timestamp>`

- `npm run db:migration:up`: Applies all pending migrations
- `npm run db:migration:down`: Reverts the last migration
- `npm run db:migration:fresh`: Re-runs all migrations

#### Seeding

- `npm run db:seed`: Runs database seeders

### Code Quality

- `npm run lint`: Runs ESLint to check code quality
- `npm run format`: Formats code using Prettier

## Project Structure

```
src/
├── app.controller.ts        # Root controller
├── app.module.ts           # Root module
├── app.service.ts          # Root service
├── entities/               # Database entities
├── health/                 # Health check module
├── migrations/             # Database migrations
├── mikro-orm.config.ts     # MikroORM configuration
├── seeders/                # Database seeders
└── users/                  # User management module
```

## Example Usage

- Some example endpoints have been setup for you to get started

### Health Check

```bash
curl http://localhost:3000/health
```

### User Management

- Get all users:
```bash
curl http://localhost:3000/users
```

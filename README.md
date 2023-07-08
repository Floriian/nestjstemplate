<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
  <h1 align="center">NestJS Template</h1>
</p>

This template containts basics NestJS modules (TypeORM, @nestjs/config). It comes with preconfigured TypeORM connection.

Template structure:

db folder:
This folder for database connection. Easier to manage TypeORM migrations.

src/config folder:
For all your configuration files.

Okay, is not 100% preconfigured, but it need to take some easy steps.

Create a new .env file, wit this simple command:

`cp .env.example .env`

Modify your database connection

Open docker-compose file, and modify theese lines:

```yaml
- POSTGRES_PASSWORD=YOUR_PASSWORD
- POSTGRES_USER=YOUR_USERNAME
- POSTGRES_DB=YOUR_DATABASE
```

Start the app with `docker compose up` command.

TODO<br/>
[ ] TypeORM Migration

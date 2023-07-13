# Divorce Predictor
This web app predicts whether or not a marriage will last.

## Setup
The project uses the following:
- Python 3
- TypeScript
- Django
- Celery
- NPM
- React
- Material-UI
- PostgreSQL
- Redis
- Nginx
- Docker
- Docker Compose

For additional information on project specifications, see
```backend/Pipfile``` for the backend server and
```frontend/package.json``` for the frontend respectively.

### PostgreSQL
In the `postgres` directory, create an `.env` file with the following
configurations. It is highly recommended to use your own credentials
instead of the values provided:
```
POSTGRES_DB=divorcepredictor
POSTGRES_USER=postgres
POSTGRES_PASSWORD=password
```

### Backend
In the ```backend``` directory, create a ```.env``` file
that contains the following environment variables:
```
SECRET_KEY=somerandomstring

DEBUG=False
ALLOWED_HOSTS=localhost 127.0.0.1
CORS_ALLOWED_ORIGIN_REGEXES=^https?://(localhost|127\.0\.0\.1)$

DB_ENGINE=django.db.backends.postgresql
DB_NAME=divorcepredictor
DB_HOST=postgres
DB_USER=postgres
DB_PASSWORD=password
DB_PORT=5432

REDIS_URL=redis://redis:6379
```
The database variables can be changed as desired.
However, make sure to update the environment variables in
```docker-compose.yml``` as well.

### Frontend
The ```frontend``` directory must also have a ```.env``` file
with the following variables:
```
REACT_APP_API_URL=http://127.0.0.1
```
The URL should be the endpoint of the backend server.

## Building
The project uses Docker. Ensure Docker and Docker Compose are installed
before continuing.

To build, run ```docker compose build```

## Running
To run the web app, run ```docker compose up -d```, then
go to http://localhost using your web browser.

### Populating the Database
This project provides data to use for the project.
Populating the database should only be done once to avoid duplicate data.
To do so, run ```docker exec -it backend python manage.py loaddata data.json```.

### Setting Up HTTPS With Certbot
There are configurations already set up via `cli.ini` in the `certbot` directory.
To receive an SSL certificate using those configurations, run:
```
docker compose run --no-deps --rm certbot certonly -d [enter domain here]
```

Fill out the prompt, then configure Nginx to use the SSL certificate and domain.

To renew the SSL certificate and use the newest certificate, run:
```
docker compose run --no-deps --rm certbot renew && docker exec nginx nginx -s reload
```

**NOTE**: Ensure port 443 is exposed in `docker-compose.yml` for HTTPS.

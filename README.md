# Divorce Predictor
This web app predicts whether or not a marriage will last.

## Setup
The project uses the following:
- Python 3.9
- Django 3.2.8
- Celery 5.2.1
- NPM
- React 17.0.2
- Material-UI 5.1.0
- PostgreSQL 12
- Redis 5
- Nginx 1.21
- Docker
- Docker Compose

For additional information on project specifications, see 
```backend/Pipfile``` for the backend server and 
```frontend/package.json``` for the frontend respectively.

### Backend
In the ```backend``` directory, create a ```.env``` file 
that contains the following environment variables:
```
DJANGO_SETTINGS_MODULE=backend.settings

SECRET_KEY=[somerandomstring]

DEBUG=False
ALLOWED_HOSTS=localhost
CORS_ALLOWED_ORIGIN_REGEXES=^https?://(localhost|127\.0\.0\.1)(:3000)?$

DB_ENGINE=django.db.backends.postgresql_psycopg2
DB_NAME=divorcepredictor
DB_HOST=db
DB_USER=postgres
DB_PASSWORD=password
DB_PORT=5432

CELERY_BROKER_URL=redis://redis:6379
```
The database variables can be changed is desired. 
However, make sure to update the environment variables in 
```docker-compose.yml``` as well.

### Frontend
The ```frontend``` directory must also have a ```.env``` file 
with the following variables:
```
REACT_APP_API_URL=http://localhost:8000/api/
```
The URL should be the endpoint of the backend server.

## Building
The project uses Docker. Ensure Docker and Docker Compose are installed 
before continuing.

To build, run ```docker-compose build```

## Running
To run the web app, run ```docker-compose up -d```, then 
go to http://localhost using your web browser.

## Populating the Database
This project provides data to use for the project.
Populating the database should only be done once to avoid duplicate data. 
To do so, run ```docker exec -it backend python manage.py loaddata data.json```.

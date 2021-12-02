# Divorce Predictor
This web app predicts whether or not a marriage will last.

## Setup
The project uses the following:
- Python 3.9
- Django 3.2.8
- Celery 5.2.1
- NPM
- React 17.0.2
- PostgreSQL 12
- Redis 5
- Docker

For additional information on project specifications, see 
```backend/Pipfile``` for the backend server and 
```frontend/package.json``` for the frontend respectively.

### Backend
In the ```backend``` directory, create a ```.env``` file 
that contains the following environment variables:
```
DJANGO_SETTINGS_MODULE=backend.settings

SECRET_KEY=[somerandomstring]

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
REACT_APP_API_URL=http://localhost:8000/
```
The URL should be the endpoint of the backend server.

## Building
The project uses Docker. Ensure Docker and Docker Compose are installed 
before continuing.

To build, run ```docker-compose build```

## Running
To run the web app, run ```docker-compose up -d```, then 
go to http://localhost:3000 using your web browser.

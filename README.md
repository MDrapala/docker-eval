# A Eval docker

## Technical information

- node
- react
- mongoose

## Requirements

- docker

## Installation of the project

- WIP

## deployement of the project

- WIP

## Instructions for uses projects

- Create two .env files:

  - In folder api

    ```
    API_PORT=0000
    ME_CONFIG_MONGODB_URL=mongodb://username:password@mongo:27017/nameproject?authSource=admin
    ```

  - At the root of the project

    ```
    MONGO_INITDB_ROOT_USERNAME=username
    MONGO_INITDB_ROOT_PASSWORD=pasword

    ME_CONFIG_MONGODB_ADMINUSERNAME=username
    ME_CONFIG_MONGODB_ADMINPASSWORD=password
    ME_CONFIG_MONGODB_URL=mongodb://username:password@mongo:27017/nameproject?authSource=admin
    ```

- Execute project with command:

  ```
  docker-compose up --build
  ```

### URL

- mongodb: http://localhost:8081/
- reactProject: http://localhost:3001/

### URL API

- GET All users: http://localhost:0000/users
- POST add name: http://localhost:0000/users

# TypeScript (Vue js, Node js)
This project is built on Vue.js frontend that displays data fetched
from a Node.js Cloud Function backend.

Make sure to run `npm run fix` in the frontend and backend folders before
submitting.

## Technology Used

- [Typescript](https://www.typescriptlang.org/)
- [The Google Cloud Functions Framework for Node.js](https://github.com/GoogleCloudPlatform/functions-framework-nodejs)
- [Vue](https://vuejs.org/)

## External Services Used
https://www.ipify.org/

## Setup

### Requirements

You must have [Docker](https://www.docker.com/) installed in order to run
`docker compose` commands.

If you wish to run `npm ci` to get local copies of the `node_modules` for your
editor to scan, you must install Node.js 16 (LTS) from https://nodejs.org/en/ or
via
https://github.com/nvm-sh/nvm or https://github.com/tj/n.

### Local Development

#### Basic Setup

In order to get a functioning environment, you must run:

```sh
docker compose build
docker compose up
```

Once it finishes, you can visit http://localhost:8081 to see the function output
and http://localhost:8080 to see the frontend.

#### Getting copies of NPM packages for your editor

To get local copies of the npm packages, you should run:

```sh
npm ci
```

In the `frontend/` and `backend/` folders

#### Fixing linter errors

In the `frontend/` and `backend/` folders you can run:

```sh
npm run fix
```

To see linter errors and fix any that can be fixed automatically. Your solution
should be submitted with no linter errors.

#### Adding packages

You may add any extra packages you feel are helpful or necessary to complete
your submission, though pay attention to efficiency and maintainability. To do
so you may `npm install --save` them as usual, but you must rebuild and restart
the docker containers by running the following again afterwards:

```sh
docker compose build
docker compose up
```

It may be better to add them from within the container via:

```sh
docker compose exec {frontend or backend} sh
npm install --save {package}
```

## Notes

The dockerfiles used here are not suitable for any form of production
environment.

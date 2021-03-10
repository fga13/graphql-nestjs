<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
  <a href="https://github.com/apollographql/apollo-server" target="blank"><img src="https://user-images.githubusercontent.com/841294/53402609-b97a2180-39ba-11e9-8100-812bab86357c.png" height="100" alt="Apollo Server" style="max-width:100%;"></a>
</p>

## Description

A test on a nestjs + appolo server to test graphql

## Installation

Assuming installed both node and npm (and yarn if you want).

```bash
$ npm install
```
or
```bash
$ yarn
```

## Running the app

### Requirement: a postgresql db running
```bash
  docker run --name postgres -p 5432:5432 -e POSTGRES_PASSWORD=postgres -d postgres 
```

### Running app cmds
```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

### To play with graphql

Visit : http://localhost:3000/graphql

Try some of the following: 
```bash
mutation{
  createClient(name: "tata", email: "tata@free.fr", birthdate: "1972-05-04T06:18:00Z") {id}
}
```

```bash
query{
  client(id:1) {
    id,
    name,
    email,
    dateOfBirth,
    created_at,
    updated_at
  }
}
```

```bash
query{
  clients {
    id,
    name,
    email,
    created_at,
    updated_at
  }
}
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## License

Nest is [MIT licensed](LICENSE).

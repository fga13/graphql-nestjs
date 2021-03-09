<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
  <a href="https://github.com/apollographql/apollo-server" target="blank"><img src="https://user-images.githubusercontent.com/841294/53402609-b97a2180-39ba-11e9-8100-812bab86357c.png" height="100" alt="Apollo Server" style="max-width:100%;"></a>
</p>

## Description

A test on a nestjs + appolo server to test graphql

## Installation

```bash
$ npm install
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

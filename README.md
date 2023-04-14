<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[travis-image]: https://api.travis-ci.org/nestjs/nest.svg?branch=master
[travis-url]: https://travis-ci.org/nestjs/nest
[linux-image]: https://img.shields.io/travis/nestjs/nest/master.svg?label=linux
[linux-url]: https://travis-ci.org/nestjs/nest
  
  <p align="center">A progressive <a href="http://nodejs.org" target="blank">Node.js</a> framework for building efficient and scalable server-side applications, heavily inspired by <a href="https://angular.io" target="blank">Angular</a>.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/dm/@nestjs/core.svg" alt="NPM Downloads" /></a>
<a href="https://travis-ci.org/nestjs/nest"><img src="https://api.travis-ci.org/nestjs/nest.svg?branch=master" alt="Travis" /></a>
<a href="https://travis-ci.org/nestjs/nest"><img src="https://img.shields.io/travis/nestjs/nest/master.svg?label=linux" alt="Linux" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#5" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec"><img src="https://img.shields.io/badge/Donate-PayPal-dc3d53.svg"/></a>
  <a href="https://twitter.com/nestframework"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

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

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

  Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).

## Process data from the two endpoints to have a nested array of companies with travel cost 
/companies/travel-cost
## response 
[{
    "id": "uuid-1",
    "createdAt": "2021-02-26T00:55:36.632Z",
    "name": "Webprovise Corp",
    "parentId": "0",
    "cost": 1221,
    "children": [{
        "id": "uuid-2",
        "createdAt": "2021-02-25T10:35:32.978Z",
        "name": "Stamm LLC",
        "parentId": "uuid-1",
        "cost": 1429,
        "children": [{
            "id": "uuid-4",
            "createdAt": "2021-02-25T06:11:47.519Z",
            "name": "Price and Sons",
            "parentId": "uuid-2",
            "cost": 1340
        }, {
            "id": "uuid-7",
            "createdAt": "2021-02-25T07:56:32.335Z",
            "name": "Zieme - Mills",
            "parentId": "uuid-2",
            "cost": 1636
        }, {
            "id": "uuid-19",
            "createdAt": "2021-02-25T21:06:18.777Z",
            "name": "Schneider - Adams",
            "parentId": "uuid-2",
            "cost": 794
        }]
    }, {
        "id": "uuid-3",
        "createdAt": "2021-02-25T15:16:30.887Z",
        "name": "Blanda, Langosh and Barton",
        "parentId": "uuid-1",
        "cost": 3847,
        "children": [{
            "id": "uuid-5",
            "createdAt": "2021-02-25T13:35:57.923Z",
            "name": "Hane - Windler",
            "parentId": "uuid-3",
            "cost": 1288
        }, {
            "id": "uuid-6",
            "createdAt": "2021-02-26T01:41:06.479Z",
            "name": "Vandervort - Bechtelar",
            "parentId": "uuid-3",
            "cost": 2512
        }, {
            "id": "uuid-9",
            "createdAt": "2021-02-25T16:02:49.099Z",
            "name": "Kuhic - Swift",
            "parentId": "uuid-3",
            "cost": 3086
        }, {
            "id": "uuid-17",
            "createdAt": "2021-02-25T11:17:52.132Z",
            "name": "Rohan, Mayer and Haley",
            "parentId": "uuid-3",
            "cost": 4072
        }, {
            "id": "uuid-20",
            "createdAt": "2021-02-26T01:51:25.421Z",
            "name": "Kunde, Armstrong and Hermann",
            "parentId": "uuid-3",
            "cost": 908
        }]
    }, {
        "id": "uuid-8",
        "createdAt": "2021-02-25T23:47:57.596Z",
        "name": "Bartell - Mosciski",
        "parentId": "uuid-1",
        "cost": 2605,
        "children": [{
            "id": "uuid-10",
            "createdAt": "2021-02-26T01:39:33.438Z",
            "name": "Lockman Inc",
            "parentId": "uuid-8",
            "cost": 4288
        }, {
            "id": "uuid-11",
            "createdAt": "2021-02-26T00:32:01.307Z",
            "name": "Parker - Shanahan",
            "parentId": "uuid-8",
            "cost": 2872,
            "children": [{
                "id": "uuid-12",
                "createdAt": "2021-02-25T06:44:56.245Z",
                "name": "Swaniawski Inc",
                "parentId": "uuid-11",
                "cost": 2110
            }, {
                "id": "uuid-14",
                "createdAt": "2021-02-25T15:22:08.098Z",
                "name": "Weimann, Runolfsson and Hand",
                "parentId": "uuid-11",
                "cost": 7254
            }]
        }, {
            "id": "uuid-13",
            "createdAt": "2021-02-25T20:45:53.518Z",
            "name": "Balistreri - Bruen",
            "parentId": "uuid-8",
            "cost": 1686
        }, {
            "id": "uuid-15",
            "createdAt": "2021-02-25T18:00:26.864Z",
            "name": "Predovic and Sons",
            "parentId": "uuid-8",
            "cost": 4725
        }, {
            "id": "uuid-16",
            "createdAt": "2021-02-26T01:50:50.354Z",
            "name": "Weissnat - Murazik",
            "parentId": "uuid-8",
            "cost": 3277
        }]
    }, {
        "id": "uuid-18",
        "createdAt": "2021-02-26T02:31:22.154Z",
        "name": "Walter, Schmidt and Osinski",
        "parentId": "uuid-1",
        "cost": 2033
    }]
}]
## Travel cost of a particular company is the total travel price of employees in that company and its child companies 
/companies/travel-cost/uuid-8
## response 
[
    {
        "id": "uuid-8",
        "createdAt": "2021-02-25T23:47:57.596Z",
        "name": "Bartell - Mosciski",
        "parentId": "uuid-1",
        "cost": 28817,
        "keyMap": "uuid-1_uuid-8_",
        "children": [
            {
                "id": "uuid-10",
                "createdAt": "2021-02-26T01:39:33.438Z",
                "name": "Lockman Inc",
                "parentId": "uuid-8",
                "cost": 4288,
                "keyMap": "uuid-1_uuid-8_uuid-10_"
            },
            {
                "id": "uuid-11",
                "createdAt": "2021-02-26T00:32:01.307Z",
                "name": "Parker - Shanahan",
                "parentId": "uuid-8",
                "cost": 2872,
                "keyMap": "uuid-1_uuid-8_uuid-11_",
                "children": [
                    {
                        "id": "uuid-12",
                        "createdAt": "2021-02-25T06:44:56.245Z",
                        "name": "Swaniawski Inc",
                        "parentId": "uuid-11",
                        "cost": 2110,
                        "keyMap": "uuid-1_uuid-8_uuid-11_uuid-12_"
                    },
                    {
                        "id": "uuid-14",
                        "createdAt": "2021-02-25T15:22:08.098Z",
                        "name": "Weimann, Runolfsson and Hand",
                        "parentId": "uuid-11",
                        "cost": 7254,
                        "keyMap": "uuid-1_uuid-8_uuid-11_uuid-14_"
                    }
                ]
            },
            {
                "id": "uuid-13",
                "createdAt": "2021-02-25T20:45:53.518Z",
                "name": "Balistreri - Bruen",
                "parentId": "uuid-8",
                "cost": 1686,
                "keyMap": "uuid-1_uuid-8_uuid-13_"
            },
            {
                "id": "uuid-15",
                "createdAt": "2021-02-25T18:00:26.864Z",
                "name": "Predovic and Sons",
                "parentId": "uuid-8",
                "cost": 4725,
                "keyMap": "uuid-1_uuid-8_uuid-15_"
            },
            {
                "id": "uuid-16",
                "createdAt": "2021-02-26T01:50:50.354Z",
                "name": "Weissnat - Murazik",
                "parentId": "uuid-8",
                "cost": 3277,
                "keyMap": "uuid-1_uuid-8_uuid-16_"
            }
        ]
    }
]
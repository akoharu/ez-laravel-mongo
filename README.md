# EZ Billing

## Requirements

- [Lando](https://docs.lando.dev/getting-started/installation/)
- [MongoDB](https://www.mongodb.com/try/download/community)
- [Laravel MongoDB](https://www.mongodb.com/developer/languages/php/laravel-mongodb-tutorial/)

## Setup

1. `lando build`
2. `lando ssh --user root`
3. once inside the container, run :

```bash
pecl install mongodb
docker-php-ext-enable mongodb
```
4. `exit`
5. `lando restart`
6. `cp .env.example .env`
7. `lando composer install`
# Laravel Q/A

Laravel Q/A is an application that replicate StackOverlow. Users can ask a questions or answer other user's questions.

## Installation

1. Download the code by clicking **Code**, **Download ZIP**. Or if you have Git install in your machine, you can run this in your teminal.

```
git clone git@github.com:tutsprime/laravel-qa.git
```

2. Change directory to your local copy of `laravel-qa` in your terminal. Then install composer dependencies.

```
composer install
```

3. Copy `.env` file from `.env.example`. In NIX machine you can use this command.

```
cp .env.example .env
```

4. Prepare a database. You can use this command.

```
mysql -uroot -e "CREATE DATABASE laravel_qa"
```

If you have password for your database, you need to specify `-p` on the command.

5. Configure your database settings in `.env`

```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel_qa
DB_USERNAME=root
DB_PASSWORD=
```

6. Migrate database tables and seed them with fake data

```
php artisan migrate --seed
```

7. Generate a key for you application

```
php artisan key:generate
```

8. Generate passport encryption keys

```
php artisan passport:install
```

9. Install frontend dependencies.

```
npm install
```

10. Run laravel mix

```
npm run watch
```

Your local copy of laravel-qa is ready to access in  your browser ;)


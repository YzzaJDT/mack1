FROM php:8.4-cli

RUN apt-get update && apt-get install -y \
    git unzip zip curl libzip-dev nodejs npm \
    && docker-php-ext-install zip

COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

WORKDIR /app

COPY composer.json composer.lock ./
RUN composer install --no-dev --optimize-autoloader

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

CMD php artisan serve --host=0.0.0.0 --port=$PORT
# Dockerfile

# Utiliser une image PHP avec FPM
FROM php:8.2-fpm

# Installer les extensions PHP nécessaires et autres dépendances
RUN apt-get update && apt-get install -y \
    libpq-dev \
    git \
    unzip \
    && docker-php-ext-install pdo pdo_pgsql

# Installer Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Installer Symfony CLI
RUN curl -sS https://get.symfony.com/cli/installer | bash
RUN mv /root/.symfony*/bin/symfony /usr/local/bin/symfony

# Copier les fichiers de l'application dans le conteneur
COPY . /var/www/html

# Définir le répertoire de travail
WORKDIR /var/www/html

# Exposer le port 8000 pour Symfony server
EXPOSE 8000

# Commande pour lancer Symfony server
CMD ["sh", "-c", "symfony serve --port=8000 || symfony serve --port=8000"]
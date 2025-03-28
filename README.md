# 3205.team Test Task

## 🚀 Технологии

### 📌 Frontend:
- **Vite** – для быстрого сборщика проекта
- **React** – библиотека для создания UI
- **Ant Design** – готовые компоненты для стилизации

### 📌 Backend:
- **Express** – минималистичный фреймворк для Node.js
- **TypeORM** – ORM для работы с базой данных
- **PostgreSQL** – реляционная база данных

## 🛠 Запуск проекта

1. Инициализировать git-репозиторий:
   ```sh
   git init
   ```
2. Клонировать репозиторий:
   ```sh
   git clone https://github.com/b1adeDEV/3205Test
   ```
3. Перейти в папку проекта:
   ```sh
   cd 3205Test
   ```
4. Запустить контейнеры с помощью Docker:
   ```sh
   docker-compose up
   ```

## 🔧 Дополнительная информация
- Убедитесь, что у вас установлен [Docker](https://www.docker.com/) и [Docker Compose](https://docs.docker.com/compose/).
- Для остановки контейнеров используйте:
  ```sh
  docker-compose down
  ```
- Если не получается запустить через Docker, установите зависимости вручную и запустите проект:
  
  **Для бэкенда:**
  ```sh
  cd back
  npm install
  npm run dev
  ```
  
  **Для фронтенда:**
  ```sh
  cd front
  npm install
  npm run dev
  ```


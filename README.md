# 🎓 Dyplom — Система управління автомайстернею

## Опис

**Dyplom** — це веб-додаток для управління автосервісом, створений у рамках дипломного проєкту. Система дозволяє реєструвати клієнтів, керувати замовленнями, додавати автомобілі, контролювати виконання ремонтів і спілкуватися з клієнтами в режимі онлайн.

## 🛠 Технології

- **Frontend**: React, Tailwind CSS, Axios
- **Backend**: Node.js, Express
- **База даних**: MongoDB (Mongoose)
- **Аутентифікація**: JWT (JSON Web Tokens)
- **Інші інструменти**: 
  - Zustand (керування станом)
  - React Router
  - Vite (для швидкої розробки фронтенду)

## 🔧 Основний функціонал

- Реєстрація та вхід користувачів
- Панель адміністратора
- Керування клієнтами, авто, послугами та замовленнями
- Онлайн-чат між клієнтом і адміністратором
- Система ролей (admin, client)
- Візуальна панель статистики
- Повідомлення про статус заявки

## 🚀 Як запустити проєкт локально

### 1. Клонування репозиторію

```bash
git clone https://github.com/viktor-rumiievskyi/Dyplom.git
cd Dyplom
```

### 2. Налаштування backend

```bash
cd server
npm install
```

Створіть `.env` файл у папці `server` з наступним вмістом:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Запустіть сервер:

```bash
npm run dev
```

### 3. Налаштування frontend

```bash
cd ../client
npm install
npm run dev
```

Веб-додаток буде доступний за адресою `http://localhost:5173`.

## 🖼️ Скриншоти



## 🧑‍💻 Автор

**Віктор Румієвський**  
- GitHub: [@viktor-rumiievskyi](https://github.com/viktor-rumiievskyi)  
- Портфоліо: [viktor-rumiievskyi.github.io/Personal-Portfolio](https://viktor-rumiievskyi.github.io/Personal-Portfolio)  
- LinkedIn: [Viktor Rumiievskyi](https://www.linkedin.com/in/viktor-rumiievskyi-011a12206/)

## 📄 Ліцензія

Цей проєкт опублікований під MIT ліцензією — перегляньте файл [LICENSE](LICENSE) для деталей.

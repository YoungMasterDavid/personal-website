# 💻 David C’zar C. Porras — Personal Portfolio Website

This is the source code for my personal portfolio website built with **React.js (frontend)** and **Django REST Framework (backend)**. It showcases my skills, projects, tools, and contact functionality with light/dark mode support.

---

## 🌐 Live Demo

🚀 [View Website Here](https://your-domain-or-vercel-link.com)  
📄 [Download My Resume](./client/src/assets/Porras_Resume.pdf)

---

## 🛠️ Tech Stack

### Frontend:
- React.js
- React Router
- CSS (custom, with light/dark mode)
- Responsive design (mobile-ready)

### Backend:
- Django
- Django REST Framework (DRF)
- SQLite3 (can be swapped for PostgreSQL)

---

## 📂 Folder Structure
personal-website/
├── client/ # React frontend
│ ├── src/
│ │ ├── components/ # Navbar, Footer
│ │ ├── pages/ # Home, About, Projects, Contact, Skills, Tools
│ │ └── assets/ # Resume & icons
│ └── public/ # Static assets
├── server/ or backend/ # Django backend
│ ├── portfolio/ # App with models, views, serializers
│ └── manage.py


---

## 🔑 Features

- 👨‍💻 About Me + Education Background
- 🧠 Skills & Tools Grids with Icons
- 📂 Project Cards from Django API
- 📬 Contact Form → Stores messages in Django DB
- 🌗 Dark/Light Mode Toggle (CSS-based)
- 📱 Fully Responsive
- 📝 Resume Download

---

## ⚙️ Setup Instructions

### Backend (Django):

```bash
cd server/
python -m venv venv
source venv/bin/activate  # or venv\Scripts\activate on Windows
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver

cd client/
npm install
npm start


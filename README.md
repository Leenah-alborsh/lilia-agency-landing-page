# Lilia Digital Agency 🌐

A modern and responsive **digital agency landing page** built using **HTML, CSS, and JavaScript**,  
designed with clean UI, smooth animations, and fully **Dockerized** for easy deployment.

This project represents a real-world agency website and is suitable for portfolio showcasing.

---

## ✨ Features

- Modern landing page design
- Fully responsive layout (Desktop / Tablet / Mobile)
- Smooth animations and interactive UI
- Sticky header & smooth scrolling navigation
- Portfolio filtering section
- Animated counters
- Client feedback slider
- Clean and organized CSS structure
- Dockerized using Nginx

---

## 🛠️ Tech Stack

- **HTML5**
- **CSS3** (Flexbox & Grid)
- **JavaScript (Vanilla)**
- **Font Awesome**
- **Google Fonts (Poppins)**
- **Docker**
- **Nginx**

---

## 📂 Project Structure

```txt
lilia-digital-agency/
│
├── src/
│   ├── css/
│   │   ├── global.css
│   │   ├── header.css
│   │   ├── hero.css
│   │   ├── about.css
│   │   ├── services.css
│   │   ├── portfolio.css
│   │   ├── team.css
│   │   ├── pricing.css
│   │   ├── blog.css
│   │   ├── contact.css
│   │   └── footer.css
│   │
│   ├── js/
│   │   └── script.js
│   │
│   └── imgs/
│       ├── home.jpg
│       ├── about.png
│       ├── p1.jpg
│       └── ...
│
├── index.html
├── Dockerfile
├── .dockerignore
├── .gitignore
└── README.md
```
🚀 Run Project with Docker

1️⃣ Build Docker Image
```bash
docker build -t lilia-agency .
```
2️⃣ Run Docker Container
```bash
docker run -p 9090:80 lilia-agency
```
3️⃣ Open in Browser
```bash
http://localhost:9090

## 🌐 Live Demo
🔗 https://leenah-alborsh.github.io/lilia-digital-agency/

```
## 🚀 How to Run

### Clone
```bash
git clone https://github.com/Leenah-alborsh/lilia-digital-agency.git
cd lilia-digital-agency
```
Using Chrome locally

Open index.html

With Docker
```bash
docker build -t lilia-agency .
docker run -p 9090:80 lilia-agency
```
👩‍💻 Author

Leenah Alborsh
Full Stack Developer & Software Development Student

GitHub: https://github.com/Leenah-alborsh

📄 License

This project is open-source and available for learning and portfolio use.
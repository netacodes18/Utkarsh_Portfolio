# Utkarsh Pratap — Developer Portfolio 🚀

A modern, responsive, full-stack developer portfolio built using **React.js, Tailwind CSS, Node.js, and Express.js**. Designed with a clean off-white editorial aesthetic, interactive code editor window, metrics strip, and single-column project & experience highlights.

![Portfolio Preview](https://raw.githubusercontent.com/netacodes18/Utkarsh_Portfolio/main/frontend/public/preview.png)

---

## ✨ Features

- 🎨 **Modern Off-White Aesthetic**: Crisp white glass cards on a soft off-white canvas (`#FAF9F6`) with blue accent typography.
- 💻 **Interactive Mac Code Window**: Features syntax-highlighted `aboutMe.js` code block with live console prompt.
- 📊 **Metrics Strip Banner**: Displays key statistics including **800+ DSA Problems Solved**, **8.59 CGPA @ IIIT Ranchi**, **99% Latency Reduction**, **1656 LeetCode Rating**, and **GSSoC Contributor**.
- 🛠️ **Two-Column About & Tech Stack**: Categorized skills breakdown (Languages, Frontend, Backend, Databases, Tools & Cloud) paired with academic credentials.
- 🚀 **Full-Description Projects & Experience**: Vertical single-column stack featuring full resume bullet points, tech stack tags, live demo links, and GitHub repositories.
- 📬 **Direct Contact & Mailto Trigger**: Clickable email redirects (`mailto:utkarsh.2023ug2037@iiitranchi.ac.in`) and clickable phone link (`tel:+918948983412`).
- 📄 **Resume Download Integration**: Direct link to view & download resume via Google Drive.

---

## 🛠️ Tech Stack

### **Frontend**
- **Core**: React.js (Vite)
- **Styling**: Tailwind CSS 3.4
- **Icons**: Lucide React
- **HTTP Client**: Axios

### **Backend**
- **Server**: Node.js & Express.js
- **Data Persistence**: JSON / MongoDB ready
- **CORS & Middleware**: Body Parser, Cross-Origin Resource Sharing

---

## 📁 Project Structure

```
portfolionew/
├── backend/
│   ├── data/
│   │   └── initialData.json     # Resume & portfolio content JSON
│   ├── models/
│   │   └── Message.js           # Contact message schema
│   ├── routes/
│   │   └── portfolio.js         # API endpoints GET/POST
│   ├── server.js                # Express app entry point
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx          # Fixed top header
│   │   │   ├── Hero.jsx            # Hero section & Mac code window
│   │   │   ├── AboutTechStack.jsx  # About & Tech Stack 2-column card
│   │   │   ├── Projects.jsx        # Single-column project stack
│   │   │   ├── Experience.jsx      # Single-column experience stack
│   │   │   ├── Education.jsx       # Education details
│   │   │   ├── Positions.jsx       # Positions of responsibility
│   │   │   ├── Skills.jsx          # All technical skills
│   │   │   ├── Achievements.jsx    # Achievements & Certifications
│   │   │   ├── Contact.jsx         # Contact section
│   │   │   └── Footer.jsx          # Footer bar
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   └── package.json
├── .gitignore
├── package.json                 # Root script runner (Concurrently)
└── README.md
```

---

## 🚀 Quick Start Guide

### Prerequisites
- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/)

### 1. Clone the Repository
```bash
git clone https://github.com/netacodes18/Utkarsh_Portfolio.git
cd Utkarsh_Portfolio
```

### 2. Install Dependencies
Install root, backend, and frontend dependencies:
```bash
npm install
npm run install-all
```

### 3. Run Development Server
Launch both the Express backend (`http://localhost:5000`) and Vite frontend (`http://localhost:3000`) concurrently:
```bash
npm run dev
```

Open `http://localhost:3000` in your browser to view the portfolio live!

---

## 👤 Author

**Utkarsh Pratap**
- **Education**: B.Tech ECE @ IIIT Ranchi (CGPA: 8.59)
- **Email**: [utkarsh.2023ug2037@iiitranchi.ac.in](mailto:utkarsh.2023ug2037@iiitranchi.ac.in)
- **LinkedIn**: [utkarsh-pratap-460502251](https://www.linkedin.com/in/utkarsh-pratap-460502251/)
- **GitHub**: [@netacodes18](https://github.com/netacodes18)

---

## 📜 License

This project is licensed under the MIT License — feel free to fork and customize for your own portfolio!

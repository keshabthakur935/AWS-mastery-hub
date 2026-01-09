# AWS Master Course – Full Stack Project

A full‑stack **AWS‑themed learning platform** built with **HTML, CSS, JavaScript (Frontend)** and **Node.js + Express (Backend)**.\
This project demonstrates how a real‑world cloud application connects frontend and backend using REST APIs and prepares the application for deployment on AWS.

---

## 📌 Project Overview

This project is designed as an **AWS Master Course website** where:

- Course modules are displayed dynamically
- A contact form sends data to the backend
- Frontend and backend communicate via HTTP APIs
- The architecture is AWS‑ready (S3, Lambda, API Gateway, DynamoDB)

This project is suitable for:

- Cloud Engineer (Beginner–Intermediate)
- Internship / Fresher Portfolio
- AWS Learning Projects

---

## 🏗️ Project Architecture

```
Browser (Frontend)
   │
   │ fetch() – HTTP Request
   ▼
Node.js Backend (Express API)
   │
   ▼
Future Database (DynamoDB / MongoDB)
```

---

## 📁 Folder Structure

```
aws-master-project/
│
├── backend/
│   ├── server.js          # Express backend server
│   ├── package.json       # Backend dependencies
│   └── node_modules/
│
└── frontend/
    ├── index.html         # Homepage
    ├── contact.html       # Contact form page
    ├── assets/
    │   ├── css/
    │   └── js/
    │       └── script.js  # Frontend logic + API calls
    ├── modules/           # Course modules pages
    └── quizzes/           # Quiz pages
```

---

## 🧰 Technologies Used

### Frontend

- HTML5
- CSS3
- JavaScript (Vanilla JS)

### Backend

- Node.js
- Express.js
- CORS Middleware

### Cloud (Planned)

- AWS S3 (Frontend hosting)
- AWS Lambda (Backend)
- API Gateway
- DynamoDB

---

## 🚀 Features

- Dynamic course module listing
- Sidebar navigation with dropdown
- Dark mode support
- Client‑side search functionality
- Contact form connected to backend
- REST API communication

---

## ⚙️ How to Run the Project Locally

### 1️⃣ Clone or Download the Project

```bash
git clone <repository-url>
```



---

### 2️⃣ Run the Backend

```bash
cd backend
npm install
node server.js
```

You should see:

```
Backend running at http://localhost:5000
```

⚠️ Keep this terminal running.

---

### 3️⃣ Run the Frontend

Open the following file in your browser:

```
frontend/index.html
```

To test the backend connection, open:

```
frontend/contact.html
```

---

## 🔗 Frontend ↔ Backend Connection

The frontend communicates with the backend using **fetch API**:

```js
fetch("http://localhost:5000/api/contact")
```

- This code runs in the **browser**
- The backend runs in the **terminal**

---

## 📡 API Endpoints

### Get Course Modules

```
GET /api/modules
```

### Submit Contact Form

```
POST /api/contact
Content-Type: application/json
```

Example Request Body:

```json
{
  "name": "Masruf",
  "email": "test@gmail.com",
  "message": "Hello"
}
```

---

## 🧪 Testing

1. Start backend using `node server.js`
2. Open `contact.html` in browser
3. Submit the form
4. Check terminal for received data

---

## ☁️ Future Enhancements (AWS Roadmap)

- Host frontend on **AWS S3 + CloudFront**
- Deploy backend to **AWS Lambda**
- Use **API Gateway** for REST APIs
- Store data in **DynamoDB**
- Add authentication (Login / Signup)

---

## 🎯 Learning Outcomes

- Understand frontend–backend separation
- Learn REST API communication
- Practice real‑world cloud‑ready architecture
- Prepare projects for AWS deployment

---

## 💬 Interview Explanation (One Line)

> “This is a full‑stack AWS‑ready project where the frontend communicates with a Node.js Express backend using REST APIs, designed for deployment on AWS services like S3, Lambda, and DynamoDB.”

---

## 👤 Author

**Masruf Ali**\
Aspiring AWS Cloud Engineer, 

**Keshab Thakur**

Aspiring Software Engineer,

**Anil Chetri**

Aspiring Software Engineer

---

## 📄 License

This project is for learning and educational purposes.


# 💼 Jobify — Wage Hiring Platform

**Jobify** is a full-stack job hiring platform designed to connect employers with skilled workers. The platform enables job postings, worker browsing, and secure communication between users. It's built with a modern tech stack to ensure performance, scalability, and developer productivity.

---

## 📦 Tech Stack

| Layer       | Technology                      |
|-------------|----------------------------------|
| Frontend    | React (Vite), Tailwind CSS  |
| Backend     | Java (Spring Boot), Maven       |
| Database    | MySQL              |
| APIs        | RESTful API                     |
| Authentication | (Planned) JWT or Spring Security |

---

## 📁 How to start the project
# Start the backend
- 1. Navigate to backend folder
``` cd backend ```
- 2. Configure the DB credentials inside `/utils/DbConnection.java ` folder
- 3. Start the backend
`` mvn exec:java "-Dexec.mainClass=com.jobify.backend.BackendApplication" ``

# Start the frontend
- 1. Navigate to backend folder
` cd frontent`
- 2. Install Dependencies
` npm install `
- 3. Start frontent
` npm run dev `

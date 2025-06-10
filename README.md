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

## 🚀 Features

### 👷 Worker-Side Features
- 🔐 Worker registration with name, skill, location, and availability
- 🧾 Manage profile and update availability status
- 📅 View and respond to incoming job bookings
- ⭐ Receive ratings and reviews from users

### 👤 User-Side Features
- 🔍 Search and filter workers by location, skill, and rating
- 📘 View worker profiles and availability
- 📲 Book a worker with job details and timing
- 🔁 Track booking status (Pending, Confirmed, Completed)
- ✍️ Rate and review workers after job completion

### 🛡️ Admin Panel (Optional)
- 🧑‍💼 Manage users and workers
- 🚫 Handle reported issues or disputes
- 📊 View platform analytics (total bookings, active workers, etc.)

### 🔐 Security & Validation
- ✅ JWT-based secure login for all users
- 🛡️ Role-based access control (user, worker, admin)
- ❌ Error messages and validations for all inputs and actions

### 📱 UI/UX
- ⚡ Fast, responsive interface using React.js and Tailwind CSS
- 🌐 Clean and intuitive navigation for seamless experience
- 🌙 Optional support for dark mode (planned)



# 🧑‍🎓 Tuition App – Full Stack Web Project

A responsive full-stack web application designed for students, parents, and tutors to manage tuition tasks, featuring real-time chat, user profiles, shortlisting, and secure authentication.

## 🚀 Features

- 🔐 Secure Sign Up / Log In / Log Out
- 🔄 Password reset & update
- ❤️ Shortlisting ("heart") feature
- 👤 User profiles for students, tutors, and parents
- 💬 Real-time Chat (basic setup)
- 📋 Task Management (sample tasks for demo)

## 🛠 Tech Stack

### Frontend

- **React.js** – Component-based UI
- **Next.js** – SSR and routing
- **Material UI** – Prebuilt, responsive UI components
- **Fetch API** – Communication with backend

### Backend

- **Node.js** – Server runtime
- **Express.js** – Routing and API development
- **pg (node-postgres)** – PostgreSQL client

### Database

- **PostgreSQL** – Relational database for storing user data, tasks, etc.

### Development Tools

- **npm** – Dependency management
- **CORS** – Handling cross-origin requests
- **.env** – Environment variables
- **Git** – Version control

## 🧪 Local Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
2. Set Up the Backend
bash
Copy
Edit
cd server
npm install
Create PostgreSQL database task_tracker

Create tasks table using:

sql
Copy
Edit
CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT
);
Add sample data:

sql
Copy
Edit
INSERT INTO tasks (title, description) VALUES ('Sample Task', 'This is a test task.');
3. Start the Backend
bash
Copy
Edit
node index.js
It should show: Server running on port 4000

4. Set Up the Frontend
bash
Copy
Edit
cd ../client
npm install
npm run dev
Visit http://localhost:3000 in your browser.

🌐 API Endpoint Example
GET http://localhost:4000/tasks – Returns all tasks

📁 Folder Structure
bash
Copy
Edit
project-root/
├── client/      # React + Next.js frontend
├── server/      # Node.js + Express backend
└── README.md
📌 Notes
Backend and frontend run on different ports (4000 and 3000)

PostgreSQL must be installed and running locally

Make sure to match port numbers if you change them

📝 License
This project is open-source and available under the MIT License.



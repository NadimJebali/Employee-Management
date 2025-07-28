# 🧑‍💼 Project Employee Management


**Employee-Management Project** is a full-stack Human Resources Management System designed for companies to handle employee data, leave requests, performance evaluations, and timesheets. It includes both employee and HR administrator roles, providing tailored dashboards and functionality for each.

---

## 🚀 Features

### ✨ Frontend (Angular)
- **Authentication**: Login system for employees and HR administrators.
- **Dashboard**:
  - Employees: View personal info, track leave, submit leave requests, and view performance evaluations.
  - HR Admins: Manage employees, approve leave requests, evaluate performance, and validate timesheets.
- **Leave Management**: Request, approve, or deny leaves; show leave balance.
- **Performance Evaluations**: HR evaluates, employees can view results.
- **Timesheets**: Employees log hours; HR validates them.
- **Notifications**: Alerts for leave status, evaluations, and timesheet reminders.
- **Search & Filtering**: Find employees or filter leave by type.
- **Data Export**: Export reports as Excel or PDF.

### ⚙️ Backend (NestJS)
- **User Management**: JWT-based authentication with roles (employee, HR, admin).
- **Leave Management**: CRUD + approval flow.
- **Performance Evaluations**: CRUD with rating system.
- **Timesheets**: CRUD for hours worked with HR validation.
- **Notifications**: System for leave/evaluation reminders.
- **Reports**: Generate stats on leaves, performance, work hours.
- **Security**: XSS/CSRF protection and role-based access control.

---

## 🛠 Tech Stack

| Layer      | Technology        |
|------------|-------------------|
| Frontend   | Angular            |
| Backend    | NestJS (Node.js)   |
| Database   | MySQL              |
| ORM        | TypeORM            |
| Auth       | Passport.js + JWT  |
| Uploads    | Multer             |
| Queueing   | Bull (optional)    |

---

## 🧪 Setup Instructions

# Backend
cd backend
npm install
npm run start

# Frontend
cd frontend
npm install
ng serve

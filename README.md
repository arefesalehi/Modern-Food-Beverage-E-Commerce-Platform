# 🚀 # 🛒 FreshCart | Modern Food & Beverage E-Commerce Platform

<div align="center">

## Next.js + Tailwind CSS + MongoDB

A modern and scalable full-stack **Food & Beverage E-Commerce Platform** built with Next.js, MongoDB, and Tailwind CSS, featuring a seamless shopping experience for users and a powerful admin dashboard for management.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-38BDF8?logo=tailwindcss)
![MongoDB](https://img.shields.io/badge/MongoDB-6-47A248?logo=mongodb)
![License](https://img.shields.io/badge/License-MIT-green)

</div>

---

## 📸 Live Preview

> 📌 Replace images with real screenshots or GIF demo for best impact

### 🏠 Landing Page
![Next.js](./public/screenshots/11.png)

![Next.js](./public/screenshots/12.png)

![Next.js](./public/screenshots/13.png)

![Next.js](./public/screenshots/14.png)

![Next.js](./public/screenshots/15.png)

### 👤 User Dashboard
![Next.js](./public/screenshots/screencapture-localhost-3000-p-user-2026-06-16-12_17_58.png)

### 🛡️ Admin Dashboard
![Next.js](./public/screenshots/screencapture-localhost-3000-p-admin-2026-06-16-12_16_10.png)

---

## ✨ Key Features

### 👤 User Panel
- Secure Authentication (JWT-based)
- User Profile Management
- Edit personal information
- Password change functionality
- Responsive UI (Mobile-first)
- Dark / Light mode support

### 🛡️ Admin Panel
- Role-Based Access Control (RBAC)
- User management (Create / Edit / Delete)
- System analytics dashboard
- Search & filtering system
- Activity monitoring
- Admin settings panel

---

## 🏗 Tech Stack

| Layer | Technology |
|------|------------|
| Frontend | Next.js (App Router), React |
| Styling | Tailwind CSS |
| Backend | Next.js API Routes |
| Database | MongoDB + Mongoose |
| Auth | JWT Authentication |
| Deployment | Vercel / VPS |

---

## 📂 Project Architecture

```bash
src/
├── app/
│   ├── (auth)/
│   ├── dashboard/
│   ├── admin/
│   └── api/
│
├── components/
│   ├── ui/
│   ├── layout/
│   └── shared/
│
├── lib/
│   ├── db.ts
│   ├── auth.ts
│   └── utils.ts
│
├── models/
│   └── User.model.ts
│
├── middleware.ts
└── public/

# Developer Cloning & Setup Guide

Welcome to the **ExamGhost AI** project! This guide will walk you through the steps required to clone the repository, install dependencies, and set up your local development environment.

## 🛠 Prerequisites

Ensure you have the following installed on your machine:
- **Node.js** (v18.x or later is recommended)
- **npm** (comes with Node.js) or **Yarn** / **pnpm**
- **Git**

---

## 🚀 Getting Started

### 1. Clone the Repository

Clone the project from GitHub using HTTPS or SSH:

```bash
# Using HTTPS (recommended)
git clone https://github.com/getwebgrowth/examghost.git

# Or using SSH
git clone git@github.com:getwebgrowth/examghost.git
```

### 2. Navigate to the Directory

Move into the project folder:

```bash
cd examghost
```

### 3. Install Dependencies

Install the required npm packages:

```bash
npm install
# or
yarn install
# or
pnpm install
```

---

## 💻 Development Workflow

### Run the Development Server

Start the local Next.js server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Once started, open [http://localhost:3000](http://localhost:3000) in your browser to view the application. The page will hot-reload as you make modifications.

---

## 🏗 Build & Production

To generate an optimized production build of the project:

```bash
npm run build
```

To run the built production server locally:

```bash
npm run start
```

---

## 📁 Project Structure

- `src/app/` - Contains pages, layouts, and routing logic (Next.js App Router).
- `src/components/` - Shared UI components.
- `public/` - Static assets (images, icons, svgs, etc.).
- `tailwind.config.ts` & `postcss.config.mjs` - CSS utilities configuration.

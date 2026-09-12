# 🚀 Dev Stack Builder

A modern and responsive React application that helps developers explore popular technologies and build their own personalized development stack.

Users can browse different technologies, view important details, and create a custom stack by selecting their preferred tools and frameworks.

---

## 🌐 Live Preview

🔗 Live Site: https://assignment-5-three-lilac.vercel.app/

🔗 Repository:

https://github.com/Solymanwasif/-Assignment-5
---

## 📌 About The Project

**Dev Stack Builder** is a technology exploration platform built with React and Tailwind CSS.

The application displays technology information from a JSON data source and allows users to manage their own development stack through an interactive interface.

The goal of this project is to practice React fundamentals including components, props, state management, conditional rendering, and reusable UI design.

---

## ✨ Features

### 🧩 Explore Technologies

- Browse multiple development technologies
- View:
  - Technology name
  - Category
  - Description
  - Difficulty level
  - Rating
  - Badge

---

### 🛠️ Build Your Stack

- Add technologies to your personal stack
- Prevent duplicate selections
- Remove individual technologies
- Clear the complete stack

---

### 🔔 Interactive Notifications

Implemented using **React Toastify**:

- Success notification when adding technology
- Warning notification for duplicate items
- Remove notification
- Clear stack notification

---

### 📱 Fully Responsive Design

Optimized for:

- Desktop
- Tablet
- Mobile devices

The layout automatically adjusts between technology cards and the stack sidebar.

---

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| React.js | Building interactive UI |
| Vite | Development environment |
| Tailwind CSS | Styling and responsive design |
| JavaScript ES6+ | Application logic |
| React Toastify | Notifications |
| JSON | Technology data management |

---

## 📂 Project Structure

```
src
│
├── assets
│
├── components
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── TechnologyCard.jsx
│   ├── TechnologyList.jsx
│   ├── StackSidebar.jsx
│   └── Footer.jsx
│
├── data
│   └── technologies.json
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## ⚙️ Installation & Setup

Clone the repository:

```bash
git clone https://github.com/Solymanwasif/dev-stack-builder.git
```

Navigate to the project folder:

```bash
cd dev-stack-builder
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

---

# 📚 React Concepts Used

## 1. What is JSX, and why is it used in React?

JSX is a syntax that allows developers to write HTML-like structures inside JavaScript.

It makes creating React components easier because UI and logic can be written together.

---

## 2. What is the difference between props and state?

Props are used to pass data from a parent component to a child component.

State stores information that can change during the application's lifetime.

---

## 3. What does the useState hook do, and where did you use it?

`useState` allows React components to create and manage state.

In this project it was used for:

- Technology data
- Loading state
- Selected stack items

---

## 4. What does the useEffect hook do, and why did you need it?

`useEffect` handles side effects in React components.

It was used to load technology data when the component first rendered.

---

## 5. Why does every item in a .map() list need a unique key prop?

The `key` prop helps React identify each item efficiently and update only the necessary parts of the UI.

---

## 6. What is conditional rendering?

Conditional rendering means showing different UI based on a condition.

Example:

The stack section shows:

- Empty message when no technology is selected
- Selected technologies when items exist

---

## 7. How do you pass data from parent to child and child to parent?

A parent sends data to a child component using props.

A child can communicate with the parent by calling a function received through props.

In this project, `setStack` is passed to child components to update selected technologies.

---

## 📈 Future Improvements

- Add technology search functionality
- Add category filtering
- Add user authentication
- Store stack data permanently

---

## 👨‍💻 Author

**Solyman Wasif**

GitHub:
https://github.com/Solymanwasif

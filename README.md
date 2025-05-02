# 🛍️ E-Commerce Frontend

A responsive, modern e-commerce frontend application built with **React.js** and **Tailwind CSS**. This project simulates a typical online shopping experience with features like product listing, mini cart, full cart management, and responsive UI design.

## 📂 Project Structure

e-commerce/ ├── public/ ├── src/ │ ├── assets/ # Images like logo and product photos │ ├── components/ # Reusable UI components (Header, Footer, MiniCart, etc.) │ ├── context/ # Global cart state (CartContext) │ ├── hooks/ # Custom React hooks (if any) │ ├── pages/ # Main pages (Home, Product Listing, Cart) │ ├── services/ # API logic (e.g., fetching products) │ ├── App.jsx # Main app wrapper with routing │ └── main.jsx # React entry point


---

## 🧰 Tech Stack

- **React.js** – For building component-based UIs
- **Tailwind CSS** – Utility-first CSS framework for styling
- **React Router** – Client-side routing
- **Context API** – Global state for cart management
- **LocalStorage** – Cart persistence across sessions

---

## ✨ Features

- 📱 Responsive layout for desktop and mobile
- 🛒 Add to cart from product listing
- 🧺 MiniCart and Full Cart views
- ♻️ Update/remove items in cart
- 💾 Persistent cart state using localStorage
- 🔄 Easy to integrate with backend APIs
- 🎨 Clean and modular UI components

---

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/satyaswarup140/e-commerce.git
cd e-commerce

# Install dependencies
npm install

# Start the development server
npm run dev
🧪 Available Scripts
npm run dev – Start development server

npm run build – Build for production

npm run preview – Preview production build

🙌 Acknowledgments

. React
. Tailwind CSS
. Vite

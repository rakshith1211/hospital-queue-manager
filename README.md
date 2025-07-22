# hospital-queue-manager
Simple hospital queue management system for patient check-in, prioritization, and checkout tracking.

markdown
Copy code
# 🏥 Hospital Queue Management System

A simple hospital queue management web application to register patients, prioritize them based on emergency level, and manage check-ins and check-outs.

## 📋 Features
- Patient check-in with name, emergency level, and symptoms.
- Displays current patient queue in a table.
- Priority levels: Critical, Moderate, Normal.
- Allows checkout/removal of patients after treatment.

## 🌐 Tech Stack
- **Frontend:** HTML, CSS, JavaScript (Vanilla)
- **Backend:** Assumes API at `http://localhost:3000`
- **Modules:** Modular JS (`counter.js` is a reusable counter module)

## 📂 File Structure
├── index.html # Main HTML page
├── style.css # Styling for the app
├── main.js # Core logic for form and queue handling
├── counter.js # Reusable counter module
├── javascript.svg # (Optional) JS logo asset

markdown
Copy code

## 🚀 Getting Started

### 1. Prerequisites
- Browser (Chrome/Firefox recommended)
- Optionally: Node.js (for running backend API)

### 2. Run the App (Frontend Only)
1. Clone or download the repository.
2. Open `index.html` in a browser.
3. Make sure the backend is running at `http://localhost:3000`.

### 3. Backend Setup (Optional JSON Server)
If you need a quick backend, use JSON Server:
```bash
npm install -g json-server
json-server --watch db.json --port 3000

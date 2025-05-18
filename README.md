# 📱 Social Media

## 📖 About

**Social Media App** is a simple **prototype** of a social media application developed using **React Native (JavaScript)** and **Realm** database. Users can register and log in to view a list of predefined posts from various users. This app is intended for experimental and learning purposes and does **not** connect to an actual online server or API.

> ⚠️ **Warning:** This application is experimental and limited in functionality. It is a prototype and meant to be explored, modified, or extended as needed. Do **not** consider it a production-ready solution.

---

## ✨ Features
🔐 Register & Login
Users must create an account and log in using a valid username and password. Incorrect credentials will prevent login.

📰 View Posts
Users can view a list of predefined posts made by different accounts. These are not added dynamically or retrieved from an online server — they are preloaded in the local database.

❤️ Like Posts
Users can like individual posts.

## 🚫 Limitations

- You cannot add new posts in this version.
- You cannot comment on posts.
- This app is offline and runs entirely on local storage (Realm database).

## 🔓 Logout
Users can log out and return to the login screen.

---

<div align="center">
  <img src="https://i.postimg.cc/dQpd1xhP/Whats-App-Image-2025-05-18-at-16-50-46.jpg" alt="Demo Image" style="width: 200px; height: auto;" />
  <img src="https://i.postimg.cc/15VTTXnx/Whats-App-Image-2025-05-18-at-16-50-46-1.jpg" alt="Demo Image" style="width: 200px; height: auto;" />
  <img src="https://i.postimg.cc/ht9YDY1p/Whats-App-Image-2025-05-18-at-16-50-47.jpg" alt="Demo Image" style="width: 200px; height: auto;" />
  <img src="https://i.postimg.cc/LsyFS7mG/Whats-App-Image-2025-05-18-at-16-50-47-1.jpg" alt="Demo Image" style="width: 200px; height: auto;" />
  <img src="https://i.postimg.cc/85jQzH5c/Whats-App-Image-2025-05-18-at-16-50-48.jpg" alt="Demo Image" style="width: 200px; height: auto;" />
</div>

---

## 🚀 How to Run the App

Follow these detailed steps to run this application on your emulator or physical device:

### 1. Clone this repository

```bash
git clone https://github.com/ShaquilleNathan/Social-Media.git
cd your-project-name
```

### 2. Install dependencies
Make sure you have ```Node.js``` and ```npm``` installed, then run:

```bash
npm install
```
Also, install Realm:

```bash
npm install realm
```
(If you encounter native build issues, make sure you have properly set up your environment for React Native.)

### 3. Start the Metro Bundler
```bash
npx react-native start
```
Leave this terminal open.

### 4. Run the app on an emulator or connected device
In a new terminal, run:
For Android:
```bash
npx react-native run-android
```

For iOS (only on macOS with Xcode installed):
```bash
npx react-native run-ios
```

### ✅ Optional: Creating New Project (for fresh setup)
If you're starting from scratch, you can initialize a new project with this command:
```bash
npx react-native@(your react-native version) init (your project name) --version (your react-native version)
```
Then follow steps 2-4 above.

---

## 📌 Notes
- This app is built entirely with JavaScript, using React Native and Realm for local database storage.
- It runs in debug mode, using Metro Bundler, and is not yet packaged for release.
- Feel free to explore and modify the code as a learning tool or a foundation for a more advanced social media application.
- Ensure that your development environment is properly configured for React Native: React Native Environment Setup Guide

## 🧪 Status
This project is still serves as a prototype for showcasing basic functionality of a social media app using React Native and Realm.



# Gamehub - A Game Library 🎮

**Gamehub** is an engaging online library for discovering and supporting game developers. Users can browse indie games, see detailed information, and install them if they like.

---

## 🛠️ Technologies Used

* **React** - Frontend library for building SPA
* **Tailwind CSS** - Utility-first CSS framework
* **DaisyUI** - Tailwind component library
* **Firebase** - Authentication & hosting
* **GSAP (GreenSock Animation Platform)** - Page animations
* **React Icons** - Vector icons
* **React Toastify** - Notifications

---

## 🔗 Live Demo

[https://gamehub-e5efe.web.app/](https://gamehub-e5efe.web.app/)

---

## 📚 Features

### General

* Fully responsive (mobile, tablet, desktop)
* Dynamic page titles based on route
* Custom 404 Page
* Vibrant, urban-themed UI

### Authentication

* Email & Password authentication
* Google Sign-In
* Password validation:

  * Minimum 6 characters
  * Must contain uppercase & lowercase letters
* Protected routes: Game details page requires login
* Forgot password feature (redirects to Gmail)

### Pages

#### Homepage

* Banner Slider (4 slides)
* Popular Games Section (4+ games sorted by rating)
* Newsletter subscription section

#### Game Details Page

* Displays all information from JSON
* Protected route: redirect to login if not authenticated

#### Login Page

* Email & Password inputs
* Google Login
* Redirect to Register page

#### Register Page

* Name, Email, Photo URL, Password inputs
* Google Login
* Redirect to Login page

#### My Profile & Update Information

* Displays logged-in user profile
* Update button redirects to update page
* Update form allows changing **Name** and **Photo URL**

#### Additional Routes

* All games route/page

---

## 📜 JSON Data Structure

```json
{
  "id": "1",
  "title": "Player Unknowns Battle Ground: PUBG",
  "coverPhoto": "https://example.com/images/pubg.png",
  "category": "FPS",
  "downloadLink": "https://www.pubgmobile.com/en-US/home.shtml",
  "description": "PUBG Mobile is a fast-paced battle royale game where players fight for survival, strategy, and victory on dynamic maps.",
  "ratings": "4.5",
  "developer": "Krafton"
}
```

---

## 🚀 Installation

1. Clone the repository:

```bash
git clone https://github.com/SadnurIslam/gamehub.git
```

2. Navigate into the project folder:

```bash
cd gamehub
```

3. Install dependencies:

```bash
npm install
```

4. Add Firebase configuration keys in a `.env` file:

```env
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```

5. Start the development server:

```bash
npm start
```

---

## 📚 Folder Structure

```
/src
  /assets       # Images, icons, media
  /components   # Reusable UI components
  /contexts     # React context for auth
  /hooks        # Custom hooks (e.g., fetch games data)
  /pages        # All pages (Home, Login, Register, GameDetails, MyProfile)
  /routes       # App routes and protected routes
  /firebase     # Firebase API
```

---

## ✅ Deployment

* Firebase Hosting

---

## 💡 Future Improvements

* User ratings & reviews for games
* Search & filter functionality
* Blog section for gaming news
* Dark mode toggle

---

## 👨‍💼 Author

**Sadnur Islam**

* GitHub: [https://github.com/SadnurIslam](https://github.com/SadnurIslam)
* Email: [sadnurislam2000@gmail.com](mailto:sadnurislam@example.com)

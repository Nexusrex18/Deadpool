# Deadpool-Themed React Web Application

Welcome to the **Deadpool-Themed Web Application**! This project is built using **React**, **Node.js**, **Express**, and **MongoDB**. It features a unique Deadpool-inspired design with interactive elements and fun animations.

## Features

- **Dynamic Navbar**: A Deadpool-themed responsive navbar with a toggleable sidebar, dark mode, and hover effects.
- **Chatbot**: A conversational chatbot with a blurred Deadpool-themed background.
- **Coming Soon Page**: A creatively designed "Coming Soon" page in Deadpool style.
- **About Us Page**: A dedicated page showcasing the creator's identity (Nexusrex18) in Deadpool's theme.
- **Framer Motion Animations**: Smooth animations for hover effects, scaling, and toggles.
- **Authentication**: Login and logout functionality with token-based authentication.
- **Dark Mode Support**: Toggle between dark and light modes seamlessly.
- **My Movies and Comics Page**: A dedicated section showcasing Deadpool's iconic movies and comics.
- **Meme Generator**: Create hilarious Deadpool-themed memes with a custom meme generator.
- **Interesting Deadpool Game**: A fun interactive game inspired by Deadpool's quirky personality.

## Project Structure

Here is the detailed directory structure for the project:

```
C:.
\---Deadpool
    |   -d
    |   -H
    |   -X
    |   README.md
    |
    +---client
    |   |   .gitignore
    |   |   eslint.config.js
    |   |   globals.css
    |   |   package-lock.json
    |   |   package.json
    |   |   postcss.config.js
    |   |   README.md
    |   |   tailwind.config.js
    |   |   tsconfig.json
    |   |
    |   +---public
    |   |       favicon.ico
    |   |       index.html
    |   |       logo192.png
    |   |       logo512.png
    |   |       manifest.json
    |   |       robots.txt
    |   |
    |   \---src
    |       |   App.css
    |       |   App.jsx
    |       |   index.js
    |       |
    |       +---assets
    |       |       dead.png
    |       |       deadcht.jpg
    |       |       deaddoggy.jpeg
    |       |       deadgun.jpeg
    |       |       deadpool1.png
    |       |       deadpool2.png
    |       |       deadpool3.png
    |       |       deadpool4.png
    |       |       deadpool5.png
    |       |       deadpool6.png
    |       |       deadpool7.png
    |       |       deadpoolg.gif
    |       |       deadprof.png
    |       |       deadsub1.jpeg
    |       |       deadsub2.png
    |       |       deady.png
    |       |       deady2.png
    |       |       image.json
    |       |       pagenot.jpeg
    |       |       react.svg
    |       |
    |       +---components
    |       |       Chatbot.jsx
    |       |       DraggableImages.jsx
    |       |       Footer.jsx
    |       |       index.js
    |       |       IntroCard.jsx
    |       |       Loader.jsx
    |       |       Navbar.jsx
    |       |       Sidebar.jsx
    |       |
    |       +---context
    |       |       index.js
    |       |       ThemeContext.js
    |       |
    |       +---lib
    |       |       utils.js
    |       |
    |       +---pages
    |       |       AboutUsPage.jsx
    |       |       AnotherGame.jsx
    |       |       ComicPage.jsx
    |       |       GamePage.jsx
    |       |       index.js
    |       |       Login.jsx
    |       |       MainPage.jsx
    |       |       MemeGenerator.jsx
    |       |       MoviesPage.jsx
    |       |       PageNotFound.jsx
    |       |       SubscriptionPage.jsx
    |       |
    |       +---services
    |       |       api.js
    |       |
    |       \---styles
    |               tailwind.css
    |
    \---server
        |   .gitignore
        |   app.js
        |   package-lock.json
        |   package.json
        |   server.js
        |
        +---controllers
        |       chatbotController.js
        |       movieController.js
        |
        +---models
        |       Movie.js
        |       User.js
        |
        \---routes
                authRoutes.js
                chatbotRoutes.js
                movieRoutes.js
```

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repo/deadpool-themed-app.git
   cd deadpool-themed-app
   ```

2. Install dependencies for both the client and server:

   ```bash
   # Install client dependencies
   cd client
   npm install

   # Install server dependencies
   cd ../server
   npm install
   ```

3. Run the application:

   ```bash
   # Start the server
   cd server
   npm start

   # Start the client
   cd ../client
   npm run dev
   ```

4. Open your browser and navigate to [http://localhost:5173](http://localhost:5173) (for the React app).

## Technologies Used

- **Frontend**: React, TailwindCSS, Framer Motion
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: Token-based authentication
- **API Integration**: Gemini API for extended functionality

## Creator

This project was created by **Nexusrex18**, inspired by the awesomeness of Deadpool. 😎

## Screenshots

### Navbar
Deadpool-styled navbar with a toggleable sidebar and interactive animations.

### Chatbot
A responsive chatbot with a blurred Deadpool-themed background.

### Coming Soon Page
A placeholder page with Deadpool Merchandise and more.

### About Us Page
A page dedicated to the creator, with Deadpool-inspired design.

## License

This project is licensed under the MIT License.

---

**Enjoy the fun and interactivity of Deadpool! If you have any questions, feel free to reach out.**


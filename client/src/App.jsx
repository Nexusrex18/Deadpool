import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Footer ,Chatbot } from "./components";
import {
  MainPage,
  GamePage,
  MemeGenerator,
  AnotherGame,
  ComicPage,
  PageNotFound,
  MoviesPage,
  Login,
  SubscriptionPage,
  AboutUsPage,
} from "./pages";

// const SubscriptionPage = () => <div>Subscription Page</div>;
// const AboutUsPage = () => <div>About Us Page</div>;

// Create AuthContext
export const AuthContext = createContext();

const App = () => {
  // State to track login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    // Provide AuthContext to the entire app
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/comic" element={<ComicPage />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/subscription" element={<SubscriptionPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/gamepage" element={<GamePage />} />
          <Route path="/memegenerator" element={<MemeGenerator />} />
          <Route path="/anothergame" element={<AnotherGame />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Chatbot />
        <Footer />
      </Router>
    </AuthContext.Provider>
  );
};

export default App;

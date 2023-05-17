import React from 'react';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Blog from "./pages/Blog"
import User from "./pages/User"
import NotFound from "./pages/NotFound"

function Main() {
    return (
        <Router>
            <Routes>
                <Route exact path="/"  element={<Home/>} />
                <Route path="/blog"  element={<Blog/>} />
                <Route path="/users"  element={<User/>} />
                <Route element={<NotFound/>} />
            </Routes>
        </Router>
    );
}

export default Main;

if (document.getElementById('app')) {
    const rootElement = document.getElementById("app");
    const root = createRoot(rootElement);

    root.render(
        <StrictMode>
            <Main />
        </StrictMode>
    );
}

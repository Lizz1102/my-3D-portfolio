import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Home, About, Contact } from "./pages";
import Navbar from "./components/Navbar";

// TODO: Fix - https://lizas.space/contact - doesn't work when deployed, can only access via sidebar links
// Backlog: Scroll to top, dark mode
// Reafctor Code. User experience. How hostinger is managing trafic? Is it shared VM or what's the plan exactly? Check
const App = () => {
    return (
        <main className="bg-slate-300/20 h-full">
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </Router>
        </main>
    );
};

export default App;

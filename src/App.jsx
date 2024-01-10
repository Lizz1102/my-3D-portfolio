import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Home, About, Contact, License } from "./pages";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
    return (
        <main className="bg-slate-300/20 h-full">
            <Router>
                <Navbar />
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/license" element={<License />} />
                </Routes>
            </Router>
        </main>
    );
};

export default App;

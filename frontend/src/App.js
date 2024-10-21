import { BrowserRouter as Router, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import useUserRoutes from "./components/routes/userRoutes";
import useAdminRoutes from "./components/routes/adminRoutes";

import "./App.css";

function App() {
  const userRoutes = useUserRoutes();
  const adminRoutes = useAdminRoutes();

  return (
    <>
      <Router>
        <Toaster position="top-center" />
        <Header />
        <div className="container">
          <Routes>
            {userRoutes}
            {adminRoutes}
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import PremiumHome from "./pages/PremiumHome";
import HeritagePassport from "./components/premium/HeritagePassport";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AuthLanding from "./pages/AuthLanding";

const DEFAULT_SITE_SLUG = "bagh-bhairav";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-[#EFE8DE] min-h-screen">
        <div className="max-w-md mx-auto bg-[#F8F4EE] min-h-screen shadow-xl">

          <Routes>
            {/* Redirect root URL to default heritage site */}
            <Route
              path="/"
              element={
                <Navigate
                  to={`/site/${DEFAULT_SITE_SLUG}`}
                  replace
                />
              }
            />

            {/* Public Heritage Page */}
            <Route
              path="/site/:slug"
              element={<Home />}
            />

            {/* Premium Heritage Page */}
            <Route
              path="/premium/:slug"
              element={<PremiumHome />}
            />

            {/* Passport */}
            <Route
              path="/passport"
              element={<HeritagePassport />}
            />

            {/* Authentication */}
            <Route
              path="/login"
              element={<Login />}
            />

            <Route
              path="/register"
              element={<Register />}
            />

            <Route
              path="/auth"
              element={<AuthLanding />}
            />
          </Routes>

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import PremiumHome from "./pages/PremiumHome";
import HeritagePassport from "./components/premium/HeritagePassport";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register";
import AuthLanding from "./pages/AuthLanding";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-[#EFE8DE] min-h-screen">
        <div className="max-w-md mx-auto bg-[#F8F4EE] min-h-screen shadow-xl">

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/premium" element={<PremiumHome />} />
            <Route path="/passport" element={<HeritagePassport />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/auth"element={<AuthLanding />}/>
          </Routes>

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
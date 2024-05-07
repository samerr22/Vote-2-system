import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./pages/Signin";
import SignUp from "./pages/SignUp";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";
import OnlyAdminPrivateRoute from "./components/OnlyAdminPrivateRoute";
import Vote from "./pages/Vote";
import Manageuser from "./pages/Manageuser";
import Wins from "./pages/Wins";




export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/" element={<SignUp />} />

        <Route element={<PrivateRoute />}>
        <Route path="/vote" element={<Vote />} />
        </Route>

        <Route element={<OnlyAdminPrivateRoute />}>
        <Route path="/mange" element={<Manageuser />} />
        <Route path="/wins" element={<Wins />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

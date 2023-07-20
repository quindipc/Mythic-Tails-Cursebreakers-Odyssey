// Dependancies
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import HomePage from "./pages/HomePage";

export default function App() {


  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />}> </Route>
            <Route path="/play-game" element={}> </Route>
            <Route path="/about" element={}> </Route>
            <Route path="/login" element={}> </Route>
            <Route path="/profile/:id" element={}> </Route>
            <Route path="/pet-list/:id" element={}> </Route>
            <Route path="/pet-details/:id" element={}> </Route>
            <Route path="/pet-management/:id" element={}> </Route>
            <Route path="/contact" element={<}> </Route>
        </Routes>
    </BrowserRouter>
  )
}

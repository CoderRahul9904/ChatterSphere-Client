
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChatRoom from "./pages/ChatRoom";
import LandingPage from "./pages/LandingPage";


function App() {
  
  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Room" element={<ChatRoom />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

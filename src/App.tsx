
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChatRoomPage from "./pages/ChatRoomPage";
import LandingPage from "./pages/LandingPage";
import ProfilePage from "./pages/ProfilePage";
import FeaturesPage from "./pages/FeaturesPage";
import ContactUsPage from "./pages/ContactUsPAge";


function App() {
  
  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/room" element={<ChatRoomPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/contactus" element={<ContactUsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

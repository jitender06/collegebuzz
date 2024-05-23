import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import Login from "./pages/Login"
import Register from './pages/Register'
import PostFeeds from "./pages/PostFeeds"
import CreatePost from "./pages/CreatePost"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import { useState } from "react"
import Chat from "./pages/Chat"
import Profile from "./pages/Profile"
import Gallery from "./pages/Gallery"
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import SocialMedia from "./pages/SocialMedia"
import Events from './pages/Events'
function App() {

  const [isLogin, setIsLogin] = useState(false)
  const [active, setActive] = useState("Home")
  const [currentLogin, setCurrentLogin] = useState();

  const allUsers = localStorage.getItem('user')
  if (allUsers) {
    var userData = JSON.parse(allUsers)
  } else {
    console.log('User data not found in local storage')
  }

  const allPosts = localStorage.getItem('post')
  if (allPosts) {
    var Posts = JSON.parse(allPosts)
  } else {
    console.log('post data not found in local storage')
  }

  return (
    <BrowserRouter>
      <NavBar active={active} setActive={setActive} isLogin={isLogin} setIsLogin={setIsLogin}/>
        <Routes>
          <Route path="/" element={<Home setActive={setActive} isLogin={isLogin}/>}/>
          <Route path="/login" element={<Login allUsersData={userData} isLogin={isLogin} setIsLogin={setIsLogin} setActive={setActive} setCurrentLogin={setCurrentLogin}/>}/>
          <Route path="/register" element={<Register setActive={setActive}/>}/>
          <Route path="/feeds" element={<PostFeeds Posts={Posts} setActive={setActive}/>}/>
          <Route path="/create-post" element={<CreatePost/>}/>
          <Route path="/chat" element={<SocialMedia currentLogin={currentLogin}/>}/>
          <Route path="/profile" element={<Profile currentLogin={currentLogin}/>}/>
          <Route path="/gallery" element={<Gallery/>}/>
          <Route path="/message" element={<Chat currentLogin={currentLogin}/>}/>
          <Route path="/events" element={<Events/>}/>
        </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App

import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"
import NavBar from "./components/NavBar"
import Login from "./pages/Login"
import Register from './pages/Register'
import PostFeeds from "./pages/PostFeeds"
import CreatePost from "./pages/CreatePost"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import { useEffect, useState } from "react"
import Chat from "./pages/Chat"
import Profile from "./pages/Profile"
import Gallery from "./pages/Gallery"
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import SocialMedia from "./pages/SocialMedia"
import Events from './pages/Events'
import Dashboard from "./Admin/pages/Dashboard"
import './Admin/charts/ChartjsConfig';
import ThemeProvider from "./Admin/utils/ThemeContext"
import './Admin/css/style.css';


function App() {

  const [isLogin, setIsLogin] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)

  const [post, setpost] = useState([])

  
  const [active, setActive] = useState("Home")
  const [currentLogin, setCurrentLogin] = useState();

  const allUsers = localStorage.getItem('user')
  if (allUsers) {
    var userData = JSON.parse(allUsers)
  } else {
    console.log('User data not found in local storage')
  }

  // const allPosts = localStorage.getItem('post')
  // if (allPosts) {
  //   var Posts = JSON.parse(allPosts)
  // } else {
  //   console.log('post data not found in local storage')
  // }

  useEffect(() => {
    const allPosts = localStorage.getItem('post')
    if (allPosts) {
      let Posts = JSON.parse(allPosts)
      setpost(Posts)
    } else {
      console.log('post data not found in local storage')
    }
  },[post])

  // const location = useLocation();

  // useEffect(() => {
  //   document.querySelector('html').style.scrollBehavior = 'auto'
  //   window.scroll({ top: 0 })
  //   document.querySelector('html').style.scrollBehavior = ''
  // }, [location.pathname]); // triggered on route change
  

  return (
    <BrowserRouter>
    <ThemeProvider>
    {!isAdmin && <NavBar active={active} setActive={setActive} isLogin={isLogin} setIsLogin={setIsLogin}/>}
        <Routes>
          <Route path="/" element={<Home setActive={setActive} isLogin={isLogin}/>}/>
          <Route path="/login" element={<Login setIsAdmin={setIsAdmin} allUsersData={userData} isLogin={isLogin} setIsLogin={setIsLogin} setActive={setActive} setCurrentLogin={setCurrentLogin}/>}/>
          <Route path="/register" element={<Register setActive={setActive}/>}/>
          <Route path="/feeds" element={<PostFeeds Posts={post} setActive={setActive}/>}/>
          <Route path="/create-post" element={<CreatePost/>}/>
          <Route path="/chat" element={<SocialMedia Posts={post} setActive={setActive} setIsLogin={setIsLogin} currentLogin={currentLogin}/>}/>
          <Route path="/profile" element={<Profile currentLogin={currentLogin}/>}/>
          <Route path="/gallery" element={<Gallery/>}/>
          <Route path="/message" element={<Chat currentLogin={currentLogin}/>}/>
          <Route path="/events" element={<Events setIsLogin={setIsLogin} setActive={setActive}/>}/>
          <Route path="/admin" element={<Dashboard />} />
        </Routes>
        {!isAdmin && <Footer/>}
    </ThemeProvider>
    </BrowserRouter>
  )
}

export default App

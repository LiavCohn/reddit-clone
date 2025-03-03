import './styles/App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Subreddit from './pages/Subreddit'
import Submit from './pages/Submit'
import Post from './pages/Post'

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home />} />
        <Route path="r/:subredditName" element={<Subreddit />} />
        <Route path="r/:subredditName/submit" element={<Submit />} />
        <Route path="post/:postId" element={<Post />} />
        <Route path="u/:username" element={<Profile />} />
        <Route path="*" element={<Navigate to="/" replace/>} />
        
      </Route>
    </Routes>
  </BrowserRouter>
}

export default App

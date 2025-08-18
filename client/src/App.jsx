import React from 'react'
import { Route, Routes } from 'react-router-dom' // Routing components from react-router-dom
import Login from './pages/Login'
import Feed from './pages/Feed'
import Messages from './pages/Messages'
import Connections from './pages/Connections'
import Discover from './pages/Discover'
import Profile from './pages/Profile'
import CreatePost from './pages/CreatePost'
import ChatBox from './pages/ChatBox'
import { useUser } from '@clerk/clerk-react'     // Clerk hook for user authentication
import Layout from './pages/Layout'

// Main App component containing all route definitions
const App = () =>
{
  const { user } = useUser() // Get current authenticated user
  return (
    <>
      <Routes>
        {/* Root route: show Login if no user, otherwise show Layout */}
        <Route path='/' element={!user ? <Login /> : <Layout />}>
          {/* Nested routes rendered inside Layout via Outlet */}
          <Route index element={<Feed />} />                         {/* Default feed page */}
          <Route path='messages' element={<Messages />} />           {/* Messages page */}
          <Route path='messages/:userId' element={<ChatBox />} />    {/* Chat with specific user */}
          <Route path='connections' element={<Connections />} />    {/* Connections page */}
          <Route path='discover' element={<Discover />} />          {/* Discover new users/content */}
          <Route path='profile' element={<Profile />} />            {/* Current user's profile */}
          <Route path='profile/:profileId' element={<Profile />} /> {/* Other user's profile */}
          <Route path='create-post' element={<CreatePost />} />     {/* Page to create a new post */}
        </Route>
      </Routes>
    </>
  )
}

export default App

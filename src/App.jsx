import React, { useEffect } from 'react'
import Home from './Pages/Home/Home'
import { Routes,Route, useNavigate } from 'react-router-dom'
import Login from './Pages/Login/Login'
import Player from './Pages/Player/Player'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/ReactToastify.css'
import Search from './Pages/Search/Search';
import Movies from './Pages/Movies/Movies';
import TVShows from './Pages/TvShows/TVShows'


const App = () => {

const navigate = useNavigate();

useEffect(()=>{
  onAuthStateChanged(auth,async (user)=>{
     if(user){
      console.log("logged In");
      navigate('/');
     }else{
      console.log("logged Out");
      navigate('/login');
     }
  })
},[])

  return (
    <div>
      <ToastContainer  theme='dark'/> 
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
       <Route path='/player/:id' element={<Player/>}/>
       
<Route path="/tvshows" element={<TVShows />} />
       <Route path="/search/:query" element={<Search />} />
       
<Route path="/movies" element={<Movies />} />
     </Routes>
        

    
    </div>
  )
}

export default App;

















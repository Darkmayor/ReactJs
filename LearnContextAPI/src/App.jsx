import Login from './Component/Login'
import UserContextProvider from './Context/UserContextProvider'
import './App.css'
import Profile from './Component/Profile'

function App() {

  return (
    
    <UserContextProvider>
    <h1>Hello from Sanket!</h1>
     <Login />
     <Profile/>
    </UserContextProvider>
    
    
  )
}

export default App

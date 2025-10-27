import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { useState } from 'react'
import './App.css'
import {auth} from './firebase.init';


const googleProvider = new GoogleAuthProvider();

function App() {

  const [user,setUser] = useState(null);

  const handleGoogleSignIn = ()=>{
    signInWithPopup(auth,googleProvider)
    .then(result=>{
      console.log(result.user)
      setUser(result.user);
    })
    .catch(error=>{
      console.log(error)
    })
  }


  const handleSignOut =()=>{

    signOut(auth)
      .then(()=>{
         setUser(null)  ; 
    })
      .catch((error)=>{

    });
  }
  
  return (
    <>
      <div>
        <h1>simple-react-auth</h1>

        {
          user?<button onClick={handleSignOut}>SignOut</button> : <button onClick={handleGoogleSignIn}>Sign In With Google</button> 
          
        }
        
        {user && <div>
          <h2>{user.displayName}</h2>
          <p>{user.email}</p>
          <img src={user.photoURL} alt="" />
          </div>}
      </div>
    </>
  )
}

export default App

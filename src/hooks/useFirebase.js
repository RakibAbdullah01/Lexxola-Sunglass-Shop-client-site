import axios from "axios";
import { createUserWithEmailAndPassword, getAuth, getIdToken, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";


initializeFirebase()
const useFirebase=()=>{
    const [user,setUser] = useState({})
    const [isLoading,setIsLoading] = useState(true);
    const [admin,setAdmin]=useState(false);
    const [token,setToken]=useState('')

  

    //Universal Auth
    const auth = getAuth();
    const GoogleProvider = new GoogleAuthProvider();


    // Register Function
    const registerUser=(email,password,name,histry)=>{
      setIsLoading(true);
        createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential) => {
        toast.success("Registration SUccessfull!")

         
          const newUser = {email, displayName: name};
          setUser(newUser);

          // send user data to Database
          saveUser(email,name);

          // send data to firebase
          updateProfile(auth.currentUser, {
            displayName: name
          })
          .then(() => {
          })
          .catch((error) => {
          });
          
          // redirect
          histry.replace('/')

          })
          .catch((error) => {
            toast.error(error.message)
          })
          .finally(()=>setIsLoading(false));
    }

    // GoogleSignin
    const signInWithGoogle=(location,histry)=>{
      setIsLoading(true);
      signInWithPopup(auth, GoogleProvider)
      .then((result) => {
        const user = result.user;
        toast.success("Login SUccessfull!")
        updateUser(user.email,user.displayName)
        // saveUser(user.email,user.displayName);
        const destination = location?.state.form || '/';
        histry.replace(destination);
         
        // update
      }).catch((error) => {
          toast.error(error.message)
      })
      .finally(()=>setIsLoading(false));
    }

    // Login Function
    const loginUser=(email,password,location,histry)=>{
      setIsLoading(true);

        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          toast.success("Login SUccessfull!")
          const destination = location?.state.form || '/';
          histry.replace(destination);
        })
        .catch((error) => {  
          toast.error(error.message)
        })
        .finally(()=>setIsLoading(false));
        
    }

    // Observe User State
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
              getIdToken(user)
              .then(idToken=>{
                setToken(idToken);
              })
            } else {
                setUser({})
            }
          setIsLoading(false)

          });
          return ()=> unsubscribe;
    },[])

    
    // Logout Function
    const logOut=()=>{
      setIsLoading(true)
        signOut(auth).then(() => {
           
          }).catch((error) => {
            toast.error(error.message)
          })
          .finally(()=>setIsLoading(false));
          
    }

    // Send data to Database
    const saveUser = (email,displayName)=>{
      const user={email,displayName,role:"user"};
      axios.post('https://enigmatic-shore-31912.herokuapp.com/users',user)
      .then()
    }
    
    // update user data to Datebase
    const updateUser = (email,displayName)=>{
      const user={email,displayName,role:"user"};
      axios.put('https://enigmatic-shore-31912.herokuapp.com/users',user)
      .then()
    }

    // Admin check
    useEffect(()=>{
      axios.get(`https://enigmatic-shore-31912.herokuapp.com/users/${user.email}`)
      .then(res=>{
        setAdmin(res.data.admin)
      })

    },[user.email])
    

    return{
        user,
        registerUser,
        logOut,
        loginUser,
        isLoading,
        signInWithGoogle,
        admin,
        token
    }
}

export default useFirebase;
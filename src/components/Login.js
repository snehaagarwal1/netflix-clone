import React, { useEffect, useState } from 'react'
import { Link, useNavigate,useLocation } from 'react-router-dom'
import {getAuth,signInWithEmailAndPassword,createUserWithEmailAndPassword} from 'firebase/auth';


const Login = () => {
     
    
    const navigate=useNavigate();
    const location=useLocation();
    const page=location.pathname ==='/login' ? true :false;
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[userNotExist,setUserNotExist]=useState(false);
    const[isEmailUsed,setIsEmailUsed]=useState(false);
    const[emailValid,setEmailValid]=useState(true);
    const[passwordValid,setPasswordValid]=useState(true);
    const auth=getAuth();

    const validation=(fieldname,value)=>{
        switch(fieldname)
        {
        case 'email':
            return value.match( /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/);

        case 'password':
            return value.length>=6;
        default:
            break;
        }
    };
    
    const ctaClickHandler=(e)=>{
        e.preventDefault();

        if(!validation('email',email) || !validation('password',password)){
            setEmailValid(validation('email',email));
            setPasswordValid(validation('password',password));
            return;
        }

        if(page)
        {
        signInWithEmailAndPassword(auth,email,password)
        .then(auth=>{
            if(auth){
                navigate('/Dashboard');
            }
        })
        .catch(error=> setUserNotExist(true));
        }
        else{
            createUserWithEmailAndPassword(auth,email,password)
            .then(
                auth=>{
                    if(auth)
                    {
                        navigate('/Dashboard');
                    }
                }
            ).catch(error =>setIsEmailUsed(true));
        }
    }
    const emailOnChangeHandler=(e)=>{
          setEmail(e.target.value)
    }

    useEffect(()=>{
         setUserNotExist(false);
         setIsEmailUsed(false);
    },[location])
    
  return (
    <div className='login'>
        <div className='holder'>
            <h1 className='text-white'>{page ? 'Sign In' : 'Register'}</h1>
            <br/>
            <form>
                <input className="form-control form_field" type="email" placeholder='Email'name='email'  value={email} onChange={emailOnChangeHandler}/>
                {!emailValid && <p className='text-danger'>Email is Invalid/blank</p>}
                <input className="form-control form_field" type="password" placeholder='Password' name='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                {!passwordValid && <p className='text-danger'>Email is Invalid/blank</p>}
                <button type="submit" className='btn btn-danger btn-block login-btn' onClick={ctaClickHandler}>{page ?'Sign In':'Register'}</button>
                <br/>
                {page &&
                <div className='form-check'>
                    <input className='form-check-input' type="checkbox" value="" id="flexCheckDefault"/>
                    <label  className='form-check-label text-white' htmlFor="flexCheckDefault">
                        Remember Me
                    </label>
                </div>
                }
            </form>
            <br/>
            <br/>
            {userNotExist && <p className='text-danger'>User does not exist | Go for Signup</p>}
            {isEmailUsed && <p className='text-danger'>Email already in use| Go for SignIn</p>}
            <div className='login-form-other'>
                <div className='login-signup-now'>{page ? 'New to Netflix?' : 'Existing User'}
                <Link className='' target="_self" to={page ? '/register' : '/login'}>{page ? ' Sign up now' : ' Sign In'}</Link>
                </div>
            </div>
        </div>
          <div className='shadow'></div>
          <img className='concord-img vlv-creative' src="https://ceotudent.com/wp-content/uploads/2020/05/netflix-poster.jpg" alt=""></img>
    </div>
  )
}

export default Login;
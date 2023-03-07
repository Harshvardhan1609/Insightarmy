import React  from 'react'
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import daily from '../assets/video.mp4'
import logo from '../assets/insightwhite.png'
import { render } from 'react-dom';
import {client} from '../client';
import jwt_decode from 'jwt-decode'


const Login = () => {

  const navigate = useNavigate();
  const responseGoogle = (credentialResponse) => {

    console.log(credentialResponse.credential);
    var decoded = jwt_decode(credentialResponse.credential);
    console.log(decoded);
    localStorage.setItem('user', JSON.stringify(decoded));
    // const { name , googleId , imageUrl} = credentialResponse
    const id = decoded.sub
    const name  = decoded.name
    const imgUrl = decoded.picture

    const doc = {
      _id: id,
      _type: 'user',
      userName: name,
      image: imgUrl,
    }
    
    client.createIfNotExists(doc).then(() => {
      navigate('/', { replace: true})
    })

  };

  return (
    <div className='flex justify-start items-center flex-col h-screen'>
        <div className='relative w-full h-full '>
          <video 
          src={daily}
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
          className=' w-full h-full object-cover'
          />
          {/* <div className='absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay'> */}
          <div className='absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0'>
            <div className='p-5'>
              <img src={logo} width="130px" alt='logo' />
            </div>
            <div className='shadow-2xl'>
              {/* <GoogleLogin
              render={(renderProps) => {
                <button
                 type="button"
                 className='bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none'
                 onClick={renderProps.onClick} 
                 disabled={renderProps.disabled} 
                 >
                  <FcGoogle className='mr-4'/>
                </button>
              }}
              onSuccess = {responseGoogle}
              onFailure = {responseGoogle}
              // cookiePolicy="single_host_orign"
              /> */}
              <GoogleLogin
   onSuccess={responseGoogle}
  onError={responseGoogle}
  cookiePolicy="single_host_orign"
  />;
            </div>
          </div>
        </div>
    </div>
  )
}

export default Login
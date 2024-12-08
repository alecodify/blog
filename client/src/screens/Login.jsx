import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import { Link, useNavigate } from 'react-router-dom';
import { OAuth } from '../components';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signInFailure, signInStart, signInSucces } from '../redux/user/userSlice';

const Login = () => {
  const [formData, setFormData] = useState({});
  const {loading, error: errorMessage} = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value.trim()})
  }

  const handleSubmit = async(e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      return dispatch(signInFailure('Please fill all the fields'));
    }

    try {
      dispatch(signInStart());
      
      const response = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log(data)

      if (data.sucess === false) {
        dispatch(signInFailure(data.message));
      }

      if (data.success === 'Success') {
        dispatch(signInSucces(data));
        navigate('/')
      }
      
    } catch (error) {
      dispatch(signInFailure(error.message))
    }
  }

  return (
    <div className='mih-h-sreen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        <div className='flex-1'>
          <Link to={'/'} className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Ali's</span> Blog
          </Link>
          <p className='text-sm mt-5'>You can sign in with your email and password or with Google.</p>  
        </div>

         <div className='flex-1'>
            <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
              <div>
                <Label value='Your email' />
                <TextInput type='email' placeholder='name@company.com' id='email' onChange={handleChange} />
              </div>

              <div>
                <Label value='Your password' />
                <TextInput type='password' placeholder='*********' id='password' onChange={handleChange} />
              </div>

              <Button disabled={loading} type='submit' gradientDuoTone='purpleToPink'>
                {loading ? (
                    <>
                      <Spinner size='sm'/>
                      <span className='pl-3'>Loading...</span>
                    </>
                ): ('Sign In')}
              </Button>
              <OAuth />
            </form>  

            <div className='flex gap-2 text-sm mt-5 justify-center items-center'>
                <span>Donot Have an account?</span>
                <Link to={'/sign-up'} className='text-blue-500'>Sign Up</Link>
            </div>

            {errorMessage && (
              <Alert className='mt-5' color='failure'>{errorMessage}</Alert>
            )}
          </div>  
      </div>
    </div>
  )
}

export default Login
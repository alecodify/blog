import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsTwitterX, BsGithub, BsWhatsapp } from 'react-icons/bs'; 

const FooterC = () => {
  return (
    <Footer container className='border border-t-8 border-teal-500'>
        <div className='w-full max-w-7xl mx-auto'>
          <div className='grid w-full justify-between sm:flex md:grid-cols-1 '>
            <div className='mt-5'>
              <Link  to={'/'}  className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white" >
                <span className="px-2 py-1 bg-gradient-to-r from-blue-500 via-teal-400 to-green-500 hover:from-purple-600 hover:via-pink-500 hover:to-red-500 transition-all duration-300 ease-in-out rounded-lg text-white shadow-lg" >
                  Ali's
                </span> Blog
              </Link>
            </div>

            <div className='grid grid-cols-2 gap-2 mt-4 sm:grid-cols-3 sm:gap-6'>
              <div>
                <Footer.Title title='About' />
                <Footer.LinkGroup col>
                    <Footer.Link href='https://thealiraza.vercel.app/' target='_blank' rel='noopener noreferrer'>Ali Raza</Footer.Link>
                    <Footer.Link href='/about' target='_blank' rel='noopener noreferrer'>Ali's Blog</Footer.Link>
                </Footer.LinkGroup>
              </div>

              <div>
                <Footer.Title title='Follow us' />
                <Footer.LinkGroup col>
                    <Footer.Link href='https://www.github.com/alecodify' target='_blank' rel='noopener noreferrer'>Github</Footer.Link>
                    <Footer.Link href='https://www.instagram.com/al0raza/' target='_blank' rel='noopener noreferrer'>Instagram</Footer.Link>
                </Footer.LinkGroup>
              </div>

              <div>
                <Footer.Title  title='Legal'/>
                <Footer.LinkGroup col>
                  <Footer.Link href='#'>Privacy Policy</Footer.Link>
                  <Footer.Link href='#'>Terms &amp; Conditions</Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
          
          <Footer.Divider />

          <div className='w-full sm:flex sm:items-center sm:justify-between'>
            <Footer.Copyright  href='#' by="Ali's Blog" year={new Date().getFullYear()} />
            <div className='flex gap-6 sm:mt-0 mt-4 sm:justify-center'>
              <Footer.Icon href='https://www.facebook.com/mypost30' icon={BsFacebook}/>
              <Footer.Icon href='https://www.instagram.com/al0raza/' icon={BsInstagram}/>
              <Footer.Icon href='https://wa.me/923206914610' icon={BsWhatsapp}/>
              <Footer.Icon href='https://www.github.com/alecodify' icon={BsGithub}/>
              <Footer.Icon href='https://www.twitter.com/alecodify' icon={BsTwitterX}/>
            </div>
          </div>
        </div>
    </Footer>
  )
}

export default FooterC
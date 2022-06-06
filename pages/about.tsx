import Link from 'next/link'
import Layout from '../components/Layout'

const AboutPage = () => (
  <Layout title="Gabriella's Gallery">
    <div className='bg-gray-600 absolute h-16 w-screen top-0 left-0 -z-50'>
    </div>
    <div className='flex-col gap-3 pt-5 bg-gray-600'>
        <div className="h-56 w-screen flex justify-center">
          <img src='/img/Background.png' className='w-4/5 h-4/5' ></img>
        </div>
        <div className="h-56  flex justify-center ">
        <img src='/img/Background.png' className='w-4/5 h-4/5' ></img>
        </div>
        <div className="h-56   w-screen flex justify-center">
        <img src='/img/Background.png' className='w-4/5 h-4/5' ></img>
        </div>
        <div className="h-56   w-screen flex justify-center">
        <img src='/img/Background.png' className='w-4/5 h-4/5' ></img>
        </div>
        <div className="h-56   w-screen flex justify-center">
        <img src='/img/Background.png' className='w-4/5 h-4/5' ></img>
        </div>

    </div>

    
  </Layout>
)

export default AboutPage

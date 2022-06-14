import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title="Gabriella's Photography">
    <div>
      <img src="/img/Background.jpeg" alt="Background" className='absolute top-0 left-0 w-screen h-screen -z-50'  />
      <div className='w-3/5 m-auto text-xl font-fancy md:text-2xl'>
        <h1 className='mt-10 mb-32 text-fancy-white md:text-4xl xl:mt-32 md:h-96 xl:text-6xl'>
          “ Photography, an <br/>
          unlimited universe, <br/>
          in a limited world <br/>
          of fate. <br/>
        </h1>
        <p className='w-40 p-2 m-auto text-center rounded-3xl bg-button-purple hover:scale-95 md:ml-96 lg:ml-auto lg:w-80'>
          <Link href="/about">
            <a className='text-fancy-white '>See Photos</a>
          </Link>
        </p>

        </div>
    </div>
  </Layout>
)

export default IndexPage

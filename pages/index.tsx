import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title="Gabriella's Photography">
    <div>
      <img src="/img/Background.png" alt="Background" className='absolute  top-0 left-0 -z-50 h-screen w-screen'  />
      <div className='w-3/5 m-auto font-fancy text-xl md:text-2xl'>
        <h1 className='text-fancy-white mt-10 mb-32 md:text-4xl xl:mt-32 md:h-96 xl:text-6xl'>
          “ Photography, an <br/>
          unlimited universe, <br/>
          in a limited world <br/>
          of fate. <br/>
        </h1>
        <p className='m-auto text-center p-2 w-40 rounded-3xl bg-button-purple hover:scale-95 md:ml-96 lg:ml-auto lg:w-80'>
          <Link href="/about">
            <a className='text-fancy-white '>See Photos</a>
          </Link>
        </p>

        </div>
    </div>
  </Layout>
)

export default IndexPage

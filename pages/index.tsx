import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title="Gabriella's Photography">
    <div>
      <img src="/img/Background.png" alt="Background" className='absolute  top-0 left-0 -z-50'  />
      <h1 className='text-white'> “ Photography, an
  unlimited universe,
  in a limited world
  of fate.</h1>
      <p >
        <Link href="/about">
          <a>See Photos</a>
        </Link>
      </p>
    </div>
  </Layout>
)

export default IndexPage

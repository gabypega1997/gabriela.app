import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title="Gabriella's Photography">
    <div className="bg-home-background">
      <h1> “ Photography, an
  unlimited universe,
  in a limited world
  of fate.</h1>
      <p>
        <Link href="/about">
          <a>See Photos</a>
        </Link>
      </p>
    </div>
  </Layout>
)

export default IndexPage

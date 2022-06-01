import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title="Gabriella's Photography">
    <h1> “ Photography, an
unlimited universe,
in a limited world
of fate.</h1>
    <p>
      <Link href="/about">
        <a>See Photos</a>
      </Link>
    </p>
  </Layout>
)

export default IndexPage

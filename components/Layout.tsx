import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'


type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav className='h-4 bg-gray-900/60 h-14'>
        <Link href="/">
          <a>Home</a>
        </Link>{' '}
      </nav>
    </header>
    {children}
  </div>
)

export default Layout

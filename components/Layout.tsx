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
      <nav className='bg-navbar-gray h-16'>
        <div className='w-4/5 m-auto h-full flex justify-between'>
          <div className=''>
            <Link href="/" >
              <img src="/img/Logo.png" alt="Logo" width={100}  className='pt-4' />
            </Link>{' '}

          </div>
          <div className='flex pt-5 gap-3'>
              <a href="mailto:gabrielagianina31@gmail.com" >
                <img src='/img/MailLogo.png' alt='mail logo' width={25} ></img>
              </a>
              <a href="https://www.facebook.com/Gabriela.Gianina31" target="_blank">
                <img src='/img/FacebookLogo.png' alt='facebook logo' width={15}></img>
              </a>
              <a href="http://instagram.com/gabriella.gianina31" target="_blank">
                <img src='/img/InstaLogo.png' alt=' instagram logo' width={20}></img>
              </a>
          </div>
          
        </div>
      </nav>
    </header>
    {children}
  </div>
)

export default Layout

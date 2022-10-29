import Head from 'next/head'
import SignIn from '../components/signin'

export default function Home() {
  
  return (
        <div>
          <Head>
            <title>Posto Verde</title>
            <meta name="description" content="" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
      
          <SignIn />
        
        </div>
  )
}

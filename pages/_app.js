import 'tailwindcss/tailwind.css'
import '../styles/globals.css'

import Header from '../components/Header'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return <div>
    <Header />
    <main className="container mx-auto px-4 sm:px-0 md:max-w-2xl lg:max-w-4xl">
      <Component {...pageProps} />
    </main>
    <Footer />
  </div>
}

export default MyApp

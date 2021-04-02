import Link from 'next/link'

const Header = () => {
  return <header className="bg-gradient-to-b from-indigo-600 to-indigo-500 rounded-bl-none md:rounded-bl-xl lg:rounded-bl-2xl xl:rounded-bl-3xl overflow-hidden relative">
    <div className="container mx-auto h-40 pl-4 pr-4 sm:pl-0 sm:pr-0 md:max-w-2xl lg:max-w-4xl">
      <h1 className="pt-10">
        <Link href="/"><a className="text-white text-3xl font-mono">gitjobs</a></Link>
      </h1>
      <div className="transform scale-75 rotate-45 translate-x-2 translate-y-15 bg-purple-300 h-24 w-40 opacity-5 absolute -bottom-20 left-0"></div>
      <div className="transform scale-110 -rotate-6 bg-purple-300 absolute -top-16 w-80 h-24 opacity-5 rounded-3xl"></div>
      <div className="transform scale-150 rotate-12 translate-y-11 bg-purple-300 absolute -bottom-10 opacity-5 w-40 sm:w-80 h-24 rounded-3xl right-10 md:right-40"></div>
    </div>
  </header>
}

export default Header
import Link from 'next/link'

const Header = () => {
  return <header className="bg-gradient-to-b from-indigo-600 to-indigo-500 rounded-bl-none md:rounded-bl-xl lg:rounded-bl-2xl xl:rounded-bl-3xl">
    <div className="container mx-auto h-32 pl-4 pr-4 sm:pl-0 sm:pr-0 md:max-w-2xl lg:max-w-4xl">
      <h1 className="pt-10">
        <Link href="/"><a className="text-white text-3xl font-mono">gitjobs</a></Link>
      </h1>
    </div>
  </header>
}

export default Header
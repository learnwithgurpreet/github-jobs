import Head from 'next/head'
import Link from 'next/link'

export default function Job({ response }) {
  const { company, title, location, type, description, how_to_apply } = response.data
  return (
    <div className="pt-20">
      <Head>
        <title>Github | Jobs - </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="p-12 bg-white rounded-lg shadow-md md:shadow-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
          <div>
            <p className="text-sm text-gray-400 mb-2">5h ago - {type}</p>
            <h2 className="font-bold text-3xl">{title}</h2>
            <p className="mt-2 text-gray-400 font-semibold">{location}</p>
          </div>
          <div className="apply-cta" dangerouslySetInnerHTML={{ __html: how_to_apply }} />
        </div>
        <div className="description-text" dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  // Fetch data from external API
  const { id } = context.query
  const res = await fetch(`http://localhost:3001/api/jobs?id=${id}`)
  const response = await res.json()

  if (!response.data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { response }, // will be passed to the page component as props
  }
}
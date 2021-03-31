import Head from 'next/head'

export default function Job({ response }) {
  const { company, title, location, type, description, how_to_apply } = response
  return (
    <div className="pt-20">
      <Head>
        <title>Github | Jobs - {title}, {company}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="p-12 bg-white rounded-lg shadow-md md:shadow-lg">
        <p className="text-sm text-gray-400 mb-2">5h ago - {type}</p>
        <h2 className="font-bold text-3xl">{title}</h2>
        <p className="mt-2 text-gray-400 font-semibold">{location}</p>
        <hr className="mb-2 mt-4" />
        <div className="description-text" dangerouslySetInnerHTML={{ __html: description }} />
        <div className="apply-cta" dangerouslySetInnerHTML={{ __html: how_to_apply }} />
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const endpoint = process.env.API
  const { id } = context.query

  // Fetch data from external API
  const res = await fetch(`${endpoint}/api/jobs?id=${id}`)
  const response = await res.json()

  if (!response) {
    return {
      notFound: true,
    }
  }

  return {
    props: { response }, // will be passed to the page component as props
  }
}
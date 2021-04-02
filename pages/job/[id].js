import Head from 'next/head'
import Image from 'next/image'
import moment from 'moment'

export default function Job({ response }) {
  const { company, title, location, type, description, how_to_apply, created_at, company_logo, company_url } = response
  return (
    <div>
      <Head>
        <title>Github | Jobs - {title}, {company}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-white rounded-lg shadow-md md:shadow-lg relative -mt-8">
        <div className="grid sm:grid-cols-3 gap-4 grid-flow-row sm:grid-flow-col sm:py-10">
          <div className="grid place-content-center">
            <div className="relative w-14 h-14 -mt-7 bg-white rounded-3xl shadow-md overflow-hidden">
              <Image src={company_logo} layout="fill" objectFit="contain" />
            </div>
          </div>
          <div className="grid place-content-center sm:place-content-left">
            <h3 className="text-xl font-semibold pb-2">
              {company}
            </h3>
            <p className="text-sm text-gray-400 mb-2">
              {company_url}
            </p>
          </div>
          <div className="grid place-content-center pb-10 sm:pb-0">
            <a className="text-base font-medium rounded-lg py-4 px-4 bg-gray-100 hover:bg-gray-200 text-indigo-500" href={company_url} target="blank">Company Site</a>
          </div>
        </div>
      </div>
      <div className="mt-14 p-12 bg-white rounded-lg shadow-md md:shadow-lg">
        <p className="text-sm text-gray-400 mb-2">{moment(moment(created_at).format("YYYYMMDD"), "YYYYMMDD").fromNow()} - {type}</p>
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
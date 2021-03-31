import Link from 'next/link'

const Card = ({ data }) => {
  const companyLogo = data.company_logo || '/company-logo.png'
  return <div className="bg-white shadow-md rounded-lg p-6 h-48 relative mb-9">
    <div className="rounded-3xl absolute -top-8 shadow-md bg-indigo-50 w-14 h-14 align-middle">
      <img className="rounded-3xl" src={companyLogo} width="56" height="56" loading="lazy" />
    </div>
    <p className="text-sm text-gray-400 mt-4">5h ago - {data.type}</p>
    <h2 className="mt-2 overflow-hidden truncate"><Link href={`/job/${data.id}`}><a className="hover:underline">{data.title}</a></Link></h2>
    <p className="mt-2 text-gray-400 overflow-hidden truncate"><a className="text-indigo-600 hover:underline" href={data.company_url} target="blank">{data.company}</a></p>
    <p className="mt-4 text-gray-400 font-semibold overflow-hidden truncate">{data.location}</p>
  </div>
}

export default Card
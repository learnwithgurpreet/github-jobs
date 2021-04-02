import { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import moment from 'moment'

import Skeleton from '../../components/Skeleton'

export default function Job({ id }) {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState({})

  useEffect(() => {
    const loadData = async () => {
      const endpoint = process.env.API
      const jobDetails = window.localStorage.getItem(id)

      setLoading(true)

      if (jobDetails) {
        setData(JSON.parse(jobDetails))
        setLoading(false)
      } else {
        const res = await fetch(`${endpoint}/api/jobs?id=${id}`)
        const response = await res.json()
        window.localStorage.setItem(id, JSON.stringify(response))
        setData(response)
        setLoading(false)
      }
    }
    loadData()
    return () => {
      setData({})
    }
  }, [])

  return (
    <div>
      <Head>
        <title>Github | Jobs - {data.title}, {data.company}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {loading && <Skeleton isDetailPage />}
      {data.title && <div className="bg-white rounded-lg shadow-md md:shadow-lg relative -mt-8">
        <div className="grid sm:grid-cols-3 gap-4 grid-flow-row sm:grid-flow-col sm:py-10 px-12 sm:px-0">
          <div className="grid place-content-center">
            <div className="relative w-14 h-14 -mt-7 bg-white rounded-3xl shadow-md overflow-hidden">
              <Image src={data.company_logo} layout="fill" objectFit="contain" />
            </div>
          </div>
          <div className="grid place-content-center sm:place-content-left">
            <h3 className="text-xl font-semibold pb-2">
              {data.company}
            </h3>
            <p className="text-sm text-gray-400 mb-2">
              {data.company_url}
            </p>
          </div>
          <div className="grid place-content-center pb-10 sm:pb-0">
            <a className="text-base font-medium rounded-lg py-4 px-4 bg-gray-100 hover:bg-gray-200 text-indigo-500" href={data.company_url} target="blank">Company Site</a>
          </div>
        </div>
      </div>}
      {data.title && <div className="mt-14 p-12 bg-white rounded-lg shadow-md md:shadow-lg">
        <p className="text-sm text-gray-400 mb-2">{moment(moment(data.created_at).format("YYYYMMDD"), "YYYYMMDD").fromNow()} - {data.type}</p>
        <h2 className="font-bold text-3xl">{data.title}</h2>
        <p className="mt-2 text-gray-400 font-semibold">{data.location}</p>
        <hr className="mb-2 mt-4" />
        <div className="description-text" dangerouslySetInnerHTML={{ __html: data.description }} />
        <div className="apply-cta overflow-hidden" dangerouslySetInnerHTML={{ __html: data.how_to_apply }} />
      </div>}
    </div>
  )
}
export async function getServerSideProps(context) {
  const { id } = context.query
  return {
    props: {
      id
    }
  }
}
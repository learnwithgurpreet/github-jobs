import { useState } from 'react'
import Head from 'next/head'
import Card from '../components/Card'
import Button from '../components/Button'

export default function Home({ response }) {
  const { data, page } = response
  const [jobs, setJobs] = useState(data)
  const [currentPage, setCurrentPage] = useState(parseInt(page))
  const [disabled, setDisabled] = useState(false)
  const [hideBtn, setHideBtn] = useState(false)
  const [btnText, setBtnText] = useState("Load More")

  const loadMore = async (newPage) => {
    setDisabled(true)
    setBtnText("Loading...")
    const res = await fetch(`http://localhost:3001/api/jobs?page=${newPage}`)
    const serviceRes = await res.json()
    if (serviceRes.data.length > 0) {
      setJobs(jobs => [...jobs, ...serviceRes.data])
      setCurrentPage(newPage)
      setDisabled(false)
      setBtnText("Load More")
    } else {
      setHideBtn(true)
    }
  }

  return (
    <div className="pt-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
        <Head>
          <title>Github | Jobs</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {jobs.map((obj, index) => {
          return <Card key={`${obj.id}-${index}`} data={obj} />
        })}
      </div>
      <div className={`text-center ${hideBtn ? `hidden` : ''}`}>
        <Button name="load-btn" onClick={() => loadMore(currentPage + 1)} disabled={disabled}>{btnText}</Button>
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const res = await fetch(`http://localhost:3001/api/jobs`)
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
import { useState, useEffect } from 'react'
import Head from 'next/head'
import Card from '../components/Card'
import Button from '../components/Button'
import Skeleton from '../components/Skeleton'

const endpoint = `${process.env.API}/api/jobs/`

export default function Home() {
  const [jobs, setJobs] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [hideBtn, setHideBtn] = useState(false)
  const [loading, setLoading] = useState(false)

  const loadMore = async (newPage) => {
    setLoading(true)
    const res = await fetch(`${endpoint}?page=${newPage}`)
    const serviceRes = await res.json()
    if (serviceRes.length > 0) {
      setJobs(jobs => [...jobs, ...serviceRes])
      setCurrentPage(newPage)
      setLoading(false)
    } else {
      setHideBtn(true)
    }
  }

  useEffect(() => {
    const loadData = async () => {
      setLoading(true)
      const res = await fetch(`${endpoint}?page=1`)
      const data = await res.json()
      setJobs(data)
      setLoading(false)
    }
    loadData()
  }, [])

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
        {jobs.length === 0 && <>
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </>}
      </div>
      <div className={`flex justify-center ${hideBtn ? `hidden` : ''}`}>
        <Button name="load-btn" classes="flex" onClick={() => loadMore(currentPage + 1)} disabled={loading}>
          <svg className={`animate-spin -ml-1 mr-3 h-5 w-5 text-white ${!loading ? ' hidden' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>{loading ? "Processing" : "Load More"}
        </Button>
      </div>
    </div>
  )
}
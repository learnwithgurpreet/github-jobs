// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async (req, res) => {
  const { page = 1, id } = req.query
  let reqUrl = ''

  if (id) {
    reqUrl = `${process.env.HOST_API}/positions/${id}.json`
  } else {
    reqUrl = `${process.env.HOST_API}/positions.json?page=${page}`
  }
  const response = await fetch(reqUrl)

  if (response.ok) {
    let json = await response.json();
    res.status(200).json(json)
  } else {
    res.status(response.status).json("error")
  }
}

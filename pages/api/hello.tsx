// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {NextApiRequest, NextApiResponse} from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {
  const date = new Date().toISOString();

  res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate');

  res.status(200).json({ name: 'John Doe', date: date })
}

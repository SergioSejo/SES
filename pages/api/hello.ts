// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { getAllMatches } from '@/utils/matchesFunctions';

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch ( req.method ) {
    case 'GET':
        return getMatches( res );
    default:
        return res.status(400);
}
}

const getMatches = async( res: NextApiResponse<Data> ) => {

  const matches = await getAllMatches();

  return res.status(200).json( matches );
}

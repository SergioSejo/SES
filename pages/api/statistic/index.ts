import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../database';
import { Statistic, IStatistic } from '../../../models';

type Data = 
    | { message: string }
    | IStatistic[]
    | IStatistic

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    
    switch ( req.method ) {
        case 'GET':
            return getStatistics( res );

        case 'POST':
            return postStatistic( req, res );
    
        default:
            return res.status(400).json({ message: 'Endpoint does not exist' });
    }
}

const getStatistics = async( res: NextApiResponse<Data> ) => {

    await db.connect();
    const statistics = await Statistic.find().sort({ season: 'ascending' });
    await db.disconnect();

    return res.status(200).json( statistics );
}

const postStatistic = async( req: NextApiRequest, res: NextApiResponse<Data> ) => {

    const newStatistic = new Statistic({...req.body});

    try {

        await db.connect();
        await newStatistic.save();
        await db.disconnect();

        return res.status(201).json( newStatistic );
        
    } catch (error) {
        await db.disconnect();
        console.log(error);
        return res.status(500).json({ message: 'Something went wrong, check server console' });
    }
}
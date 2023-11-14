import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../database';
import { Match, IMatch } from '../../../models';

type Data = 
    | { message: string }
    | IMatch[]
    | IMatch

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    
    switch ( req.method ) {
        case 'GET':
            return getMatches( res );

        case 'POST':
            return postMatch( req, res );
    
        default:
            return res.status(400).json({ message: 'Endpoint does not exist' });
    }
}


const getMatches = async( res: NextApiResponse<Data> ) => {

    await db.connect();
    const matches = await Match.find().sort({ code: 'ascending' });
    await db.disconnect();

    return res.status(200).json( matches );
}


const postMatch = async( req: NextApiRequest, res: NextApiResponse<Data> ) => {

    const newMatch = new Match({...req.body});

    try {

        await db.connect();
        await newMatch.save();
        await db.disconnect();

        return res.status(201).json( newMatch );
        
    } catch (error) {
        await db.disconnect();
        console.log(error);
        return res.status(500).json({ message: 'Something went wrong, check server console' });
    }

}
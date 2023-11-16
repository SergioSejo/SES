import { Match, IMatch } from '../models';
import { db } from '.';

export const getMatchByCode = async( code: string ): Promise<IMatch | null> => {

    await db.connect();
    const match = await Match.findOne({code}).lean();
    await db.disconnect();

    return JSON.parse( JSON.stringify(match) );
}


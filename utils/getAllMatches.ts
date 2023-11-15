import { db } from '@/database';
import { Match } from '@/models';


export const getAllMatches = async() => {
    await db.connect();
    let matches = await Match.find().sort({ code: 'ascending' });
    await db.disconnect();
    const matches_final = JSON.parse(JSON.stringify(matches));
    return matches_final;
}
import { db } from '@/database';
import { Match } from '@/models';
import { matches_mock} from '@/utils';

export const getAllMatches = async() => {
    await db.connect();
    let matches = await Match.find().sort({ code: 'ascending' });
    await db.disconnect();
    const matches_final = JSON.parse(JSON.stringify(matches));
    return matches_final;
}

export const getMatchInfo = async( code: string ) => {
    try {
        const match = matches_mock.find((match) => match.code == code);
        return match;
    } catch (error) {
        return null;
    }
}
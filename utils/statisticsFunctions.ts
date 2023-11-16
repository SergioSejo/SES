import { db } from '@/database';
import { Statistic } from '@/models';

export const getAllStatistics = async() => {
    await db.connect();
    const statistics = await Statistic.find().sort({ season: 'ascending' });
    await db.disconnect();
    const statistics_final = JSON.parse(JSON.stringify(statistics));
    return statistics_final;
}
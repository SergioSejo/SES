import mongoose, { Model, Schema } from 'mongoose';
import { Statistic } from '../interfaces';

export interface IStatistic extends Statistic {}

const singleSchema = new Schema({
    name: { type: String },
    goals: { type: Number },
    assists: { type: Number },
    cards: { type: Number }
});

const statisticSchema = new Schema({
    season: { type: String, required: true },
    single: [singleSchema],
    total: {
        goals: { type: String },
        assists: { type: Number },
        cards: { type: Number },
        pichichi: { type: String },
        assistant: { type: String },
        dirty: { type: String }
    }
});

const StatisticModel: Model<IStatistic> = mongoose.models.Statistic || mongoose.model('Statistic', statisticSchema );

export default StatisticModel;

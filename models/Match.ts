import mongoose, { Model, Schema } from 'mongoose';
import { Match } from '../interfaces';

export interface IMatch extends Match {}

const matchSchema = new Schema({
    code: { type: String, required: true },
    season: { type: String, required: true },
    number: { type: String, required: true },
    local: { type: String, required: true },
    visitor: { type: String, required: true },
    goalsLocal: { type: Number, required: true },
    goalsVisitor: { type: Number, required: true },
    date: { type: String, required: true },
    goalScorers: [{
        name: { type: String },
        score: { type: Number }
    }],
    goalsComments: { type: String, required: true },
    assistants: [{
        name: { type: String },
        score: { type: Number }
    }],
    assistantsComments: { type: String, required: true },
    cards: [{
        name: { type: String },
        score: { type: Number }
    }],
    cardsComments: { type: String, required: true }
});

const MatchModel: Model<IMatch> = mongoose.models.Match || mongoose.model('Match', matchSchema );

export default MatchModel;
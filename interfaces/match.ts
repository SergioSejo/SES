export interface Match {
    _id: string;
    team1: string;
    team2: string;
    date: string;
    goalScorers: goalScorer[];
    goalsComments: string,
    assistants: assistant[];
    assistantsComments: string,
    cards: card[];
    cardsComments: string,
}

interface goalScorer {
    name: string;
    goals: number;
}

interface assistant {
    name: string;
    assistances: number;
}

interface card {
    name: string;
    cards: number;
}
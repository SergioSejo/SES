export interface Match {
    _id: string;
    code: string;
    season: string;
    number: string;
    team1: string;
    team2: string;
    goalsTeam1: number;
    goalsTeam2: number
    date: string;
    goalScorers: PlayerList[];
    goalsComments: string,
    assistants: PlayerList[];
    assistantsComments: string,
    cards: PlayerList[];
    cardsComments: string,
}

export interface PlayerList {
    name: string;
    score: number;
}
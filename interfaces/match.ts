export interface Match {
    _id: string;
    code: string;
    season: number;
    number: number;
    team1: string;
    team2: string;
    goalsTeam1: number;
    goalsTeam2: number
    date: string;
    goalScorers: playerList[];
    goalsComments: string,
    assistants: playerList[];
    assistantsComments: string,
    cards: playerList[];
    cardsComments: string,
}

export interface playerList {
    name: string;
    score: number;
}
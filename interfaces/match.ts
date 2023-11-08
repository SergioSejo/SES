export interface Match {
    _id: string;
    code: string;
    season: string;
    number: string;
    local: string;
    visitor: string;
    goalsLocal: number;
    goalsVisitor: number
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
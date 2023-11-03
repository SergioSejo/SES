export interface Statistic {
    _id: string;
    season: string;
    single: PlayerScore[];
    total: TotalStatistics[],
}

export interface PlayerScore {
    name: string;
    goals: number;
    assists: number;
    cards: number;
}

export interface TotalStatistics {
    goals: string;
    assists: number;
    cards: number;
    pichichi: number;
    assistant: number;
    dirty: number;
}
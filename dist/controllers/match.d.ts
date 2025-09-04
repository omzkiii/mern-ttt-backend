type Match = {
    player1: {
        name: string;
        score: number;
    };
    player2: {
        name: string;
        score: number;
    };
    winner: string;
    time: string;
};
export declare function saveMatch(match: Match): Promise<void>;
export declare function getMatches(): Promise<import("mongodb").WithId<import("bson").Document>[] | undefined>;
export {};
//# sourceMappingURL=match.d.ts.map
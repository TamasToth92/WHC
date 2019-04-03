export interface Race {
        id?: number;
        name: string;
        dateOfRace: string;
        entryFee?: number;
        startFee?: number;
        boxFee?: number;
        paddockFee?: number;
        raceCategories: any [];
        isActive?: string;
        isInPestcountry?: string;
        active?: boolean;
    }

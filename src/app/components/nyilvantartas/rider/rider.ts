export interface Rider {
    id?: number;
    name: string;
    yearOfBirth: number;
    status: string; //ENUM?
    phoneNumber: string;
    email: string;
    nameOfCoach: string;
    ranchName: string;
    startNumbers?: [];
}

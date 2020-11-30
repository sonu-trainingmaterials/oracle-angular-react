
export interface IProfile {
    id?: number,
    createdTs?: Date,
    updatedTs?: Date,
    name: string,
    email: string,
    sex: string,
    birthdate: Date,
    phonenumber: string,
    address: string,
    city: string,
    country: string,
    photo?: string,
    favorite?: boolean
}
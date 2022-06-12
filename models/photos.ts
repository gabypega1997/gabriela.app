import { ObjectId } from "mongodb";

export default class Photo {
    constructor (public image: string, public location: string, public date: number, public id?: ObjectId ) {}
}
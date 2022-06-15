import { ObjectId } from "mongodb";

export default class Photo {
    constructor (public name: string, public id?: ObjectId ) {}
}
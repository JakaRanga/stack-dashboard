import { Indexable } from "./indexable.model";

export interface Service extends Indexable {

    title: string,
    description: string,
    url: string,
    backgroundColor: string
    color: string

}
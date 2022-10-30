import { ReactNode } from "react"

export type mainContainerType = {
    children?: ReactNode,
    keys?: string,
    title?: string,
    
}

export type userType = {
    name: string,
    surname: string,
    login: string,
    email: string,
    id: number,

}

export interface userTypeInterface {
    name: string
    surname: string
    login: string
    email: string
    id: number
}

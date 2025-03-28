export interface ICreateUrl {
    originalUrl:string
    expiresAt: string
    alias:string
}
export interface IGetUrl {
    originalUrl:string
    createdAt: string
    clickCount:string
}
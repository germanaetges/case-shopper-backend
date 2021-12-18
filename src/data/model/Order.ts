export type Items = {
    productId: number,
    productQuantity: number
}

export type Order = {
    id: string,
    clientName: string,
    dueDate: Date,
    list: Items[]
}

export type OrderInputDTO = {
    clientName: string,
    dueDate: Date,
    list: Items[]
}
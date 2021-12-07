export type Items = {
    productId: string,
    productQuantity: number
}


export type Order = {
    id: number,
    clientName: string,
    dueDate: Date,
    list: Items[]
}

export type OrderInputDTO = {
    clientName: string,
    dueDate: Date,
    list: Items[]
}


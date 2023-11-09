export type Note =  {
    id: number,
    title: string,
    content: string
}

export type Action = {
    type: "add" | "del" | "edit",
    payload: Note
  }
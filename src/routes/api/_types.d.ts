
export type Reaction = {
    title: string
    emoji: string
    total: number
}

export type Comment = {
    text: string
    reactions: Reaction[]
    comments: Comment[]
}

export type Post = {
    text: string
    timestamp: Date
    reactions: Reaction[]
    comments: Comment[]
}
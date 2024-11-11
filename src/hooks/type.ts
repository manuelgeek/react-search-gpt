export interface Message {
  message: string
  sender: Sender
  direction: Direction
}

export type Sender = 'bot' | 'user'

export type Direction = 'outgoing' | 'incoming'
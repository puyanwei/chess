import { ReactNode } from 'react'

export interface Component {
  children?: ReactNode | string
  className?: string
  testId?: string
}

// Boards
export interface BoardCell {
  position: BoardPosition
}
export type BoardRows = BoardCell[][]
export type BoardPosition = [BoardRow, BoardColumn]
export type BoardColumn = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8'
export type BoardRow = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H'

// Pieces

export type PieceName = 'pawn'
export interface Piece {
  id: string
  name: PieceName
  position: BoardPosition
  player: 'black' | 'white'
}

// Game Object
export interface GameObject {
  status: 'loading' | 'ready'
  boardRows: BoardRows
  pieces: Piece[]
}
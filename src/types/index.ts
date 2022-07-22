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
export type BoardPosition = [BoardPositionNode, BoardPositionNode]
export type BoardPositionNode = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
export type PositionAdjustmentAmount =
  | -1
  | -2
  | -3
  | -4
  | -5
  | -6
  | -7
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7

// Pieces
export type PieceName = `pawn` | `knight` | `bishop` | `rook` | `queen` | `king`

export type PlayerColor = `white` | `black`

export type PieceStatus = `init` | `inPlay` | `taken`

export type PieceMovementRange = [number, number, number, number][]
export interface Piece {
  id: string
  name: PieceName
  position: BoardPosition
  status: PieceStatus
  movementRange: MovementRange
  initialMovementRange: MovementRange
  attackRange: AttackRange
  player: PlayerColor
}

export type Orientation =
  | `up`
  | `up-right`
  | `right`
  | `down-right`
  | `down`
  | `down-left`
  | `left`
  | `up-left`

export type UpDistance = number
export type RightDistance = number
export type BottomDistance = number
export type LeftDistance = number

export type MovementRange = [
  UpDistance,
  RightDistance,
  BottomDistance,
  LeftDistance
][]

export type AttackRange = [
  UpDistance,
  RightDistance,
  BottomDistance,
  LeftDistance
][]

export interface PieceDefinitions {
  name: PieceName
  movementRange: MovementRange
}

export type HistoryEntry =
  | MoveHistoryEvent
  | AttackHistoryEvent
  | TakenHistoryEvent

export interface MoveHistoryEvent {
  action: `move`
  pieceId: Piece[`id`]
  targetPosition?: BoardPosition
}
export interface AttackHistoryEvent {
  action: `attack`
  pieceId: Piece[`id`]
  targetPieceId?: Piece[`id`]
}
export interface TakenHistoryEvent {
  action: `taken`
  pieceId: Piece[`id`]
}

// white-pawn-1 move [0,1]
// black-queen-1 attack white-rook-2
// white-rook taken

// Game Object
export interface GameObject {
  status: `loading` | `ready`
  playerTurn: PlayerColor
  boardRows: BoardRows
  pieces: Piece[]
  selectedPiece?: Piece
  validMoves: BoardPosition[]
  history: HistoryEntry[]
}

export interface GameObjectLike {
  status?: `loading` | `ready`
  playerTurn?: PlayerColor
  boardRows?: BoardRows
  pieces?: Piece[]
  selectedPiece?: Piece
  validMoves?: BoardPosition[]
  history?: HistoryEntry[]
}

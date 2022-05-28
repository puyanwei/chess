import { Piece } from 'src/comps/Piece'
import { Component } from '@/types'
import React from 'react'
import { useGameObject } from 'src/stores/GameObjectStore/GameObjectStore'

interface Props extends Component {}

export function BoardPieces({
  className = ``,
  testId = `board-pieces`,
}: Props) {
  const [gameObject] = useGameObject()

  return (
    <div
      className={`grid grid-cols-8 grid-rows-8 shadow-xl/.5 col-start-1 row-start-1 pointer-events-none ${className}`}
      data-testid={testId}
    >
      {gameObject.pieces.map(piece => {
        return <Piece key={piece.id} piece={piece} />
      })}
    </div>
  )
}

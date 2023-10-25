import React from 'react'
import { Note } from './models';

interface Props {
    note: Note
    dispatch: React.Dispatch<{
      type: "add" | "del",
      payload:Note;
  }>
}

const SingleNote:React.FC<Props> = ({note,dispatch}) => {
  return (
    <div className='note'>
        <h1>{note.title}</h1>
        <p>{note.content}</p>
        <small onClick={()=>dispatch({type: "del",payload: note})}>X</small>
    </div>
  )
}

export default SingleNote
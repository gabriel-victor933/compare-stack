import React from 'react'
import SingleNote from './SingleNote'
import { Note } from '../models';
import { Action } from '../models'


interface Props {
  notes: Note[],
  dispatch: React.Dispatch<Action>
}

const Notes:React.FC<Props> = ({notes,dispatch}) => {

    
  return (
    <div className='notes'>
        {notes.map((note) => <SingleNote key={note.id} note={note} dispatch={dispatch}/>)}
        
    </div>
  )
}

export default Notes
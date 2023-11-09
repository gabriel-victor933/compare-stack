import React, { useState } from 'react'
import { Note } from '../models';
import { AiOutlineClose, AiOutlineEdit } from "react-icons/ai";
import { Action } from '../models'


interface Props {
    note: Note
    dispatch: React.Dispatch<Action>
}

const SingleNote:React.FC<Props> = ({note,dispatch}) => {

  const [openEdit,setOpenEdit] = useState<boolean>(false)
  const [singleNote, setSingleNote] = useState<Note>(note)

  function handleInputChange(e:  React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>){
      setSingleNote({...singleNote,[e.target.name]:e.target.value})
  }

  function handleEditInputSubmit(e: React.FormEvent){
      e.preventDefault()
      dispatch({type: "edit",payload: singleNote})
      setOpenEdit(false)
  }

  return (!openEdit ? 
    <div className='note'>
        <h1>{note.title}</h1>
        <p>{note.content}</p>
        <AiOutlineClose className="icon close" onClick={()=>dispatch({type: "del",payload: note})} />
        <AiOutlineEdit className="icon edit" onClick={()=>setOpenEdit(true)}/>
    </div> :
    <div className='note' >
      <form onSubmit={handleEditInputSubmit}>
        <input className='note-input' name="title" value={singleNote.title} onChange={handleInputChange}/>
        <textarea  className='note-textarea' name="content" value={singleNote.content} onChange={handleInputChange}/>
        <button className='note-button'>Edit Note</button>
      </form>
      <AiOutlineClose className="icon close" onClick={()=>setOpenEdit(false)} />
    </div>
  )
}

export default SingleNote
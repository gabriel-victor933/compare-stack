import React, {  useState } from 'react'
import { Note } from './models';

interface Props {
    dispatch: React.Dispatch<{
        type: "add";
        payload: number | undefined | Note;
    }>
}

const Input:React.FC<Props> = ({dispatch}) => {

    const [title,setTitle] = useState<string>("")
    const [content,setContect] = useState<string>("")

    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        /*add uma nota*/
        if(title && content){
            dispatch({type: "add",payload: {id: Date.now(),title,content}})
        }
    }
  return (
    <div className='input'>
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder='Title' 
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
            />
            <textarea 
                placeholder="Content" 
                rows={5} 
                cols={33} 
                value={content}
                onChange={(e)=>setContect(e.target.value)}

            >        
            </textarea>
            <button>Add Note</button>
        </form>
    </div>
  )
}

export default Input
import React from 'react'
import SingleNote from './SingleNote'

const Notes:React.FC = () => {

    const title = "Titulo 1";
    const content = `content 1 content 1 contenete 1
    content 1 content 1 contenete 1
    content 1 content 1 contenete 1
    content 1 content 1 contenete 1
    `;
    
  return (
    <div className='notes'>
        <SingleNote title={title} content={content}/>
    </div>
  )
}

export default Notes
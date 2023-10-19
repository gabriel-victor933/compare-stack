import React from 'react'

interface Props {
    title: string
    content: string
}

const SingleNote:React.FC<Props> = ({title,content}) => {
  return (
    <div className='note'>
        <h1>{title}</h1>
        <p>{content}</p>
    </div>
  )
}

export default SingleNote
import { useReducer } from 'react'
import './App.css'
import Input from './components/Input'
import Notes from './components/Notes'
import { Note } from './components/models'

type Action = {
  type: "add" | "del",
  payload: Note
}

function reducer(state: Note[],action: Action){
  switch(action.type){
    case "add": return [...state,action.payload];
    case "del": return state.filter((note) => note.id != action.payload.id)
    default: return state;
  }
}



const App:React.FC = ()=> {

  const [state,dispatch] = useReducer(reducer,[])
  console.log(state)
  return (
    <>
      <Input dispatch={dispatch}/>
      <Notes notes={state} dispatch={dispatch}/>
    </>
  )
}

export default App

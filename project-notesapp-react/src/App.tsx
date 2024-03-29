import { useReducer } from 'react'
import './App.css'
import Input from './components/Input'
import Notes from './components/Notes'
import { Note } from './models'
import { Action } from './models'



function reducer(state: Note[],action: Action){
  switch(action.type){
    case "add": return [...state,action.payload];
    case "del": return state.filter((note) => note.id != action.payload.id);
    case "edit": return state.map((note)=> note.id != action.payload.id ? note : action.payload)
    default: return state;
  }
}

const App:React.FC = ()=> {

  const [state,dispatch] = useReducer(reducer,[])
  return (
    <>
      <Input dispatch={dispatch}/>
      <Notes notes={state} dispatch={dispatch}/>
    </>
  )
}

export default App

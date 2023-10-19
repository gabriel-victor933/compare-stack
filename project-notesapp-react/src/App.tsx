import { useReducer } from 'react'
import './App.css'
import Input from './components/Input'
import Notes from './components/Notes'
import { Note } from './components/models'

function reducer(state: Note[],action: {type: "add",payload: Note}){
  switch(action.type){
    case "add": return [...state,action.payload];
    default: return state;
  }
}

const App:React.FC = ()=> {

  const [state,dispatch] = useReducer(reducer,[])
  console.log(state)
  return (
    <>
      <Input dispatch={dispatch}/>
      <Notes />
    </>
  )
}

export default App

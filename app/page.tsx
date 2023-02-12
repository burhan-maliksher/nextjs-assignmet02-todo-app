import { Inter } from '@next/font/google'
import AddNewTodo from './add-new-todo'
import Title from './title'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  return (
    <main  >
     <div style={{display:'flex' ,justifyContent:"center" ,  height:"auto", margin:"20px" }}> 
        <div >
          <h2 style={{color:'purple'}}>TODO APP BY M.B&nbsp;</h2><br/>
          <h4 style={{color:'purple', fontSize:"20px"}}>Enter Todo List Title</h4><br/>
          <Title/>
          <AddNewTodo/>
        </div>
      </div> 
    </main>
  )
}
function setInputValue(arg0: string) {
  throw new Error('Function not implemented.')
}


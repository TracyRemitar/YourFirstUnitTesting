import { useState } from 'react'
import Button from "./components/Button"
import Input from "./components/Input"

function App() {
  const [input, setInput] = useState({
    username: '',
    password: ''
  })

  const handleChange = (e) => {
    setInput({...input, [e.target.id]: e.target.value})
  }

  return (
    <div data-testid="app-container" className="h-screen w-screen flex justify-center items-center">
      <div className="px-10 py-5 bg-yellow-100 flex flex-col gap-3 rounded-lg">
        <Input label='Username' id='username' value={input.username} onChange={handleChange}/>
        <Input label='Password' id='password' type='password' onChange={handleChange}/>

        <Button text='Login' disabled={!input.username || !input.password} onClick={() => {
          let message = 'Login unsuccessfully'

          if(input.username == 'root' && input.password == 'root') {
            message = 'Login successfully'
          }

          alert(message)
        }}/>
      </div>
    </div>
  )
}

export default App

import './index.css'
import Trash from '../../assets/red-trash-can-icon.svg'
import api from '../../services/api'
import { useEffect, useState, useRef } from 'react'

function App() {
  
  const [users, setUsers] = useState([])

  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

 function cleanInput() {
  if (inputName.current)  inputName.current.value  = "";
  if (inputAge.current)   inputAge.current.value   = "";
  if (inputEmail.current) inputEmail.current.value = "";
}

  async function getUsers(){
    const {data:UserFromApi} = await api.get('/usuarios')
    setUsers(UserFromApi)
  }

  async function createUser() {
    await api.post('/usuarios',{
      email: inputEmail.current.value,
      name: inputName.current.value,
      age: Number(inputAge.current.value),      
    })
    cleanInput()
    getUsers()
  }

  async function deleteUsers(id){
   await api.delete(`/usuarios/${id}`)


    getUsers()
  }

 useEffect(()=>{
    getUsers()
  },[])

  return (
    <div className='container'>
      <form action="">
        <h1>Cadastro de Usuários</h1>

        <input ref={inputName} name='nome' type="text" placeholder='Nome'/>

        <input ref={inputAge} name='idade' type="number" placeholder='Idade'/>

        <input ref={inputEmail} name='email' type="email" placeholder='Email'/>

        <button onClick={createUser} type='button'>Cadastrar</button>
      </form>

    {users.map(user=>{
      return(
       <div key={user.id} className='card'>
        <div>
          <p>Nome: {user.name}</p>
          <p>Idade: {user.age}</p>
          <p>Email: {user.email}</p>
        </div>
        <button onClick={()=>deleteUsers(user.id)}>
          <img width={14} src={Trash} alt="Trash" />
        </button>
      </div>
    )})}
     

    </div>
  )
}

export default App

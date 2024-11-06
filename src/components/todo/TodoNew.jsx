import { useState } from "react";

const TodoNew = (props) =>{

  const [valueInput , setValueInput] = useState("Nguyen Hung")

  const {addNewToDo} =props;
  const handleClick = () =>{
    addNewToDo(valueInput);
  }

  const handleOnChange = (name) =>{
    setValueInput(name)
  
  }

    return(
        <div className='todo-new'>
        <input type="text" placeholder='Enter Your Task' 
        onChange={(event) => handleOnChange(event.target.value)}
        />


        <button className='todo-btn' 
        style={{cursor:"pointer"}}
        onClick={handleClick}
        >Add</button>
        <div>
          My check input is = {valueInput}
        </div>
      </div>
    )

}


export default TodoNew;
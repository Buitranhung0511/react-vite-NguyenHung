const TodoNew = (props) =>{
  console.log(">>>Check input",props);
  const {addNewToDo} =props;
  // addNewToDo(" Hung oi!!");

  const handleClick = () =>{
    alert("Click Me !!");
  }

  const handleOnChange = (name) =>{
    console.log(">>>> Hanlde On Change !!", name); 
  
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
      </div>
    )

}


export default TodoNew;
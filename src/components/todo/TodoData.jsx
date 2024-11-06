const TodoData = (props) => {

    const { name, age, data } = props;
    console.log(">>>> Check props:", props);
    return (
        <div className='todo-data'>
            <div> My Name is {name}</div>
            <div> Learning React</div>
            <div> Watching Youtube</div>
            <div> Watching SpringBoot</div>
            <div>
                {JSON.stringify(props.todoList)}
            </div>
        </div>

    )

}
export default TodoData;
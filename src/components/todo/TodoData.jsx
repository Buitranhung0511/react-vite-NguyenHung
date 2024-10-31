const TodoData = (props) => {
    console.log(">>>> Check props:", props);

    const {name , age , data} = props;
    return (
        <div className='todo-data'>
            <div> My Name is {name}</div>
            <div> Learning React</div>
            <div> Watching Youtube</div>
            <div> Watching SpringBoot</div>
        </div>
    )

}
export default TodoData;
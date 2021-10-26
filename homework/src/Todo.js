import React from 'react';
const divStyle = {
    display: 'block ruby',
};
  
class TodoList extends React.Component {
	constructor(props){
        super(props);
		this.state = {
			todo: []
		};

        this.myRef = React.createRef();
        this.removeTodo = this.removeTodo.bind(this);
	}
    addTodo(todoValue) {
        let updatedArray = this.state.todo.concat({value:todoValue, count:0});
        this.setState({ todo: updatedArray })
    };
    removeTodo(todoKey){
        let updatedArray = this.state.todo;
        updatedArray[todoKey] = null;
        this.setState({ todo: updatedArray })
    };
    count (key,method){
        let updatedArray = this.state.todo;
        if ( method === "+" ){
            updatedArray[key].count += 1;
        }else if ( method === "-" ){
            updatedArray[key].count -= 1;
        }
        this.setState({ todo: updatedArray })
    }
	render(){
		return(
			<div>
				<h1>Todo</h1>
                <ul>
                    {this.state.todo.map(function(item, key, array) {
                        if ( item ){
                            return (
                                <div id={key} style={divStyle}>
                                    <li key={key}>{item.value}</li>
                                    <div style={{paddingLeft: '10px'}}></div> 
                                    <button onClick={ (e) => {e.view["$r"].removeTodo(key)}}>Delete</button>
                                    <div style={{paddingLeft: '10px'}}></div> 

                                    <button onClick={ (e) => {e.view["$r"].count(key,"-")}}>-</button>
                                    <div style={{paddingLeft: '10px'}}></div> 

                                    <p>{item.count}</p>
                                    <div style={{paddingLeft: '10px'}}></div> 

                                    <button onClick={ (e) => {e.view["$r"].count(key,"+")}}>+</button>
                                </div>
                            )
                        }
                    })}
                </ul>
				<label>
					<h3>What need to be done</h3>
					<input type="text" id="todoInput" name="todoInput" ref={node => (this.todoInput = node)}></input>
				</label>
				<button onClick={(e) => this.addTodo(this.todoInput.value)}>Add</button>
			</div>
		)
	}
}

export default TodoList; 
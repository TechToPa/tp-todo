import './App.css';
import Element from './modules/element';
import { useState } from 'react';

function App(props) {

  const [todolist, setTodolist] = useState(props.list);
  
  const reID = (list) => {
    return list.map((task,count) => {return {...task,id: count,key: count}});
  }

  function adder(e){
    if(e != ""){
      let getlist = JSON.parse(localStorage.getItem('tp-todo'));
      getlist.push({id: "new", content: e, done: false});
      getlist = reID(getlist);
      localStorage.setItem('tp-todo', JSON.stringify(getlist));
      setTodolist(getlist);       
    }
  };
  function remover(e){   
    let getlist = JSON.parse(localStorage.getItem('tp-todo'));
    getlist = getlist.filter((task) => task.id != e);
    getlist = reID(getlist);
    localStorage.setItem('tp-todo', JSON.stringify(getlist));
    setTodolist(getlist);
  }
  function updateList(e){
    let getlist = JSON.parse(localStorage.getItem('tp-todo'));
    getlist[e].done = !getlist[e].done;
    getlist = reID(getlist);
    localStorage.setItem('tp-todo', JSON.stringify(getlist));
    setTodolist(getlist);
  }

  const renderList = todolist.map(
    (item) => (
      <Element id={item.id} key={item.id} content={item.content} done={item.done} remover={remover} updateList={updateList} />
    )
  );  
  renderList.push(<Element id={props.list.length+1} key={props.list.length+1} last={true} adder={adder} />);
  
  return (
    <div className="App">
      <header className="glass">TP TODO</header>

      {renderList}

    </div>
  );
}

export default App;

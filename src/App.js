import { useEffect, useState } from 'react';
import Header from './components/header/header.component';
import AddTask from './components/add-task/add-task.component';
import TasksList from './components/task-list/tasks-list.component';
import Button from './components/button/button.component';
import './App.css';

const getLocal = () => {
    let taskData = JSON.parse(localStorage.getItem('tasksData'));
    if(taskData){
        return taskData;
    }else{
        return [];
    }
}

function App() {
    const [data, setdata] = useState('');
    const [tasks, setTask] = useState(getLocal());
    const seTaskHandler = () => {
        if(data){
        setTask([...tasks, data]);
        setdata('');
        }
    }
    const delTask = (ind) => {
            setTask(tasks.filter((task) => task !== tasks[ind]))
    }
    const delAll = () => setTask([]);

        useEffect(() => {
        localStorage.setItem('tasksData', JSON.stringify(tasks))
    }, [tasks])

    return (
        <div className="App">
            <Header/>
            <AddTask setdata={setdata} data={data} seTaskHandler={seTaskHandler} />
            <TasksList tasks={tasks} delTask={delTask}/>
            <Button clickHandler={delAll} type='Clear All' />
        </div>
    );
}

export default App;
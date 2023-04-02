import Button from '../button/button.component';
import './tasks-list.component.css';

const TasksList = ({tasks, delTask}) => {
    return(
        <div className="tasks">
                {
                    tasks.map((task, i) => {
                        return (<div key={i}>
                            <span>{task}</span>
                            <Button clickHandler={() => delTask(i)} type='x'/>
                        </div>)
                    })
                }
        </div>
    );
}

export default TasksList;
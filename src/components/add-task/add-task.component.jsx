import Button from '../button/button.component';
import './add-task.component.css';

const AddTask = ({setdata, data, seTaskHandler}) => {
    return (
        <div>
            <input type="text" onChange={(e) => {
                setdata(e.target.value)
            }} value={data} />
            <Button clickHandler={seTaskHandler} type='+' />
        </div>
    );
}

export default AddTask;
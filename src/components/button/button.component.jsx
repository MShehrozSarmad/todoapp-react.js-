import './button.styles.css';

const Button = ({ clickHandler, type }) => {
    return (
        <>
            <button onClick={clickHandler}> {type} </button>

        </>
    );
}

export default Button;
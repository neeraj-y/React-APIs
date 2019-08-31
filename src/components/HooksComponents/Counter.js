import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/actionTypes/actionConstants';
import { getData } from '../../utils/httpUtils';

const styles = {
    loader: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 2,
        backgroundColor: '#eee'
    },
    containerLoading: {
        opacity: 0.1,
        zIndex: 1,
        position: 'relative'
    }
}

function Counter() {
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();
    const [ author, setAuthor ] = useState(null);
    const [ randomIndex, setandomIndex ] = useState(4);
    const [ isLoading, setIsLoading ] = useState(true);
    
    useEffect(() => {      
        // componentDidUpdate
        const url = `https://jsonplaceholder.typicode.com/todos/${randomIndex}`;
        setIsLoading(true);
        // setAuthor(null);
        getData(url)
            .then(res => {
                for (var i = 0; i < 90000000; i++) {}            
                setAuthor(res);
            })
            .catch(err => console.log(err))
            .finally(() => setIsLoading(false));
    }, [randomIndex]);

    const randomNumGen = () => {
        const idx = Math.floor(Math.random() * 50) + 1;
        console.log('Random no is => ', idx);
        setandomIndex(idx);
    }

    return (
        <>  
            <div style={isLoading ? styles.containerLoading : null}>
                <h2>Counter: {counter}</h2>
                <button onClick={() => dispatch({type: actions.INCREMENT})}>{actions.INCREMENT} Counter</button>
                <button onClick={() => dispatch({type: actions.DECREMENT})}>{actions.DECREMENT} Counter</button>
                <button onClick={() => dispatch({type: actions.RESET})}>{actions.RESET} Counter</button>
                <button onClick={randomNumGen}>Generate Random Number</button>
                {author === null ? <h2>Author data not available</h2> : <div>Title : {author.title}</div>}
            </div>
            {isLoading ? <h2 style={styles.loader}>Loading fresh data...</h2> : null}
        </>
    )
}   

export default Counter;

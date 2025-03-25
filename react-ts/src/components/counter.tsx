import { useReducer } from "react";

const countertestReducer = (state, action) =>{
    switch (action.type){
        case "INCREMENT":
            return {...state, count: state.count +1}
        case "DECREMENT":
            return {...state, count: state.count -1};
        case "RESET":
            return {...state, count:0};
            default:
                return state;
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(countertestReducer, {count:0});
  return (
    <div>
        <h1>Counter test</h1>
        <h1>{state.count}</h1>
        <button onClick={() => dispatch({type:"INCREMENT"})}>+</button>
        <button onClick={() => dispatch({type:"DECREMENT"})}>-</button>
        <button onClick={() => dispatch({type:"RESET"})}>RESET</button>
    </div>
  )
}

export default Counter
import { useReducer } from "react"

const initialState = {
    name:"", email:"", password:""
}

const formfillReducer = (state, action) =>{
    switch (action.type){
        case "UPDATE_FIELD":
            return {...state, [action.field]:action.value};
            case "RESET":
                return initialState;
                default:
                    return state;
    }
}



const Formreducer = () => {
    const [state, dispatch] = useReducer(formfillReducer, initialState);
    const handleChange = (e) =>{
        dispatch({type:"UPDATE_FIELD", field:e.target.name, value:e.target.value})
        }
        const handleSubmit = (e) =>{e.preventDefault();
            console.log("Form Submitted:", state);
        };
  return (
    <div>
        <form onSubmit={handleSubmit} className='form'>
            <h1>Fill your details</h1>
            <input type="text" placeholder="Enter your name" name="name" value={state.name} onChange={handleChange} />
            <input type="email" placeholder="Enter your Email" name="email" value={state.email} onChange={handleChange} />
            <input type="password" placeholder="Password" name="password" value={state.password} onChange={handleChange} />
            <div className="buttonCard">
            <button type="submit">Submit</button>
            <button type="button" onClick={() => dispatch({ type: "RESET" })}>
          Reset
        </button>
            </div>
            
        </form>
    </div>
  )
}

export default Formreducer
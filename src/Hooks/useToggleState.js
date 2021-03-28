import {useState} from 'react'
function useToggleState(initialValue=false){
    const [state, setstate] = useState(initialValue);
    const toggle=()=>{
        setstate(!state);
    };
    return[state,toggle];
}
export default useToggleState;
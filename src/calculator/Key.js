
import {  useContext } from "react";
import { calculatorContext } from "./contexts/Calculator";
import style from "./style.module.css";




export default function Key({ type, value }) {

    const [state, dispatch] = useContext(calculatorContext)

    const onClickCB = () => {
        if (type === 'operator' && value === 'C') {
            dispatch({
                type: 'erase'
            })
        } else if (type === 'operator' && value === '=') {
            
            dispatch({
                type: 'calculate'
            })
        } else {
            dispatch({
                type,
                payload: value
            })
        }
    }

    return (
        <>
            <button onClick={onClickCB} className={style.key}>{value}</button>
        </>
    )
}
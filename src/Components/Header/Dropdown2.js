import { useState } from "react";
import './Dropdown2.css'
function Dropdown2  ({active , setActive}){
    const [isActive , setIsActive] = useState(false)
    const options =['Концерты' ,  'Новости' , 'Акции']
    return (
        <div className="dropdown">
            <div className="dropdown-btn" onClick ={(e)=>{
                e.preventDefault()
                setIsActive(!isActive)
            }
            }>
                События
                <span className="fas fa-caret-down"></span>
            </div>
           {isActive && (
                <div className="dropdown-content">
                    {options.map(option =>(
                        <div
                        onClick={(e)=>{
                            setActive(option)
                            setIsActive(false)
                        }}
                        className="dropdown-item"
                        
                        >
                           {option}
                        </div>
                    ))}
            </div>
           )}
        </div>
    )
}

export default Dropdown2;
import { useState } from "react";
import './Dropdown.css'
function Dropdown  ({selected , setSelected}){
    const [isActive , setIsActive] = useState(false)
    const options =['Полуфабрикаты' ,  'Выпечка' , 'Суши' , 'Салаты и закуски' , 'Горячее' , 'Десерты' , 'Фрукты'  , 'Напитки' , 'Банкетные блюда']
    return (
        <div className="dropdown">
            <div className="dropdown-btn" onClick ={(e)=>
            setIsActive(!isActive)}>
                Меню доставки
                <span className="fas fa-caret-down"></span>
            </div>
           {isActive && (
                <div className="dropdown-content">
                    {options.map(option =>(
                        <div
                        onClick={(e)=>{
                            setSelected(option)
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

export default Dropdown;
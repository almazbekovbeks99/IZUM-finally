import { useState } from 'react';
import './Header.css'
import Dropdown2 from './Dropdown2';
import Dropdown from './Dropdown';

const Header = ()=>{
    const [selected , setSelected] = useState("")
    const [active , setActive] = useState("")

    return(
        <>
            <div className="nav">
                <ul className="nav-logo">
                   <li>
                       <a href="">IZUM</a>
                   </li>
                </ul>
                <ul className="nav-flex">
                    <li>
                        <a href='#'>
                            <Dropdown selected={selected} setSelected={setSelected} />
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            Рестораны
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            Банкеты 
                        </a>
                    </li>
                    <li>
                           <a href="">
                           <Dropdown2 active={active} setActive={setActive} />
                           </a>
                    </li>
                    <li>
                        <a href="">
                             Вакансии
                        </a>
                    </li>
                </ul>
                <div className="btn">
                   <ul>
                   <button>Забронировать</button>
                    <li>
                        <a href="">
                           <i class="fas fa-shopping-bag"></i>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            RU
                        </a>
                    </li>
                   </ul>
                </div>
            </div>      
        </>
    )
}

export default Header;
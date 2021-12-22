import { useState } from 'react';
import './Header.css'
import Dropdown from '../Dropdown'
import { Link } from 'react-router-dom';
import { delieverMenu, eventsMenu } from '../../Utils';
import VHeader from '../../Pages/Vacancy/VacancyHeader/VHeader';

const Header = ()=>{
    const [active , setActive] = useState("")

    return(
        <>
            <div className="nav">
                <ul className="nav-logo">
                   <li>
                       <Link to="/">ИZЮМ</Link>
                   </li>
                </ul>
                <ul className="nav-flex">
                    <li>
                        <Dropdown title='Меню доставки' options={delieverMenu} />
                    </li>
                    <li>
                        <Link to='/restaurant'>
                            Фотоотчеты
                        </Link>
                    </li>
                    <li>
                        <Link to='/Banket'>
                            Банкеты 
                        </Link>
                    </li>
                    <li>
                        <Dropdown title='События' options={eventsMenu} />
                    </li>
                    <li>
                        <Link to="/Vacancy">
                            Вакансии
                        </Link>
                    </li>
                </ul>
                <div className="btn">
                   <ul>
                   <button>Забронировать</button>
                    <li>
                        <Link to="/">
                           <i class="fas fa-shopping-bag"></i>
                        </Link>
                    </li>
                   </ul>
                </div>
            </div>    
        </>
    )
}

export default Header;
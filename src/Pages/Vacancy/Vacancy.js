import Main from '../Main'
import './Vacancy.css'
import VHeader from './VacancyHeader/VHeader'
import Barmen from './VacancyHeader/VJobs/Barmen/Barmen'
import Hostes from './VacancyHeader/VJobs/Hostes/Hostes'
import Master from './VacancyHeader/VJobs/Master/Master'
import Menrestaurant from './VacancyHeader/VJobs/Menrestaorant/Menrestaurant'
import Oficiant from './VacancyHeader/VJobs/Oficiant/Oficiant'
import { Route, Switch } from 'react-router-dom'

const vstyle = {
    paddingTop: '70px'
  }

function Vacancies() {
    return(
        <>
          <VHeader />
          <div style={vstyle}>
          {/* <Switch>
            <Route exact path='/' component={Main} />
            <Route path='/barmen' component={Barmen} />
            <Route path='/menrestaurant' component={Menrestaurant} />
            <Route path='/oficiant' component={Oficiant} />
            <Route path='/hostes' component={Hostes} />
            <Route path='/master' component={Master} />
          </Switch> */}
          </div>
        </>
    )
}

export default Vacancies
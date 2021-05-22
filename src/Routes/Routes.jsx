import {BrowserRouter,Route} from 'react-router-dom';
import HomeComponent from '../Components/HomeComponent';
import MovieComponent from '../Components/MovieComponent';
import TodoComponent from '../Components/TodoComponent';
const Routes = () => {
   return(
        <div>
            <BrowserRouter>
                <Route exact path='/' component={HomeComponent}></Route> 
                <Route exact path='/movie' component={MovieComponent}></Route>
                <Route exact path='/todo' component={TodoComponent}></Route>
            </BrowserRouter>
        </div>
   );
}

export default Routes;
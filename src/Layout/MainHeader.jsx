import style from '../resource/css/header.module.css';
import {Link} from 'react-router-dom';

const MainHeader = () => {
    return(
        <div class={style.header}>
            <Link to='/'>
                <div class={style.rjqskdjfuqsptlqkf}>
                    Home
                </div>
            </Link>
            <Link to='/movie'>
                <div class={style.rjqskdjfuqsptlqkf}>
                    Movie
                </div>
            </Link>
            <Link to='/todo'>
                <div class={style.rjqskdjfuqsptlqkf}>
                    Todo
                </div>
            </Link>
        </div>
    );
}

export default MainHeader;
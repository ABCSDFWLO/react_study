import style from '../resource/css/movie.module.css';

const Movie = (props) => {

    const changeInput = (event) => {
        console.log(event.target.value);
        props.changeSearch(event.target.value);
    }

    return (
        <div>
            <input type='text' onChange={changeInput}/>
            <div className={style.listsMain}>
                {
                    props.movies.map((movie)=>{
                        return (
                            <div className={style.listItem}>
                                <div>
                                    <img src={movie.image}></img>
                                </div>
                                <div>
                                    <span>{movie.title.replace(/<[^>]+>/g, '')}</span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Movie;
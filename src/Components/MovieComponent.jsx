import MainLayout from '../Layout/MainLayout';
import Movie from '../Presenters/Movie';
import axios from 'axios';

import {useState, useEffect} from 'react';

const MovieComponent = () => {
    const CLIENT_ID='fCAlwYFFkO4hVdn2iJ6x';
    const SECRET_KEY='FOhvJQu9ch';
    //state [변수, 변수를 변경하는 함수]=useState(초기값)
    const [movies, setMovies]=useState([]);
    const [search, setSearch]=useState('어벤져스');//검색한 단어 ->네이버에 요청
    console.log(movies);
    const getMovie =()=>{
        //naver 영화 api 호출
        axios.get('/v1/search/movie.json',{
            params:{
                query:search,
            },
            headers:{
                'X-Naver-Client-Id': CLIENT_ID,
                'X-Naver-Client-Secret':SECRET_KEY,
            }
        }).then((response)=>{
            console.log(response);
            setMovies(response.data.items);
            console.log(movies);
        }).catch((error)=>{
            console.log('error입니당');
            console.log(error);
        });
    }

    useEffect(()=>{
        getMovie();
    },[]);

    const changeSearch = (value) => {
        setSearch(value);
        console.log('넘어옴');
    }

    useEffect(()=>{
        getMovie();
    },[search]);

    return(
        <MainLayout>
            <Movie movies={movies} changeSearch={changeSearch}></Movie>
        </MainLayout>
    );
}

export default MovieComponent;
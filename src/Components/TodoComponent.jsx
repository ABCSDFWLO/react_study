import MainLayout from '../Layout/MainLayout';
import Todo from '../Presenters/Todo';

import {useEffect, useState, usestate} from 'react';

const TodoComponent = () => {
    const [lists,setlists] = useState(['스터디','공부하기']);

    const addlist = (item) => {
        setlists(lists.concat(item));
    }
    const savelist=()=>{
        localStorage.setItem('todo',JSON.stringify(lists));
    }
    const getlist=()=>{
        setlists(JSON.parse(localStorage.getItem('todo')));
    }
    const removeListItem=(deletIndex)=>{
        setlists(lists.filter((list,index)=>index!==deletIndex));
    }
    useEffect(()=>{
        getlist();
    },[]);
    useEffect(()=>{
        savelist();
    },[lists]);
    return(
        <MainLayout>
            <Todo lists={lists} addlist={addlist} removeListItem={removeListItem}></Todo>
        </MainLayout>
        
    );
}

export default TodoComponent;
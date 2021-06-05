

const Todo = (props) => {

    const changeInput = (event) => {
        if (event.key==='Enter'){
            props.addlist(event.target.value);
            event.target.value='';
        }
    }
    const askRemoveItem=(event)=>{
        //물어보기 확인-true 취소-false
        if(window.confirm('삭제하시겠습니까?')){
            console.log(event.target.dataset.id);
            //js에선 배열[ㅁㄴㅇㄹ][ㅇㅇ]를 배열.ㅁㄴㅇㄹ.ㅇㅇ식으로 쓴다함(빠르대)
            props.removeListItem(parseInt(event.target.dataset.id));
        }
    }

    return (
        <div>
            <input type='text' onKeyPress={changeInput}/>
            <div>

                {
                    props.lists.map((list,index)=>{
                        return(
                            <div onClick={askRemoveItem} data-id={index}>{list}</div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Todo;
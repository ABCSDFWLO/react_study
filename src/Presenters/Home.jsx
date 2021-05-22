
const Home = (props) => {
    return (
        <div>
            <div>
                {
                    props.likes.map((item)=>{
                        return(
                            <div>
                                <span>
                                    {item.title}
                                </span>
                                <p>
                                    {item.content}
                                </p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Home;
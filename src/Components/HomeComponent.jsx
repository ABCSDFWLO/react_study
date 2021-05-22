import MainLayout from '../Layout/MainLayout';
import Home from '../Presenters/Home';



const HomeComponent = () => {
    const likes =[
        {
            title:'1',
            content:'그렇다',
        },
        {
            title:'2',
            content:'그렇다',
        },
        {
            title:'3',
            content:'그렇다',
        },
        {
            title:'4',
            content:'그렇다',
        },
        {
            title:'5',
            content:'그렇다',
        }
    ];

    return(
        <MainLayout>
            <Home likes={likes}></Home>
        </MainLayout>
    );
}

export default HomeComponent;
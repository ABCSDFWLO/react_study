import MainHeader from './MainHeader';

const MainLayout = ({children}) => {
    return(
        <div>
            <MainHeader></MainHeader>
            {children}
        </div>
    );
}

export default MainLayout;
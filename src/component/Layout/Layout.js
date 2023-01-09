import { Fragment } from 'react';
import Header from './Header';
import Home from './home';
import './Layout.css';

const Layout = (props) => {
    return(
        <Fragment>
            <Header />
            <Home />
            <main className='main'>{props.children}</main>
        </Fragment>
    )
}

export default Layout;
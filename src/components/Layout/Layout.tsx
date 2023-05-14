
import Header from '../Header/Hearder';
import Footer from '../Footer/Footer';
import Router from '../../router/Router';
import './layout.scss';

const Layout = () => {
  return (
    <>
      <Header></Header>
      <div className='main-content'>
        <Router></Router>
      </div>
      <Footer></Footer>
    </>
  )
}

export default Layout;
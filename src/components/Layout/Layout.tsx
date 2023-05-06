
import Header from '../Header/Hearder';
import Footer from '../Footer/Footer';
import Router from '../../router/Router';

const Layout = () => {
  return (
    <>
      <Header></Header>
      <div>
        <Router></Router>
      </div>
      <Footer></Footer>
    </>
  )
}

export default Layout;
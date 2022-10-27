import { Fragment } from 'react';

import MainHeader from './header';
import Footer from './footer';

function Layout(props) {
  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
}

export default Layout;
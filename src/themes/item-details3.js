import React, { Component } from 'react';

import Header from '../components/Header/Header';
// import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import ItemDetail from '../components/ItemDetails/ItemDetails3';

import Footer from '../components/Footer/Footer';
// import ModalSearch from '../components/Modal/ModalSearch';
// import ModalMenu from '../components/Modal/ModalMenu';
import Scrollup from '../components/Scrollup/Scrollup';

class ItemDetails3 extends Component {
    render() {
        return (
            <div className="main">
                <Header />
                {/* <Breadcrumb title="Item Details" subpage="Explore" page="Item Details" /> */}
                <ItemDetail />
                
                <Footer />
                {/* <ModalSearch />
                <ModalMenu /> */}
                <Scrollup />
            </div>
        );
    }
}

export default ItemDetails3;
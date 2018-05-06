import React from 'react';
import {Route} from 'react-router-dom';
import Nav from './nav';
import Welcome from './welcome';
import OurMacarons from './our_macarons';
import gift_parties from './gift_parties';
import contact from './contact'
function App(){
    return( 
        <div className="container">
            <Nav/>
            <Route exact path="/" component={Welcome} />
            <Route  path="/our_macarons" component={OurMacarons} />
            <Route  path="/gift_parties" component={gift_parties} />
            <Route  path="/contact" component={contact} />

        </div>
    )
}
export default App

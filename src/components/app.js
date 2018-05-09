
import React from 'react';
import MyAccountPicture from '../assets/images/user_acount.png';
import CreateAccountPicture from '../assets/images/create_account.png';
import CheckProductSafety from '../assets/images/check_product_safety.png';
import LookIngredients from '../assets/images/look_up_ingredients.png';
import DiscoverProducts from '../assets/images/discover_products.png';
import MethodologyPicutre from '../assets/images/discover_products.png';

import './stylesheet.css'

function ExpandedMenu() {
    return(
        <div>
            <div className="ExpandedMenuSize">
                <div className="MyAccount">
                    <div className="divPicture">
                        <img className="ExpandMenuImage" src={MyAccountPicture}/>
                    </div>
                    <span className="AccountFont">My Account</span>
                </div>
                <div className="CreateAccount">
                    <div className="divPicture CreateAccountPictureDiv">
                        <img className="ExpandMenuImage" src={CreateAccountPicture}/>
                    </div>
                    <span className="AccountFont">Create Account</span>
                </div>
                <div className="FeatureSetLink">
                    <div className="Check_Product_Safety">
                        <div className="divPictureFeature">
                            <img className="ExpandMenuImage" src={CheckProductSafety}/>
                        </div>
                        <div className=" FeatureSetFont LongTextFeatureSet">Check Product Safety</div>
                    </div>
                    <div className="Look_Up_Ingrediants">
                        <div className="divPictureFeature">
                            <img className="ExpandMenuImage" src={LookIngredients}/>
                        </div>
                        <span className=" FeatureSetFont">Search Ingrediants</span>
                    </div>
                    <div className="DiscoverProducts">
                        <div className="divPicture">
                            <img className="ExpandMenuImage" src={DiscoverProducts}/>
                        </div>
                        <span className=" FeatureSetFont">Discover Products</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ExpandedMenu;

//  style="background-color:lavender;"
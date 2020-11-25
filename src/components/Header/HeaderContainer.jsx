import React, { Component } from 'react';
import Header from './Header';
import {createHeaderElements, createHeaderLogo} from './HeaderBuilder'


class HeaderContainer extends Component{

    render(){
        return(
            <div>
                {renderHeader(this.props.headerElements)}
            </div>
        );
    }w
}

export default HeaderContainer;

export const renderHeader = (HeaderJson) => {
    if(!HeaderJson ){
        return <div>error Loading header</div>;
    }
    try{
        const headerElements = createHeaderElements(HeaderJson.headerElements);
        const headerlogo = createHeaderLogo(HeaderJson.logo);


        return <Header logo={headerlogo} headerElements={headerElements} data-test='header-component' />;

    }catch(error){
        console.log(error)
        return <div>error Loading header</div>;
        
    }
}
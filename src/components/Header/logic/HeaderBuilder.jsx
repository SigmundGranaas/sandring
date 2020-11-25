import React from 'react'
import {Link} from 'react-router-dom'

export function createHeaderElements(ElementList) {
    if(!ElementList){
       throw Error('No nav elements in arguments') 
    }

    const headerElements = 
    (<ul className="nav-elements" data-test="nav-elements">
        {
          ElementList.map((headerElement) =>  {
              return (<Link data-test={headerElement.test} to={headerElement.link} key={headerElement.name} className="header-links" >
                        <li className="header-links">
                            {headerElement.name}
                        </li>
                    </Link>);
          })
        }
    </ul>);
    return headerElements;
}


export function createHeaderLogo (headerLogo){
    if(!headerLogo){
        throw Error('No logo element in arguments')
    }
    const logoElement = (
    <ul className="nav-list-elements">
        <Link to={headerLogo.link} className="header-links" data-test="logo-link">
            <li>
                <h1 className="header-logo">
                    {headerLogo.name}
                </h1>
            </li>
        </Link>
    </ul>);

return logoElement;
}

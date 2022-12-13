import React from 'react';
import { NavigationDots, SocialMedia } from '../components';

const AppWrap = (Component, idName, classNames) => function HOC() {
  return (
    <div id={idName} className={` ${classNames}`} >     
        <div className='my__appWrap app__flex'>
            <Component />
            <NavigationDots active={idName} />
        </div>        
    </div>
  )
}

export default AppWrap
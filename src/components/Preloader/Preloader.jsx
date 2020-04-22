import React from 'react';
import preloaderimg from '../../assets/image/preloader.svg'

let Preloader = (props) => {
    return (
        <div>
            <img src={preloaderimg} alt="preloader"/>
        </div>
    )
}

export default Preloader;
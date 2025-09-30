import React from 'react';
import '../styles/Button.css';

const Loader = ( props ) => {
    return (
        <div className="loader">
            <div className="spinner flex justify-center">
                {/* Replace this with loading animation of each letter of logo and full logo afterwards */}
                <img src="src/assets/img/retroverse-logo-long.jpg" alt="logo" className="w-3/5" />
            </div>
            <div className='m-10 flex justify-center'>
                <button className="start-button" onClick={props.onStart} >Ready to begin?</button>
            </div>
            
        </div>
    );
}

export default Loader;
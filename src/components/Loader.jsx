import React from 'react';

const Loader = () => {
    return (
        <div className="loader">
            <div className="spinner flex justify-center mb-12">
                {/* Replace this with loading animation of each letter of logo and full logo afterwards */}
                <img src="src/assets/png/retroverse-lilas.png" alt="logo" className="w-32" />
            </div>
            <button className="start-button" onClick={() => {}} >Ready to begin?</button>
        </div>
    );
}

export default Loader;
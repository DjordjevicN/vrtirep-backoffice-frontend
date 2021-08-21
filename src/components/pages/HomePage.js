import React from 'react';
import { Redirect } from 'react-router-dom';



const authUser = true

function HomePage() {
    if (!authUser) {
        return <Redirect to='/login' />
    }

    return (
        <div>
            homepage
        </div>
    );
}

export default HomePage;

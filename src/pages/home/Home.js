import React from 'react'
import CommunityPage from './CommunityPage'
import HomeHeaderImg from './HomeHeaderImg'
import FeaturedProducts from './FeaturedProducts'
import HomeFollowUs from './HomeFollowUs'


function Home() {
    return (
        <div>
            <HomeHeaderImg/>
            <FeaturedProducts/>
            <CommunityPage/>
            <HomeFollowUs/>
        </div>
    )
}

export default Home

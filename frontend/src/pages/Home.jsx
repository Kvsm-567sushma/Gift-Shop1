import React from 'react'
import HomeCarousel from '../components/HomeCarousel'
import HomeCard from "../components/HomeCard"
import SocialCard from "../components/SocialCard"
const Home = () => {
  return (
    <div className="flex flex-col justify-start items-start gap-8 w-screen h-full">

        <HomeCarousel/>
        <HomeCard />
        <SocialCard />
    </div>
  )
}

export default Home
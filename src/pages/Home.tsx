import React from 'react'
import SideBar from '../components/sidebar/SideBar'
import HeaderSection from '../components/sections/HeaderSection'

const Home = () => {
	return (
		<div>
			<SideBar />
			<div className='flex flex-col items-end xl:items-center w-full p-5 md:pl-[220px] xl:pl-[270px] gap-36'>
				<HeaderSection
					title='Where do you want to go ?'
					subtitle='Explore the best destinations in the world'
					name='canal of panama'
					rate={4.3}
					favorite
					price={70}
				/>
				<div className='bg-[#E8ECF4] w-full h-screen rounded-2xl'></div>
			</div>
		</div>
	)
}

export default Home

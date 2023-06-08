import HeaderSection from '../components/sections/HeaderSection'
import headerImg from '../assets/headerImg.jpg'
import Sidebar from '../components/sidebar/SideBar'

const Home = () => {
	return (
		<div>
			<Sidebar />
			<div className='flex flex-col items-end xl:items-center w-full p-5 md:pl-[220px] xl:pl-[270px] gap-36'>
				<HeaderSection
					title='Where do you want to go ?'
					subtitle='Explore the best destinations in the world'
					image={headerImg}
				/>
				<div className='bg-[#E8ECF4] w-full h-screen rounded-2xl'></div>
			</div>
		</div>
	)
}

export default Home

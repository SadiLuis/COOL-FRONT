import { useParams } from 'react-router-dom'

import { useSelector } from 'react-redux'
import { selectDestinations } from '../../features/destinationSlice'

import DetailHeader from '../details/DetailHeader'
import DetailInfo from '../details/DetailInfo'
import BookingCard from '../details/BookingCard'
import ListenAgent from '../details/ListenAgent'
import Gallery from '../details/Gallery'
import Map from '../Map'

const DetailMainSection = () => {
	const { _id } = useParams()
	const destinations = useSelector(selectDestinations)

	const listing = destinations.find((item) => item._id === _id)

	return (
		<div className='max-w-screen-2xl mx-auto md:mt-12'>
			<DetailHeader listing={listing} />
			<div className='grid grid-cols-1 xl:grid-cols-7 md:gap-10 py-16'>
				<DetailInfo
					name={listing?.title}
					rating={listing?.rating}
					description={listing?.description}
				/>
				<div className='order-first xl:order-last lg:col-span-3'>
					<BookingCard individualPrice={listing?.individualPrice} />
				</div>
			</div>
			<div className='grid grid-cols-1 xl:grid-cols-9 md:gap-10 py-0 xl:py-10'>
				<div className='xl:col-span-6 2xl:col-span-5'>
					<ListenAgent />
				</div>
			</div>
			<hr className='w-full xl:w-4/6 2xl:w-3/6  mx-2 m-10' />
			{/* {listing?.galleryImage?.length > 2 && (
				<div className='grid grid-cols-1 xl:grid-cols-9 md:gap-10 py-0 xl:py-10'>
					<div className='xl:col-span-7'>
						<Gallery listing={listing} />
					</div>
				</div>
			)}
			{listing?.galleryImage > 2 && (
				<hr className='w-full xl:w-4/6 2xl:w-3/6 mx-2 m-10' />
			)} */}
			<div className='flex flex-col py-10 gap-10'>
				<h3 className='text-3xl font-bold'>Maps</h3>
				<Map />
			</div>
		</div>
	)
}

export default DetailMainSection

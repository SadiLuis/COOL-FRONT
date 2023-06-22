import { useDispatch, useSelector } from 'react-redux'
import { fetchDestinations, selectDestinations, selectError, selectLoading } from '../../features/destinationSlice'
import { categories } from '../categories/categories'

import HeaderSection from './HeaderSection'
import CategoryBox from '../categories/CategoryBox'
import ListingCard from '../listings/ListingCard'
import { useEffect, useState } from 'react'
import { GiRetroController } from 'react-icons/gi'
import CategoryInput from '../inputs/CategoryInput'


const DiscoverMainSection = () => {
	const destinations = useSelector(selectDestinations)
	const discover = destinations[Math.floor(Math.random() * destinations.length)]
	const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
	const [checkboxValues, setCheckboxValues] = useState([])
	const loading = useSelector(selectLoading);
	const error = useSelector(selectError);
	const dispatch = useDispatch()
	
	useEffect(() => {
		dispatch(fetchDestinations())
	}, [dispatch])
	if (loading) {
		return <div>Cargando destinos...</div>;
	  }
	  if (error) {
		return <div>Error al cargar destinos: {error} </div>;
	  }
	
	const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value
		const isChecked = e.target.checked
		if (isChecked) {
			setCheckboxValues([...checkboxValues, value])
		} else {
			setCheckboxValues(checkboxValues.filter((val) => val !== value))
		}
	}
	console.log(checkboxValues)
	
	const filteredDestinations = destinations.filter((destination) => {
		if (checkboxValues.length === 0) {
			return true;
		} else {
			return checkboxValues.includes(destination.categories)
		}
	})

	/* const handleCategorySelect = (label: string) => {
		setSelectedCategories((prevSelectedCategories) => {
			if (prevSelectedCategories.includes(label)) {
				return prevSelectedCategories.filter((category) => category != label && console.log());
			} else {
				return [...prevSelectedCategories, label];
			}
		})
	}; */


	return (
		<div className='flex flex-col w-full'>
			<div className='flex flex-col gap-4 items-center pb-8'>
				<h2 className='text-6xl font-bold'>Discover</h2>
				<h3 className='text-3xl'>Choose your favorite eperience</h3>
			</div>
			<HeaderSection
				id={discover?._id}
				name={discover?.title}
				rate={discover?.rating}
				favorite
				price={discover?.individualPrice}
				image={discover?.gallery[0]}
			/>
			<div className='px-5 pt-28'>
				<h3 className='text-2xl font-semibold'>Categories</h3>
				<div className='flex flex-row items-center justify-between pt-5'>
					{categories.map((item) => (
						<ul key={item.label}>
						<CategoryInput 
							handleChange={handleCheckboxChange}
							id={item.label}
							name={item.label}
							value={item.label}
							label={item.label}
							icon={item.icon}
							/>
							</ul>
					))}
				</div>
			</div>

			<div className='px-5 pt-10'>
				<h2 className='text-2xl font-semibold'>Trending adventure</h2>
				<div className='pt-10 px-8 grid grid-cols-1 min-[950px]:grid-cols-2 min-[1200px]:grid-cols-3 min-[1440px]:grid-cols-4 gap-11'>
					{filteredDestinations.map((listing) => {
						return <ListingCard key={listing?._id} data={listing} />
					})}
				</div>
			</div>
		</div>
	)
}

export default DiscoverMainSection

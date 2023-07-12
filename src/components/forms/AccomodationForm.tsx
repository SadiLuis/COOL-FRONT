import React from 'react'

import { CgInfo } from 'react-icons/cg'
import { FiPackage } from 'react-icons/fi'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { LuCalendarCheck } from 'react-icons/lu'
import { MdAttachMoney, MdOutlineTitle } from 'react-icons/md'
import { RxActivityLog } from 'react-icons/rx'
import { TbFileDescription, TbMoneybag } from 'react-icons/tb'

import { createActivityFormData } from '../../features/createActivitySlice'
import { updateActivityFormData } from '../../features/updateActivitySlice'

import Input from '../inputs/Input'
import Dropdown from '../dropdown'

interface AccomodationFormProps {
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	// form?: createAccomodationFormData
	// updateForm?: updateAccomodationFormData
	data?: {
		title?: string
		description?: string
		location?: string
		videoLink?: string
		individualPrice?: string
		groupPrice?: string

		starterPack?: string
		startTime?: string
		endTime?: string
	}
}

const AccomodationForm: React.FC<AccomodationFormProps> = ({
	handleChange,
	form,
	updateForm,
	data,
}) => {
	return (
		<div className='flex flex-col items-center justify-center gap-12 transition w-full'>
			<div className='w-full flex flex-col items-center justify-center lg:flex-row gap-8'>
				<div className='flex flex-col gap-10 w-full'>
					<div className='flex items-center gap-5 text-[#686868]'>
						<MdAttachMoney size={25} />
						<label>Price per night</label>
					</div>
					<div className='relative w-full'>
						<Input
							placeholder={data?.individualPrice || 'Price activity indivial'}
							id='individualPrice'
							name='individualPrice'
							handleChange={handleChange}
							value={updateForm?.individualPrice || form?.individualPrice}
						/>
					</div>
				</div>
				<div className='flex flex-col gap-10 w-full'>
					<div className='flex items-center gap-5 text-[#686868]'>
						<TbMoneybag size={25} />
						<label>Price per week</label>
					</div>
					<Input
						placeholder={data?.groupPrice || 'Price activity groups'}
						id='groupPrice'
						name='groupPrice'
						handleChange={handleChange}
						value={updateForm?.groupPrice || form?.groupPrice}
					/>
				</div>
			</div>

			<div className='w-full flex flex-col items-center justify-center lg:flex-row gap-8'>
				<div className='flex flex-col items-center justify-center gap-12 transition w-full'>
					<div className='w-full flex flex-col items-center justify-center lg:flex-row gap-8'>
						<div className='flex flex-col gap-10 w-full'>
							<div className='flex items-center gap-5 text-[#686868]'>
								<MdOutlineTitle size={25} />
								<label>Accomodation</label>
							</div>
							<Input
								placeholder={data?.title || 'Title activity'}
								id='title'
								name='title'
								handleChange={handleChange}
								value={updateForm?.title || form?.title}
							/>
						</div>

						<div className='flex flex-col gap-10 w-full'>
							<div className='flex items-center gap-5 text-[#686868]'>
								<RxActivityLog size={20} />
								<label>Video Link</label>
							</div>
							<Input
								placeholder={data?.videoLink || 'Video URL'}
								id='videoLink'
								name='videoLink'
								handleChange={handleChange}
								value={updateForm?.videoLink || form?.videoLink}
							/>
						</div>
					</div>
					<div className='w-full flex flex-col items-center justify-center lg:flex-row gap-8'>
						<div className='flex flex-col gap-10 w-full'>
							<div className='flex items-center gap-5 text-[#686868]'>
								<LuCalendarCheck size={25} />
								<label>Start Time</label>
							</div>
							<Input
								type='datetime-local'
								id='startTime'
								name='startTime'
								handleChange={handleChange}
								value={updateForm?.startTime || form?.startTime}
							/>
						</div>
						<div className='flex flex-col gap-10 w-full'>
							<div className='flex items-center gap-5 text-[#686868]'>
								<LuCalendarCheck size={25} />
								<label>End Time</label>
							</div>
							<Input
								type='datetime-local'
								id='endTime'
								name='endTime'
								handleChange={handleChange}
								value={updateForm?.endTime || form?.endTime}
							/>
						</div>
					</div>
				</div>
			</div>

			<div className='flex flex-col gap-10 w-full h-full'>
				<div className='flex items-center gap-5 text-[#686868]'>
					<TbFileDescription size={25} />
					<label>Description</label>
				</div>
				{data?.description ? <p className='text-zinc-500'>{data?.description}</p> : null}
				<Input
					label={
						data?.description ? 'Update Adventure description' : 'Adventure description'
					}
					id='description'
					name='description'
					handleChange={handleChange}
					value={updateForm?.description || form?.description}
					sizeH={44}
				/>
			</div>
		</div>
	)
}

export default AccomodationForm
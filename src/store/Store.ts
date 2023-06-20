import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import registerReducer from '../features/RegisterSlice'
import counterSlice from '../features/CreatedSlice'
import LoginSlice from '../features/LoginSlice'
import authSlice from '../features/authSlice'
import createAdventureSlice from '../features/createAdventureSlice'
import destinationSlice from '../features/destinationSlice'
import usersSlice from '../features/usersSlice'

export const store = configureStore({
	reducer: {
		counter: counterSlice,
		register: registerReducer,
		login: LoginSlice,
		auth: authSlice,
		createAdventure: createAdventureSlice,
		destination: destinationSlice,
		user: usersSlice,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>

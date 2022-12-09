import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            const newArr = [...state]
            if (action.payload === 'up') {
               return newArr.sort((a, b) => a.name > b.name ? 1 : -1)
            }
            if (action.payload === 'down') {
                return   newArr.sort((a, b) => a.name < b.name ? 1 : -1)
            }


            return state
        }
        case 'check': {
            const lucky = state.filter(function(payload) {
                return payload.age > 18;
            });
            return lucky // need to fix

        }
        default:
            return state
    }
}

export default function mapDataReducer(state = [], action) {
    switch (action.type) {

        case 'addMapData':
            return [...state,action.payload]
        case 'clearMapData':
            return []
        default:
            return state
    }
}
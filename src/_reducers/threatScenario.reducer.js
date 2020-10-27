const initialState = { anchor: 'left',
    threatScenario: [],
    open: false,
    title: '',  
    description: '',
    relatedAsset: '',
    clasification: '',
    impact: '',
    //riskLevel: '',
    likelihood: ''
 };


export function threatScenario(state = initialState, action) {
    switch (action.type) {
        case 'FETECHED_ALL_THREATSCENARIO':
            return {
            ...state,
            threatScenario: action.threatScenario
            };
        case 'THREATSCENARIO_DETAIL':
            return {
                ...state,
                id: action.id,  
                title: action.title,
                description: action.description,
                relatedAsset: action.relatedAsset,
                clasification: action.clasification,
                impact: action.impact,
                riskLevel: action.riskLevel,
                likelihood: action.likelihood
            };
        case "USER_UPDATED":
            return state;
        case "HANDLE_ON_CHANGE":
            return {
                ...state,
                [action.props]: action.value
            };    
        default:
            return state
    }
  }
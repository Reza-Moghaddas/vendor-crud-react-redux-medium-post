import { userService } from '../_services/';
import { history } from '../_helpers';

export const threatScenarioAction = {
    getThreatScenario,
    getThreatScenarioById,
    onChangeProps,
    editThreatScenarioInfo,
    createThreatScenario,
    deleteThreatScenarioById
};

function getThreatScenario(){
    return dispatch => {
        let apiEndpoint = 'threatscenarios';
        userService.get(apiEndpoint)
        .then((response)=>{
            console.log(response);
            dispatch(changeThreatScenariosList(response.data.data));
        }).catch((err)=>{
            console.log("Error");
            console.log(err);
        })
    };
}

function createThreatScenario(payload){
    return dispatch => {
        let apiEndpoint = 'threatscenarios/';
        userService.post(apiEndpoint, payload)
        .then((response)=>{
            dispatch(createUserInfo());
            history.push('/threatScenario');
        }) 
    }
}

function getThreatScenarioById(id){

    return dispatch => {
        let apiEndpoint = 'threatscenarios/'+ id;
        userService.get(apiEndpoint)
        .then((response)=>{
            console.log(response.data.data);
            dispatch(editThreatScenariosDetails(response.data.data));
        })
    };
}

function onChangeProps(props, event){
    return dispatch =>{
        dispatch(handleOnChangeProps(props, event.target.value));
    }
}

function editThreatScenarioInfo(id, payload){
    return dispatch => {
        let apiEndpoint = 'threatscenarios/'+ id;
        userService.put(apiEndpoint, payload)
        .then((response)=>{
            console.log(response.data.data);
            dispatch(updatedUserInfo());
            history.push('/threatScenario');
        }) 
    }
}

function deleteThreatScenarioById(id){
    return dispatch => {
        let apiEndpoint = 'threatscenarios/'+ id;
        userService.deleteDetail(apiEndpoint)
        .then((response)=>{
            dispatch(deleteThreatScenariosDetails());
            dispatch(threatScenarioAction.getThreatScenario());
        })
    };
}

export function changeThreatScenariosList(threatScenario){
    return{
        type: "FETECHED_ALL_THREATSCENARIO",
        threatScenario: threatScenario
    }
}

export function handleOnChangeProps(props, value){
    return{
        type: "HANDLE_ON_CHANGE",
        props: props,
        value: value
    }
}

export function editThreatScenariosDetails(threatScenario){
    return{
        type: "THREATSCENARIO_DETAIL",
        id: threatScenario.id,
        title: threatScenario.title,
        description: threatScenario.description,
        relatedAsset: threatScenario.relatedAsset,
        clasification: threatScenario.clasification,
        impact: threatScenario.impact,
        likelihood: threatScenario.likelihood,
        riskLevel: threatScenario.riskLevel
    }
}

export function updatedUserInfo(){
    return{
        type: "USER_UPDATED"
    }
}

export function createUserInfo(){
    return{
        type: "USER_CREATED_SUCCESSFULLY"
    }
}

export function deleteThreatScenariosDetails(){
    return{
        type: "DELETED_THREATSCENARIO_DETAILS"
    }
}
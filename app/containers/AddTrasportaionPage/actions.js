import { 
  GET_NEW_TRANSPORTATION_ID, 
  GET_NEW_TRANSPORTATION_ID_SUCCESS, 
  GET_NEW_TRANSPORTATION_ID_ERROR, 
  ADD_NEW_TRANSPORTATION,
  ADD_NEW_TRANSPORTATION_SUCCESS, 
  ADD_NEW_TRANSPORTATION_ERROR } from './constants';


export function getNewTransportationId(){
  return {
    type: GET_NEW_TRANSPORTATION_ID,
  };
};

export function getNewTransportationIdSuccess(newId){
  return {
    type: GET_NEW_TRANSPORTATION_ID_SUCCESS,   
    newId 
  };
};

export function getNewTransportationIdError(error){
  return {
    type: GET_NEW_TRANSPORTATION_ID_ERROR,   
    error 
  };
};

export function addNewTransportation(newTransportation){
  return {
    type: ADD_NEW_TRANSPORTATION,   
    newTransportation 
  };
};

export function addNewTransportationSuccess(newTransportation){
  return {
    type: ADD_NEW_TRANSPORTATION_SUCCESS,   
    newTransportation 
  };
};

export function addNewTransportationError(){
  return {
    type: ADD_NEW_TRANSPORTATION_ERROR,
  };
};

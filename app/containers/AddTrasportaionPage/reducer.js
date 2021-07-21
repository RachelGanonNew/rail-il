import produce from 'immer';
import { DEFAULT_ACTION, GET_NEW_TRANSPORTATION_ID, GET_NEW_TRANSPORTATION_ID_SUCCESS, GET_NEW_TRANSPORTATION_ID_ERROR,
  ADD_NEW_TRANSPORTATION_SUCCESS, ADD_NEW_TRANSPORTATION_ERROR } from './constants';
export const initialState = {
  newTransportation:{
    error: false,
    id:0,
    customerId: '',
    name:'',
    fromLat:'',
    fromLng:'',
    toLat:'',
    toLng:'',
  }
};

const addTrasportaionPageReducer = (state = initialState, action) =>
  produce(state, ( draft ) => {
    switch (action.type) {

      case DEFAULT_ACTION:
        break;

      case GET_NEW_TRANSPORTATION_ID:
        draft.newTransportation.error = false;
        break;
      
      case GET_NEW_TRANSPORTATION_ID_SUCCESS:
        draft.newTransportation.id = action.newId;
        draft.newTransportation.error = false;
        break;
            
      case GET_NEW_TRANSPORTATION_ID_ERROR:
      case ADD_NEW_TRANSPORTATION_ERROR:
        draft.newTransportation.id = 0;
        draft.newTransportation.error = true;
        break;

      case ADD_NEW_TRANSPORTATION_SUCCESS:
        window.open("/transportaionList", "_self");
        break
      
      default:
        break;
    }
  });

export default addTrasportaionPageReducer;

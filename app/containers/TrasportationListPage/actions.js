
import { LOAD_TRANSPORTATIONS, LOAD_TRANSPORTATIONS_SUCCESS, LOAD_TRANSPORTATIONS_ERROR } from './constants';

export function loadTransportations() {
  return {
    type: LOAD_TRANSPORTATIONS,
  };
}

export function transpotrationLoaded(transportations) {
  return {
    type: LOAD_TRANSPORTATIONS_SUCCESS,
    transportations,
  };
}

export function transpotrationLoadingError(error) {
  return {
    type: LOAD_TRANSPORTATIONS_ERROR,
    error,
  };
}
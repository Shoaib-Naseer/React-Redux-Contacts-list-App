import {
  ADD_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT,
  RESET_CONTACT,
} from './actionTypes';

export const addContact = ({ id, name, email, phone }) => {
  return {
    type: ADD_CONTACT,
    payload: {
      id,
      name,
      email,
      phone,
    },
  };
};

export const updateContact = ({ id, name, email, phone }) => {
  return {
    type: UPDATE_CONTACT,
    payload: {
      id,
      name,
      email,
      phone,
    },
  };
};

export const deleteContact = (id) => {
  return {
    type: DELETE_CONTACT,
    payload: {
      id,
    },
  };
};

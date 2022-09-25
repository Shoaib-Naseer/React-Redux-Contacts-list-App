import {
  ADD_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT,
} from '../actions/actionTypes';

const initialState = [
  { id: 0, name: 'Raman Sharma', email: 'email@email.com', phone: 1234567890 },
  { id: 1, name: 'Test Name', email: 'test@test.com', phone: 4567891230 },
];

export const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      state.push(action.payload);
      return state;
    case DELETE_CONTACT:
      const contactFilter = state.filter((contact) =>
        contact.id === action.payload.id ? null : contact
      );
      state = contactFilter;
      return state;
    case UPDATE_CONTACT:
      const updateContact = state.map((contact) =>
        contact.id === action.payload.id ? action.payload : contact
      );
      state = updateContact;
      return state;
    case 'RESET_CONTACT':
      state = [{ name: null, email: null, phone: null }];
      return state;
    default:
      return state;
  }
};

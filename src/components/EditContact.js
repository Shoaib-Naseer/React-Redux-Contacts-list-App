import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { updateContact } from '../actions/actions';

const EditContact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const { id } = useParams();
  const contacts = useSelector((state) => state);
  const contact = contacts.find((contact) => contact.id == id);
  const history = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    setName(contact.name);
    setEmail(contact.email);
    setPhone(contact.phone);
  }, [contact]);

  const clickHandler = (e) => {
    e.preventDefault();
    if (!name || !email || !phone) {
      toast.warn('Please fill out all fields');
    }
    const data = { id: parseInt(id), name, email, phone };
    dispatch(updateContact(data));
    toast.success('successfully Updated');
    history('/');
  };
  return (
    <>
      <h2 className="display-4 text-center">Edit Contact</h2>
      <form onSubmit={clickHandler}>
        <div className="container p-5 shadow">
          <div className="form-group my-3">
            <label for="name" className="my-2">
              NAME
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group my-3">
            <label for="email" className="my-2">
              EMAIL
            </label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group my-3">
            <label for="phone" className="my-2">
              PHONE
            </label>
            <input
              type="text"
              id="phone"
              value={phone}
              className="form-control"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="form-group my-3">
            <ToastContainer />
            <button type="submit" className="btn btn-dark me-2">
              Update
            </button>

            <Link to="/" className="btn btn-light">
              Back
            </Link>
          </div>
        </div>
      </form>
    </>
  );
};

export default EditContact;

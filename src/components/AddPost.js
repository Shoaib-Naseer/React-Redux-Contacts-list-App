import { ToastContainer, toast } from 'react-toastify';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { addContact } from '../actions/actions';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const AddPost = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setphone] = useState('');

  const student = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !name || !phone) {
      return toast.warn('Please fill out fields');
    } else {
      const data = {
        id:
          student.length > 0 ? parseInt(student[student.length - 1].id + 1) : 0,
        name,
        email,
        phone,
      };
      dispatch(addContact(data));
      toast.success('Record Added Successsfully');
      history('/');
    }
  };
  return (
    <>
      <div className="container-fluid">
        <h1 className="text-center display-2 text-dark">Add Post</h1>
        <div className="row">
          <div className="col-md-6 mx-auto shadow my-2 p-4 ">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  className="form-control my-3"
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control my-3"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control my-3"
                  type="number"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setphone(e.target.value)}
                />
              </div>
              <div className="form-group">
                <ToastContainer />
                <input
                  type="submit"
                  className="btn btn-block btn-dark "
                  value="Add Student"
                />
                <Link to="/" type="button" className="btn btn-light">
                  Back
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddPost;

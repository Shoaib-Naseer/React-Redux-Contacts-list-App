import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { deleteContact } from '../actions/actions';

const Home = () => {
  const contacts = useSelector((state) => state);
  const dispatch = useDispatch();

  const deletehandler = (id) => {
    dispatch(deleteContact(id));
    toast.success('successfully Deleted');
  };
  return (
    <div className="container">
      <div class="row d-flex flex-column">
        <div className="col-md-12 text-right">
          <Link
            to="/add-contact"
            type="button"
            class="btn btn-outline-dark my-5 "
          >
            Add Contact
          </Link>
        </div>
        <div className="col-md-10">
          <table className="table table-hover   ">
            <thead className="thead-dark">
              <tr>
                <th>Id</th>
                <th scope="col">{contacts[0].name}</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((element) => [
                <tr>
                  <td>{element.id + 1}</td>
                  <td>{element.name}</td>
                  <td>{element.email}</td>
                  <td>{element.phone}</td>

                  <td>
                    <Link
                      to={`/edit/${element.id}`}
                      className="btn btn-primary me-1"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => deletehandler(element.id)}
                      className="btn btn-danger "
                    >
                      Delete
                    </button>
                  </td>
                </tr>,
              ])}
            </tbody>
          </table>
          <div className="container bg-dark text-light">
            {contacts.map((data) => {
              <h1>{data.name}</h1>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/addContact.css";

export const AddContact = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { store, actions } = useContext(Context);

  const [full_name, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [id, setID] = useState("");

  useEffect(() => {
    if (params.index) {
      const contact = store.contacts.find(
        (contact, idx) => idx == params.index
      );
      setFullName(contact.full_name);
      setEmail(contact.email);
      setAddress(contact.address);
      setPhone(contact.phone);
      setID(contact.id);
    }
  }, []);

  const addContact = () => {
    let objContact = {
      full_name: full_name,
      email: email,
      agenda_slug: "biancas",
      address: address,
      phone: phone,
    };
    actions.uploadContact(objContact);
    navigate("/");
  };

  const editContact = () => {
    let objContact = {
      full_name: full_name,
      email: email,
      agenda_slug: "biancas",
      address: address,
      phone: phone,
      id: id,
    };
    actions.editContact(objContact);
    navigate("/");
  };

  return (
    <div className="center-content m-5">
      <form className="row g-3">
        <h1 className="title">Add a new contact</h1>
        <div className="col-12">
          <label htmlFor="inputFullName" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            id="inputFullName"
            placeholder="Full Name"
            onChange={(e) => setFullName(e.target.value)}
            value={full_name}
          ></input>
        </div>
        <div className="col-12">
          <label htmlFor="inputEmail" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control m-0"
            id="inputEmail"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          ></input>
        </div>
        <div className="col-12">
          <label htmlFor="inputPhone" className="form-label">
            Phone
          </label>
          <input
            type="number"
            className="form-control"
            id="inputPhone"
            placeholder="Enter Phone Number"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          ></input>
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="Enter Address"
            onChange={(e) => setAddress(e.target.value)}
            value={address}
          ></input>
        </div>
        <div className="col-12 d-flex justify-content-center p-2">
          {" "}
          {/* Centrar button */}
          <button
            type="submit"
            className="btn btn-primary w-100"
            onClick={params.index ? editContact : addContact} >
            SAVE
          </button>
        </div>
        <Link to="/">
          <span>or get back to contacts</span>
        </Link>
      </form>
    </div>
  );
};
import React, { useState } from "react";
import TopNav from '../components/Navbar';
import { Form, Button, Alert } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import PlacesAutoComplete from "../components/PlacesAutoComplete";

const EditBusiness = () => {
  const { userId } = useParams();
  const navigate = useNavigate();

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [error, setError] = useState("");

  const [inputBusinessName, setBusinessName] = useState("");

  const [selectedLocation, setSelectedLocation] = useState(null);

  const [inputPhone, setPhone] = useState("");
  const [phoneIsValid, setPhoneIsValid] = useState(true);


  const saveBusinessInfo = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  
    if (phoneIsValid) {
      const userDocRef = doc(db, "users", userId);
      updateDoc(userDocRef, {
        "business.businessName": inputBusinessName,
        "business.phone": inputPhone,
        "business.address": selectedLocation
      })
        .then(() => {
          navigate("/Dashboard");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
        setError("Unable to save");
    }
  };
  
  // test to ensure phone number input is correct format
  const checkPhone = (e) => {
    const PHONE_REGEX = /^\d{3}-\d{3}-\d{4}$/; // regular expression for XXX-XXX-XXXX
    const value = e.target.value;
    setPhone(value);
    setPhoneIsValid(value === "" || PHONE_REGEX.test(value));
  };

  console.log(selectedLocation);

  return (
    <>
      <TopNav />
      <div className="container" id="main-content">
      {error && <Alert variant="danger">{error}</Alert>}
        <h1>Edit Business Information</h1>
        <Form onSubmit={saveBusinessInfo}>
          <Form.Group className="mb-3" controlId="BusinessName">
            <Form.Label>Business Name</Form.Label>
            <Form.Control type="text" value={inputBusinessName} onChange={(e) => setBusinessName(e.target.value)} required />
          </Form.Group>

          <Form.Group className="mb-3 address" controlId="Address">
          <Form.Label>Address</Form.Label>
          <PlacesAutoComplete setAddress={setSelectedLocation} />
        </Form.Group>

          <Form.Group className="mb-3" controlId="Phone">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="text" value={inputPhone} onChange={checkPhone} required />
            {!phoneIsValid && formSubmitted && (
                <Form.Text className="text-danger">
                Please enter a valid phone number in the format XXX-XXX-XXXX.
                </Form.Text>
            )}
          </Form.Group>
          <Button variant="primary" type="submit">
            Save Business Information
          </Button>
        </Form>

      </div>
    </>
  );
};

export default EditBusiness;
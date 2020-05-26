import React, { useState, useContext, useEffect } from "react";
import axios from "axios";

import { PrescriptionContext } from "../../Context/PresriptionContext";
import Button from "../UI/Button/Button";

import "./Prescription.scss";

const Prescription = () => {
  // const initialState = JSON.parse(localStorage.getItem("prescriptions")) || [];
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [notes, setNotes] = useState("");
  const [prescriptions, setPrescriptions] = useState([]);
  const { onCreatePrescription } = useContext(PrescriptionContext);

  useEffect(() => {
    allPrecriptions();
  }, []);

  const allPrecriptions = async () => {
    try {
      const prescriptionRes = await axios.get(
        "http://localhost:8081/api/prescription"
      );
      setPrescriptions(allPrecriptions.data);
      console.log(prescriptionRes.data);
    } catch (error) {
      console.log("No prescriptions found", error.message);
    }
  };

  const onPrescriptionSubmit = (e) => {
    e.preventDefault();
    const prescriptionInfo = {
      name: name,
      quantity: quantity,
      notes: notes,
    };
    onCreatePrescription(prescriptionInfo);
  };
  return (
    <>
      <div>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          required
        />
        <label htmlFor="name">Presription Name</label>
      </div>
      <div>
        <input
          type="number"
          name="quantity"
          value={quantity}
          onChange={(e) => {
            setQuantity(e.target.value);
          }}
          required
        />
        <label htmlFor="quantity">Quantity</label>
      </div>
      <div>
        <input
          type="text"
          name="notes"
          value={notes}
          onChange={(e) => {
            setNotes(e.target.value);
          }}
          required
        />
        <label htmlFor="notes">Notes</label>
      </div>
      <Button btnType="success" clicked={onPrescriptionSubmit}>
        Submit
      </Button>
    </>
  );
};

export default Prescription;

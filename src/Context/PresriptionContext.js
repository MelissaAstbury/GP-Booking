import React, { useEffect, createContext } from "react";
import axios from "axios";
// import { useHistory } from "react-router-dom";

export const PrescriptionContext = createContext();

const PrescriptionContextProvider = (props) => {
  //   const history = useHistory();
  //   const initialState = JSON.parse(localStorage.getItem("prescriptions"));
  //   const [prescriptions, setPrescriptions] = useState([]);

  const onCreatePrescription = (prescriptionInfo) => {
    (async () => {
      try {
        await axios.post("http://localhost:8081/api/prescription", {
          prescriptionInfo,
        });
      } catch (error) {
        console.log("Prescription creation failed", error.message);
      }
    })();
  };

  return (
    <PrescriptionContext.Provider
      value={{
        // prescriptions,
        onCreatePrescription,
      }}
    >
      {props.children}
    </PrescriptionContext.Provider>
  );
};

export default PrescriptionContextProvider;

import React, { useState, useEffect } from "react";
import ModalComponent from "./modal";
import RegistrationForm from "./registration-form";
import { getStoredData } from "./localStorageHelper";

const UserRegistration = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const savedData = getStoredData();
    if (savedData) {
      setUserData(savedData);
    }
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveUserData = (data) => {
    setUserData(data);
    setIsModalOpen(false);
  };

  return (
    <div>
      <button className="btn btn-primary" onClick={handleOpenModal}>
        Register
      </button>

      {userData && (
        <div className="mt-3">
          <h3>Saved User Data:</h3>
          <pre>{JSON.stringify(userData, null, 2)}</pre>
        </div>
      )}

      <ModalComponent
        show={isModalOpen}
        onClose={handleCloseModal}
        title="User Registration"
      >
        <RegistrationForm
          initialData={userData}
          onSave={handleSaveUserData}
        />
      </ModalComponent>
    </div>
  );
};

export default UserRegistration;

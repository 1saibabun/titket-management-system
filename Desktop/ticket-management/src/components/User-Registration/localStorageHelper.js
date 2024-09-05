export const saveToLocalStorage = (data) => {
    localStorage.setItem("userData", JSON.stringify(data));
  };
  
  export const getStoredData = () => {
    const savedData = localStorage.getItem("userData");
    return savedData ? JSON.parse(savedData) : null;
  };
  
export const login = (payload) => {
  return fetch(`https://blogappserver-lyvw.onrender.com/api/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
};

export const register = (payload) => {
  return fetch(`https://blogappserver-lyvw.onrender.com/api/users/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
}

// For local storage data saving and getting
export const saveLocalData = (data) => {
  localStorage.setItem("token", data.Token);
  localStorage.setItem("Name", data.Name);
  localStorage.setItem("UserID", data.ID);
  //   localStorage.setItem("data", data);
};

export const getLocalData = (name) => {
  return localStorage.getItem(name);
};

// For local storage data erasing
export const eraseLocalData = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("Name");
  localStorage.removeItem("UserID");
};

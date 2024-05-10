import axios from "axios";

const API_BASE_URL = "http://localhost:3000";
// post
export const APIlogin = (data, cb) => {
  axios
    .post(`${API_BASE_URL}/login`, data)
    .then((res) => cb(res))
    .catch((err) => cb(err));
};
export const APIPostHeader = (data, cb) => {
  axios
    .post(`${API_BASE_URL}/home/header`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => cb(res))
    .catch((err) => cb(err));
};
export const APIPostJurusan = (data, cb) => {
  axios
    .post(`${API_BASE_URL}/home/jurusan`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => cb(res))
    .catch((err) => cb(err));
};

// get
export const APIgetHeaderHome = (cb) => {
  axios
    .get(`${API_BASE_URL}/home/header`)
    .then((res) => cb(res))
    .catch((err) => cb(err));
};
export const APIgetSambutanHome = (cb) => {
  axios
    .get(`${API_BASE_URL}/home/sambutan`)
    .then((res) => cb(res))
    .catch((err) => cb(err));
};

export const APIgetJurusanHome = (cb) => {
  axios
    .get(`${API_BASE_URL}/home/jurusan`)
    .then((res) => cb(res))
    .catch((err) => cb(err));
};
export const APIlogout = (cb) => {
  axios
    .get(`${API_BASE_URL}/login/logout`)
    .then((res) => cb(res))
    .catch((err) => cb(err));
};
export const APInavbar = (cb) => {
  axios
    .get(`${API_BASE_URL}/home/navbar`)
    .then((res) => cb(res))
    .catch((err) => cb(err));
};
export const APIgettentangSekolah = (cb) => {
  axios
    .get(`${API_BASE_URL}/profil/tentangsekolah`)
    .then((res) => cb(res))
    .catch((err) => cb(err));
};

// delete
export const APIdelHeaderHome = (id, cb) => {
  axios
    .delete(`${API_BASE_URL}/home/header/${id}`)
    .then((res) => cb(res))
    .catch((err) => cb(err));
};
export const APIdeljurusanHome = (id, cb) => {
  axios
    .delete(`${API_BASE_URL}/home/jurusan/${id}`)
    .then((res) => cb(res))
    .catch((err) => cb(err));
};
// update
export const APIUpdateSambutan = (data, id, cb) => {
  axios
    .patch(`${API_BASE_URL}/home/sambutan/${id}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => cb(res))
    .catch((err) => cb(err));
};
export const APIPostNavbar = (data, id, cb) => {
  axios
    .patch(`${API_BASE_URL}/home/navbar/${id}`, data)
    .then((res) => cb(res))
    .catch((err) => cb(err));
};

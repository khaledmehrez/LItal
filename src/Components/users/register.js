import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "semantic-ui-react";
import { postUsersToApi } from "../../api/ApiUsers";
import "./register.css";
function Register() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    userName: "",
    post: "",
    password: "",
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.id]: event.target.value,
    });
  };
  const dispatch = useDispatch();

  function postUsers() {
    dispatch(postUsersToApi(state));
  }

  return (
    <Modal
      trigger={
        <button button className="add_user_button">
        <i aria-hidden="true" class="user plus"></i>Ajouter Modérateur{" "}
        </button>
      }
      closeIcon
    >
      <Modal.Content>
        <center>
        <h3> Ajouter Modérateur </h3>

          <div className="form-group">
            <input
              id="firstName"
              type="text"
              placeholder="Prénom"
              onChange={handleChange}
            />
            <br />
          </div>
          <br />
          <div className="form-group">
            <input
              id="lastName"
              type="text"
              placeholder="Enter Nom utilisateur"
              onChange={handleChange}
            />
            <br />
          </div>
          <br />
          <div className="form-group">
            <input
              id="userName"
              type="text"
              placeholder="Enter Identifiant"
              onChange={handleChange}
            />
            <br />
          </div>
          <br />
          <div className="form-group">
            <input
              id="post"
              type="text"
              placeholder=" Entrer Role utilisateur"
              onChange={handleChange}
            />
            <br />
          </div>
          <br />
          <div className="form-group">
            <input
              id="email"
              type="email"
              pattern=".+@(gmail\.com|yahoo\.fr)"
              placeholder="Enter Email utilisateur"
              onChange={handleChange}
            />
            <br />
          </div>
          <br />
          <div className="form-group">
            <input
              id="password"
              type="password"
              placeholder="Enter Mot de passe "
              maxLength="6"
              onChange={handleChange}
            />
            <br />
          </div>
          <br />
          <div className="form-group">
            <input
              id="confirmationPassword"
              type="password"
              placeholder="Confirmer Mot de passe "
              maxLength="6"
            />
          </div>
          <br />
          <button type="submit" className="btn-sign-compte" class="ui positive button" onClick={postUsers}>
            Valider
          </button>
        </center>
      </Modal.Content>
    </Modal>
  );
}

export default Register;

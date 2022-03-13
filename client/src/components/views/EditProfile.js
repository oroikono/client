import {useEffect, useState} from 'react';
import {api, handleError} from 'helpers/api';
import User from 'models/User';
import {useHistory} from 'react-router-dom';
import {Button} from 'components/ui/Button';
import BaseContainer from "components/ui/BaseContainer";
import 'styles/views/Login.scss';
import styled from "styled-components";
import PropTypes from "prop-types";
import ProfileDesign from "/Users/oroikon/client/src/components/ui/ProfileDesign.js"
import {Link, withRouter } from 'react-router-dom';
const Register = styled.label
    `height: 35px;
padding-left: 15px;
margin-left: -4px;
border: none;
border-radius: 20px;
margin-bottom: 20px;
color: white;
`;
/*
It is possible to add multiple components inside a single file,
however be sure not to clutter your files with an endless amount!
As a rule of thumb, use one file per component and only add small,
specific components that belong to the main one in the same file.
 */

const FormContainer = styled.div`
  margin-top: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 300px;
  justify-content: center;
  color: white;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 250%;
  height: 375px;
  font-size: 16px;
  font-weight: 300;
  padding-left: 37px;
  padding-right: 37px;
  border-radius: 5px;
  background: linear-gradient(rgb(27, 124, 186), rgb(2, 46, 101));
  transition: opacity 0.5s ease, transform 0.5s ease;
`;

const InputField = styled.input`
  &::placeholder {
    color: rgba(255, 255, 255, 1.0);
  }
  height: 35px;
  padding-left: 15px;
  margin-left: -4px;
  border: none;
  border-radius: 20px;
  margin-bottom: 20px;
  background: rgba(255, 255, 255, 0.2);
  color: white;
`;

const Label = styled.label`
  color: white;
  margin-bottom: 10px;
  text-transform: uppercase;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
const FormFieldString = props => {
    return (
        <div className="register field">
            <label className="register label">
                {props.label}
            </label>
            <input
                className="register input"
                placeholder="enter here.."
                value={props.value}
                onChange={e => props.onChange(e.target.value)}
            />
        </div>
    );
};

FormFieldString.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func
};
const FormFieldBirthday = props => {
    return (
        <div className="register field">
            <label className="register label">
                {props.label}
            </label>
            <input
                className="register input"
                placeholder="enter here.."
                value={props.value}
                onChange={e => props.onChange(e.target.value)}
            />
        </div>
    );
};

FormFieldBirthday.propTypes = {
    label: PropTypes.instanceOf(Date),
    value: PropTypes.instanceOf(Date),
    onChange: PropTypes.func
};


const EditProfile = props => {
    const history = useHistory();
    const [user, setUser] = useState(null);
    const [id, setId] = useState(localStorage.getItem("selectedUser"));
    const [username, setUsername] = useState(null);
    const [birthday, setBirthday] = useState(null);

    const doEdit = async () => {
        try {
            const requestBody = JSON.stringify({username, birthday});
            const response = await api.put('/users/' + String(localStorage.getItem("id")),requestBody);
            } catch (error) {
            alert(`Something went wrong during the edit: \n${handleError(error)}`);
        }
        history.push(`/profile`);
    };
    const doBack = async () => {
        history.push(`/profile`);
    };

    return (
        <BaseContainer>
            <div className="register container">
                <div className="register form">
                    <FormFieldString
                        label="username"
                        value={username}
                        onChange={un => setUsername(un)}
                    />
                    <FormFieldBirthday
                        label="birthday"
                        value={birthday}
                        onChange={un => setBirthday(un)}
                    />
                    <div className="login button-container">
                        <Button
                            width="100%"
                            onClick={() => doEdit()}
                        >
                            Save
                        </Button>
                        <Button
                            width="100%"
                            onClick={() => doBack()}
                        >
                            Back
                        </Button>
                    </div>
                </div>
            </div>
        </BaseContainer>
    );

};

//make sure that the logged in user can edit only his profile not the others





/**
 * You can get access to the history object's properties via the withRouter.
 * withRouter will pass updated match, location, and history props to the wrapped component whenever it renders.
 */
export default withRouter(EditProfile);
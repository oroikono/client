import {useEffect, useState} from 'react';
import {api, handleError} from 'helpers/api';
import User from 'models/User';
import {useHistory} from 'react-router-dom';
import {Button} from 'components/ui/Button';
import 'styles/views/Login.scss';
import styled from "styled-components";
import PropTypes from "prop-types";
import ProfileDesign from "/Users/oroikon/client/src/components/ui/ProfileDesign.js"
import { withRouter } from 'react-router-dom';

/*
It is possible to add multiple components inside a single file,
however be sure not to clutter your files with an endless amount!
As a rule of thumb, use one file per component and only add small,
specific components that belong to the main one in the same file.
 */

const Container = styled.div`
  margin-top: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 300px;
  justify-content: black;
`;

const UserProfile = props => {
    const history = useHistory();
    const [user, setUser] = useState(null);
    const [id, setId] = useState(localStorage.getItem("selectedUser"));

    useEffect(() => {
        async function  getUserInfo () {
        try {
            const response = await api.get('/users/'+id);

            // Get the returned user and update a new object.
            const user = new User(response.data);
            setUser(response.data);
        } catch (error) {
            alert(`Something went wrong during the login: \n${handleError(error)}`);
        }
    }
        getUserInfo();
    }, []);
    const doBack = async () => {
        history.push(`/game`);
    };
    const Label = styled.label
        `height: 35px;
padding-left: 15px;
margin-left: -4px;
border: none;
border-radius: 20px;
margin-bottom: 20px;
color: white;
font-size: 30px
`;
    return (
        <Container>
            <div className="player container">

                <top><Label>Profile</Label></top>
                <div>
                <p>
                    {user? (<ProfileDesign user={user}/>): <h2>There is an error...</h2>}
                </p>
            </div>
            </div>
            <Button
                width={"16%"}
                disabled={localStorage.getItem("selectedUser")!=localStorage.getItem("id")}
                onClick={() => {
                    localStorage.setItem("selectedUser",id);
                    history.push("profile/edit");
                }}>
                Edit Profile
            </Button>
            <Button
                width="16%"
                onClick={() => doBack()}
            >
                Back
            </Button>
        </Container>
    );
};

/**
 * You can get access to the history object's properties via the withRouter.
 * withRouter will pass updated match, location, and history props to the wrapped component whenever it renders.
 */
export default withRouter(UserProfile);
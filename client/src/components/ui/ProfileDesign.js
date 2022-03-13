import React from "react";
import styled from "styled-components";
import {withRouter} from "react-router-dom";


const UserName = styled.div`
  margin-left: 10px;
  color:grey
`;

const Status = styled.div`
  margin-left: 10px;
  color:grey
`;

const CreationDate = styled.div`
  margin-left: 10px;
  color:grey
`;

const BirthDate = styled.div`
  margin-left: 10px;
  color:grey
`;
const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 375px;
  height: 200px;
  font-size: 16px;
  font-weight: 300;
  padding-left: 37px;
  padding-right: 37px;
  border-radius: 5px;
  background: ghostwhite;
  transition: opacity 0.5s ease, transform 0.5s ease;
`;

/**
 * This is an example of a Functional and stateless component (View) in React. Functional components are not classes and thus don't handle internal state changes.
 * Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.
 * They are reusable pieces, and think about each piece in isolation.
 * Functional components have to return always something. However, they don't need a "render()" method.
 * https://reactjs.org/docs/components-and-props.html
 * @FunctionalComponent
 */
const ProfileDesign = ({ user }) => {
    return (
        <Form>
            <UserName>Username: {user.username}</UserName>

            <Status>Online Status: {user.status}</Status>

            <CreationDate>Creation Date: {user.creation_date}</CreationDate>

            <BirthDate>Birth Date: {user.birthday ? user.birthday : "null"} </BirthDate>
        </Form>

    );
};


export default ProfileDesign;
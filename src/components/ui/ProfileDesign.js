import React from "react";
import styled from "styled-components";

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
  width: 280px;
  height: 150px;
  font-size: 15px;
  font-weight: 300;
  padding-left: 15px;
  padding-right: 36px;
  border-radius: 10px;
  background: ghostwhite;
`;

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
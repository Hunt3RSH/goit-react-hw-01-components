import styled from 'styled-components';

export const ListFriends = styled.ul`
  width: 320px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  gap: 5px;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  background-color: white;
  border-radius: 5px;
  align-items: center;
  padding: 10px 15px;
`;

export const Avatar = styled.img`
  display: block;
  height: 70px;
`;

export const Name = styled.p`
  color: black;
  margin-left: 15px;
  font-size: 17px;
  font-weight: 500;
`;

export const Status = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-right: 15px;
  background: ${props => (props.status ? 'green' : 'red')};
`;

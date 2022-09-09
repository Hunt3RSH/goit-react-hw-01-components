import styled from 'styled-components';

export const Stats = styled.section`
  width: 320px;
  margin: 0 auto;
  margin-top: 10px;
  border-radius: 5px;
  overflow: hidden;
`;

export const TitleName = styled.h2`
  background-color: white;
  padding-top: 40px;
  padding-bottom: 40px;
  font-size: 15px;
  color: #253948;
  font-weight: 500;
  text-transform: uppercase;
  text-align: center;
`;

export const ListStats = styled.ul`
  display: flex;
  justify-content: center;
`;

export const LiType = styled.li`
  display: flex;
  flex-direction: column;
  padding: 10px 17px 20px 17px;
  align-items: center;
`;

export const Label = styled.span`
  color: white;
  font-size: 13px;
`;

export const Percentage = styled.span`
  color: white;
  font-size: 17px;
  margin-top: 5px;
`;

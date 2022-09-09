import styled from 'styled-components';

export const TabletItems = styled.table`
  width: 100%;
  padding: 10px;
`;

export const TabletHead = styled.thead`
  background-color: #00bcd5;
`;

export const TabletTypeName = styled.th`
  padding-top: 17px;
  padding-bottom: 17px;
  color: white;
  text-transform: uppercase;
  font-size: 17px;
  font-weight: 500;
`;

export const TabletBodyTr = styled.tr`
  &:nth-child(n) {
    background-color: white;
  }
  &:nth-child(2n) {
    background-color: #ecf1f3;
  }
`;

export const TabletBodyName = styled.td`
  color: black;
  text-align: center;
  font-size: 15px;
  font-weight: 400;
`;

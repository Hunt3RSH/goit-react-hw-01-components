import styled from 'styled-components';

export const Profiled = styled.div`
  width: 320px;
  margin: 0 auto;
  margin-top: 10px;
`;

export const Description = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  padding: 30px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

export const Avatar = styled.img`
  display: block;
  width: 150px;
  height: 150px;
`;

export const Name = styled.p`
  color: #122236;
  font-size: 25px;
  font-weight: 700;
  margin-top: 30px;
  margin-bottom: 0;
  text-align: center;
`;

export const Text = styled.p`
  color: #768696;
  font-size: 17px;
  font-weight: 400;
  margin-bottom: 0;
  margin-top: 20px;
`;

export const Stats = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f3f6f9;
  padding-left: 25px;
  padding-right: 25px;
  gap: 40px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;
export const LiElement = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Count = styled.span`
  color: #1f3349;
  font-size: 17px;
  font-weight: 500;
  padding-bottom: 25px;
  padding-top: 10px;
`;

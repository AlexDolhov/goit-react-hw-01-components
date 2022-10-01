import styled from 'styled-components';

export const ProfileWrap = styled.div`
  text-align: center;
  /* margin: 0; */
  margin-bottom: 16px;

  /* max-width: 320px; */
  background: #ffffff;

  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
`;

export const Description = styled.div``;

export const Avatar = styled.img`
  margin-left: auto;
  margin-right: auto;

  display: block;
  max-width: 100%;
  height: auto;

  border-radius: 50%;
`;
export const Name = styled.p`
  font-size: 1.5rem;
  line-height: 1.334;
`;
export const Tag = styled.p`
  /* font-size: 1rem;
  line-height: 1.75; */

  color: rgba(0, 0, 0, 0.6);
`;
export const Location = styled.p`
  /* font-size: 1rem;
  line-height: 1.75; */

  color: rgba(0, 0, 0, 0.6);
`;
export const Stats = styled.ul`
  margin: 0;
  padding: 0;

  display: flex;
  /* flex-wrap: wrap; */
  justify-content: space-around;
  align-items: center;
  list-style: none;

  background: #d5d5d5;
  background-color: #52acff;

  background-image: linear-gradient(180deg, #52acff 25%, #ffe32c 100%);

  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
`;
export const StatsItem = styled.li`
  padding: 8px;
  width: calc(100% / 3);

  display: inline-flex;
  flex-direction: column;

  /* font-size: 1rem; */
  line-height: 1.334;

  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
`;

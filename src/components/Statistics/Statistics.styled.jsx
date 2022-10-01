import styled from 'styled-components';

export const StatisticsSection = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  /* align-items: center; */
  margin: 0;
  padding: 0;

  /* max-width: 320px; */

  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
`;

export const Title = styled.h2`
  margin: 0;
  padding-top: 8px;
  padding-bottom: 8px;

  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.6);
`;

export const StatList = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;

  padding-top: 8px;
  padding-bottom: 8px;

  list-style: none;
  width: calc(100% / 5);

  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);

  > span {
    color: white;
  }

  > span:first-child {
    margin-bottom: 8px;
  }

  > span:last-child {
    font-size: 1.5em;
  }
`;

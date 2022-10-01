import styled from 'styled-components';

export const Table = styled.table`
  border-collapse: collapse;

  font-size: 1rem;
  line-height: 1.334;
  text-transform: capitalize;
  text-align: center;
  width: 100%;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
`;

export const Head = styled.thead`
  text-transform: uppercase;

  color: #ffffff;
  background-color: #00bcd5;
`;

export const HeadRow = styled.tr`
  /* border-color: #ffffff; */
  > th {
    padding: 8px;

    border: 1px solid #ecf1f4;
  }
`;

export const Body = styled.tbody`
  color: rgba(0, 0, 0, 0.5);
  > :nth-child(even) {
    background-color: #ecf1f4;
  }
`;

export const BodyRow = styled.tr``;

export const Data = styled.td`
  padding: 4px;

  border: 1px solid #ededed;
`;

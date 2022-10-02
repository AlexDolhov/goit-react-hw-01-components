import styled from 'styled-components';

export const FriendCard = styled.li`
  list-style: none;
  display: flex;
  align-items: center;

  padding: 8px 16px;
  gap: 50px;

  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
`;

export const Status = styled.span`
  display: block;
  /* content: ''; */
  width: 16px;
  height: 16px;

  border-radius: 50%;

  background-color: ${p => {
    return p.isOnline ? 'green' : 'red';
  }};
`;

export const Avatar = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
`;

export const Name = styled.p`
  margin: 0;
  font-size: 1.5rem;
  line-height: 1.75;
`;

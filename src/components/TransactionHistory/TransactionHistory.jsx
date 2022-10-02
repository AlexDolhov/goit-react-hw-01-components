import PropTypes from 'prop-types';

import {
  Table,
  Head,
  HeadRow,
  Body,
  BodyRow,
  Data,
} from 'components/TransactionHistory/TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <Head>
        <HeadRow>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </HeadRow>
      </Head>

      <Body>
        {items.map(({ id, type, amount, currency }) => (
          <BodyRow key={id}>
            <Data>{type}</Data>
            <Data>{amount}</Data>
            <Data>{currency}</Data>
          </BodyRow>
        ))}
      </Body>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

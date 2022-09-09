import PropTypes from 'prop-types';
import {
  TabletBodyName,
  TabletBodyTr,
  TabletHead,
  TabletItems,
  TabletTypeName,
} from './Transaction.styled';

export const TransactionHistory = ({ items }) => (
  <TabletItems>
    <TabletHead>
      <tr>
        <TabletTypeName>Type</TabletTypeName>
        <TabletTypeName>Amount</TabletTypeName>
        <TabletTypeName>Currency</TabletTypeName>
      </tr>
    </TabletHead>

    <tbody>
      {items.map(({ type, amount, currency, id }) => (
        <TabletBodyTr key={id}>
          <TabletBodyName>{type}</TabletBodyName>
          <TabletBodyName>{amount}</TabletBodyName>
          <TabletBodyName>{currency}</TabletBodyName>
        </TabletBodyTr>
      ))}
    </tbody>
  </TabletItems>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired }))
    .isRequired,
};

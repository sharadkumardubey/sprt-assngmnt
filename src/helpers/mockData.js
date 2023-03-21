import { randomId } from './utils';

const getCard = (content, header) => ({
  id: randomId(),
  header,
  content
});
export default [
  { id: randomId(),
    name: 'Teams',
    cards: [
      getCard('3 Pending Task remains', 'Product'),
      getCard('Send Parcel to John', 'Sales')
    ] },
  { id: randomId(),
    name: 'Products',
    cards: [
      getCard('Test the product for production', 'Testing')
    ] },
];

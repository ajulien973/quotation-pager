import { map, pickAll } from 'ramda';

const pickAllArray = props => map(pickAll(props));

export const buildDataSource = pickAllArray([
  'designation',
  'description',
  'prixUnitaireHT',
  'quantite',
  'prixHT',
  'tauxTVA'
]);

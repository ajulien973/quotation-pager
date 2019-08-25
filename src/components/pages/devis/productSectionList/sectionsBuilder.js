import {
  compose,
  pluck,
  flatten,
  path,
  find,
  propEq,
  propOr,
  defaultTo,
  isEmpty,
  ifElse,
} from 'ramda';

const flattenEntries = compose(flatten, pluck('lignes'));
const getLocationsIdFromEntry = defaultTo([], path(['locationsDetails', 'locations']));
const findSectionByUuid = locationId => compose(defaultTo({}), find(propEq('uuid', locationId)));

export const buildSectionsByLocations = (lots, locations) => {
  const sections = buildSectionsFromLots(lots);
  sections.forEach(section => {
    const label = compose(
      propOr('Autres prestations', 'label'),
      find(propEq('uuid', section.uuid)),
    )(locations);
    section.label = label;
  })
  return sections;
};

export const buildSectionsFromLots = lots => {
  const sections = [];
  const lignes = flattenEntries(lots);

  lignes.forEach(ligne => {
    const locationsFromEntry = getLocationsIdFromEntry(ligne);
    if (isEmpty(locationsFromEntry)) {
      locationsFromEntry.push({ uuid: '' });
    }

    locationsFromEntry.forEach((location) => {
      const section = findSectionByUuid(location.uuid)(sections);
      ifElse(
        isEmpty,
        () => sections.push({
          uuid: location.uuid || '',
          lignes: [ligne],
        }),
        () => section.lignes.push(ligne)
      )(section);
    })
  });
  return sections;
}


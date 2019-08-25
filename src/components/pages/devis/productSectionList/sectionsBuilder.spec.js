import { buildSectionsByLocations } from './sectionsBuilder';

describe('components | pages | Devis | productionSectionList | sectionsBuilder', () => {
  it('should build as much ProductSections than locations + 1 for Autres prestations', () => {
    const lots = [{
      label: "Démolition - préparation",
      lignes: [{
        designation: "Protection des zones d'intervention",
        description: "Mise en place de bâches de protection des zones d'intervention.",
        prixUnitaireHT: 200,
        quantite: 1,
        unite: "unitaire",
        prixHT: 200,
        tauxTVA: 10,
        montantTVA: 20,
        prixTTC: 220,
        locationsDetails: {
          locations: [{
            uuid: "35c15ae1-4258-4a56-b61c-6bb6a2140e25",
            quantite: 1,
          }],
          additionalQuantity: 0,
          quantityIsByLocation: false
        }
      }],
    }, {
      label: "Plomberie - chauffage",
      lignes: [
        {
          designation: "Création d'un réseau d'alimentation eau chaude / eau froide depuis l'arrivée existante",
          description: "Réseau en cuivre de 14 mm. Compris : pose de vannes d'arrêt 1/4 de tour.\nRaccordement du ballon d'eau chaude, des WC suspendus, meuble vasque, douche, évier cuisine compris.",
          prixUnitaireHT: 250,
          quantite: 5,
          unite: "unitaire",
          prixHT: 1250,
          tauxTVA: 10,
          montantTVA: 125,
          prixTTC: 1375,
          locationsDetails: {
            locations: [
              {
                uuid: "35c15ae1-4258-4a56-b61c-6bb6a2140e25",
                quantite: 3
              },
              {
                uuid: "c85c00a8-6316-4ed4-8c58-aa55127edc99",
                quantite: 2
              }
            ],
            additionalQuantity: 0,
            quantityIsByLocation: true
          }
        },
        {
          designation: "Fourniture et pose d'évacuation",
          prixUnitaireHT: 250,
          quantite: 3,
          unite: "unitaire",
          prixHT: 750,
          tauxTVA: 10,
          montantTVA: 75,
          prixTTC: 825,
          locationsDetails: {
            locations: [],
            additionalQuantity: 0,
            quantityIsByLocation: true
          }
        }]
    }];
    const locations = [{
      uuid: "35c15ae1-4258-4a56-b61c-6bb6a2140e25",
      label: "Salle d'eau",
      surface: 3.3,
      typeLocation: "Autre"
    }, {
      uuid: "c85c00a8-6316-4ed4-8c58-aa55127edc99",
      label: "Chambre",
      surface: 3.3,
      typeLocation: "Autre"
    }];

    const result = buildSectionsByLocations(lots, locations);

    expect(result).toStrictEqual([{
      label: "Salle d'eau",
      uuid: "35c15ae1-4258-4a56-b61c-6bb6a2140e25",
      lignes: [{
        designation: "Protection des zones d'intervention",
        description: "Mise en place de bâches de protection des zones d'intervention.",
        prixUnitaireHT: 200,
        quantite: 1,
        unite: "unitaire",
        prixHT: 200,
        tauxTVA: 10,
        montantTVA: 20,
        prixTTC: 220,
        locationsDetails: {
          locations: [{
            uuid: "35c15ae1-4258-4a56-b61c-6bb6a2140e25",
            quantite: 1,
          }],
          additionalQuantity: 0,
          quantityIsByLocation: false
        }
      }, {
        designation: "Création d'un réseau d'alimentation eau chaude / eau froide depuis l'arrivée existante",
        description: "Réseau en cuivre de 14 mm. Compris : pose de vannes d'arrêt 1/4 de tour.\nRaccordement du ballon d'eau chaude, des WC suspendus, meuble vasque, douche, évier cuisine compris.",
        prixUnitaireHT: 250,
        quantite: 5,
        unite: "unitaire",
        prixHT: 1250,
        tauxTVA: 10,
        montantTVA: 125,
        prixTTC: 1375,
        locationsDetails: {
          locations: [
            {
              uuid: "35c15ae1-4258-4a56-b61c-6bb6a2140e25",
              quantite: 3
            },
            {
              uuid: "c85c00a8-6316-4ed4-8c58-aa55127edc99",
              quantite: 2
            }
          ],
          additionalQuantity: 0,
          quantityIsByLocation: true
        }
      }],
    }, {
      label: "Chambre",
      uuid: "c85c00a8-6316-4ed4-8c58-aa55127edc99",
      lignes: [{
        designation: "Création d'un réseau d'alimentation eau chaude / eau froide depuis l'arrivée existante",
        description: "Réseau en cuivre de 14 mm. Compris : pose de vannes d'arrêt 1/4 de tour.\nRaccordement du ballon d'eau chaude, des WC suspendus, meuble vasque, douche, évier cuisine compris.",
        prixUnitaireHT: 250,
        quantite: 5,
        unite: "unitaire",
        prixHT: 1250,
        tauxTVA: 10,
        montantTVA: 125,
        prixTTC: 1375,
        locationsDetails: {
          locations: [
            {
              uuid: "35c15ae1-4258-4a56-b61c-6bb6a2140e25",
              quantite: 3
            },
            {
              uuid: "c85c00a8-6316-4ed4-8c58-aa55127edc99",
              quantite: 2
            }
          ],
          additionalQuantity: 0,
          quantityIsByLocation: true
        }
      }],
    }, {
      label: "Autres prestations",
      uuid: "",
      lignes: [{
        designation: "Fourniture et pose d'évacuation",
        prixUnitaireHT: 250,
        quantite: 3,
        unite: "unitaire",
        prixHT: 750,
        tauxTVA: 10,
        montantTVA: 75,
        prixTTC: 825,
        locationsDetails: {
          locations: [{ uuid: '' }],
          additionalQuantity: 0,
          quantityIsByLocation: true
        }
      }],
    }]);
  });
});

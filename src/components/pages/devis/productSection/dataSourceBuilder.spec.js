import React from 'react';
import { buildDataSource } from './dataSourceBuilder';

describe('components | pages | devis | productSection | dataSourceBuilder', () => {
  describe('buildDataSource', () => {
    it('should pick valuable props from each object in array', () => {
      const entries = [{
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
          locations: [],
          additionalQuantity: 0,
          quantityIsByLocation: false
        }
      }, {
        designation: "Nettoyage à l'avancement et fin de chantier",
        description: "Enlèvement des protections, nettoyage des sols, poussière et résidus.",
        prixUnitaireHT: 200,
        quantite: 1,
        unite: "unitaire",
        prixHT: 200,
        tauxTVA: 10,
        montantTVA: 20,
        prixTTC: 220,
        locationsDetails: {
          locations: [],
          additionalQuantity: 0,
          quantityIsByLocation: false
        }
      }];

      expect(buildDataSource(entries)).toStrictEqual([{
        designation: "Protection des zones d'intervention",
        description: "Mise en place de bâches de protection des zones d'intervention.",
        prixUnitaireHT: 200,
        quantite: 1,
        prixHT: 200,
        tauxTVA: 10,
      }, {
        designation: "Nettoyage à l'avancement et fin de chantier",
        description: "Enlèvement des protections, nettoyage des sols, poussière et résidus.",
        prixUnitaireHT: 200,
        quantite: 1,
        prixHT: 200,
        tauxTVA: 10,
      }]);
    });
  });
});

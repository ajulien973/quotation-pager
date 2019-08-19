const DEVIS_URL = 'https://api.travauxlib.com/api/devis-pro';

function getDevis (token) {
  return fetch(`${DEVIS_URL}/${token}`)
    .then(response => response.json());
}

export { getDevis };


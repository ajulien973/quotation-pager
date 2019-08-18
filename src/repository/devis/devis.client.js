const DEVIS_URL = 'https://api.travauxlib.com/api/devis-pro/JKusHl8Ba8MABIjdCtLZOe2lxxnUfX';

function getDevis () {
  return fetch(DEVIS_URL);
}

export { getDevis };


import { getDevis } from './devis.client';

describe('repository | devis | DevisClient', () => {
  describe('getDevis', () => {
    beforeEach(() => {
      jest.spyOn(global, 'fetch').mockResolvedValue({
        title: 'myDevis',
        introductionLetter: 'myLetter'
      });
    });

    afterEach(() => {
      global.fetch.mockRestore();
    });

    it('should get devis and return it', async () => {
      const
      const result = await getDevis();

      expect(global.fetch).toHaveBeenCalledWith('https://api.travauxlib.com/api/devis-pro/JKusHl8Ba8MABIjdCtLZOe2lxxnUfX')
      expect(result).toStrictEqual({
        title: 'myDevis',
        introductionLetter: 'myLetter'
      });
    })
  })
});

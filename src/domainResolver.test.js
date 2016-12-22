import getDomain from './domainResolver';

describe('server.auth.domainResolver', () => {
  describe('for localhost', () => {
    it('should not get the domain', () => {
      expect(getDomain('localhost')).toEqual({});
    });
  });

  describe('for a simple domain', () => {
    const expectedDomain = { FQDN: 'arcanae.fr', domain: 'arcanae.fr', host: 'arcanae' };

    it('should get the domain', () => {
      expect(getDomain('http://arcanae.fr')).toEqual(expectedDomain);
    });
  });

  describe('for a domain with single sub domain', () => {
    const expectedDomain = { FQDN: 'accounts.arcanae.fr', domain: 'arcanae.fr', host: 'accounts' };

    it('should get the domain', () => {
      expect(getDomain('http://accounts.arcanae.fr')).toEqual(expectedDomain);
    });
    it('should get the domain with a path', () => {
      expect(getDomain('http://accounts.arcanae.fr/login')).toEqual(expectedDomain);
    });
  });

  describe('for a domain with subs domains', () => {
    const expectedDomain = { FQDN: 'accounts.arcanae.intactile.info', domain: 'arcanae.intactile.info', host: 'accounts' };

    it('should get the domain', () => {
      expect(getDomain('http://accounts.arcanae.intactile.info')).toEqual(expectedDomain);
    });
    it('should get the domain with a path', () => {
      expect(getDomain('http://accounts.arcanae.intactile.info/login')).toEqual(expectedDomain);
    });
    it('should get the domain with a port and a path', () => {
      expect(getDomain('http://accounts.arcanae.intactile.info:3004/my-account')).toEqual(expectedDomain);
    });
  });
});

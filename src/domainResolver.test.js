import getDomain from './domainResolver';

describe('server.auth.domainResolver', () => {
  describe('for localhost', () => {
    it('should not get the domain', () => {
      expect(getDomain('localhost')).toEqual({});
    });
  });

  describe('for a simple domain', () => {
    const expectedDomain = { host: 'arcanae.fr', subdomain: 'arcanae.fr', domain: 'arcanae.fr' };

    it('should get the domain', () => {
      expect(getDomain('http://arcanae.fr')).toEqual(expectedDomain);
    });
  });

  describe('for a domain with single sub domain', () => {
    const expectedDomain = { host: 'accounts.arcanae.fr', subdomain: 'arcanae.fr', domain: 'arcanae.fr' };

    it('should get the domain', () => {
      expect(getDomain('http://accounts.arcanae.fr')).toEqual(expectedDomain);
    });
    it('should get the domain with a path', () => {
      expect(getDomain('http://accounts.arcanae.fr/login')).toEqual(expectedDomain);
    });
  });

  describe('for a domain with subs domains', () => {
    const expectedDomain = { host: 'accounts.arcanae.intactile.info', subdomain: 'arcanae.intactile.info', domain: 'intactile.info' };

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

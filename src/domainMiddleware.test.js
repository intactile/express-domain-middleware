import domainMiddleware from './domainMiddleware';

describe('server.auth.domainMiddleware', () => {
  const url = 'http://accounts.arcanae.fr/login';
  const expectedDomainInfo = { FQDN: 'accounts.arcanae.fr', domain: 'arcanae.fr', host: 'accounts' };
  const domainFinder = domainMiddleware();

  it('should add the domain to the request using the host', () => {
    const get = (param) => {
      let result;
      if (param === 'host') {
        result = url;
      }
      return result;
    };
    const req = { get };
    const res = jasmine.createSpy('res');
    const next = jasmine.createSpy('next');
    domainFinder(req, res, next);
    expect(next).toHaveBeenCalled();
    expect(req.domainInfo).toEqual(expectedDomainInfo);
  });
});

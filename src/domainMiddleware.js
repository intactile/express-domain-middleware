import getDomain from './domainResolver';

export default function createMiddleware() {
  let domainInfo;
  const isDefined = info => info && Object.keys(info).length !== 0;
  return function domainMiddleware(req, res, next) {
    if (!isDefined(domainInfo)) {
      domainInfo = getDomain(req.get('host'));
    }
    req.domainInfo = domainInfo;
    next();
  };
}

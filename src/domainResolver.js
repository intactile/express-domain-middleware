const getDomain = (url) => {
  let domainInformations = {};
  if (url) {
    const FQDN = url.replace(/(http:\/\/)/, '')
                        .split('/')[0]
                        .replace(/([^:]):[0-9]*/, '$1');

    const splitted = FQDN.split('.');
    const domainSize = splitted.length;
    const offset = domainSize === 2 ? 0 : splitted[0].length + 1;
    if (domainSize >= 2) {
      const domain = FQDN.substring(offset, FQDN.length);
      const host = splitted[0];
      domainInformations = { FQDN, domain, host };
    }
  }
  return domainInformations;
};

export default getDomain;

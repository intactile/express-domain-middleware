const getDomain = (url) => {
  let domainInformations = {};
  if (url) {
    const host = url.replace(/(http:\/\/)/, '')
                        .split('/')[0]
                        .replace(/([^:]):[0-9]*/, '$1');

    const splitted = host.split('.');
    const domainSize = splitted.length;
    const offset = domainSize === 2 ? 0 : splitted[0].length + 1;
    if (domainSize >= 2) {
      const subdomain = host.substring(offset, host.length);
      const domain = `${splitted[domainSize - 2]}.${splitted[domainSize - 1]}`;
      domainInformations = { host, subdomain, domain };
    }
  }
  return domainInformations;
};

export default getDomain;

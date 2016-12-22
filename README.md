# express-domain-middleware
An express middleware providing domain informations


[![Build Status](https://travis-ci.org/intactile/express-domain-middleware.svg?branch=master)](https://travis-ci.org/intactile/express-domain-middleware)
[![Code Climate](https://codeclimate.com/github/intactile/express-domain-middleware/badges/gpa.svg)](https://codeclimate.com/github/intactile/express-domain-middleware)
[![Test Coverage](https://codeclimate.com/github/intactile/express-domain-middleware/badges/coverage.svg)](https://codeclimate.com/github/intactile/express-domain-middleware/coverage)

## Install

```bash
npm install @intactile/express-domain-middleware
```

## Usage

```javascript
import express from 'express';
import domainMiddleware from '@intactile/express-domain-middleware';

const app = express();
app.use(domainMiddleware());
```

```javascript
import { Router } from 'express';

const router = new Router();

router.post('/login/', (request, response, next) => {
  const domainInfo = request.domainInfo;
  console.log(domainInfo);
});
```

example :
```
domainInfo = { host: 'app.brand.domain.com'
               subdomain : 'brand.domain.com',
               domain : 'domain.com' }
```

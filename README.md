# DRUIDS Web Components demo

The DRUIDS Web Components demo was created to demonstrate how one of the DRUIDS components can be developed using the Web Components technologies, along with Lit and Vite frameworks. In this case, I developed the Avatar component, based on the DRUIDS by [Datadog](https://www.datadoghq.com/dg/monitor/datadog-free-trial/?utm_source=google&utm_medium=paid-search&utm_campaign=dg-brand-ww&utm_keyword=datadog&utm_matchtype=b&igaag=95325237782&igaat=&igacm=9551169254&igacr=678976642985&igakw=datadog&igamt=b&igant=g&utm_campaignid=9551169254&utm_adgroupid=95325237782&gad_source=1&gclid=Cj0KCQiAj9m7BhD1ARIsANsIIvDbJ1bxWEBHJwtGUZaiYjnKowi1xFFhOu4i8vl6PhOizcv6Kvgry6caAtDcEALw_wcB).

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)

## Installation

To install the DRUIDS Web Components demo, you can use npm on app:

```bash
npm install
```

To run the project with vite, you can use npm on app:
```bash
npm run dev
```

## Usage

Here is a basic example of how to use the DRUIDS Web Component in your project:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./src/index.css" />
    <script type="module" src="/src/component/druids-avatar.ts"></script>
    <title>DRUIDS Web Component Example</title>
  </head>
  <body>
    <druids-avatar src="https://images.unsplash.com/photo-1517849845537-4d257902454a?h=208&fit=crop&w=208&q=80" size="xxl" title="I‘m a size xxl avatar"></druids-avatar>
  </body>
</html>
```

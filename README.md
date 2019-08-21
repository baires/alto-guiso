# Alto Guiso Index

Based on https://twitter.com/NicolasFioren/status/1121505712100839424

```

Install it and run:

```bash
npm install
npm run dev
# or
yarn
yarn dev
```

Deploy it to the cloud with [now](https://zeit.co/now) ([download](https://zeit.co/download))

```bash
now
```

## The idea behind the example

Next.js was conceived to make it easy to create universal apps. That's why fetching data
on the server and the client when necessary is so easy with Next.

Using `getInitialProps` fetches data on the server for SSR and then on the client when the component is re-mounted (not on the first paint).

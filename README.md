# Mixpanel Nest Proxy Example <a href="https://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" height="28px" alt="Nest Logo"/></a>

An example [Nest](https://nestjs.com) application that serves as a proxy to Mixpanel's Ingestion API and JavaScript library endpoints. To learn more, visit Mixpanel [Self-Hosted Tracking Docs](https://developer.mixpanel.com/docs/self-hosted-tracking).

⚠️ This project is implemented based on the official [Mixpanel Flask Proxy Example](https://github.com/mixpanel/flask-tracking-proxy). However, it is **not an official implementation, so use at your own risk.**

## Getting Started

### Installation

1. Make sure that you have [Node.js](https://nodejs.org)(>= 10.13.0, except for v13) installed.
2. Clone this repository by running `git clone https://github.com/ahmetuysal/nest-mixpanel-tracking-proxy.git <YOUR_PROJECT_NAME>` or [directly create your own GitHub repository using this template](https://github.com/ahmetuysal/nest-mixpanel-tracking-proxy/generate).
3. Move to the appropriate directory: `cd <YOUR_PROJECT_NAME>`.
4. Run `yarn` to install dependencies.

### Running the tests

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```

## Client-side integration

Checkout the official Mixpanel Guide on [Collection via Proxy](https://developer.mixpanel.com/docs/collection-via-a-proxy#how-to-use-the-proxy-with-our-sdks).

## License

Licenced under [MIT License](LICENSE). Nest is also MIT licensed.

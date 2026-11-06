# Click Script

A lightweight browser extension starter for running a custom JavaScript file in the active tab.

## Customize

Edit `scripts/run.js` to change the JavaScript that runs when you click the extension icon.

## Develop

Requires Node.js 26 LTS and npm. The `.nvmrc` file selects the current LTS major.

```sh
npm install
npm run start
```

Build a distributable extension archive with:

```sh
npm run build
```

For Chrome, open `chrome://extensions`, enable Developer mode, and select **Load unpacked** for this directory. In Edge, open `edge://extensions` and use **Load unpacked**. For Firefox, open `about:debugging#/runtime/this-firefox` and select **Load Temporary Add-on**, then choose `manifest.json`. The `npm run start` command launches the Chromium target for local development.

## License

[MIT](LICENSE), copyright 2026-Present.

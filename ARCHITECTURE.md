# Architecture

This extension uses Manifest V3 and the WebExtensions API.

## Click flow

1. The browser dispatches `chrome.action.onClicked` to the service worker in `background.js` when the toolbar button is left-clicked.
2. The worker checks that the active tab has an HTTP or HTTPS URL. Browser-internal pages and other restricted pages do not allow script injection.
3. `chrome.scripting.executeScript` injects `scripts/run.js` into the active tab.
4. Right-clicking the toolbar button opens the browser's context menu and does not run the script.

## Files

- `manifest.json` declares the Manifest V3 service worker, toolbar action, and permissions.
- `background.js` handles toolbar clicks and injects the page script.
- `scripts/run.js` contains the code that runs in the page context.

## Browser support

The project uses the shared WebExtensions API model and Manifest V3. Exact Manifest V3 support varies by browser. Chrome and Edge support unpacked loading from their extensions pages; Firefox can load the manifest temporarily through `about:debugging`.

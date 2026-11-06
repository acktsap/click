chrome.action.onClicked.addListener(async (tab) => {
  if (!tab.id) return;
  if (!tab.url || !/^https?:\/\//.test(tab.url)) return;

  try {
    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["scripts/run.js"],
    });
  } catch (error) {
    console.warn("Could not run the script in this tab.", error);
  }
});

// chrome.browserAction.onClicked.addListener(function(tab) {
//   chrome.tabs.executeScript(null,{
// 	    file: 'test.js'
// 	  });
// });
// background.js

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // Send a message to the active tab
  console.log('hit')
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
  });
});

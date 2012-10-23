// 在 Command-R 时就加载
chrome.browserAction.onClicked.addListener(function(tab){
  chrome.tabs.create({
    'openerTabId': tab.id,
    'url': 'upload.html'
  });
});

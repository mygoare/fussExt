// 在 Command-R 时就加载
chrome.browserAction.onClicked.addListener(function(tab){
  //chrome.tabs.executeScript(tab.id,{code:"$('body').before('12')"});
  chrome.tabs.executeScript(tab.id,{file:"js/jquery.js"},function(){
    chrome.tabs.executeScript(tab.id,{file:"js/my.js"});
  });
});

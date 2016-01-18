chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      $('[itemprop]').each(function(index,value){
        console.log(
          {
            attribute:$(this).attr('itemprop'),
            value:$(this).text(),
            value2:$(this).attr('content')
          }
        )
      })
    }
  }
);

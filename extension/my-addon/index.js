var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");
var jquery = require("lib/jquery-1.11.3.js")

var button = buttons.ActionButton({
  id: "mozilla-link",
  label: "Visit Mozilla",
  icon: {
    "16": "./icon-16.png",
    "32": "./icon-32.png",
    "64": "./icon-64.png"
  },
  onClick: handleClick
});

function handleClick(state) {
    $(document).ready(
      $('[itemprop]').each(function(index,value){
        console.log($(this).attr('itemprop'),$(this).text())
      })
    )
}

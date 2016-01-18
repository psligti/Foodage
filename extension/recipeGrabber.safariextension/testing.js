function getAnswer(theMessageEvent) {
    if (theMessageEvent.name === "grabIt") {
      $(document).ready(
      $('[itemprop]').each(function(index,value){
        console.log($(this).attr('itemprop'),$(this).text())
      })

      )
    }
}
safari.self.addEventListener("message", getAnswer, false);

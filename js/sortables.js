app = angular.module("foodage")
app.directive('sort',function() {
  return{
    restrict:'C',
    link:function(scope,element,attribute) {
      $(element).sortable();
      $('ul,li').disableSelection();
    }
  }
}).directive('drop',function() {
  return{
    restrict:'C',
    link:function(scope,element,attribute) {
      $(element).children().draggable({
      connectToSortable: ".sort",
      helper: "clone",
      revert: "invalid",
      stop: function(event,ui){
        $(ui.helper[0]).removeAttr('style')
      }
      });
      $('ul,li').disableSelection();
    }
  }
}).directive('draggable',function() {
  return{
    restrict:'A',
    link:function(scope,element,attribute) {
      $(element).data('event',{title:$(element).text()})
      $(element).draggable({
        revert:true,
        revertDuration:0
      });
      $('ul,li').disableSelection();
    }
  }
})

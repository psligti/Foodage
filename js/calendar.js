app = angular.module("foodage")
app.directive('calendar',function() {
  return{
    restrict:'A',
    link:function(scope,element,attribute) {
      var date = new Date();
      var d = date.getDate();
      var m = date.getMonth();
      var y = date.getFullYear();
      $(element).fullCalendar({
        header: {
          left: 'prev,next today',
          center: 'title',
          right: 'month,agendaWeek,agendaDay'
        },
        editable: true,
        droppable: true, // this allows things to be dropped onto the calendar
			  eventLimit: true
      }
    );
  }
  }
})

!function($){data=[{title:"titre 1",chapeau:"chapeau 1"},{title:"titre 2",chapeau:"chapeau 2"}],console.log(data),function(a){var t=$("#card-template").html(),e=Handlebars.compile(t)({card:a});$(".authors").prepend(e)}(data)}(jQuery);
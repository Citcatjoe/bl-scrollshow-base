(function($){

	data = [
        { 
            title: 'titre 1',
            chapeau: 'chapeau 1'
        },
        { 
            title: 'titre 2',
            chapeau: 'chapeau 2'
        }	
	];
	console.log(data);

    buildCards(data);
    function buildCards(data){
        var source   = $("#card-template").html();
        var template = Handlebars.compile(source);
        var html = template({'card':data});
        $(".authors").prepend(html); 
    }
   
    

	

})(jQuery);
$('#getBtn').click(function(){
    var url = 'https://api.edamam.com/search?app_id=8da5e920&app_key=e45a5542600578a84e2bd260efaebca5&q=' + $('#recipeInput').val();
    $.getJSON(url,function(data){
        data.hits.forEach(function(r,i){
            var recipeItems = "";
            data.hits[0].recipe.ingredients.forEach(function(recipeItem){
                recipeItems += '<li>' + recipeItem.text + '</li>';
            });
                console.log(recipeItems)
            $('#recipeContent').append('<div class="recipeTitle">' + r.recipe.label + '</div><img src=" ' + r.recipe.image + ' " alt="" class="recipeImage"><div class="yeild"></div> Serves '+ r.recipe.yield + ' people <ul>' + recipeItems + '</ul></div>');
            /*if($(this).attr("data-menu") == "closed"){
                $(this).css("height", "300px");
                $(this).attr("data-menu", "open")
            }
            else{
                $(this).css("height", "39px");
                $(this).attr("data-menu", "closed")
            }*/
            $(".recipeItem").click(function(){
                $(this).css("height", "300px");
            });
        });
    });
});


        //for(var i = 0; i < data.hits.length; i++){$('#recipeContent').append('<div class="recipeTitle">' + data.hits[i].recipe.label + '</div><img src="" alt="" class="recipeImage">' + data.hits[i].recipe.image + '<div class="yeild"></div> Serves '+ data.hits[i].recipe.yield + ' people <ul><li>' + data.hits[i].recipe.ingredients[0].text  + '</li><li>' + data.hits[i].recipe.ingredients[1].text  + '</li><li>' + data.hits[i].recipe.ingredients[2].text  + '</li></ul></div>');}
        //console.log(data.hits[0].recipe.label);
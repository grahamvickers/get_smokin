
( function() {
	"use strict";

	let url = "recipe_btns.json";

	window.onload = function getRecipeBtns () {
        var timeline = new TimelineMax();
        timeline.from("#main", .7, {y:50, autoAlpha: .5 }, 0)
		fetch(url).then(function(response){

			// console.log(response.json());
			return response.json();
		}).then (function(buttons){
            buttons.forEach(button => {
				document.querySelector("#recipeBoxes").innerHTML +=`
                    <div class="recipeCon">
						<img src="/${button.img}" alt="${button.type} Photo">
						<a href="${button.url}" class="button">${button.type}</a>
					</div>
				`
			});
		}).catch(function(err){
			console.log(err);
		})
	}
	// window.onload(getRecipeBtns);
})();
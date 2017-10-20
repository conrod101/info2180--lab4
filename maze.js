/*
window.onload = function (){
	document.getElementById('boundary1').onmouseover = function(){
		document.getElementById('boundary1').classList.add("youlose");
	}
}
*/


Maze_initiate = false;
Maze_stop = false;
Wall_Touch = true;
boundaries=true;

window.onload = function(){

	start = document.getElementById("start");
	end   = document.getElementById("end");
	boundaries = document.querySelectorAll(".boundary:not(.example)");
	maze = document.getElementById("maze");

	//Wall change to red when a mouse touches it
	for (red=0;red<boundaries.length;red++){
		boundaries[red].addEventListener("mouseover", function(element){
			
		document.getElementById("status").innerHTML = "You Lose: Dont Touch the Walls";

			for (red=0;red<boundaries.length;red++){
				boundaries[red].classList.add("youlose")
			}
			Wall_Touch = false;
		});
	};


	//Alert You when game is won;
	start.addEventListener("mouseover", function(){
		Maze_initiate = true;
	});

	start.addEventListener("click", function(){
		location.reload();
	})

	end.addEventListener("mouseover", function(){
		Maze_stop = true;

		if (Maze_initiate && Wall_Touch){
			document.getElementById("status").innerHTML = "You win";
		} 
	});

	maze.onmouseleave = function(){
		if (Maze_initiate === true){
			document.getElementById("status").innerHTML = "You Lose: You left the Maze";
		}
	}
}

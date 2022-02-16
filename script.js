var content = document.querySelector('.burger-content');
var sidebarBody = document.querySelector('.sidebar-body');
var button = document.querySelector('.burger-button');
var Overlay = document.querySelector('.overlay');
var activatedClass = 'burger-activated'



sidebarBody.innerHTML = content.innerHTML;

button.addEventListener('click', function(e) {
	e.preventDefault();
    this.parentNode.classList.add(activatedClass);
});

/*button.addEventListener('click', function(e) {
	if (this.parentNode.classList.contains(activatedClass))
    {
    	if (e.repeat === false && e.which === 27)
    		this.parentNode.classList.remove(activatedClass);
    }

});*/


Overlay.addEventListener('click', function(e) {
	e.preventDefault();
    this.parentNode.classList.remove(activatedClass);
});


	



		(_=> {var burger = document.querySelector('.nav-burger'),
			menu = document.querySelector('.burger-menu')
		burger.onclick = function() {
			this.classList.toggle('active');
			menu.classList.toggle('off');
		}})();
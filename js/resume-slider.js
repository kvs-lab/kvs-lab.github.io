		 (_=> { var resumeItem = document.querySelectorAll('.resume-list__item'),
			selected = resumeItem[0],
			content = document.querySelectorAll('.resume-page'),
			selectedContent = content[0];

		for (var i = 0; i < resumeItem.length; i++) {
			resumeItem[i].ind = i;
			resumeItem[i].onclick = function() {
				selected.classList.remove('active');
				selected = this;
				selected.classList.add('active');
				setEnable(this.ind);
			}
		}

		function setEnable(i) {
			selectedContent.classList.remove('active');
			selectedContent = content[i];
			selectedContent.classList.add('active');
		}})();
		
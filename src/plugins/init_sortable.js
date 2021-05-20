import Sortable from 'sortablejs';

const initSortable = () => {
	const element = document.getElementById('results');
	const sortable = Sortable.create(element, {
	  ghostClass: "ghost",
	  animation: 150,
	  onEnd: (event) => {
	    alert(`${event.oldIndex} moved to ${event.newIndex}`);
	  }
	});
}

export { initSortable };

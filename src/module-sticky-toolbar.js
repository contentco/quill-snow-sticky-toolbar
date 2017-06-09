import ResizeSensor from '../node_modules/css-element-queries/src/ResizeSensor.js';
class StickyToolbar {
    constructor(quill, props) {
        this.quill = quill;
        this.toolbar = quill.getModule('toolbar');
        if (this.quill.container.classList.contains('quill-sticky')) {
        	let obj = this.toolbar.container;
        	let parentDiv = obj.parentNode;
        	let parentDivWidth = parentDiv.offsetWidth;
        	let objTop = obj.getBoundingClientRect().top;

        	new ResizeSensor(parentDiv, function() {
	            obj.style.width = parentDiv.clientWidth + 'px';
	        });
        	
        	window.addEventListener('scroll', function (evt) {
				var distance_from_top = document.body.scrollTop;
				if (distance_from_top > objTop) {
					obj.style.position = "fixed";
					obj.style.width = parentDiv.clientWidth + 'px';
					obj.style.top =  '0px';
				}
				if(distance_from_top < objTop) {
					obj.style.position = "relative";
					obj.style.width = parentDiv.clientWidth + 'px';
				}
			});
        }
    }
}
Quill.register('modules/sticky_toolbar', StickyToolbar);

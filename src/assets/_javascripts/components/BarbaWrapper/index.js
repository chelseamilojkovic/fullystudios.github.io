import Barba from 'barba.js';
import PageTransition from './../PageTransition';

module.exports =
class BarbaWrapper {
	constructor () {
		this._pageTransition = new PageTransition;
		
		Barba.Pjax.start ();
		this._fadeTransition = Barba.BaseTransition.extend ({
			start () {
				// As soon the loading is finished and the old page is faded out, let's fade the new page
				Promise
					.all([this.newContainerLoading, this.animOut()])
					.then(this.animIn.bind(this));
			}
		})
	}

	animOut () {
		return new Promise(function(resolve) {
			console.log('peggy')
			this._pageTransition.playSegments([[0,11]],true);
			this._pageTransition.onComplete = function() {
				resolve(true);
			}
		});
	}

	animIn () {
		window.scrollTo(0,0);

		// play the out transition
		this._pagetransition.playSegments([[25,54]],true);
		
		// immediately clear the old DOM
		this.done();
	}

}
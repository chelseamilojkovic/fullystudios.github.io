import bodymovin from 'bodymovin';

module.exports =
class PageTransition {

	constructor () {
        this._transitionOverlay = document.createElement('div');
        this._transitionOverlay.classList.add('transition-overlay');
        document.body.appendChild(this._transitionOverlay);
		this._path = '/assets/pagetransition.json'

        this._transitionData = {
        	container: this._transitionOverlay,
        	renderer: 'svg',
        	loop: false,
        	autoplay: false,
            autoloadSegments: false,
        	path: this._path,
            rendererSettings: { 
                preserveAspectRatio:'none'
            }
        }

        this._pageTransition = bodymovin.loadAnimation (this._transitionData);
    }

}

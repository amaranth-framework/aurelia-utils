/**
 * Aurelia Skeleton (https://github.com/amaranth-framework/aurelia-skeleton/)
 *
 * @link      https://github.com/amaranth-framework/aurelia-skeleton/ for the canonical source repository
 * @copyright Copyright (c) 2007-2017 IT Media Connect (http://itmediaconnect.ro)
 * @license   https://github.com/amaranth-framework/aurelia-skeleton/LICENSE MIT License
 */

import _ from 'lodash';

import { View } from './view';

/**
 * Abstract Template View (usable in `src/templates`)
 * @extends {View}
 */
export class Template extends View {
    /**
     * Constructor
     */
    constructor(...args) {
        super(...args);
        /**
         * @type {Object}
         */
        this.settings = (this.activeRoute || {}).settings | {};
    }
    /**
     * @see http://aurelia.io/docs/api/router/interface/RoutableComponentActivate/method/activate
     * @return {void}
     */
    activate(...args) {
        if (!this.__initialized) {
            this.init();
        }
    }
    /**
     * Obtain current navigation instruction for the application.
     * @return {NavigationInstructions|null}
     */
    get activeRoute() {
        return (this.router || {}).currentInstruction;
    }
    /**
     * @return {void}
     */
    init() {
        super.init();

        // setting up a style class on the <body> element to be able to style page dependent elements
        const BODY = document.querySelector('body');
        BODY.className = BODY.className.replace(/page-[^ ]+ /gi, '');
        // step two: add all new classes (if present) prepending 'page-' prefix to each one
        BODY.className += _.get(this, 'settings.style', '').split(' ').map(name => `page-${name} `).join('');
    }
    /**
     * Set default activationStrategy
     *
     * @returns The activation strategy
     *
     * @memberof Template
     */
    determineActivationStrategy() {
        return 'replace';
    }
    /**
     * Get View Strategy (get the template modelView will use)
     * If `this.settings.routeTemplate` is not defined, it will return `routeConfig.moduleId` (which is the default
     * template); otherwise will return the new value.
     *
     * NOTE: Do not add .html in routeTmplate variable, function will concatenate it to the given template by default.
     *
     * @return {String}
     */
    getViewStrategy() {
        const template = (this.settings || {}).template || undefined;
        // this.logger.debug('getViewStrategy', this.activeRoute.config.moduleId, template);
        return ((typeof template !== 'string') ? this.activeRoute.config.moduleId : template) + '.html';
    }
}

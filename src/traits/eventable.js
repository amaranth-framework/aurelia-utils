/**
 * Aurelia Skeleton (https://github.com/amaranth-framework/aurelia-skeleton/)
 *
 * @link      https://github.com/amaranth-framework/aurelia-skeleton/ for the canonical source repository
 * @copyright Copyright (c) 2007-2017 IT Media Connect (http://itmediaconnect.ro)
 * @license   https://github.com/amaranth-framework/aurelia-skeleton/LICENSE MIT License
 */

import { EventAggregator } from 'aurelia-event-aggregator';
import { Logger } from 'aurelia-logging';

/**
 * Trait for handling events within a class.
 */
export class Eventable {
    /**
     * @private
     * @type {Array}
     */
    __events = [];
    /**
     * @private
     */
    __testEvents() {
        if (!this.events) {
            throw Error('Class is missing \'events\' variable. You cannot add \'Eventable\' trait.');
        }
        if (!this.events instanceof EventAggregator) {
            throw Error('Variable \'events\' is not of \'aurelia-event-aggregator/EventAgregator\' type. You cannot add \'Eventable\' trait.');
        }
    }
    /**
     * See {@link http://aurelia.io/docs/api/event-aggregator/class/EventAggregator/method/publish}
     * @param  {any} args
     * @return {void}
     */
    subscribeEvent(...args) {
        this.__testEvents();
        this.__events = this.__events || [];
        this.__events.push(this.events.subscribe(...args));
        this.logger && this.logger instanceof Logger && this.logger.debug('Event subscribed: ', ...args);
    }
    /**
     * See {@link http://aurelia.io/docs/api/event-aggregator/class/EventAggregator/method/subscribeOnce}
     * @param  {any} args
     * @return {void}
     */
    subscribeEventOnce(...args) {
        this.__testEvents();
        this.__events = this.__events || [];
        this.__events.push(this.events.subscribeOnce(...args));
        this.logger && this.logger instanceof Logger && this.logger.debug('Event subscribed (once): ', ...args);
    }
    /**
     * See {@link http://aurelia.io/docs/api/event-aggregator/class/EventAggregator/method/subscribe}
     * @param  {any} args
     * @return {void}
     */
    publishEvent(...args) {
        this.__testEvents();
        this.events.publish(...args);
        this.logger && this.logger instanceof Logger && this.logger.debug('Event published: ', ...args);
    }
    /**
     * Will dispose all active events
     * See {@link http://aurelia.io/docs/api/event-aggregator/interface/Subscription/method/dispose}
     * @return {void}
     */
    disposeEvents() {
        this.__testEvents();
        if (this.__events && Array.isArray(this.__events)) {
            this.__events.forEach((event) => event.dispose());
        }
    }
}

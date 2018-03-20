/**
 * Aurelia Skeleton (https://github.com/amaranth-framework/aurelia-skeleton/)
 *
 * @link      https://github.com/amaranth-framework/aurelia-skeleton/ for the canonical source repository
 * @copyright Copyright (c) 2007-2017 IT Media Connect (http://itmediaconnect.ro)
 * @license   https://github.com/amaranth-framework/aurelia-skeleton/LICENSE MIT License
 */

/**
 * @external {ComponentAttached} http://aurelia.io/docs/api/templating/interface/ComponentAttached/
 */
/**
 * @external {ComponentBind} http://aurelia.io/docs/api/templating/interface/ComponentBind/
 */
/**
 * @external {ComponentCreate} http://aurelia.io/docs/api/templating/interface/ComponentCreated/
 */
/**
 * @external {ComponentDetached} http://aurelia.io/docs/api/templating/interface/ComponentDetached/
 */
/**
 * @external {ComponentDetached.detached} http://aurelia.io/docs/api/templating/interface/ComponentDetached/method/detached
 */
/**
 * @external {ComponentUnbind} http://aurelia.io/docs/api/templating/interface/ComponentUnbind/
 */
/**
 * @external {ConfiguresRouter} http://aurelia.io/docs/api/templating/interface/ConfiguresRouter/
 */
/**
 * @external {DynamicComponentGetViewStrategy} http://aurelia.io/docs/api/templating/interface/DynamicComponentGetViewStrategy
 */
/**
 * @external {NavigationInstructions} http://aurelia.io/docs/api/router/interface/NavigationInstructions
 */
/**
 * @external {RoutableComponentActivate} http://aurelia.io/docs/api/router/interface/RoutableComponentActivate
 */
/**
 * @external {RoutableComponentCanActivate} http://aurelia.io/docs/api/router/interface/RoutableComponentCanActivate
 */
/**
 * @external {RoutableComponentCanDeactivate} http://aurelia.io/docs/api/router/interface/RoutableComponentCanDeactivate
 */
/**
 * @external {RoutableComponentDeactivate} http://aurelia.io/docs/api/router/interface/RoutableComponentDeactivate
 */
/**
 * @external {RouteConfig} http://aurelia.io/docs/api/router/interface/RouteConfig
 */

import { className, extend } from 'amaranth-utils';
// import { inject } from 'aurelia-framework';

import { Base } from './base';

/**
 * Abstract Class for all Model Views (Components) used within the project
 * @extends {ModelView}
 * @implements {ComponentAttached}
 * @implements {ComponentBind}
 * @implements {ComponentCreate}
 * @implements {ComponentDetached}
 * @implements {ComponentUnbind}
 * @implements {ConfiguresRouter}
 * @implements {DynamicComponentGetViewStrategy}
 * @implements {RoutableComponentActivate}
 * @implements {RoutableComponentCanActivate}
 * @implements {RoutableComponentCanDeactivate}
 * @implements {RoutableComponentDeactivate}
 */
// @inject(Messages)
export class View extends Base {
    /*************************************************************************************
     * Inherited
     *************************************************************************************/
    /**
     * @see Base#constructor
     * @param {Messages} messages
     */
    // constructor(messages, ...args) {
    //     super(...args);
    //     /**
    //      * @type {Messages}
    //      */
    //     this.messages = messages;
    // }
    /**
     * Invoked when the databinding engine binds the view. The binding context is the instance that the view is
     * databound to.
     * @see http://aurelia.io/docs/api/templating/interface/ComponentBind/method/bind
     * @param  {Object}  bindingContext
     * @param  {Object}  overrideContext
     * @param  {Boolean} _systemUpdate default true
     * @return {void}
     */
    bind(bindingContext, overrideContext, _systemUpdate = true) {
        // this.logger.debug('test-life bind', bindingContext, overrideContext, _systemUpdate);
        /**
         * Parent view/model
         * @type {Object}
         */
        this.parent = overrideContext.parentOverrideContext.bindingContext;
    }
    /**
     * Default view settings, as follows
     * - style: '',    => css classes for page (each class will be added to body element having page- prefix)
     * - styles: {},   => set of css classes that can be used throughout different sections of the template
     * - content: {},  => translation keys for different text/html components in the template
     * - service: {},  => possible service settings for templates
     * - services: {}  => possible services settings for templates
     * @return {Object}
     */
    get defaultSettings() {
        return {
            style: '',
            styles: {},
            content: {},
            service: {},
            services: {}
        };
    }
    /**
     * @see http://aurelia.io/docs/api/templating/interface/ComponentDetached/method/detached
     */
    detached(...args) {
        // this.logger.debug('test-life detached', ...args);
        this.disposeEvents();
    }
    /**
     * Specific init function for each model view. AbstravView will call it at the end of the activate method.
     * Generaly this method may be async.
     * @return {void}
     */
    init() {
        this.mergeSettings();
        // this.logger.debug('View Initialized', this.settings);

        this.__initialized = true;
    }
    /**
     * Merge settings given for a view from different layers of the application:
     * - defaultSettings getter
     * - which can be overwritten by the settings from config.json (defined via) `overrideSettingsKey` key
     * - which can also be overwritten by the settings which are direclty binded to the view
     * @return {void}
     */
    async mergeSettings() {
        this.settings = this.settings || {};
        // in case a `defaultSettings` object exists, merge the `settings` object passed by @model ofer the default settings.
        if (this.defaultSettings) {
            // this.logger.debug('ModelView::mergeSettings => overrideSettingsKey: ', this.overrideSettingsKey);
            // this.logger.debug('ModelView::mergeSettings => defaultSettings: ', extend({}, this.modelDefaultSettings || {}), this.defaultSettings);
            let defaultSettings = extend(true, {}, this.defaultSettings || {});
            delete this.modelDefaultSettings;
            // this.logger.debug('ModelView::mergeSettings => settings split:', defaultSettings, this.overrideSettings, extend({}, this.settings || {}));
            this.settings = extend(
                true,                               // recursive merge
                {},                                 // cloning into a new object
                defaultSettings,                    // default settings provided by class definition
                this.overrideSettings,              // global settings provided by config.json
                this.settings,                      // settings obtained from application route
                // settings provided by config file mentioned in `_settingsPath`
                (this.settings && this.settings._settingsPath) ? await this.configApi.get(`${this.settings._settingsPath}.json`) : {}
            );
            // this.logger.debug('ModelView::mergeSettings => settings:', this.settings);
        }
    }
    /**
     * Getter for component override settings. This settings should globaly override settings defined in a component's
     * `defaultSettings` variable. If the override settubgs do not exists, it will return an empty object.
     * @return {Object}
     */
    get overrideSettings() {
        if (!this.overrideSettingsKey || this.overrideSettingsKey.length === 0) {
            throw new Error(`Class '${className(this)}' has no 'overrideSettingsKey' defined.`);
        }
        if (!this._overrideSettings) {
            this._overrideSettings = this.config.get(this.overrideSettingsKey) || {};
        }
        // this.logger.debug('defaultOverrideSettings: ', this._defaultOverrideSettings);
        return this._overrideSettings;
    }
    /**
     * Getter for concatenating component style/bind. Will concatenate styles found in 'settings.layout'
     * and 'settings.style' values. Will return empty string if none found.
     * @return {String}
     */
    get style() {
        return `${this.settings.style || ''} ${this.settings.layout || ''}`.trim();
    }

    // attached(...args) {
    //     this.logger.debug('test-life attached', ...args);
    // }

    // canActivate(...args) {
    //     this.logger.debug('test-life canActivate', ...args);
    // }

    // canDeactivate(...args) {
    //     this.logger.debug('test-life canDeactivate', ...args);
    // }

    // created(...args) {
    //     this.logger.debug('test-life created', ...args);
    // }

    // deactivate(...args) {
    //     this.logger.debug('test-life deactivate', ...args);
    // }

    // deactivated(...args) {
    //     this.logger.debug('test-life deactivated', ...args);
    // }

    // unbind(...args) {
    //     this.logger.debug('test-life unbind', ...args);
    // }
}

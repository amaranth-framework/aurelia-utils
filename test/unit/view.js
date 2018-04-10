import { AureliaConfiguration } from 'aurelia-configuration';
import { Container } from 'aurelia-dependency-injection';
import { EventAggregator } from 'aurelia-event-aggregator';
import { I18N } from 'aurelia-i18n';
import { Router } from 'aurelia-router';
import { ValidationController } from 'aurelia-validation';

import { Base, Component, Model, Template, View } from '../../src/index';

describe('view/View', () => {
    beforeEach(() => {
        Container.instance = new Container();
        Container.instance.registerInstance(AureliaConfiguration, new AureliaConfiguration());
        Container.instance.registerInstance(EventAggregator, new EventAggregator());
        Container.instance.registerInstance(I18N, new I18N());
        Container.instance.registerInstance(Router, new Router());
    });
    /**
     * Component
     */
    it('should create Component instance through Aurelia DI', () => {
        const view = Container.instance.get(Component);

        expect(view instanceof Component).toBeTruthy();
        expect(view instanceof View).toBeTruthy();
        expect(view instanceof Base).toBeTruthy();
    });
    /**
     * Model
     */
    it('should create Model instance through Aurelia DI', () => {
        const view = Container.instance.get(Model);

        expect(view instanceof Model).toBeTruthy();
        expect(view instanceof View).toBeTruthy();
        expect(view instanceof Base).toBeTruthy();
    });
    it('should contain ValidationController from inject', () => {
        expect(Container.instance.get(Model).validationController).toBeDefined();
        expect(Container.instance.get(Model).validationController instanceof ValidationController).toBeTruthy();
    });
    /**
     * View
     */
    it('should create View instance through Aurelia DI', () => {
        const view = Container.instance.get(View);

        expect(view instanceof View).toBeTruthy();
        expect(view instanceof Base).toBeTruthy();
    });
    it('should contain Eventable methods', () => {
        expect(Container.instance.get(View).subscribeEvent instanceof Function).toBeTruthy();
    });
    it('should contain Loggable methods', () => {
        expect(Container.instance.get(View).getLogger instanceof Function).toBeTruthy();
    });
    it('should have `toString` method', () => {
        expect(Container.instance.get(View).toString().match(/Base\/View@.+/)).toBeTruthy();
    });
    it('should contain AureliaConfiguration from inject', () => {
        expect(Container.instance.get(View).config).toBeDefined();
        // expect(Container.instance.get(View).config instanceof AureliaConfiguration).toBeTruthy();
    });
    it('should contain EventAggregator from inject', () => {
        expect(Container.instance.get(View).events).toBeDefined();
        expect(Container.instance.get(View).events instanceof EventAggregator).toBeTruthy();
    });
    it('should contain I18N from inject', () => {
        expect(Container.instance.get(View).i18n).toBeDefined();
        expect(Container.instance.get(View).i18n instanceof I18N).toBeTruthy();
    });
    it('should contain Router from inject', () => {
        expect(Container.instance.get(View).router).toBeDefined();
        expect(Container.instance.get(View).router instanceof Router).toBeTruthy();
    });
    /**
     * Template
     */
    it('should create Template instance through Aurelia DI', () => {
        const view = Container.instance.get(Template);

        expect(view instanceof Template).toBeTruthy();
        expect(view instanceof View).toBeTruthy();
        expect(view instanceof Base).toBeTruthy();
    });
});


import { traits } from 'amaranth-utils';
import { Eventable, Loggable, RESTable, RouteActive, Routable, RoutableREST } from '../../src/index';

class NoEvents {}
class WithEvents {}
traits(WithEvents, Eventable);

class NoLogger {}
class WithLogger {}
traits(WithLogger, Loggable);

class NoRest {}
class WithRest {}
traits(WithRest, RESTable);

class NoRouteActive {}
class WithRouteActive {}
traits(WithRouteActive, RouteActive);

class NoRoutable {}
class WithRoutable {}
traits(WithRoutable, Routable);

// not gonna test for now since it's not needed
// class NoRoutableREST {}
// class WithRoutableREST {}
// traits(WithRoutableREST, RoutableREST);

describe('traits', () => {
    it('traits(Class, Eventable) should contain Eventable methods', () => {
        const noEvents = new NoEvents();
        const withEvents = new WithEvents();

        expect(noEvents.subscribeEvent).toBe(undefined);
        expect(withEvents.subscribeEvent instanceof Function).toBeTruthy();
    });
    it('traits(Class, Loggable) should contain Loggable methods', () => {
        const noLogger = new NoLogger();
        const withLogger = new WithLogger();

        expect(noLogger.getLogger).toBe(undefined);
        expect(withLogger.getLogger instanceof Function).toBeTruthy();
    });
    it('traits(Class, RESTable) should contain RESTable methods', () => {
        const noRest = new NoRest();
        const withRest = new WithRest();

        expect(noRest.settleEndpoint).toBe(undefined);
        expect(withRest.settleEndpoint instanceof Function).toBeTruthy();
    });
    it('traits(Class, RouteActive) should contain RouteActive methods', () => {
        const noRouteActive = new NoRouteActive();
        const withRouteActive = new WithRouteActive();

        expect(noRouteActive.subscribeRouteActiveEvent).toBe(undefined);
        expect(withRouteActive.subscribeRouteActiveEvent instanceof Function).toBeTruthy();
    });
    it('traits(Class, Routable) should contain Routable methods', () => {
        const noRoutable = new NoRoutable();
        const withRoutable = new WithRoutable();

        expect(noRoutable.subscribeRouteActiveEvent).toBe(undefined);
        expect(withRoutable.subscribeRouteActiveEvent instanceof Function).toBeTruthy();
        expect(noRoutable.configureRouter).toBe(undefined);
        expect(withRoutable.configureRouter instanceof Function).toBeTruthy();
    });
});

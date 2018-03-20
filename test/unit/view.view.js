import { Container } from 'aurelia-dependency-injection';

import { View } from '../../src/index';

describe('the Aurelia configuration', () => {
    var mockedConfiguration;

    it('should register a global resource', () => {
        Container.instance.get(View)
        // expect(mockedConfiguration.resources).toContain('./hello-world');
    });

});

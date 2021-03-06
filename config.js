System.config({
    defaultJSExtensions: true,
    transpiler: false,
    paths: {
        'github:*': 'jspm_packages/github/*',
        'npm:*': 'jspm_packages/npm/*'
    },

    map: {
        'amaranth-utils': 'npm:amaranth-utils@0.0.4',
        'aurelia-api': 'npm:aurelia-api@3.1.1',
        'aurelia-configuration': 'npm:aurelia-configuration@2.0.0',
        'aurelia-dependency-injection': 'npm:aurelia-dependency-injection@1.3.2',
        'aurelia-event-aggregator': 'npm:aurelia-event-aggregator@1.0.1',
        'aurelia-framework': 'npm:aurelia-framework@1.1.5',
        'aurelia-i18n': 'npm:aurelia-i18n@2.1.2',
        'aurelia-logging': 'npm:aurelia-logging@1.4.0',
        'aurelia-pal': 'npm:aurelia-pal@1.7.0',
        'aurelia-polyfills': 'npm:aurelia-polyfills@1.0.0',
        'aurelia-router': 'npm:aurelia-router@1.5.0',
        'aurelia-templating': 'npm:aurelia-templating@1.7.0',
        'aurelia-validation': 'npm:aurelia-validation@1.1.3',
        'lodash': 'npm:lodash@4.17.5',
        'github:jspm/nodelibs-assert@0.1.0': {
            'assert': 'npm:assert@1.4.1'
        },
        'github:jspm/nodelibs-buffer@0.1.1': {
            'buffer': 'npm:buffer@5.1.0'
        },
        'github:jspm/nodelibs-process@0.1.2': {
            'process': 'npm:process@0.11.10'
        },
        'github:jspm/nodelibs-util@0.1.0': {
            'util': 'npm:util@0.10.3'
        },
        'github:jspm/nodelibs-vm@0.1.0': {
            'vm-browserify': 'npm:vm-browserify@0.0.4'
        },
        'npm:amaranth-utils@0.0.4': {
            'js-cookie': 'npm:js-cookie@2.2.0',
            'uuid-js': 'npm:uuid-js@0.7.5'
        },
        'npm:assert@1.4.1': {
            'assert': 'github:jspm/nodelibs-assert@0.1.0',
            'buffer': 'github:jspm/nodelibs-buffer@0.1.1',
            'process': 'github:jspm/nodelibs-process@0.1.2',
            'util': 'npm:util@0.10.3'
        },
        'npm:aurelia-api@3.1.1': {
            'aurelia-dependency-injection': 'npm:aurelia-dependency-injection@1.3.2',
            'aurelia-fetch-client': 'npm:aurelia-fetch-client@1.3.1',
            'aurelia-framework': 'npm:aurelia-framework@1.1.5',
            'aurelia-path': 'npm:aurelia-path@1.1.1',
            'extend': 'npm:extend@3.0.1'
        },
        'npm:aurelia-binding@1.7.1': {
            'aurelia-logging': 'npm:aurelia-logging@1.4.0',
            'aurelia-metadata': 'npm:aurelia-metadata@1.0.3',
            'aurelia-pal': 'npm:aurelia-pal@1.7.0',
            'aurelia-task-queue': 'npm:aurelia-task-queue@1.2.1'
        },
        'npm:aurelia-configuration@2.0.0': {
            'aurelia-binding': 'npm:aurelia-binding@1.7.1',
            'aurelia-dependency-injection': 'npm:aurelia-dependency-injection@1.3.2',
            'aurelia-framework': 'npm:aurelia-framework@1.1.5',
            'aurelia-loader': 'npm:aurelia-loader@1.0.0',
            'aurelia-logging': 'npm:aurelia-logging@1.4.0',
            'aurelia-metadata': 'npm:aurelia-metadata@1.0.3',
            'aurelia-pal': 'npm:aurelia-pal@1.7.0',
            'aurelia-path': 'npm:aurelia-path@1.1.1',
            'aurelia-task-queue': 'npm:aurelia-task-queue@1.2.1',
            'aurelia-templating': 'npm:aurelia-templating@1.7.0',
            'aurelia-templating-binding': 'npm:aurelia-templating-binding@1.4.1'
        },
        'npm:aurelia-dependency-injection@1.3.2': {
            'aurelia-metadata': 'npm:aurelia-metadata@1.0.3',
            'aurelia-pal': 'npm:aurelia-pal@1.7.0'
        },
        'npm:aurelia-event-aggregator@1.0.1': {
            'aurelia-logging': 'npm:aurelia-logging@1.4.0'
        },
        'npm:aurelia-framework@1.1.5': {
            'aurelia-binding': 'npm:aurelia-binding@1.7.1',
            'aurelia-dependency-injection': 'npm:aurelia-dependency-injection@1.3.2',
            'aurelia-loader': 'npm:aurelia-loader@1.0.0',
            'aurelia-logging': 'npm:aurelia-logging@1.4.0',
            'aurelia-metadata': 'npm:aurelia-metadata@1.0.3',
            'aurelia-pal': 'npm:aurelia-pal@1.7.0',
            'aurelia-path': 'npm:aurelia-path@1.1.1',
            'aurelia-task-queue': 'npm:aurelia-task-queue@1.2.1',
            'aurelia-templating': 'npm:aurelia-templating@1.7.0'
        },
        'npm:aurelia-i18n@2.1.2': {
            'aurelia-binding': 'npm:aurelia-binding@1.7.1',
            'aurelia-dependency-injection': 'npm:aurelia-dependency-injection@1.3.2',
            'aurelia-event-aggregator': 'npm:aurelia-event-aggregator@1.0.1',
            'aurelia-loader': 'npm:aurelia-loader@1.0.0',
            'aurelia-logging': 'npm:aurelia-logging@1.4.0',
            'aurelia-metadata': 'npm:aurelia-metadata@1.0.3',
            'aurelia-pal': 'npm:aurelia-pal@1.7.0',
            'aurelia-templating': 'npm:aurelia-templating@1.7.0',
            'aurelia-templating-resources': 'npm:aurelia-templating-resources@1.5.4',
            'i18next': 'npm:i18next@9.1.0',
            'intl': 'npm:intl@1.2.5'
        },
        'npm:aurelia-loader@1.0.0': {
            'aurelia-metadata': 'npm:aurelia-metadata@1.0.3',
            'aurelia-path': 'npm:aurelia-path@1.1.1'
        },
        'npm:aurelia-metadata@1.0.3': {
            'aurelia-pal': 'npm:aurelia-pal@1.7.0'
        },
        'npm:aurelia-polyfills@1.0.0': {
            'aurelia-pal': 'npm:aurelia-pal@1.7.0'
        },
        'npm:aurelia-route-recognizer@1.1.1': {
            'aurelia-path': 'npm:aurelia-path@1.1.1'
        },
        'npm:aurelia-router@1.5.0': {
            'aurelia-dependency-injection': 'npm:aurelia-dependency-injection@1.3.2',
            'aurelia-event-aggregator': 'npm:aurelia-event-aggregator@1.0.1',
            'aurelia-history': 'npm:aurelia-history@1.1.0',
            'aurelia-logging': 'npm:aurelia-logging@1.4.0',
            'aurelia-path': 'npm:aurelia-path@1.1.1',
            'aurelia-route-recognizer': 'npm:aurelia-route-recognizer@1.1.1'
        },
        'npm:aurelia-task-queue@1.2.1': {
            'aurelia-pal': 'npm:aurelia-pal@1.7.0'
        },
        'npm:aurelia-templating-binding@1.4.1': {
            'aurelia-binding': 'npm:aurelia-binding@1.7.1',
            'aurelia-logging': 'npm:aurelia-logging@1.4.0',
            'aurelia-templating': 'npm:aurelia-templating@1.7.0'
        },
        'npm:aurelia-templating-resources@1.5.4': {
            'aurelia-binding': 'npm:aurelia-binding@1.7.1',
            'aurelia-dependency-injection': 'npm:aurelia-dependency-injection@1.3.2',
            'aurelia-loader': 'npm:aurelia-loader@1.0.0',
            'aurelia-logging': 'npm:aurelia-logging@1.4.0',
            'aurelia-metadata': 'npm:aurelia-metadata@1.0.3',
            'aurelia-pal': 'npm:aurelia-pal@1.7.0',
            'aurelia-path': 'npm:aurelia-path@1.1.1',
            'aurelia-task-queue': 'npm:aurelia-task-queue@1.2.1',
            'aurelia-templating': 'npm:aurelia-templating@1.7.0'
        },
        'npm:aurelia-templating@1.7.0': {
            'aurelia-binding': 'npm:aurelia-binding@1.7.1',
            'aurelia-dependency-injection': 'npm:aurelia-dependency-injection@1.3.2',
            'aurelia-loader': 'npm:aurelia-loader@1.0.0',
            'aurelia-logging': 'npm:aurelia-logging@1.4.0',
            'aurelia-metadata': 'npm:aurelia-metadata@1.0.3',
            'aurelia-pal': 'npm:aurelia-pal@1.7.0',
            'aurelia-path': 'npm:aurelia-path@1.1.1',
            'aurelia-task-queue': 'npm:aurelia-task-queue@1.2.1'
        },
        'npm:aurelia-validation@1.1.3': {
            'aurelia-binding': 'npm:aurelia-binding@1.7.1',
            'aurelia-dependency-injection': 'npm:aurelia-dependency-injection@1.3.2',
            'aurelia-logging': 'npm:aurelia-logging@1.4.0',
            'aurelia-pal': 'npm:aurelia-pal@1.7.0',
            'aurelia-task-queue': 'npm:aurelia-task-queue@1.2.1',
            'aurelia-templating': 'npm:aurelia-templating@1.7.0'
        },
        'npm:buffer@5.1.0': {
            'base64-js': 'npm:base64-js@1.2.3',
            'ieee754': 'npm:ieee754@1.1.8'
        },
        'npm:i18next@9.1.0': {
            'process': 'github:jspm/nodelibs-process@0.1.2'
        },
        'npm:inherits@2.0.1': {
            'util': 'github:jspm/nodelibs-util@0.1.0'
        },
        'npm:intl@1.2.5': {
            'process': 'github:jspm/nodelibs-process@0.1.2'
        },
        'npm:process@0.11.10': {
            'assert': 'github:jspm/nodelibs-assert@0.1.0',
            'fs': 'github:jspm/nodelibs-fs@0.1.2',
            'vm': 'github:jspm/nodelibs-vm@0.1.0'
        },
        'npm:util@0.10.3': {
            'inherits': 'npm:inherits@2.0.1',
            'process': 'github:jspm/nodelibs-process@0.1.2'
        },
        'npm:vm-browserify@0.0.4': {
            'indexof': 'npm:indexof@0.0.1'
        }
    }
});

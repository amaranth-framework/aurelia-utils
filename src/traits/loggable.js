import { className, parentClassName } from 'amaranth-utils';
import { LogManager } from 'aurelia-framework';

/**
 * Logable class. Trait for class that needs logger object.
 */
export class Loggable {
    /**
     * Getter: Obtain logger instance for the class.
     * @return {LogManager}
     */
    getLogger() {
        if (!this.__logger) {
            this.__logger = LogManager.getLogger(this.toString());
        }
        return this.__logger;
    }

    /**
     * Reduce class to a string identifier
     * @return {String}
     */
    toString() {
        return `${parentClassName(this) || 'Object'}/${className(this)}}`;
    }
}

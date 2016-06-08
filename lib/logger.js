var log = require('loglevel');
var format = require('string-format');
format.extend(String.prototype);

module.exports = {
    /**
     * This disables all logging below the given level, so that after a log.setLevel("warn") call log.warn("something")
     * or log.error("something") will output messages, but log.info("something") will not.
     *
     * @param level as a string, like 'error' (case-insensitive)
     * @param persist Where possible the log level will be persisted. LocalStorage will be used if available, falling
     *     back to cookies if not. If neither is available in the current environment (i.e. in Node), or if you pass
     *     false as the optional 'persist' second argument, persistence will be skipped.
     */
    setLevel(level, persist) {
        log.setLevel(level, persist);
    },
     /**
     * Output debug message to console including appropriate icons
     *
     * @param msg any data to log to the console
     */
    debug(msg, ...params) {
        log.debug(format.apply(null, arguments));
    },
     /**
     * Output trace message to console.
     * This will also include a full stack trace
     *
     * @param msg any data to log to the console
     */
    trace(msg, ...params) {
        log.trace(format.apply(null, arguments));
    },
    /**
     * Output info message to console including appropriate icons
     *
     * @param msg any data to log to the console
     */
    info(msg, ...params) {
        log.info(format.apply(null, arguments));
    },
     /**
     * Output warn message to console including appropriate icons
     *
     * @param msg any data to log to the console
     */
    warn(msg, ...params) {
        log.warn(format.apply(null, arguments));
    },
     /**
     * Output error message to console including appropriate icons
     *
     * @param msg any data to log to the console
     */
    error(msg, ...params) {
        log.error(format.apply(null, arguments));
    },
    getLevel () {
          return log.getLevel();
      }
};

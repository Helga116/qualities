import * as Sentry from '@sentry/react'
import { BrowserTracing } from '@sentry/tracing'

function init() {
    Sentry.init({
        dsn: 'https://8608fb8a14504da0a3a3337c4d7dd22e@o1429417.ingest.sentry.io/6780051',
        integrations: [new BrowserTracing()],
        // Set tracesSampleRate to 1.0 to capture 100%
        // of transactions for performance monitoring.
        // We recommend adjusting this value in production
        tracesSampleRate: 1.0,
    })
}
function log(error) {
    Sentry.captureException(error)
}

const logger = {
    init,
    log,
}

export default logger

import '../css/app.css';

import React from 'react';
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { PageProps } from '@/billing/support/Types';
import { Providers } from '@/billing/support/Providers';
import { Page } from '@inertiajs/inertia';
import * as Sentry from '@sentry/react';
import posthog from 'posthog-js';

if (import.meta.env.VITE_SENTRY_DSN_PUBLIC) {
    Sentry.init({
        dsn: import.meta.env.VITE_SENTRY_DSN_PUBLIC,
        environment: import.meta.env.VITE_SENTRY_ENVIRONMENT,
    });
}

if (import.meta.env.VITE_POSTHOG_API_KEY) {
    posthog.init(import.meta.env.VITE_POSTHOG_API_KEY, {
        api_host: import.meta.env.VITE_POSTHOG_HOST,
        capture_pageview: false,
        capture_pageleave: false,
        autocapture: false,
    });
}

createInertiaApp({
    title: (title) => `${title}`,
    resolve: (name) => resolvePageComponent(`./${name}.tsx`, import.meta.glob('./**/*.tsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);
        const pageProps = (props.initialPage as Page<PageProps>).props;

        root.render(
            <Providers {...pageProps}>
                <App {...props} />
            </Providers>,
        );
    },
});

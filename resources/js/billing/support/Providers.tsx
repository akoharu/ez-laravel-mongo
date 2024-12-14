import React from 'react';
import { PageProps } from '@/billing/support/Types';
import { ErrorBoundary } from '@sentry/react';
import { Flowbite } from 'flowbite-react';
import { Toaster } from 'react-hot-toast';
import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';
import useCustomerIOTracker from './CustomerIO/useCustomerIOTracker';
import theme from '@/billing/flowbite-theme';

type ProvidersProps = PageProps<{
    children: React.ReactNode;
}>;

/**
 * Global Providers component loads application context on first page load
 * This context does NOT update on navigation, only on a full reload
 */
export const Providers = ({ children, ...props }: ProvidersProps) => {
    // customerIo tracker
    useCustomerIOTracker(props.currentUser, import.meta.env.VITE_CUSTOMER_IO_SITE_ID);

    return (
        <PostHogProvider client={posthog}>
            <Flowbite theme={{ theme: theme }}>
                <ErrorBoundary
                    fallback={
                        <section className="bg-white dark:bg-gray-900 h-screen flex justify-center items-center">
                            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                                <div className="mx-auto max-w-screen-sm text-center">
                                    <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
                                        Error
                                    </h1>
                                    <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
                                        Something went wrong
                                    </p>
                                    <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
                                        Our dev team has been alerted and is looking into the error. <br />
                                        If the error persists, please contact{' '}
                                        <a href="mailto:support@eyzet.io">support@eyzet.io</a>.
                                    </p>
                                </div>
                            </div>
                        </section>
                    }
                >
                    {children}
                </ErrorBoundary>
                <Toaster position="top-right" />
            </Flowbite>
        </PostHogProvider>
    );
};

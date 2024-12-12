import React from 'react';
import { PageProps } from '@/billing/support/Types';
import { ErrorBoundary } from '@sentry/react';
import { CustomFlowbiteTheme, Flowbite } from 'flowbite-react';
import { Toaster } from 'react-hot-toast';
import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';
import useCustomerIOTracker from './CustomerIO/useCustomerIOTracker';

type ProvidersProps = PageProps<{
    children: React.ReactNode;
}>;

const customTheme: CustomFlowbiteTheme = {
    button: {
        inner: {
            base: 'flex items-center',
        },
        color: {
            blue: 'border border-transparent bg-blue-1 text-white focus:ring-4 focus:ring-blue-300 enabled:hover:bg-blue-2',
            grey: 'bg-gray-100 rounded-lg border border-zinc-200 text-grey-5',
        },
        size: {
            xs: 'px-2 py-1 text-xs',
            sm: 'px-3 py-1.5 text-sm',
            md: 'px-3 py-2 text-base',
            lg: 'px-5 py-2.5 text-base',
            xl: 'px-6 py-3 text-base',
            default: '',
        },
    },
    sidebar: {
        root: {
            base: 'h-full',
            collapsed: {
                on: 'w-16',
                off: 'w-full',
            },
        },
    },
    navbar: {
        root: {
            base: 'bg-white border-b border-gray-200 fixed w-full z-10',
        },
        brand: {
            base: 'flex items-center',
        },
        collapse: {
            base: 'w-full md:block md:w-auto',
            list: 'mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-normal',
            hidden: {
                on: 'hidden',
                off: '',
            },
        },
        link: {
            base: 'block py-2 pl-3 pr-4 md:p-0 text-base',
            active: {
                on: 'bg-blue-1 text-white md:bg-transparent md:text-blue-1',
                off: 'border-b border-gray-100 text-gray-500 hover:bg-gray-50 md:border-0 md:hover:bg-transparent md:hover:text-blue-1',
            },
            disabled: {
                on: 'text-gray-400 hover:cursor-not-allowed',
                off: '',
            },
        },
    },
    card: {
        root: {
            base: 'flex rounded-lg border border-gray-200 bg-white gap-5',
            children: '',
        },
    },
    table: {
        root: {
            base: 'w-full text-left text-sm text-gray-500',
            shadow: 'absolute left-0 top-0 -z-10 h-full w-full rounded-lg bg-white drop-shadow-md',
            wrapper: 'relative',
        },
        body: {
            base: 'group/body',
            cell: {
                base: 'p-4 group-first/body:group-first/row:first:rounded-tl-lg group-first/body:group-first/row:last:rounded-tr-lg group-last/body:group-last/row:first:rounded-bl-lg group-last/body:group-last/row:last:rounded-br-lg',
            },
        },
        head: {
            base: 'group/head text-xs uppercase text-grey-4',
            cell: {
                base: 'font-normal bg-grey-1 text-grey-4 text-sm p-4 group-first/head:first:rounded-tl-lg group-first/head:last:rounded-tr-lg',
            },
        },
        row: {
            base: 'group/row',
            hovered: 'hover:bg-gray-50',
            striped: 'odd:bg-white even:bg-gray-50',
        },
    },
    modal: {
        header: {
            title: 'text-xl font-[600] text-gray-900',
        },
    },
};

/**
 * Global Providers component loads application context on first page load
 * This context does NOT update on navigation, only on a full reload
 */
export const Providers = ({ children, ...props }: ProvidersProps) => {
    // customerIo tracker
    useCustomerIOTracker(props.currentUser, import.meta.env.VITE_CUSTOMER_IO_SITE_ID);

    return (
        <PostHogProvider client={posthog}>
            <Flowbite theme={{ theme: customTheme }}>
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

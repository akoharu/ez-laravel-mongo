import type { CustomFlowbiteTheme } from 'flowbite-react';

const flowbiteTheme: CustomFlowbiteTheme = {
    badge: {
        icon: {
            off: 'rounded-full px-2 py-1',
        },
    },
    button: {
        color: {
            primary:
                'text-white bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800',
        },
        outline: {
            on: 'transition-all duration-75 ease-in group-hover:bg-opacity-0 group-hover:text-inherit',
        },
        size: {
            md: 'text-sm px-3 py-2',
        },
    },
    dropdown: {
        floating: {
            base: 'z-10 w-fit rounded-xl divide-y divide-gray-100 shadow',
            content: 'rounded-xl text-sm text-gray-700 dark:text-gray-200',
            target: 'w-fit dark:text-white',
        },
        content: '',
    },
    modal: {
        content: {
            inner: 'relative rounded-lg bg-white shadow dark:bg-gray-800',
        },
        header: {
            base: 'flex items-start justify-between rounded-t px-5 pt-5',
        },
    },
    textarea: {
        base: 'block w-full text-sm p-4 rounded-lg border disabled:cursor-not-allowed disabled:opacity-50',
    },
    toggleSwitch: {
        toggle: {
            checked: {
                off: '!border-gray-200 !bg-gray-200 dark:!border-gray-600 dark:!bg-gray-700',
            },
        },
    },
};

export default flowbiteTheme;

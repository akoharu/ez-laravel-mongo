import flowbite from 'flowbite-react/tailwind';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.tsx',
        flowbite.content(),
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['GreycliffCF', 'sans-serif'],
            },
            colors: {
                'blue-1': '#3AA5F3',
                'blue-2': '#0e89e3',
                'grey-1': '#FAFAFB',
                'grey-2': '#DBDDE1',
                'grey-3': '#C3C5C9',
                'grey-4': '#8E9297',
                'grey-5': '#242425',
                'purple-1': '#564398',
                'purple-2': '#CF73FA',
                'purple-3': '#7F76D3',
                'purple-4': '#FBA2FD',
                'green-1': '#68C51F',
            },
        },
    },

    plugins: [flowbite.plugin()],
};

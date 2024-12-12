import { useEffect } from 'react';

interface User {
    id: number;
    email: string;
}

const useCustomerIOTracker = (currentUser: User | null, siteId: string) => {
    useEffect(() => {
        if (!currentUser || !siteId) return;

        // Initialize Customer.io tracker
        const _cio = (window._cio = window._cio || []);
        (function () {
            var a, b, c;
            a = function (f: string) {
                return function (...args: any[]) {
                    _cio.push([f, ...args]);
                };
            };
            b = ['load', 'identify', 'sidentify', 'track', 'page'];
            for (c = 0; c < b.length; c++) {
                _cio[b[c]] = a(b[c]);
            }
            var t = document.createElement('script'),
                s = document.getElementsByTagName('script')[0];
            t.async = true;
            t.id = 'cio-tracker';
            t.setAttribute('data-site-id', siteId);
            t.src = 'https://assets.customer.io/assets/track.js';
            t.onload = () => {
                window._cio.identify({
                    id: currentUser.id.toString(),
                    email: currentUser.email,
                });
            };
            s.parentNode.insertBefore(t, s);
        })();

        return () => {
            const script = document.getElementById('cio-tracker');
            if (script) {
                script.parentNode.removeChild(script);
            }
        };
    }, [currentUser, siteId]);
};

export default useCustomerIOTracker;

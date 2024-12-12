import React, { useState } from 'react';
import { router } from '@inertiajs/react';
import Auth from '@/billing/layouts/Auth';
import { HiInformationCircle } from 'react-icons/hi2';
import { Alert, Button } from 'flowbite-react';
interface IPageProps {
    token: string;
    errors: Record<string, string>;
}

export default function ResetPassword(props: Readonly<IPageProps>) {
    const { token, errors } = props;
    const [loading, setLoading] = useState(false);
    const handleSubmit = (event: React.FormEvent) => {
        setLoading(true);
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);
        router.post('/password/reset', formData, {
            onFinish: () => {
                setLoading(false);
            },
        });
    };

    return (
        <Auth title="Reset Password">
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <img src="/assets/images/ez-logo.svg" alt="Logo" className="mb-6 w-20" />
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Reset Password
                            </h1>
                            {errors &&
                                Object.keys(errors).map((key) => (
                                    <Alert color="failure" icon={HiInformationCircle} key={key}>
                                        {errors[key]}
                                    </Alert>
                                ))}
                            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                                <input type="hidden" name="token" value={token} />
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Your email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="name@company.com"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="password"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="••••••••"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="password_confirmation"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Confirm Password
                                    </label>
                                    <input
                                        type="password"
                                        name="password_confirmation"
                                        id="password_confirmation"
                                        placeholder="••••••••"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                </div>
                                <Button type="submit" className="w-full" isProcessing={loading}>
                                    Reset Password
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </Auth>
    );
}

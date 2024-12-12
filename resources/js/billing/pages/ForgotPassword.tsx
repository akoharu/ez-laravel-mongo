import React, { useState } from 'react';
import { router } from '@inertiajs/react';
import Auth from '@/billing/layouts/Auth';
import { Alert, Button } from 'flowbite-react';
import { HiInformationCircle } from 'react-icons/hi';
interface IPageProps {
    errors: Record<string, string>;
    flash: {
        message: string;
    };
}

export default function ForgotPassword(props: Readonly<IPageProps>) {
    const { errors, flash } = props;
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event: React.FormEvent) => {
        setLoading(true);
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);
        router.post('/password/email', formData, {
            onFinish: () => {
                setLoading(false);
                setSubmitted(true);
            },
        });
    };

    return (
        <Auth title="Forgot Password">
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <img src="/assets/images/ez-logo.svg" alt="Logo" className="mb-6 w-20" />

                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Forgot Password
                            </h1>
                            {errors && errors.email && (
                                <Alert color="failure" icon={HiInformationCircle}>
                                    {errors.email}
                                </Alert>
                            )}
                            {flash && flash.message && (
                                <Alert color="success" icon={HiInformationCircle}>
                                    {flash.message}
                                </Alert>
                            )}
                            {(!submitted || errors.email) && (
                                <form onSubmit={handleSubmit} className="space-y-4">
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
                                    <Button className="bg-blue-700" type="submit" isProcessing={loading} fullSized>
                                        Send Password Reset Link
                                    </Button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </Auth>
    );
}

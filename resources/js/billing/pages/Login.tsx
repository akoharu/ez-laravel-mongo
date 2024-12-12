import React, { useState } from 'react';
import { router } from '@inertiajs/react';
import Auth from '@/billing/layouts/Auth';
import { HiInformationCircle } from 'react-icons/hi';
import { Alert, Button, Checkbox } from 'flowbite-react';
import { Formik } from 'formik';

interface IPageProps {
    errors: Record<string, string>;
    flash: {
        message: string;
    };
}

export default function Login({ errors, flash }: Readonly<IPageProps>) {
    const [loading, setLoading] = useState(false);
    const handleSubmit = (values: any) => {
        setLoading(true);
        router.post('/login', values, {
            onFinish: () => {
                setLoading(false);
            },
        });
    };

    return (
        <Auth title="Login">
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <img src="/assets/images/ez-logo.svg" alt="Logo" className="mb-6 w-20" />
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Sign in to your account
                            </h1>
                            {errors && Object.keys(errors).length > 0 && (
                                <Alert color="failure" icon={HiInformationCircle}>
                                    <ul>
                                        {Object.values(errors).map((error) => (
                                            <li key={error}>{error}</li>
                                        ))}
                                    </ul>
                                </Alert>
                            )}
                            {flash?.message && <Alert color="failure">{flash.message}</Alert>}
                            <Formik
                                initialValues={{
                                    email: '',
                                    password: '',
                                    remember_device: false,
                                }}
                                onSubmit={handleSubmit}
                            >
                                {({ handleChange, handleSubmit, values }) => (
                                    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
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
                                                onChange={handleChange}
                                                value={values.email}
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
                                                onChange={handleChange}
                                                value={values.password}
                                            />
                                        </div>
                                        <Button className="bg-blue-700" type="submit" isProcessing={loading} fullSized>
                                            Sign in
                                        </Button>

                                        <div className="flex items-center text-center justify-center">
                                            <a href="/password/reset" className="text-sm hover:underline">
                                                Forgot password?
                                            </a>
                                        </div>
                                    </form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
            </section>
        </Auth>
    );
}

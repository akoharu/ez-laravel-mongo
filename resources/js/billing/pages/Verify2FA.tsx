import React, { useEffect, useState } from 'react';
import { router } from '@inertiajs/react';
import Auth from '../layouts/Auth';
import { Alert, Button, Spinner } from 'flowbite-react';
import { HiInformationCircle } from 'react-icons/hi';
import OtpInput from 'react18-input-otp';

interface IPageProps {
    flash: {
        message: string;
    };
    provider: string;
    remainingTime: number; // in seconds
    errors: Record<string, string>;
}

export default function Verify2FA(props: Readonly<IPageProps>) {
    const [verifying, setVerifying] = useState(false);
    const [resending, setResending] = useState(false);
    const { flash, provider, remainingTime, errors } = props;
    const [otp, setOtp] = useState('');

    const handleSubmit = () => {
        setVerifying(true);
        const data = {
            mfa_code: otp,
        };
        router.post('/billing/2fa/verify', data, {
            onFinish: () => {
                setVerifying(false);
            },
            onError: () => {
                setVerifying(false);
                setOtp('');
            },
        });
    };

    const handleResend = () => {
        setResending(true);
        router.post(
            '/billing/2fa/resend',
            {},
            {
                onFinish: () => {
                    setResending(false);
                    setCountDown(10 * 60); // Manually set the countdown to 10 minutes
                },
            },
        );
    };

    const [countDown, setCountDown] = useState(remainingTime);

    useEffect(() => {
        if (countDown === 0) {
            return;
        }
        // update the count down every second
        const interval = setInterval(() => {
            setCountDown((prev) => prev - 1);
        }, 1000);
        return () => clearInterval(interval);
    }, [countDown]);

    function formatCountdown(seconds: number) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;

        // Pad the seconds with a leading zero if necessary
        const formattedSeconds = remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds;

        return `${minutes}:${formattedSeconds}`;
    }

    useEffect(() => {
        if (otp.length === 6) {
            handleSubmit();
        }
    }, [otp]);

    const LoadingSpinner = () => (
        <div className="absolute inset-0 flex justify-center items-center">
            <Spinner size="xl" />
        </div>
    );

    return (
        <Auth title="Verify 2FA">
            <section className={`bg-gray-50 dark:bg-gray-900`}>
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <img src="/assets/images/ez-logo.svg" alt="EZ Logo" className="mb-6 w-20" />
                    <div
                        className={`w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 ${
                            verifying ? 'opacity-50 pointer-events-none' : ''
                        }`}
                    >
                        {verifying && <LoadingSpinner />}
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Verify Your Account
                            </h1>

                            <section className="space-y-4">
                                {flash.message && <Alert color="success">{flash.message}</Alert>}

                                {Object.keys(errors).length > 0 && (
                                    <Alert color="failure" icon={HiInformationCircle}>
                                        <ul>
                                            {Object.values(errors).map((error) => (
                                                <li key={error}>{error}</li>
                                            ))}
                                        </ul>
                                    </Alert>
                                )}

                                <p>Please enter the code we sent to your {provider === 'sms' ? 'phone' : 'email'}</p>

                                <OtpInput
                                    data-testid="otp-input-wrapper"
                                    containerStyle={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        width: '100%',
                                        gap: '0.5rem',
                                        padding: '0.5rem',
                                    }}
                                    inputStyle={{
                                        width: '3rem',
                                        height: '3rem',
                                        fontSize: '1.5rem',
                                        border: '1px solid #e0e0e0',
                                        borderRadius: '0.375rem',
                                    }}
                                    value={otp}
                                    onChange={setOtp}
                                    numInputs={6}
                                    shouldAutoFocus
                                    isInputNum={true}
                                    isDisabled={verifying}
                                />

                                <div className="flex justify-between items-center">
                                    {countDown > 0 ? (
                                        <p>{formatCountdown(countDown)} remaining to resend the code</p>
                                    ) : (
                                        <p className="text-red-500">The code has expired</p>
                                    )}
                                    <Button
                                        type="button"
                                        onClick={handleResend}
                                        disabled={verifying || resending || countDown > 0}
                                        isProcessing={resending}
                                        size="xs"
                                        color="blue"
                                    >
                                        Resend
                                    </Button>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        </Auth>
    );
}

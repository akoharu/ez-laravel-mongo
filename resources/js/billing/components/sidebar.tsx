import React from 'react';
import { Sidebar, TextInput } from 'flowbite-react';
import { FC, useEffect, useState } from 'react';
import { HiChartPie, HiClipboard, HiCollection, HiSearch, HiUsers, HiAdjustments } from 'react-icons/hi';
import { PiInvoiceBold } from 'react-icons/pi';
import { BiSupport } from 'react-icons/bi';

const ExampleSidebar: FC = function () {
    const [currentPage, setCurrentPage] = useState('');

    useEffect(() => {
        const newPage = window.location.pathname;

        setCurrentPage(newPage);
    }, [setCurrentPage]);

    return (
        <Sidebar className="h-screen fixed top-20 left-0">
            <div className="flex h-full flex-col justify-between py-2">
                <div>
                    <Sidebar.Items>
                        <Sidebar.ItemGroup>
                            <Sidebar.Item
                                href="/"
                                icon={HiChartPie}
                                className={'/' === currentPage ? 'bg-gray-100 dark:bg-gray-700' : ''}
                            >
                                Dashboard
                            </Sidebar.Item>
                            <Sidebar.Item
                                href="/customers"
                                icon={HiUsers}
                                className={'/customers' === currentPage ? 'bg-gray-100 dark:bg-gray-700' : ''}
                            >
                                Customers
                            </Sidebar.Item>
                            <Sidebar.Item
                                href="/services"
                                icon={HiCollection}
                                className={'/services' === currentPage ? 'bg-gray-100 dark:bg-gray-700' : ''}
                            >
                                Services
                            </Sidebar.Item>
                            <Sidebar.Item
                                href="/billing"
                                icon={PiInvoiceBold}
                                className={'/billing' === currentPage ? 'bg-gray-100 dark:bg-gray-700' : ''}
                            >
                                Billing
                            </Sidebar.Item>
                            <Sidebar.Item
                                href="/reports"
                                icon={HiClipboard}
                                className={'/reports' === currentPage ? 'bg-gray-100 dark:bg-gray-700' : ''}
                            >
                                Reports
                            </Sidebar.Item>
                            <Sidebar.Item
                                href="/settings"
                                icon={HiAdjustments}
                                className={'/settings' === currentPage ? 'bg-gray-100 dark:bg-gray-700' : ''}
                            >
                                Settings
                            </Sidebar.Item>
                        </Sidebar.ItemGroup>
                        <Sidebar.ItemGroup>
                            <Sidebar.Item href="https://flowbite-react.com/" icon={HiCollection}>
                                Resources
                            </Sidebar.Item>
                            <Sidebar.Item href="https://github.com/themesberg/flowbite-react/" icon={BiSupport}>
                                Support
                            </Sidebar.Item>
                        </Sidebar.ItemGroup>
                    </Sidebar.Items>
                </div>
            </div>
        </Sidebar>
    );
};

export default ExampleSidebar;

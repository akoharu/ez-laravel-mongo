import React, { FC, useState } from 'react';
import { Button, DarkThemeToggle, Navbar, Drawer } from 'flowbite-react';
import ExampleSidebar from './sidebar';
import { IoMenu } from 'react-icons/io5';

const ExampleNavbar: FC = function () {
    const [isOpen, setIsOpen] = useState(false);

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <>
            <Navbar fluid className="fixed top-0 left-0 right-0 z-50">
                <div className="w-full p-3 lg:px-5 lg:pl-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <button
                                onClick={() => setIsOpen(true)}
                                className="lg:hidden bg-transparent hover:bg-transparent"
                            >
                                <IoMenu className="h-8 w-8" />
                            </button>
                            <Navbar.Brand href="/">
                                <img alt="" src="/images/logo.svg" className="mr-3 h-6 sm:h-8" />
                                <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
                                    EZ Billing
                                </span>
                            </Navbar.Brand>
                        </div>
                        <div className="flex items-center gap-3">
                            <DarkThemeToggle />
                        </div>
                    </div>
                </div>
            </Navbar>
            <Drawer open={isOpen} onClose={handleClose}>
                <Drawer.Header title="MENU" titleIcon={() => <></>} />
                <Drawer.Items>
                    <ExampleSidebar />
                </Drawer.Items>
            </Drawer>
        </>
    );
};

export default ExampleNavbar;

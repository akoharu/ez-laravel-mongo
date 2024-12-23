import React from 'react';
import { Footer } from 'flowbite-react';
import type { FC, PropsWithChildren } from 'react';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';
import { MdFacebook } from 'react-icons/md';
import { FaInstagram, FaTwitter } from 'react-icons/fa';
import Master from './Master';
import { ICurrentUser } from '../interfaces/CurrentUser';

interface NavbarSidebarLayoutProps {
    currentUser: ICurrentUser;
    isFooter?: boolean;
}

const NavbarSidebarLayout: FC<PropsWithChildren<NavbarSidebarLayoutProps>> = function ({
    children,
    isFooter = true,
    currentUser,
}) {
    return (
        <Master title="Dashboard" currentUser={currentUser}>
            <Navbar />
            <div className="flex items-start">
                <Sidebar />
                <MainContent isFooter={isFooter}>{children}</MainContent>
            </div>
        </Master>
    );
};

interface MainContentProps {
    children: React.ReactNode;
    isFooter?: boolean;
}

const MainContent: FC<MainContentProps> = function ({ children, isFooter }) {
    return (
        <main className="relative h-full w-full overflow-y-auto bg-gray-50 dark:bg-gray-900 lg:ml-64 mt-20">
            {children}
            {isFooter && (
                <div className="mx-4 mt-4">
                    <MainContentFooter />
                </div>
            )}
        </main>
    );
};

const MainContentFooter: FC = function () {
    return (
        <>
            <Footer container>
                <div className="flex w-full flex-col gap-y-6 lg:flex-row lg:justify-between lg:gap-y-0">
                    <Footer.LinkGroup>
                        <Footer.Link href="#" className="mr-3 mb-3 lg:mb-0">
                            Terms and conditions
                        </Footer.Link>
                        <Footer.Link href="#" className="mr-3 mb-3 lg:mb-0">
                            Privacy Policy
                        </Footer.Link>
                        <Footer.Link href="#" className="mr-3">
                            Licensing
                        </Footer.Link>
                        <Footer.Link href="#" className="mr-3">
                            Cookie Policy
                        </Footer.Link>
                        <Footer.Link href="#">Contact</Footer.Link>
                    </Footer.LinkGroup>
                    <Footer.LinkGroup>
                        <div className="flex gap-x-1">
                            <Footer.Link href="#" className="hover:[&>*]:text-black dark:hover:[&>*]:text-gray-300">
                                <MdFacebook className="text-lg" />
                            </Footer.Link>
                            <Footer.Link href="#" className="hover:[&>*]:text-black dark:hover:[&>*]:text-gray-300">
                                <FaInstagram className="text-lg" />
                            </Footer.Link>
                            <Footer.Link href="#" className="hover:[&>*]:text-black dark:hover:[&>*]:text-gray-300">
                                <FaTwitter className="text-lg" />
                            </Footer.Link>
                        </div>
                    </Footer.LinkGroup>
                </div>
            </Footer>
            <p className="my-8 text-center text-sm text-gray-500 dark:text-gray-300">
                &copy; {new Date().getFullYear()} eyzet.io. All rights reserved.
            </p>
        </>
    );
};

export default NavbarSidebarLayout;

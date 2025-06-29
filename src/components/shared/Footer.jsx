import React from 'react';

const Footer = () => {
    return (
        <footer className="px-4 py-16 text-white bg-black sm:px-6 lg:px-8">
            <div className="flex flex-col mx-auto max-w-7xl">
                {/* Top Section: DEVLOP.ME and As you can */}
                <div className="flex flex-col items-start justify-between mb-16 md:flex-row md:items-end">
                    <div className="mb-8 text-3xl font-bold sm:text-4xl md:mb-0">
                        DEVLOP.ME
                    </div>
                    <div className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                        As you can
                    </div>
                </div>

                {/* Middle Section: Say hello, Menu, Social */}
                <div className="grid grid-cols-1 gap-12 mb-20 md:grid-cols-3">
                    {/* Say hello */}
                    <div>
                        <h4 className="mb-4 text-lg font-semibold text-gray-400">Say hello</h4>
                        <ul className="space-y-2">
                            <li><a href="mailto:HELLO@DEVLOP.ME.COM" className="text-gray-200 transition-colors duration-200 hover:text-white">HELLO@DEVLOP.ME.COM</a></li>
                            <li><a href="mailto:MAHBUBUL@ME.COM" className="text-gray-200 transition-colors duration-200 hover:text-white">MAHBUBUL@ME.COM</a></li>
                        </ul>
                        <h4 className="mt-8 mb-4 text-lg font-semibold text-gray-400">Call</h4>
                        <ul className="space-y-2">
                            <li><a href="tel:+784549498100" className="text-gray-200 transition-colors duration-200 hover:text-white">+784549 4981 00</a></li>
                            <li><a href="tel:+88450100211" className="text-gray-200 transition-colors duration-200 hover:text-white">+8845 0100 211</a></li>
                        </ul>
                    </div>

                    {/* Menu */}
                    <div>
                        <h4 className="mb-4 text-lg font-semibold text-gray-400">Menu</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-200 transition-colors duration-200 hover:text-white">HOME</a></li>
                            <li><a href="#" className="text-gray-200 transition-colors duration-200 hover:text-white">ABOUT</a></li>
                            <li><a href="#" className="text-gray-200 transition-colors duration-200 hover:text-white">PORTFOLIO</a></li>
                            <li><a href="#" className="text-gray-200 transition-colors duration-200 hover:text-white">BLOG</a></li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="mb-4 text-lg font-semibold text-gray-400">Social</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-200 transition-colors duration-200 hover:text-white">TWITTER</a></li>
                            <li><a href="#" className="text-gray-200 transition-colors duration-200 hover:text-white">INSTAGRAM</a></li>
                            <li><a href="#" className="text-gray-200 transition-colors duration-200 hover:text-white">FACEBOOK</a></li>
                            <li><a href="#" className="text-gray-200 transition-colors duration-200 hover:text-white">BEHANCE</a></li>
                            <li><a href="#" className="text-gray-200 transition-colors duration-200 hover:text-white">DRIBBBLE</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section: BESNIK, Copyright, Privacy-Terms */}
                <div className="flex flex-col items-center justify-between pt-8 text-sm text-gray-400 border-t border-gray-800 sm:flex-row">
                    <div className="mb-4 sm:mb-0">
                        BESNIK
                    </div>
                    <div className="mb-4 sm:mb-0">
                        © devlop.me 2022
                    </div>
                    <div>
                        <a href="#" className="transition-colors duration-200 hover:text-white">PRIVACY</a> - <a href="#" className="transition-colors duration-200 hover:text-white">TERMS</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
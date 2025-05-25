
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* About Section */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4">About Jobify</h3>
                        <p className="text-gray-400 text-sm">
                            Jobify is your trusted platform for hiring verified local professionals for all your home service needs.
                        </p>
                    </div>

                    {/* Services Section */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4">Services</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="/services/electricians" className="hover:text-emerald-400">Electricians</a></li>
                            <li><a href="/services/cleaners" className="hover:text-emerald-400">Cleaners</a></li>
                            <li><a href="/services/plumbers" className="hover:text-emerald-400">Plumbers</a></li>
                            <li><a href="/services/others" className="hover:text-emerald-400">Others</a></li>
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
                        <p className="text-sm">Email: support@jobify.com</p>
                        <p className="text-sm">Phone: +1 (555) 123-4567</p>
                        <p className="text-sm">Address: 123 Jobify St, Service City</p>
                    </div>

                    {/* Social Media Section */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com/jobify" aria-label="Facebook" className="hover:text-emerald-400">
                                <Facebook className="size-6" />
                            </a>
                            <a href="https://twitter.com/jobify" aria-label="Twitter" className="hover:text-emerald-400">
                                <Twitter className="size-6" />
                            </a>
                            <a href="https://instagram.com/jobify" aria-label="Instagram" className="hover:text-emerald-400">
                                <Instagram className="size-6" />
                            </a>
                            <a href="https://linkedin.com/company/jobify" aria-label="LinkedIn" className="hover:text-emerald-400">
                                <Linkedin className="size-6" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-12 text-center text-gray-500 text-xs">
                    &copy; {new Date().getFullYear()} Jobify. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

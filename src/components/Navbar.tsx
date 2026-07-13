import React from 'react';
import { Bot } from 'lucide-react';
import { FaChrome } from 'react-icons/fa';

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 h-20 bg-white/80 backdrop-blur-md border-b border-slate-100 z-50 flex items-center">
            <div className="max-w-7xl mx-auto px-4 w-full flex items-center justify-between">

                {/* Logo */}
                <a href="#" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        <Bot className="w-5 h-5" />
                    </div>
                    <span className="font-extrabold text-xl tracking-tight text-slate-900">ExamGhost <span className="text-primary italic">AI</span></span>
                </a>

                {/* Links */}
                <div className="hidden md:flex items-center gap-8">
                    {['Features', 'How It Works', 'Pricing', 'FAQ'].map(link => (
                        <a key={link} href={`#${link.toLowerCase().replace(/ /g, '-')}`} className="text-sm font-bold text-slate-600 hover:text-primary transition-colors">
                            {link}
                        </a>
                    ))}
                </div>

                {/* CTA */}
                <a href="#" className="flex items-center gap-2 px-5 py-2.5 bg-[#4F71E5] hover:bg-blue-600 text-white text-sm font-bold rounded-xl shadow-md shadow-blue-500/20 transition-all active:scale-95">
                    <FaChrome className="w-4 h-4" />
                    <span>Chrome extension</span>
                </a>

            </div>
        </nav>
    );
}

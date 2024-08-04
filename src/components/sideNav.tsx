'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Clipboard, CookingPot, LogIn, Menu, X } from 'lucide-react';
import { UserButton, SignInButton, useUser } from "@clerk/nextjs";

const navItems = [
  { name: 'Home', href: '/pantry', icon: Home },
  { name: 'Inventory', href: '/inventory', icon: Clipboard },
  { name: 'ProteinPro', href: '/recipe', icon: CookingPot },
];

const SideNav: React.FC = () => {
  const pathname = usePathname();
  const { isSignedIn } = useUser();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 h-16 bg-blue-900 dark:bg-blue-800 z-30 lg:hidden flex items-center px-4 border-b dark:border-gray-700">
        <button 
          onClick={toggleMenu} 
          className="p-2 bg-gray-100 dark:bg-gray-700 rounded-md"
        > 
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <span className="ml-4 text-xl font-bold text-white">PantryPro</span>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-15 lg:hidden"
          onClick={toggleMenu}
        ></div>
      )}

      {/* Sidebar */}
      <nav className={`
        fixed top-0 left-0 h-full w-64 dark:bg-blue-800 p-4 flex flex-col
        transform transition-transform duration-300 ease-in-out z-20
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:static lg:h-screen
      `}>
        <div className="text-xl font-bold mb-8 flex items-center">
          <Link href='/pantry' className="text-white">PantryPro</Link>
        </div>
        <ul className="flex-grow">
          {navItems.map((item) => (
            <li key={item.name} className="mb-4">
              <Link href={item.href} onClick={() => setIsOpen(false)}>
                <div
                  className={`flex items-center p-2 rounded-md ${
                    pathname === item.href
                      ? 'bg-gray-700 text-white scale-105 transition duration-300'
                      : 'hover:bg-gray-800'
                  }`}
                >
                  <item.icon className="mr-2" size={20} />
                  <span className="text-white">{item.name}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        
        <div className="mt-auto">
          {isSignedIn ? (
            <div className="flex items-center p-2 rounded-md hover:bg-gray-800">
              <UserButton afterSignOutUrl="/" />
              <span className="ml-2 text-white">Account Info</span>
            </div>
          ) : (
            <SignInButton mode="modal">
              <button className="flex items-center w-full p-2 rounded-md bg-black hover:bg-gray-800">
                <LogIn className="mr-2" size={20} />
                <span className="text-white">Sign In</span>
              </button>
            </SignInButton>
          )}
        </div>
      </nav>
    </>
  );
};

export default SideNav;

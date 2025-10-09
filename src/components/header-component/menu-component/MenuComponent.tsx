'use client'
import './MenuComponent.css'
import Link from "next/link";
import {usePathname} from "next/navigation";

const MenuComponent = () => {
    const pathName = usePathname();

    const getNavLinkClass = (href: string): string => {
        return pathName === href ? 'active' : '';
    };


    return (
        <nav>
            <ul>
                <li><Link href={'/'} className={getNavLinkClass('/')}>Home Page</Link></li>
                <li><Link href={'/movies'} className={getNavLinkClass('/movies')}>Movies Page</Link></li>
                <li><Link href={'/tvshows'} className={getNavLinkClass('/tvshows')}>TV Shows Page</Link></li>
                <li><Link href={'/genre'} className={getNavLinkClass('/genre')}>Genre Page</Link></li>
            </ul>
        </nav>
    );
};

export default MenuComponent;
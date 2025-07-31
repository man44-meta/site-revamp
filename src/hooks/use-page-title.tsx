import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const usePageTitle = () => {
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname;
    let pageTitle = 'Vplus';

    // Map routes to page names
    const pageNames: { [key: string]: string } = {
      '/': 'Vplus',
      '/contact': 'Contact',
      '/privacy-policy': 'Privacy Policy',
      '/about-us': 'About Us',
      '/blogs': 'Blogs',
      '/pricing': 'Pricing',
    };

    // Get the page name for current route
    const pageName = pageNames[pathname];
    
    if (pageName && pageName !== 'Vplus') {
      // For non-home pages, use "Vplus | Page Name" format
      pageTitle = `Vplus | ${pageName}`;
    }
    // For home page, just use "Vplus"

    document.title = pageTitle;
  }, [location.pathname]);
}; 
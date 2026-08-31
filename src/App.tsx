import { useState, useEffect, useCallback } from 'react';
import { Navigation } from './components/Navigation';
import { SiteFooter } from './components/SiteFooter';
import { Home } from './components/pages/Home';
import { Contact } from './components/pages/Contact';
import { About } from './components/pages/About';
import { Minis } from './components/pages/Minis';
import { Projects } from './components/pages/Projects';
import { Media } from './components/pages/Media';
import {
  hashToNavigationTarget,
  pageToHash,
  parseNavigationTarget,
} from './lib/navigation';

export function App() {
  const [currentPage, setCurrentPage] = useState<string>("Home");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [pendingHash, setPendingHash] = useState<string | null>(null);

  const handleNavigate = useCallback((target: string) => {
    const { page, anchor } = parseNavigationTarget(target);

    setIsLoading(true);
    setCurrentPage(page);
    setPendingHash(anchor);

    const nextHash = pageToHash(page, anchor);
    const currentHash = window.location.hash;

    if (nextHash !== currentHash) {
      if (nextHash) {
        window.history.pushState(null, '', nextHash);
      } else {
        window.history.pushState(null, '', window.location.pathname + window.location.search);
      }
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => setIsLoading(false), 300);
  }, []);

  useEffect(() => {
    const syncFromHash = () => {
      const { page, anchor } = hashToNavigationTarget(window.location.hash);
      setCurrentPage(page);
      setPendingHash(anchor);
    };

    syncFromHash();
    window.addEventListener('hashchange', syncFromHash);
    window.addEventListener('popstate', syncFromHash);

    return () => {
      window.removeEventListener('hashchange', syncFromHash);
      window.removeEventListener('popstate', syncFromHash);
    };
  }, []);

  useEffect(() => {
    if (currentPage === "Projects" && pendingHash) {
      const scrollToElement = () => {
        const element = document.getElementById(pendingHash);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
        setPendingHash(null);
      };

      const timer = setTimeout(scrollToElement, 500);
      return () => clearTimeout(timer);
    }
  }, [currentPage, pendingHash]);

  useEffect(() => {
    const handleCustomNavigate = (event: CustomEvent) => {
      if (event.detail && typeof event.detail === 'string') {
        handleNavigate(event.detail);
      }
    };

    window.addEventListener('navigate' as any, handleCustomNavigate);
    return () => window.removeEventListener('navigate' as any, handleCustomNavigate);
  }, [handleNavigate]);

  const renderPage = () => {
    if (isLoading) {
      return (
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading...</p>
          </div>
        </div>
      );
    }

    switch (currentPage) {
      case "Home":
        return <Home onNavigate={handleNavigate} />;
      case "Media":
        return <Media />;
      case "Contact":
        return <Contact />;
      case "Projects":
        return <Projects />;
      case "About Me":
        return <About />;
      case "Minis":
        return <Minis />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="app-shell min-h-screen bg-background text-foreground">
      <Navigation
        currentPage={currentPage}
        onNavigate={handleNavigate}
        isLoading={isLoading}
      />
      {renderPage()}
      <SiteFooter
        currentPage={currentPage}
        onNavigate={handleNavigate}
        isLoading={isLoading}
      />
    </div>
  );
}

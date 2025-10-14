interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const navItems = ["Home", "About Me", "Minis", "Projects"];

  return (
    <nav className="w-full bg-card border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-primary cursor-pointer" onClick={() => onNavigate("Home")}>
            Portfolio
          </h1>
          <ul className="flex gap-8">
            {navItems.map((item) => (
              <li key={item}>
                <button
                  onClick={() => onNavigate(item)}
                  className={`transition-colors hover:text-primary ${
                    currentPage === item
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

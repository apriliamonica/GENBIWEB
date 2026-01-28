// Header Component
function renderHeader() {
  const navLinks = [
    { href: "#/", label: "Beranda" },
    { href: "#/tentang-kami", label: "Tentang Kami" },
    { href: "#/divisi", label: "Divisi" },
    { href: "#/program-kerja", label: "Program Kerja" },
    { href: "#/berita", label: "Berita" },
    { href: "#/galeri", label: "Galeri" },
    { href: "#/pendaftaran", label: "Pendaftaran" },
    { href: "#/kontak", label: "Kontak" },
  ];

  const isDark = localStorage.getItem("darkMode") === "true";
  if (isDark) document.documentElement.classList.add("dark");

  const headerHTML = `
        <header class="header">
            <nav class="container mx-auto px-4 py-4">
                <div class="flex items-center justify-between">
                    <a href="#/" class="flex items-center space-x-3 group" style="text-decoration: none;">
                        <div class="group-hover:scale-110 transition-transform">
                            <div class="logo-container">
                                <img src="public/LogoKOMSAT.png" alt="GenBI Logo">
                            </div>
                        </div>
                        <div class="hidden sm:block">
                            <h1 class="text-xl font-bold text-bi-blue dark:text-white">GenBI</h1>
                            <p class="text-xs text-gray-600 dark:text-gray-400">Universitas Katolik De La Salle</p>
                        </div>
                    </a>
                    <div class="hidden lg:flex items-center space-x-1" id="desktop-nav">
                        ${navLinks
                          .map(
                            (link) => `
                            <a href="${link.href}" class="nav-link">${link.label}</a>
                        `,
                          )
                          .join("")}
                    </div>
                    <div class="flex items-center space-x-4">
                        <button id="dark-mode-toggle" class="icon-btn dark-mode-toggle" aria-label="Toggle dark mode">
                            ${isDark ? Icons.Sun("w-5 h-5 text-yellow-500") : Icons.Moon("w-5 h-5 text-gray-700")}
                        </button>
                        <button id="mobile-menu-toggle" class="lg:hidden icon-btn" aria-label="Toggle menu">
                            ${Icons.Menu("w-6 h-6 text-gray-700 dark:text-gray-300")}
                        </button>
                    </div>
                </div>
                <div id="mobile-nav" class="lg:hidden hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-700 pt-4">
                    <div class="flex flex-col space-y-2">
                        ${navLinks
                          .map(
                            (link) => `
                            <a href="${link.href}" class="nav-link mobile-nav-link">${link.label}</a>
                        `,
                          )
                          .join("")}
                    </div>
                </div>
            </nav>
        </header>
    `;

  document.getElementById("header-component").innerHTML = headerHTML;
  initHeaderEvents();
}

function initHeaderEvents() {
  const darkToggle = document.getElementById("dark-mode-toggle");
  const mobileToggle = document.getElementById("mobile-menu-toggle");
  const mobileNav = document.getElementById("mobile-nav");

  darkToggle.addEventListener("click", () => {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("darkMode", isDark);
    darkToggle.innerHTML = isDark
      ? Icons.Sun("w-5 h-5 text-yellow-500")
      : Icons.Moon("w-5 h-5 text-gray-700");
  });

  mobileToggle.addEventListener("click", () => {
    const isOpen = mobileNav.classList.toggle("hidden");
    mobileToggle.innerHTML = !isOpen
      ? Icons.X("w-6 h-6 text-gray-700 dark:text-gray-300")
      : Icons.Menu("w-6 h-6 text-gray-700 dark:text-gray-300");
  });

  document.querySelectorAll(".mobile-nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.classList.add("hidden");
      mobileToggle.innerHTML = Icons.Menu(
        "w-6 h-6 text-gray-700 dark:text-gray-300",
      );
    });
  });
}

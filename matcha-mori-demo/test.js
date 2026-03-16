</script>
    <style>
        .fade-in { opacity: 0; transform: translateY(20px); transition: opacity 0.8s ease-out, transform 0.8s ease-out; }
        .fade-in.visible { opacity: 1; transform: translateY(0); }
        .bg-pattern {
            background-image: radial-gradient(#9cc4aa 1px, transparent 1px);
            background-size: 20px 20px;
        }
    </style>
</head>
<body class="font-sans text-gray-800 bg-matcha-50 antialiased selection:bg-matcha-300 selection:text-white">

    <!-- Navbar -->
    <nav class="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-matcha-100 transition-all duration-300" id="navbar">
        <div class="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <a href="#" class="font-serif text-2xl font-semibold text-matcha-800 tracking-tight hover:opacity-80 transition-opacity" id="nav-brand">Matcha Mori</a>
            
            <!-- Mobile Menu Button -->
            <button id="mobile-menu-btn" class="md:hidden text-matcha-800 focus:outline-none p-2" aria-label="Toggle menu">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path id="menu-icon" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>

            <!-- Desktop Menu -->
            <div class="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
                <a href="#about" class="hover:text-matcha-600 transition-colors">About</a>
                <a href="#menu" class="hover:text-matcha-600 transition-colors">Menu</a>
                <a href="#gallery" class="hover:text-matcha-600 transition-colors">Gallery</a>
                <a href="#contact" class="hover:text-matcha-600 transition-colors">Visit Us</a>
            </div>
        </div>
        
        <!-- Mobile Dropdown -->
        <div id="mobile-menu" class="hidden md:hidden bg-white border-b border-matcha-100 shadow-xl absolute w-full left-0">
            <div class="px-6 py-4 space-y-6 flex flex-col items-center">
                <a href="#about" class="text-gray-600 hover:text-matcha-600 text-lg">About</a>
                <a href="#menu" class="text-gray-600 hover:text-matcha-600 text-lg">Menu</a>
                <a href="#gallery" class="text-gray-600 hover:text-matcha-600 text-lg">Gallery</a>
                <a href="#contact" class="text-gray-600 hover:text-matcha-600 text-lg">Visit Us</a>
            </div>
        </div>
    </nav>

    <!-- App Container -->
    <div id="app">
        <div class="min-h-screen flex items-center justify-center">
            <div class="animate-pulse w-12 h-12 rounded-full border-4 border-matcha-300 border-t-matcha-600 animate-spin"></div>
        </div>
    </div>

    <!-- Footer -->
    <footer class="bg-matcha-900 text-matcha-50 py-12 text-center">
        <div class="max-w-6xl mx-auto px-6">
            <h2 class="font-serif text-2xl mb-4" id="footer-brand">Matcha Mori</h2>
            <p class="text-matcha-200 text-sm mb-6 font-light" id="footer-tagline">Premium Japanese Matcha</p>
            <div class="flex justify-center space-x-6 mb-8 text-matcha-300">
                <a href="#" class="hover:text-white transition-colors">Instagram</a>
                <a href="#" class="hover:text-white transition-colors">Facebook</a>
            </div>
            <p class="text-xs text-matcha-500/80 font-light">&copy; <span id="year"></span> <span id="footer-copy-name">Matcha Mori</span>. All rights reserved.</p>
        </div>
    </footer>

    <script>
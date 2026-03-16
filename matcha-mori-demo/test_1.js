
        document.getElementById('year').textContent = new Date().getFullYear();

        // Mobile Menu Logic
        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');
        const icon = document.getElementById('menu-icon');
        
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
            if(menu.classList.contains('hidden')) {
                icon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
            } else {
                icon.setAttribute('d', 'M6 18L18 6M6 6l12 12');
            }
        });

        menu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.add('hidden');
                icon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
            });
        });

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    // Stop observing once it's visible if we only want it to fade in once
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        // Load Content Function
        async function loadContent() {
            try {
                const protocol = window.location.protocol;
                if (protocol === 'file:') {
                    throw new Error('CORS_ERROR');
                }

                const response = await fetch('content.json');
                if (!response.ok) throw new Error('Network response was not ok');
                const data = await response.json();
                
                // Update Layout Info
                document.title = data.site_info.name;
                document.getElementById('nav-brand').textContent = data.site_info.name;
                document.getElementById('footer-brand').textContent = data.site_info.name;
                document.getElementById('footer-tagline').textContent = data.site_info.tagline;
                document.getElementById('footer-copy-name').textContent = data.site_info.name;

                // Render App Content
                const app = document.getElementById('app');
                app.innerHTML = `
                    <!-- Hero Section -->
                    <header class="relative min-h-screen flex items-center justify-center overflow-hidden bg-matcha-900">
                        <div class="absolute inset-0 z-0">
                            <img src="\${data.gallery[0].src}" alt="Hero Background" class="w-full h-full object-cover opacity-40 mix-blend-overlay">
                            <div class="absolute inset-0 bg-gradient-to-b from-matcha-900/40 via-transparent to-matcha-50"></div>
                        </div>
                        <div class="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
                            <span class="text-matcha-300 font-medium tracking-[0.2em] uppercase text-xs mb-6 block fade-in">\${data.site_info.name}</span>
                            <h1 class="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-[1.1] drop-shadow-md fade-in" style="transition-delay: 100ms">\${data.hero.title}</h1>
                            <p class="text-lg md:text-xl text-matcha-50 mb-10 max-w-2xl mx-auto font-light leading-relaxed fade-in" style="transition-delay: 200ms">\${data.hero.subtitle}</p>
                            <a href="#menu" class="inline-block bg-white text-matcha-900 px-8 py-4 rounded-full font-medium hover:bg-matcha-100 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 fade-in" style="transition-delay: 300ms">\${data.hero.button_text}</a>
                        </div>
                    </header>

                    <!-- About Section -->
                    <section id="about" class="py-32 bg-white relative overflow-hidden">
                        <div class="absolute -top-40 -right-40 w-96 h-96 bg-matcha-50 rounded-full mix-blend-multiply blur-3xl opacity-70"></div>
                        <div class="absolute top-40 -left-40 w-96 h-96 bg-matcha-100 rounded-full mix-blend-multiply blur-3xl opacity-50"></div>
                        
                        <div class="max-w-6xl mx-auto px-6 relative z-10">
                            <div class="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                                <div class="w-full lg:w-1/2 fade-in">
                                    <h2 class="font-serif text-4xl lg:text-5xl text-matcha-900 mb-8 relative inline-block">
                                        \${data.about.heading}
                                        <div class="absolute -bottom-3 left-0 w-16 h-1 bg-matcha-300"></div>
                                    </h2>
                                    <div class="space-y-6 text-gray-600 text-lg font-light leading-relaxed">
                                        <p>\${data.about.text1}</p>
                                        <p>\${data.about.text2}</p>
                                    </div>
                                </div>
                                <div class="w-full lg:w-1/2 fade-in">
                                    <div class="relative group">
                                        <div class="absolute inset-0 bg-matcha-200 translate-x-4 translate-y-4 rounded-2xl transition-transform group-hover:translate-x-6 group-hover:translate-y-6"></div>
                                        <img src="\${data.about.image}" alt="About Us" class="relative rounded-2xl shadow-xl w-full h-[600px] object-cover filter brightness-95 group-hover:brightness-100 transition-all duration-500">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- Menu Section -->
                    <section id="menu" class="py-32 bg-matcha-50/50 bg-pattern relative border-y border-matcha-100/50">
                        <div class="max-w-4xl mx-auto px-6 relative z-10">
                            <div class="text-center mb-20 fade-in">
                                <span class="text-matcha-500 font-medium tracking-widest uppercase text-xs mb-3 block">Offerings</span>
                                <h2 class="font-serif text-4xl lg:text-5xl text-matcha-900 mb-6">Menu</h2>
                                
                                <a href="menu.pdf" target="_blank" rel="noopener noreferrer" class="inline-flex items-center space-x-2 text-sm text-matcha-700 bg-white px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-all border border-matcha-100 mt-4 group">
                                    <svg class="w-4 h-4 text-matcha-500 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                                    <span>Download PDF Menu</span>
                                </a>
                            </div>

                            <div class="space-y-20">
                                \${data.menu.map(category => \`
                                    <div class="fade-in">
                                        <h3 class="font-serif text-3xl text-matcha-800 mb-10 pb-4 border-b border-matcha-200">\${category.category}</h3>
                                        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                                            \${category.items.map(item => \`
                                                <div class="group">
                                                    <div class="flex justify-between items-start mb-2">
                                                        <h4 class="text-xl font-medium text-gray-800 group-hover:text-matcha-600 transition-colors pr-4">\${item.name}</h4>
                                                        <span class="text-lg font-serif text-matcha-600 shrink-0">\${item.price}</span>
                                                    </div>
                                                    <p class="text-gray-500 text-sm font-light leading-relaxed">\${item.description}</p>
                                                </div>
                                            \`).join('')}
                                        </div>
                                    </div>
                                \`).join('')}
                            </div>
                        </div>
                    </section>

                    <!-- Gallery Section -->
                    <section id="gallery" class="py-32 bg-white">
                        <div class="max-w-7xl mx-auto px-6">
                            <div class="text-center mb-16 fade-in">
                                <span class="text-matcha-500 font-medium tracking-widest uppercase text-xs mb-3 block">Gallery</span>
                                <h2 class="font-serif text-4xl lg:text-5xl text-matcha-900">Atmosphere</h2>
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                \${data.gallery.map((img, i) => \`
                                    <div class="group relative overflow-hidden rounded-2xl aspect-[4/5] fade-in bg-gray-100" style="transition-delay: \${i * 100}ms">
                                        <img src="\${img.src}" alt="\${img.alt}" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out filter group-hover:brightness-90">
                                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        <div class="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                            <p class="text-white text-sm font-medium drop-shadow-md">\${img.alt}</p>
                                        </div>
                                    </div>
                                \`).join('')}
                            </div>
                        </div>
                    </section>

                    <!-- Contact & Hours Section -->
                    <section id="contact" class="py-32 bg-matcha-900 text-matcha-50 relative overflow-hidden">
                        <div class="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
                            <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
                        </div>
                        
                        <div class="max-w-6xl mx-auto px-6 relative z-10">
                            <div class="flex flex-col lg:flex-row gap-16 lg:gap-24">
                                <div class="w-full lg:w-5/12 space-y-16">
                                    <div class="fade-in">
                                        <h2 class="font-serif text-3xl mb-8 text-white relative inline-block">
                                            \${data.opening_hours.heading}
                                            <div class="absolute -bottom-2 left-0 w-8 h-0.5 bg-matcha-400"></div>
                                        </h2>
                                        <ul class="space-y-4">
                                            \${data.opening_hours.schedule.map(slot => \`
                                                <li class="flex justify-between items-center border-b border-matcha-800 pb-3">
                                                    <span class="text-matcha-200 font-light">\${slot.days}</span>
                                                    <span class="font-medium">\${slot.hours}</span>
                                                </li>
                                            \`).join('')}
                                        </ul>
                                    </div>
                                    
                                    <div class="fade-in" style="transition-delay: 100ms">
                                        <h2 class="font-serif text-3xl mb-8 text-white relative inline-block">
                                            \${data.contact.heading}
                                            <div class="absolute -bottom-2 left-0 w-8 h-0.5 bg-matcha-400"></div>
                                        </h2>
                                        <div class="flex items-start space-x-4 mb-6">
                                            <svg class="w-6 h-6 text-matcha-400 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                            <div class="text-matcha-100 font-light leading-relaxed">
                                                \${data.contact.address_lines.map(line => \`<p>\${line}</p>\`).join('')}
                                            </div>
                                        </div>
                                        <div class="space-y-4 ml-10">
                                            <p><a href="tel:\${data.contact.phone.replace(/\\s+/g, '')}" class="flex items-center text-matcha-100 hover:text-white transition-colors"><svg class="w-4 h-4 mr-3 text-matcha-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>\${data.contact.phone}</a></p>
                                            <p><a href="mailto:\${data.contact.email}" class="flex items-center text-matcha-100 hover:text-white transition-colors"><svg class="w-4 h-4 mr-3 text-matcha-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>\${data.contact.email}</a></p>
                                        </div>
                                    </div>
                                </div>
                                <div class="w-full lg:w-7/12 h-[450px] lg:h-auto rounded-3xl overflow-hidden fade-in relative shadow-2xl" style="transition-delay: 200ms">
                                    <iframe 
                                        src="\${data.contact.google_maps_embed}" 
                                        class="absolute inset-0 w-full h-full border-0 filter grayscale-[20%] contrast-[95%]" 
                                        allowfullscreen="" 
                                        loading="lazy" 
                                        referrerpolicy="no-referrer-when-downgrade">
                                    </iframe>
                                </div>
                            </div>
                        </div>
                    </section>
                \`;

                // Observe new elements
                document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

            } catch (error) {
                console.error('Error loading content:', error);
                
                let errorMsg = 'An error occurred while loading content.';
                if (error.message === 'CORS_ERROR' || error.name === 'TypeError') {
                    errorMsg = \`
                        <h2 class="text-3xl font-serif mb-4 text-matcha-900">Local Setup Notice</h2>
                        <div class="bg-matcha-50 border border-matcha-200 text-left p-8 rounded-2xl max-w-2xl mx-auto shadow-sm">
                            <p class="text-gray-700 mb-6 leading-relaxed">Modern web browsers block loading JSON files directly from the filesystem (<code class="bg-white px-2 py-1 rounded border border-matcha-100 text-sm">file://</code>) for security reasons (CORS).</p>
                            <p class="text-gray-900 font-medium mb-4">To view this demo locally, start a minimal web server:</p>
                            
                            <div class="space-y-4 font-mono text-sm">
                                <div class="bg-white p-4 rounded-lg border border-gray-100">
                                    <span class="text-gray-400 block mb-1">Using Python (recommended):</span>
                                    <code class="text-matcha-700">python3 -m http.server 8000</code>
                                </div>
                                
                                <div class="bg-white p-4 rounded-lg border border-gray-100">
                                    <span class="text-gray-400 block mb-1">Using Node.js:</span>
                                    <code class="text-matcha-700">npx serve</code>
                                </div>
                                
                                <div class="bg-white p-4 rounded-lg border border-gray-100">
                                    <span class="text-gray-400 block mb-1">Using PHP:</span>
                                    <code class="text-matcha-700">php -S localhost:8000</code>
                                </div>
                            </div>
                            
                            <p class="text-gray-600 text-sm mt-6">After running one of these commands, open your browser to <a href="http://localhost:8000" class="text-matcha-600 hover:underline">http://localhost:8000</a></p>
                        </div>
                    \`;
                }

                document.getElementById('app').innerHTML = \`
                    <div class="min-h-screen flex items-center justify-center text-center px-4 bg-white">
                        <div class="fade-in visible">\${errorMsg}</div>
                    </div>
                \`;
            }
        }

        window.addEventListener('DOMContentLoaded', loadContent);
    
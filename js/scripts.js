
        document.addEventListener('DOMContentLoaded', function() {
            // Datos de proyectos con galerías
            const projectsData = {
                fotografia: {
                    eventos: [
                        {
                            title: "Sesión de Fotos 80 años",
                            image: "assets/fotografia/eventos/paulina1.jpg",
                            description: "Cobertura fotográfica completa",
                            gallery: [
                                "assets/fotografia/eventos/paulina2.jpg",
                                "assets/fotografia/eventos/paulina3.jpg",
                                "assets/fotografia/eventos/paulina4.jpg",
                                "assets/fotografia/eventos/paulina1.jpg"
                            ]
                        },
                        {
                            title: "Sesión de Fotos 15 años Zuria",
                            image: "assets/fotografia/eventos/zuria2.jpg",
                            description: "Sesión en evento",
                            gallery: [
                                "assets/fotografia/eventos/zuria1.jpg",
                                "assets/fotografia/eventos/zuria2.jpg",
                                "assets/fotografia/eventos/zuria3.jpg",
                                "assets/fotografia/eventos/zuria4.jpg",
                                "assets/fotografia/eventos/zuria5.jpg"
                            ]
                        },
                        {
                            title: "Sesión de Fotos 15 años Yerai",
                            image: "assets/fotografia/eventos/khis2.jpg",
                            description: "Sesión en exteriores",
                            gallery: [
                                "assets/fotografia/eventos/khis1.jpg",
                                "assets/fotografia/eventos/khis2.jpg",
                                "assets/fotografia/eventos/khis3.jpg",
                                "assets/fotografia/eventos/khis4.jpg",
                                "assets/fotografia/eventos/khis5.jpg"
                            ]
                        }
                    ],
                    personal: [
                        {
                            title: "Pukllay 2024 gobierno regional",
                            image: "assets/fotografia/personal/pukllay8.jpg",
                            description: "Sesión en estudio",
                            gallery: [
                                "assets/fotografia/personal/pukllay8.jpg",
                                "assets/fotografia/personal/pukllay8.jpg",
                                "assets/fotografia/personal/pukllay8.jpg",
                                "assets/fotografia/personal/pukllay8.jpg"
                            ]
                        },
                        {
                            title: "Carrera de caballos Espinar",
                            image: "https://www.behance.net/gallery/231113447/Carrera-de-Caballos-Espinar",
                            description: "Sesión en estudio",
                            gallery: [
                                "assets/fotografia/personal/caballos1.jpg",
                                "assets/fotografia/personal/caballos2.jpg",
                                "assets/fotografia/personal/caballos3.jpg"
                            ]
                        }
                    ],
                    paisajes: [
                        {
                            title: "Paisajes",
                            image: "assets/fotografia/paisajes/nevado.jpg",
                            description: "Sesión en estudio",
                            gallery: [
                                "assets/fotografia/paisajes/salkantay.jpg",
                                "assets/fotografia/paisajes/aguila.jpg",
                                "assets/fotografia/paisajes/salkantay.jpg",
                                "assets/fotografia/paisajes/salkantay.jpg",
                            ]
                        }
                    ]

                },
                diseno: {
                    flyers: [
                        {
                            title: "Flyer Peru Go",
                            image: "assets/diseno/photoshop/flyer_perugo.jpg",
                            description: "Diseño para campaña turística",
                            gallery: [
                                "assets/diseno/photoshop/flyer_perugo.jpg",
                                "assets/diseno/photoshop/flyer_perugo.jpg"
                            ]
                        },
                        {
                            title: "Flyer Salkantay Trail",
                            image: "assets/diseno/photoshop/salkantay_tarapoto.jpg",
                            description: "Diseño para campaña turística",
                            gallery: [
                                "https://source.unsplash.com/random/800x1000/?design,flyer",
                                "https://source.unsplash.com/random/800x1000/?design,flyer"
                            ]
                        },
                        {
                            title: "Logo Ergonomic",
                            image: "https://source.unsplash.com/random/600x800/?logo",
                            description: "Diseño para campaña turística",
                            gallery: [
                                "https://source.unsplash.com/random/800x1000/?logo",
                                "https://source.unsplash.com/random/800x1000/?logo"
                            ]
                        }
                    ],
                },
                desarrollo: {
                    ProyectosWeb : [
                        {
                            title: "Salkantay Trail (Mantenimiento)",
                            image: "https://source.unsplash.com/random/600x800/?website",
                            description: "Diseño para campaña turística",
                            descriptionLink: "https://salkantaytrailperu.com/",
                            gallery: [
                                "https://source.unsplash.com/random/800x1000/?website",
                                "https://source.unsplash.com/random/800x1000/?website"
                            ]
                        },
                        {
                            title: "Peru Go",
                            image: "https://source.unsplash.com/random/600x800/?website",
                            description: "Diseño para campaña turística",
                            descriptionLink: "https://peru-go.site/",
                            gallery: [
                                "https://source.unsplash.com/random/800x1000/?website",
                                "https://source.unsplash.com/random/800x1000/?website"
                            ]
                        }
                    ]
                }
            };
            

            // Elementos del DOM
            const mainCategories = document.querySelector('.category-buttons');
            const subcategoriesContainer = document.getElementById('subcategories');
            const projectsContainer = document.getElementById('projects-container');
            const allProjectsContainer = document.getElementById('all-projects-container');
            const breadcrumbsContainer = document.getElementById('breadcrumbs');
            const modal = document.getElementById('gallery-modal');
            const sliderTrack = document.getElementById('slider-track');
            const currentSlideEl = document.getElementById('current-slide');
            const totalSlidesEl = document.getElementById('total-slides');
            const prevBtn = document.querySelector('.prev-slide');
            const nextBtn = document.querySelector('.next-slide');
            const closeModal = document.querySelector('.close-modal');

            // Variables de estado
            let currentGallery = [];
            let currentIndex = 0;

            // Cargar subcategorías
            function loadSubcategories(mainCategory) {
                subcategoriesContainer.innerHTML = '';
                
                if (!projectsData[mainCategory]) return;
                
                const subcategories = Object.keys(projectsData[mainCategory]);
                
                subcategories.forEach(sub => {
                    const button = document.createElement('button');
                    button.textContent = sub.charAt(0).toUpperCase() + sub.slice(1);
                    button.dataset.subcategory = sub;
                    button.addEventListener('click', () => {
                        loadProjects(mainCategory, sub);
                        updateBreadcrumbs(mainCategory, sub);
                        // Ocultar sección "Todos" cuando se selecciona una categoría
                        document.getElementById('all-projects').style.display = 'none';
                        projectsContainer.style.display = 'grid';
                    });
                    subcategoriesContainer.appendChild(button);
                });
            }

            // Cargar proyectos
            function loadProjects(mainCategory, subcategory) {
                projectsContainer.innerHTML = '';
                
                if (mainCategory === 'all') {
                    // Mostrar todos los proyectos
                    for (const mainCat in projectsData) {
                        for (const subCat in projectsData[mainCat]) {
                            renderProjects(projectsData[mainCat][subCat], projectsContainer);
                        }
                    }
                } else if (mainCategory && subcategory) {
                    // Mostrar proyectos de la categoría seleccionada
                    renderProjects(projectsData[mainCategory][subcategory], projectsContainer);
                }
            }

            // Renderizar proyectos
            function renderProjects(projects, container) {
                projects.forEach(project => {
                    const projectCard = document.createElement('div');
                    projectCard.className = 'project-card';
                    
                    projectCard.innerHTML = `
                        <img src="${project.image}" alt="${project.title}" class="project-image">
                        <div class="project-info">
                            <h3>${project.title}</h3>
                            <p>
                                ${project.description}
                                ${project.descriptionLink ? 
                                    `<a href="${project.descriptionLink}" target="_blank" class="project-link">Ver proyecto</a>` 
                                    : ''
                                }
                            </p>
                            ${project.gallery ? `<small>${project.gallery.length} fotos</small>` : ''}
                        </div>
                    `;
                    
                    if (project.gallery) {
                        projectCard.addEventListener('click', () => {
                            openGallery(project.gallery);
                        });
                        projectCard.style.cursor = 'pointer';
                    }
                    
                    container.appendChild(projectCard);
                });
            }

            // Cargar todos los proyectos en la sección inicial
            function loadAllProjects() {
                allProjectsContainer.innerHTML = '';
                
                for (const mainCat in projectsData) {
                    for (const subCat in projectsData[mainCat]) {
                        renderProjects(projectsData[mainCat][subCat], allProjectsContainer);
                    }
                }
            }

            // Abrir galería
            function openGallery(images) {
                currentGallery = images;
                currentIndex = 0;
                
                sliderTrack.innerHTML = '';
                currentGallery.forEach(img => {
                    const slide = document.createElement('div');
                    slide.className = 'slider-slide';
                    slide.innerHTML = `<img src="${img}" alt="Imagen de galería">`;
                    sliderTrack.appendChild(slide);
                });
                
                totalSlidesEl.textContent = currentGallery.length;
                updateSlideCounter();
                
                modal.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            }

            // Navegación del slider
            function goToSlide(index) {
                if (index < 0) index = currentGallery.length - 1;
                if (index >= currentGallery.length) index = 0;
                
                currentIndex = index;
                sliderTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
                updateSlideCounter();
            }

            function updateSlideCounter() {
                currentSlideEl.textContent = currentIndex + 1;
            }

            // Actualizar migas de pan
            function updateBreadcrumbs(mainCategory, subcategory) {
                breadcrumbsContainer.innerHTML = `
                    <a href="#" data-category="all">Inicio</a>
                `;
                
                if (mainCategory) {
                    const mainCatLink = document.createElement('a');
                    mainCatLink.href = '#';
                    mainCatLink.textContent = mainCategory.charAt(0).toUpperCase() + mainCategory.slice(1);
                    mainCatLink.dataset.category = mainCategory;
                    breadcrumbsContainer.appendChild(mainCatLink);
                    
                    if (subcategory) {
                        const subCatLink = document.createElement('a');
                        subCatLink.href = '#';
                        subCatLink.textContent = subcategory.charAt(0).toUpperCase() + subcategory.slice(1);
                        subCatLink.dataset.subcategory = subcategory;
                        breadcrumbsContainer.appendChild(subCatLink);
                    }
                }
            }

            // Event listeners
            mainCategories.querySelectorAll('button').forEach(button => {
                button.addEventListener('click', () => {
                    const mainCategory = button.dataset.category;
                    loadSubcategories(mainCategory);
                    updateBreadcrumbs(mainCategory);
                    // Ocultar sección "Todos" cuando se selecciona una categoría
                    document.getElementById('all-projects').style.display = 'none';
                    projectsContainer.style.display = 'grid';
                });
            });

            breadcrumbsContainer.addEventListener('click', (e) => {
                e.preventDefault();
                if (e.target.tagName === 'A') {
                    if (e.target.dataset.category === 'all') {
                        // Mostrar sección "Todos" y ocultar proyectos por categoría
                        document.getElementById('all-projects').style.display = 'block';
                        projectsContainer.style.display = 'none';
                        subcategoriesContainer.innerHTML = '';
                        updateBreadcrumbs();
                    } else if (e.target.dataset.category) {
                        loadSubcategories(e.target.dataset.category);
                        updateBreadcrumbs(e.target.dataset.category);
                        // Ocultar sección "Todos" cuando se selecciona una categoría
                        document.getElementById('all-projects').style.display = 'none';
                        projectsContainer.style.display = 'grid';
                    }
                }
            });

            // Galería
            prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1));
            nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1));
            closeModal.addEventListener('click', () => {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            });

            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.style.display = 'none';
                    document.body.style.overflow = 'auto';
                }
            });

            document.addEventListener('keydown', (e) => {
                if (modal.style.display === 'flex') {
                    if (e.key === 'ArrowLeft') goToSlide(currentIndex - 1);
                    if (e.key === 'ArrowRight') goToSlide(currentIndex + 1);
                    if (e.key === 'Escape') {
                        modal.style.display = 'none';
                        document.body.style.overflow = 'auto';
                    }
                }
            });

            // Formulario de contacto
            const contactForm = document.getElementById('contactForm');
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Formulario enviado con éxito. Gracias por contactarme.');
                this.reset();
            });

            // Carga inicial
            loadAllProjects();
            // Ocultar contenedor de proyectos por categoría al inicio
            projectsContainer.style.display = 'none';

        });

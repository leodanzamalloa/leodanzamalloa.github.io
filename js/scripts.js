document.addEventListener('DOMContentLoaded', function() {
    // Datos de proyectos con galerías
    const projectsData = {
        fotografia: {
            eventos: [
                {
                    title: "Sesión de Fotos 80 años",
                    image: "https://i.ibb.co/v6XPQ96s/sra-paulina2.jpg",
                    description: "Cobertura fotográfica completa",
                    gallery: [
                        "https://i.ibb.co/wFHGNcsf/sra-paulina4.jpg",
                        "https://i.ibb.co/HLV0zxDf/sra-paulina5.jpg",
                        "https://i.ibb.co/4n5TSPBh/sra-paulina1.jpg",
                        "https://i.ibb.co/hQmFvWG/sra-paulina3.jpg"
                    ]
                },
                {
                    title: "Sesión de Fotos 15 años Zuria",
                    image: "https://i.ibb.co/Qj7RvQHb/zuria2.jpg",
                    description: "Sesión en evento",
                    gallery: [
                        "https://i.ibb.co/pBvV0JtL/zuria4.jpg",
                        "https://i.ibb.co/MDDGpfG6/zuria3.jpg",
                        "https://i.ibb.co/JR7vJGLS/zuria7.jpg",
                        "https://i.ibb.co/qYK0W01F/zuria6.jpg"
                    ]
                },
                {
                    title: "Sesión de Fotos 15 años Yerai",
                    image: "https://i.ibb.co/7dgktGZj/yerai2.jpg",
                    description: "Sesión en exteriores",
                    gallery: [
                        "https://i.ibb.co/7dgktGZj/yerai2.jpg",
                        "https://i.ibb.co/3yV2xbWC/yerai1.jpg"
                    ]
                },
                {
                    title: "Tupay Qosqqo",
                    image: "https://i.ibb.co/k6v0hNQc/tupay3.jpg",
                    description: "Evento Musical",
                    gallery: [
                        "https://i.ibb.co/PsJ7H6PC/tupay4.jpg",
                        "https://i.ibb.co/LDKxKNHx/tupay5.jpg"
                    ]
                }
                
            ],
            personal: [
                {
                    title: "Pukllay 2024 gobierno regional",
                    image: "https://i.ibb.co/tTk1GP6G/pukllay4.jpg",
                    description: "Sesión en estudio",
                    gallery: [
                        "https://i.ibb.co/pvBhxMff/pukllay1.jpg",
                        "https://i.ibb.co/1f27FzF9/pukllay2.jpg",
                        "https://i.ibb.co/ymwtYBGs/pukllay3.jpg"
                    ]
                },
                {
                    title: "Carrera de caballos Espinar",
                    image: "https://i.ibb.co/2pCFNzQ/carrera-caballos.jpg",
                    description: "Sesión en estudio",
                    gallery: [
                        "https://i.ibb.co/GQyY83gj/carrera-caballos1.jpg",
                        "https://i.ibb.co/2pCFNzQ/carrera-caballos.jpg"
                    ]
                }
            ],
            paisajes: [
                {
                    title: "Paisajes y retratos",
                    image: "https://i.ibb.co/rhDVNVF/nevado.jpg",
                    description: "Sesión en estudio",
                    gallery: [
                        "https://i.ibb.co/VYDJTjWr/retrato.jpg",
                        "https://i.ibb.co/LXtTMCj7/nevado.jpg"

                    ]
                }
            ]
        },
        diseno: {
            flyers: [
                {
                    title: "Flyer Salkantay Trail",
                    image: "https://i.ibb.co/N2CnX3Nh/tarapoto.jpg",
                    description: "Diseño para campaña turística",
                    gallery: [
                        "https://source.unsplash.com/random/800x1000/?design,flyer",
                        "https://source.unsplash.com/random/800x1000/?design,flyer"
                    ]
                },
                {
                    title: "Logo Ergonomic",
                    image: "https://i.ibb.co/gZbzDwXR/portada13ergonomic.jpg",
                    description: "Diseño corporativo",
                    gallery: [
                        "https://source.unsplash.com/random/800x1000/?logo",
                        "https://source.unsplash.com/random/800x1000/?logo"
                    ]
                }
            ],
        },
        desarrollo: {
            ProyectosWeb: [
                {
                    title: "Salkantay Trail (Mantenimiento)",
                    image: "https://i.ibb.co/G43c8BVz/salkantay.png",
                    description: "Sitio web de turismo",
                    descriptionLink: "https://salkantaytrailperu.com/",
                    gallery: [
                        "https://source.unsplash.com/random/800x1000/?website",
                        "https://source.unsplash.com/random/800x1000/?website"
                    ]
                },
                {
                    title: "DRIU Perú - UNSAAC",
                    image: "https://i.ibb.co/WvNSy1pC/driu.png",
                    description: "Portal universitario",
                    descriptionLink: "https://driuperu.com/",
                    gallery: [
                        "https://source.unsplash.com/random/800x1000/?website",
                        "https://source.unsplash.com/random/800x1000/?website"
                    ]
                },
                {
                    title: "Cris baby Import",
                    image: "https://i.ibb.co/ksMsN4ZZ/cristbaby.png",
                    description: "E-commerce",
                    descriptionLink: "https://cristbabyimport.com/",
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
    let currentMainCategory = '';
    let currentSubcategory = '';

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
        currentMainCategory = mainCategory;
        currentSubcategory = subcategory;
        
        if (mainCategory === 'all') {
            // Mostrar todos los proyectos
            for (const mainCat in projectsData) {
                for (const subCat in projectsData[mainCat]) {
                    renderProjects(projectsData[mainCat][subCat], projectsContainer);
                }
            }
        } else if (mainCategory && subcategory) {
            // Mostrar proyectos de la subcategoría seleccionada
            renderProjects(projectsData[mainCategory][subcategory], projectsContainer);
        } else if (mainCategory) {
            // MOSTRAR TODOS LOS PROYECTOS DE LA CATEGORÍA PRINCIPAL
            for (const subCat in projectsData[mainCategory]) {
                renderProjects(projectsData[mainCategory][subCat], projectsContainer);
            }
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
        goToSlide(0);
        
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
            mainCatLink.addEventListener('click', (e) => {
                e.preventDefault();
                loadSubcategories(mainCategory);
                loadProjects(mainCategory);
                updateBreadcrumbs(mainCategory);
                document.getElementById('all-projects').style.display = 'none';
                projectsContainer.style.display = 'grid';
            });
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

    // Event listeners para categorías principales
    mainCategories.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', () => {
            const mainCategory = button.dataset.category;
            loadSubcategories(mainCategory);
            updateBreadcrumbs(mainCategory);
            // Ocultar sección "Todos" cuando se selecciona una categoría
            document.getElementById('all-projects').style.display = 'none';
            projectsContainer.style.display = 'grid';
            
            // Cargar TODOS los proyectos de la categoría principal
            loadProjects(mainCategory);
        });
    });

    // Event listeners para migas de pan
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
                const mainCategory = e.target.dataset.category;
                loadSubcategories(mainCategory);
                loadProjects(mainCategory);
                updateBreadcrumbs(mainCategory);
                document.getElementById('all-projects').style.display = 'none';
                projectsContainer.style.display = 'grid';
            }
        }
    });

    // Galería - Event listeners
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

    // Navegación con teclado en la galería
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
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validación básica
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            if (!name || !email || !subject || !message) {
                alert('Por favor, completa todos los campos del formulario.');
                return;
            }
            
            // Simulación de envío (aquí integrarías con un servicio de email)
            alert('Formulario enviado con éxito. Gracias por contactarme.');
            this.reset();
        });
    }

    // Efectos de hover en tarjetas de proyecto
    function initProjectCardHover() {
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-5px)';
                card.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.2)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0)';
                card.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
            });
        });
    }

    // Observador para aplicar efectos hover cuando se cargan nuevas tarjetas
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.addedNodes.length) {
                initProjectCardHover();
            }
        });
    });

    // Inicialización
    function init() {
        loadAllProjects();
        // Ocultar contenedor de proyectos por categoría al inicio
        projectsContainer.style.display = 'none';
        
        // Inicializar efectos hover
        initProjectCardHover();
        
        // Observar cambios en el contenedor de proyectos
        observer.observe(projectsContainer, { childList: true });
        observer.observe(allProjectsContainer, { childList: true });
    }

    // Iniciar la aplicación
    init();
});

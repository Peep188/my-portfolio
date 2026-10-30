"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const NAV_IDS = ["aboutme", "skills", "projects", "experience", "contact"];

const TRANSLATIONS = {
  en: {
    nav: ["About Me", "Skills", "Projects", "Experience", "Contact"],
    hero: {
      tag: "Available for work",
      role: "Web Developer & Graphic Designer",
      desc: "Crafting bold, modern digital experiences that blend clean code with intentional design. Every pixel placed with purpose.",
      resume: "Download Resume ↓",
      contact: "Contact Me →",
      scroll: "Scroll to explore"
    },
    about: {
      label: "About Me",
      title: "Turning ideas\ninto reality",
      desc1: "I transform ideas into reliable, user-friendly digital experiences that people genuinely enjoy interacting with.",
      desc2: "Passionate about web development and design, I create modern, responsive, and visually compelling websites that balance functionality with creativity.",
      desc3: "I believe great digital products are built through clean code, thoughtful UX, and meticulous attention to detail — across every device, every screen.",
      stats: ["Years Experience", "Projects Completed", "Happy Clients", "Dedication"],
      role: "Web Dev & Designer",
      hello: "Hello, World!"
    },
    skills: {
      label: "Expertise",
      title: "Skills & Tools",
      frontend: {
        tag: "FRONTEND DEVELOPMENT ✦",
        title: "Frontend Dev",
        desc: "Building interactive user interfaces and responsive web layouts."
      },
      backend: {
        tag: "SERVER SIDE ✦",
        title: "Backend Dev",
        desc: "Developing robust server-side systems and managing database solutions."
      },
      programming: {
        tag: "CORE LANGUAGES ✦",
        title: "Programming Lang",
        desc: "Writing clean, efficient, and structured software logic."
      },
      databases: {
        tag: "STORAGE ✦",
        title: "Databases",
        desc: "Designing and managing relational and non-relational databases."
      },
      tools: {
        tag: "WORKFLOW & CREATIVE ✦",
        title: "Tools & Design",
        desc: "Designing layouts, styling workflows, and maintaining source control."
      },
      footer: "✦ ...and always learning more ▽ ✦"
    },
    projects: {
      label: "Portfolio",
      title: "Featured Projects",
      featured: "Featured",
      view: "View Project",
      visitSite: "Visit live website",
      items: [
        {
          num: "01",
          title: "Findmich - Professional Networking App",
          desc: "Versatile communication app connecting skilled professionals across fields with real-time messaging & instant notifications.",
          fullDesc: "FindMich is a versatile communication app designed to connect skilled professionals across various fields, making it easy for anyone to find and contact the right expert for any job. Whether you’re a doctor needing a mechanic, a teacher seeking a plumber, or a business owner in need of services, FindMich provides a direct line to the professionals you need. Built with React Native for a seamless mobile experience and powered by a NestJS backend with WebSockets and MongoDB, the app enables real-time messaging, instant notifications, and a smooth user experience across devices.",
          skills: ["React Native", "NestJS", "WebSockets", "MongoDB"],
          image: "/findmich.png"
        },
    {
  num: "02",
  title: "Ciervo Cars – Luxury Car Rental & Concierge Website",
  desc: "Luxury car rental and concierge platform with premium browsing, vehicle discovery, and seamless booking journeys.",
  fullDesc: "Ciervo Cars is a premium web platform for a luxury car rental and concierge service. The site helps users explore vehicles by category, including Luxury, Sports, Electric/Hybrid, and SUV, while offering services such as test drives, workshop bookings, pre-ITV checks, certified vehicles, financing, and maintenance plans. Built with Next.js and GSAP, the experience combines elegant motion, strong branding, and conversion-focused UX to deliver a polished, responsive luxury experience across all devices.",
  skills: ["Next.js", "GSAP", "Responsive UI", "Luxury Branding", "Conversion UX"],
  image: "/ciervo-cover.png",
  link: "https://ciervo-cars.vercel.app/"
},
        {
          num: "03",
          title: "Denvel — E-commerce Website",
          desc: "Modern, responsive e-commerce platform for a Moroccan home-appliance brand with product discovery, filtering, and detailed catalog browsing.",
          fullDesc: "Denvel — E-commerce Website is a modern and responsive e-commerce platform developed for Denvel, a Moroccan home-appliance brand. The website provides a complete digital catalog for discovering and exploring a wide range of household appliances, including TVs, refrigerators, washing machines, cooking appliances, air conditioners, and small appliances. The platform includes category-based product navigation, detailed product pages, technical specifications, product search and filtering, and responsive layouts optimized for different screen sizes. As a Full-Stack Developer, I was responsible for developing the website, implementing the frontend interfaces, building the backend architecture, integrating product data, and creating reusable components for managing the different product categories and specifications. Technologies: Symfony, PHP, Twig, JavaScript, HTML5, CSS3, MySQL. Key features include responsive and modern UI, product catalog and categories, product detail pages, technical specifications, search and filtering, reusable UI components, dynamic content management, backend development with Symfony, database integration with MySQL, and mobile, tablet, and desktop optimization.",
          skills: ["Symfony", "PHP", "Twig", "JavaScript", "HTML5", "CSS3", "MySQL"],
          image: "/denvel-cover.png",
        },
       
      
        {
          num: "04",
          title: "ERP Business Dashboard",
          desc: "Modern ERP-style business dashboard for managing real estate, sales, finance, HR, logistics, and administration in one platform.",
          fullDesc: "This project is a modern ERP-style business dashboard built for managing real estate, sales, finance, HR, logistics, and administration in one platform. It includes KPI tracking, financial analytics, project management, client and property management, procurement workflows, and administrative settings, all presented in a clean and responsive admin interface. Technologies used: React, TypeScript, Vite, Tailwind CSS, React Router, Recharts, Zustand, and modern UI libraries. Built with React, TypeScript, Tailwind CSS, React Router, Recharts, and Zustand.",
          skills: ["React", "TypeScript", "Tailwind CSS", "React Router", "Recharts", "Zustand"],
          image: "/ERP Business Dashboard.png"
        },
        
        {
          num: "05",
          title: "Automotive AI SaaS Landing Page",
          desc: "Modern SaaS landing page for an AI operational sync platform built for automotive and manufacturing teams.",
          fullDesc: "My role: Front end developer. Project description: Developed a modern SaaS landing page for an AI operational sync platform in the automotive and manufacturing industry. The platform improves real-time factory operations, reduces repeated mistakes, and aligns communication across teams. The website includes a hero section, trusted partners, 2026 industry challenges, ecosystem breakdown (Operations, Alignment, Transparency, Context), value proposition, team section, and a contact form for enterprise leads. Design focuses on clarity, trust, and enterprise-grade positioning. Link: https://www.bridgyn.com/ Skills and deliverables: Next.js, GSAP, Tailwind CSS.",
          skills: ["Next.js", "GSAP", "Tailwind CSS"],
          image: "/AI SaaS Landing Page.png",
          link: "https://www.bridgyn.com/"
        },
        {
          num: "06",
          title: "Akzente — Retail Merchandising Platform",
          desc: "Full-stack retail services management platform connecting staff, clients, and field merchandisers across operations and reporting workflows.",
          fullDesc: "My role: Full-Stack Developer. Project description: A full-stack retail services management platform connecting Akzente staff, clients, and field merchandisers. Built with a single NestJS REST API and three Angular apps (HeadOffice, Client Portal, Merchandiser). It includes project and report management, branch search with Mapbox, real-time notifications via Socket.IO, Excel import/export, JWT authentication with refresh tokens, and multilingual support (DE/EN). Designed with a scalable architecture using TypeORM, PostgreSQL, and modular features. Skills and deliverables: Angular, NestJS, PostgreSQL.",
          skills: ["Angular", "NestJS", "PostgreSQL"],
          image: "/Akzente.png"
        }
      ]
    },
    experience: {
      label: "My Journey",
      title: "Education & Experience",
      education: "Education",
      experience: "Experience",
      eduItems: [
        {
          date: "2023 – 2025",
          title: "Moroccan Higher Technician Certificate (BTS)",
          subtitle: "Specialization: Multimedia, Web Design and Web Development",
          location: "Taza, Morocco"
        },
        {
          date: "2022 – 2023",
          title: "Bachelor’s Studies in Mathematics and Physics",
          subtitle: "Faculty of Sciences Dhar El Mahraz",
          location: "Fez, Morocco"
        },
        {
          date: "2021 – 2022",
          title: "Moroccan Baccalaureate (Equivalent) in Physical Sciences",
          subtitle: "International Option — Moulay Driss High School",
          location: "Fez, Morocco"
        }
      ],
      expItems: [
        {
          date: "2025 – 2026",
          title: "Web Developer",
          subtitle: "New Dev",
          location: "Fez, Morocco"
        },
        {
          date: "2024 – 2025",
          title: "Internship in Web Development",
          subtitle: "New Dev",
          location: "Fez, Morocco"
        },
        {
          date: "2023 – 2024",
          title: "Internship in Graphic Design",
          subtitle: "New Dev",
          location: "Fez, Morocco"
        },
        {
          date: "2022 – 2023",
          title: "Backoffice Agent",
          subtitle: "ChiCall",
          location: "Fez, Morocco"
        }
      ]
    },
    contact: {
      connect: "Let's\nconnect",
      desc: "I'm open to collaborations and conversation. Feel free to reach out using the form or social links.",
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub",
      formTitle: "Send me a message",
      name: "Name",
      emailLabel: "Email",
      message: "Your message",
      sending: "Sending...",
      sendBtn: "Send Message",
      success: "Thank you! Your message has been sent successfully. ♡"
    }
  },
  de: {
    nav: ["Über mich", "Fähigkeiten", "Projekte", "Erfahrung", "Kontakt"],
    hero: {
      tag: "Bereit für Aufträge",
      role: "Webentwicklerin & Grafikdesignerin",
      desc: "Gestaltung mutiger, moderner digitaler Erlebnisse, die sauberen Code mit bewusstem Design verbinden. Jedes Pixel hat seinen Zweck.",
      resume: "Lebenslauf herunterladen ↓",
      contact: "Kontaktier mich →",
      scroll: "Scrollen zum Erkunden"
    },
    about: {
      label: "Über mich",
      title: "Ideen in die\nRealität umsetzen",
      desc1: "Ich verwandle Ideen in zuverlässige, benutzerfreundliche digitale Erlebnisse, die Menschen gerne nutzen.",
      desc2: "Mit Leidenschaft für Webentwicklung und Design erstelle ich moderne, ansprechende und visuell ansprechende Websites, die Funktionalität mit Kreativität verbinden.",
      desc3: "Ich bin davon überzeugt, dass großartige digitale Produkte durch sauberen Code, durchdachte UX und Liebe zum Detail entstehen – auf jedem Gerät, auf jedem Bildschirm.",
      stats: ["Jahre Erfahrung", "Abgeschlossene Projekte", "Zufriedene Kunden", "Hingabe"],
      role: "Webentwicklerin & Designerin",
      hello: "Hallo Welt!"
    },
    skills: {
      label: "Fachwissen",
      title: "Fähigkeiten & Tools",
      frontend: {
        tag: "FRONTEND-ENTWICKLUNG ✦",
        title: "Frontend Dev",
        desc: "Erstellung interaktiver Benutzeroberflächen und responsiver Web-Layouts."
      },
      backend: {
        tag: "SERVER SEITE ✦",
        title: "Backend Dev",
        desc: "Entwicklung robuster serverseitiger Systeme und Verwaltung von database-Lösungen."
      },
      programming: {
        tag: "KERN-SPRACHEN ✦",
        title: "Programmiersprachen",
        desc: "Schreiben von sauberer, effizienter und strukturierter Softwarelogik."
      },
      databases: {
        tag: "SPEICHERUNG ✦",
        title: "Datenbanken",
        desc: "Entwurf und Verwaltung von relationalen und nicht-relationalen Datenbanken."
      },
      tools: {
        tag: "WORKFLOW & KREATIV ✦",
        title: "Tools & Design",
        desc: "Entwerfen von Layouts, Styling-Workflows und Verwalten der Versionskontrolle."
      },
      footer: "✦ ...und lerne immer noch mehr dazu ▽ ✦"
    },
    projects: {
      label: "Portfolio",
      title: "Ausgewählte Projekte",
      featured: "Empfohlen",
      view: "Projekt Ansehen",
      visitSite: "Website öffnen",
      items: [
        {
          num: "01",
          title: "Findmich - Netzwerke-App für Experten",
          desc: "Vielseitige Kommunikations-App zur Vernetzung von Fachkräften mit Echtzeit-Messaging und Benachrichtigungen.",
          fullDesc: "FindMich ist eine vielseitige Kommunikations-App, die entwickelt wurde, um qualifizierte Fachkräfte aus verschiedenen Bereichen zu vernetzen. Ob Arzt, der einen Mechaniker braucht, oder Lehrer auf der Suche nach einem Klempner – FindMich bietet direkten Kontakt zu den passenden Experten. Entwickelt mit React Native für ein nahtloses mobiles Erlebnis und angetrieben von einem NestJS-Backend mit WebSockets und MongoDB, ermöglicht die App Echtzeit-Messaging und sofortige Benachrichtigungen.",
          skills: ["React Native", "NestJS", "WebSockets", "MongoDB"],
          image: "/findmich.png"
        },
        {
          num: "02",
          title: "Ciervo Cars – Luxus-Auto-Verleih & Concierge-Website",
          desc: "Premium-Website für Luxusauto-Verleih mit eleganter Fahrzeugsuche und reibungsloser Buchungserfahrung.",
          fullDesc: "Ciervo Cars ist eine Premium-Webplattform für einen Luxus-Auto-Verleih und Concierge-Service. Die Website hilft Benutzern, Fahrzeuge nach Kategorien wie Luxus, Sportwagen, Elektro/Hybrid und SUV zu entdecken und bietet Services wie Probefahrten, Werkstattbuchungen, Vor-ITV-Prüfungen, zertifizierte Fahrzeuge, Finanzierung und Wartungspläne. Entwickelt mit Next.js und GSAP verbindet die Erfahrung elegante Animationen, starke Markenidentität und conversion-orientierte UX für ein hochwertiges, responsives Erlebnis auf allen Geräten.",
          skills: ["Next.js", "GSAP", "Responsive UI", "Luxury Branding", "Conversion UX"],
          image: "https://ciervo-cars.vercel.app/_next/image?url=%2Fimages%2Fplacement%2Fplacement.webp&w=828&q=75",
          link: "https://ciervo-cars.vercel.app/"
        },
        {
          num: "03",
          title: "Denvel — E-Commerce-Website",
          desc: "Moderne, responsive E-Commerce-Plattform für eine marokkanische Haushaltsgeräte-Marke mit Produktkatalog, Filterung und technischen Details.",
          fullDesc: "Denvel — E-Commerce-Website ist eine moderne und responsive E-Commerce-Plattform für Denvel, eine marokkanische Haushaltsgeräte-Marke. Die Website bietet einen kompletten digitalen Katalog zum Entdecken und Durchsuchen von Haushaltsgeräten wie Fernsehern, Kühlschränken, Waschmaschinen, Kochgeräten, Klimaanlagen und Kleingeräten. Die Plattform umfasst kategoriebasierte Produktnavigation, Detailseiten, technische Spezifikationen, Suche und Filterung sowie responsives Layout für verschiedene Bildschirmgrößen. Als Full-Stack-Entwickler war ich für die Entwicklung der Website, die Implementierung der Frontend-Oberflächen, die Backend-Architektur, die Integration von Produktdaten und die Erstellung wiederverwendbarer Komponenten für die verschiedenen Produktkategorien verantwortlich. Technologien: Symfony, PHP, Twig, JavaScript, HTML5, CSS3, MySQL. Zu den Kernfunktionen gehören ein modernes und responsives UI, Produktkatalog und Kategorien, Produktdetailseiten, technische Spezifikationen, Suche und Filterung, wiederverwendbare UI-Komponenten, dynamische Content-Verwaltung, Backend-Entwicklung mit Symfony, Datenbankintegration mit MySQL sowie Optimierung für mobile, Tablet- und Desktop-Geräte.",
          skills: ["Symfony", "PHP", "Twig", "JavaScript", "HTML5", "CSS3", "MySQL"],
          image: "/planet_ecommerce.png"
        },
        {
          num: "04",
          title: "Portfolio-Website",
          desc: "Interaktives Entwickler-Portfolio mit dynamischen Cartoon-Animationen und mehrsprachiger Unterstützung."
        },
        {
          num: "05",
          title: "Aufgaben-Manager",
          desc: "Eine kollaborative Produktivitäts-App mit Drag-and-Drop-Kanban-Boards und Aufgaben-Analysen."
        },
        {
          num: "06",
          title: "ERP Business Dashboard",
          desc: "Modernes ERP-ähnliches Business-Dashboard für die Verwaltung von Immobilien, Vertrieb, Finanzen, HR, Logistik und Verwaltung in einer Plattform.",
          fullDesc: "Dieses Projekt ist ein modernes ERP-ähnliches Business-Dashboard für die Verwaltung von Immobilien, Vertrieb, Finanzen, HR, Logistik und Verwaltung in einer Plattform. Es umfasst KPI-Tracking, Finanzanalysen, Projektmanagement, Kunden- und Immobilienverwaltung, Beschaffungsprozesse und administrative Einstellungen in einer sauberen und responsiven Admin-Oberfläche. Technologien: React, TypeScript, Vite, Tailwind CSS, React Router, Recharts, Zustand und moderne UI-Bibliotheken. Entwickelt mit React, TypeScript, Tailwind CSS, React Router, Recharts und Zustand.",
          skills: ["React", "TypeScript", "Tailwind CSS", "React Router", "Recharts", "Zustand"],
          image: "/planet_saturn_final_v10.png"
        },
        {
          num: "07",
          title: "Hotel-Buchung",
          desc: "Eine Premium-Buchungsanwendung mit Filterung, Kalenderplanung und Rechnungserstellung."
        },
        {
          num: "08",
          title: "Automotive AI SaaS Landing Page",
          desc: "Moderne SaaS-Landingpage für eine KI-Operationsplattform für Automobil- und Fertigungsunternehmen.",
          fullDesc: "Meine Rolle: Frontend-Entwickler. Projektbeschreibung: Entwicklung einer modernen SaaS-Landingpage für eine KI-Operationsplattform in der Automobil- und Fertigungsindustrie. Die Plattform verbessert den Echtzeit-Betrieb in Fabriken, reduziert wiederholte Fehler und verbessert die Kommunikation zwischen Teams. Die Website enthält eine Hero-Section, vertrauenswürdige Partner, Herausforderungen aus dem Jahr 2026, eine Aufschlüsselung des Ökosystems (Operations, Alignment, Transparency, Context), ein Value Proposition, eine Teamsektion und ein Kontaktformular für Enterprise-Lead. Das Design fokussiert sich auf Klarheit, Vertrauen und Positionierung auf Unternehmensebene. Link: https://www.bridgyn.com/ Skills und Deliverables: Next.js, GSAP, Tailwind CSS.",
          skills: ["Next.js", "GSAP", "Tailwind CSS"],
          image: "/planet_ai.png",
          link: "https://www.bridgyn.com/"
        },
        {
          num: "09",
          title: "Social-Media-Manager",
          desc: "Tool zur plattformübergreifenden Inhaltsplanung mit KI-Textassistent und Engagement-Analysen."
        },
        {
          num: "10",
          title: "Fitness & Gesundheitstracker",
          desc: "Mobile Wellness-App mit Workout-Protokollierung, Ernährungs-Tracking und Fortschrittsvisualisierung."
        },
        {
          num: "11",
          title: "Smart Home IoT Steuerungszentrale",
          desc: "IoT-Geräteverwaltung mit Live-Telemetrieüberwachung, automatisierten Regeln und Fernsteuerung."
        }
      ]
    },
    experience: {
      label: "Mein Weg",
      title: "Ausbildung & Erfahrung",
      education: "Ausbildung",
      experience: "Erfahrung",
      eduItems: [
        {
          date: "2023 – 2025",
          title: "Marokkanisches Höheres Technikerzertifikat (BTS)",
          subtitle: "Spezialisierung: Multimedia, Webdesign und Webentwicklung",
          location: "Taza, Marokko"
        },
        {
          date: "2022 – 2023",
          title: "Bachelor-Studium der Mathematik und Physik",
          subtitle: "Fakultät für Wissenschaften Dhar El Mahraz",
          location: "Fez, Marokko"
        },
        {
          date: "2021 – 2022",
          title: "Marokkanisches Abitur (Äquivalent) in Physik",
          subtitle: "Internationale Option — Moulay Driss Gymnasium",
          location: "Fez, Marokko"
        }
      ],
      expItems: [
        {
          date: "2025 – 2026",
          title: "Webentwicklerin",
          subtitle: "New Dev",
          location: "Fez, Marokko"
        },
        {
          date: "2024 – 2025",
          title: "Praktikum in Webentwicklung",
          subtitle: "New Dev",
          location: "Fez, Marokko"
        },
        {
          date: "2023 – 2024",
          title: "Praktikum in Grafikdesign",
          subtitle: "New Dev",
          location: "Fez, Marokko"
        },
        {
          date: "2022 – 2023",
          title: "Backoffice-Mitarbeiterin",
          subtitle: "ChiCall",
          location: "Fez, Marokko"
        }
      ]
    },
    contact: {
      connect: "Lass uns\nvernetzen",
      desc: "Ich bin offen für Kooperationen und Gespräche. Melde dich gerne über das Formular oder die sozialen Netzwerke.",
      email: "E-Mail",
      linkedin: "LinkedIn",
      github: "GitHub",
      formTitle: "Schreib mir eine Nachricht",
      name: "Name",
      emailLabel: "E-Mail",
      message: "Deine Nachricht",
      sending: "Wird gesendet...",
      sendBtn: "Nachricht senden",
      success: "Vielen Dank! Deine Nachricht wurde erfolgreich gesendet. ♡"
    }
  },
  fr: {
    nav: ["À Propos", "Compétences", "Projets", "Expérience", "Contact"],
    hero: {
      tag: "Disponible pour travailler",
      role: "Développeuse Web & Designer Graphique",
      desc: "Créer des expériences numériques audacieuses et modernes qui allient code propre et design intentionnel. Chaque pixel placé avec but.",
      resume: "Télécharger le CV ↓",
      contact: "Contactez-moi →",
      scroll: "Faites défiler pour explorer"
    },
    about: {
      label: "À Propos de Moi",
      title: "Transformer les\nidées en réalité",
      desc1: "Je transforme les idées en expériences numériques fiables et conviviales que les gens aiment vraiment utiliser.",
      desc2: "Passionnée de développement web et de design, je crée des sites web modernes, responsives et visuellement captivants qui allient fonctionnalité et créativité.",
      desc3: "Je crois que les grands produits numériques sont construits sur un code propre, une UX réfléchie et une attention méticuleuse aux détails — sur chaque appareil, chaque écran.",
      stats: ["Années d'expérience", "Projets Réalisés", "Clients Satisfaits", "Dévouement"],
      role: "Dév Web & Designer",
      hello: "Bonjour le monde!"
    },
    skills: {
      label: "Expertise",
      title: "Compétences & Outils",
      frontend: {
        tag: "DÉVELOPPEMENT FRONTEND ✦",
        title: "Dév Frontend",
        desc: "Création d'interfaces utilisateur interactives et de mises en page web réactives."
      },
      backend: {
        tag: "BACKEND & BASES DE DONNÉES ✦",
        title: "Backend & BD",
        desc: "Développement de systèmes côté serveur robustes et gestion de solutions de bases de données."
      },
      programming: {
        tag: "LANGAGES PRINCIPAUX ✦",
        title: "Langages de Prog",
        desc: "Écriture d'une logique logicielle propre, efficace et structurée."
      },
      databases: {
        tag: "STOCKAGE ✦",
        title: "Bases de Données",
        desc: "Conception et gestion de bases de données relationnelles et non relationnelles."
      },
      tools: {
        tag: "WORKFLOW & CRÉATIVITÉ ✦",
        title: "Outils & Design",
        desc: "Conception de mises en page, flux de travail de style et gestion du contrôle de source."
      },
      footer: "✦ ...et j'en apprends toujours plus ▽ ✦"
    },
    projects: {
      label: "Portfolio",
      title: "Projets Phares",
      featured: "Vedette",
      view: "Voir le Projet",
      visitSite: "Ouvrir le site",
      items: [
        {
          num: "01",
          title: "Findmich - Application de Réseau Professionnel",
          desc: "Application de communication reliant des professionnels qualifiés avec messagerie en temps réel.",
          fullDesc: "FindMich est une application de communication polyvalente conçue pour connecter des professionnels qualifiés dans divers domaines. Qu'il s'agisse d'un médecin cherchant un mécanicien ou d'un enseignant cherchant un plombier, FindMich offre une ligne directe avec les experts. Conçue avec React Native pour une expérience mobile fluide et propulsée par un backend NestJS avec WebSockets et MongoDB, l'application permet la messagerie en temps réel et des notifications instantanées.",
          skills: ["React Native", "NestJS", "WebSockets", "MongoDB"],
          image: "/findmich.png"
        },
        {
          num: "02",
          title: "Ciervo Cars – Site de Location de Voitures de Luxe & Concierge",
          desc: "Plateforme premium de location de voitures de luxe avec navigation élégante et parcours de réservation fluides.",
          fullDesc: "Ciervo Cars est une plateforme web premium dédiée à la location de voitures de luxe et au service concierge. Le site permet d'explorer les véhicules par catégorie, notamment Luxe, Sport, Électrique/Hybride et SUV, tout en offrant des services comme les essais routiers, les réservations d'atelier, les contrôles pré-ITV, les véhicules certifiés, le financement et les plans de maintenance. Construit avec Next.js et GSAP, l'expérience associe animation élégante, forte identité visuelle et UX orientée conversion pour un rendu luxueux et responsive sur tous les appareils.",
          skills: ["Next.js", "GSAP", "Responsive UI", "Luxury Branding", "Conversion UX"],
          image: "https://ciervo-cars.vercel.app/_next/image?url=%2Fimages%2Fplacement%2Fplacement.webp&w=828&q=75",
          link: "https://ciervo-cars.vercel.app/"
        },
        {
          num: "03",
          title: "Denvel — Site E-Commerce",
          desc: "Plateforme e-commerce moderne et responsive pour une marque marocaine d'électroménager avec catalogue, filtres et fiches produits détaillées.",
          fullDesc: "Denvel — Site E-Commerce est une plateforme e-commerce moderne et responsive développée pour Denvel, une marque marocaine d'électroménager. Le site propose un catalogue numérique complet pour découvrir et explorer une large gamme d'appareils ménagers, notamment des téléviseurs, réfrigérateurs, machines à laver, appareils de cuisson, climatiseurs et petits appareils. La plateforme inclut une navigation par catégories, des pages produits détaillées, des spécifications techniques, une recherche et des filtres, ainsi que des mises en page responsives optimisées pour différents écrans. En tant que développeuse full-stack, j'étais responsable du développement du site, de l'implémentation des interfaces front-end, de la construction de l'architecture back-end, de l'intégration des données produits et de la création de composants réutilisables pour gérer les différentes catégories et spécifications. Technologies : Symfony, PHP, Twig, JavaScript, HTML5, CSS3, MySQL. Les fonctionnalités clés incluent une interface moderne et responsive, un catalogue de produits et catégories, des pages de détail produit, des spécifications techniques, la recherche et le filtrage, des composants UI réutilisables, la gestion dynamique de contenu, le développement back-end avec Symfony, l'intégration base de données avec MySQL et l'optimisation mobile, tablette et desktop.",
          skills: ["Symfony", "PHP", "Twig", "JavaScript", "HTML5", "CSS3", "MySQL"],
          image: "/planet_ecommerce.png"
        },
        {
          num: "04",
          title: "Site Portfolio",
          desc: "Portfolio développeur interactif avec animations cartoon dynamiques et support multilingue."
        },
        {
          num: "05",
          title: "Gestionnaire de Tâches",
          desc: "Une application de productivité collaborative avec tableaux kanban drag-and-drop et analyses."
        },
        {
          num: "06",
          title: "ERP Business Dashboard",
          desc: "Tableau de bord ERP moderne pour gérer immobilier, ventes, finances, RH, logistique et administration dans une seule plateforme.",
          fullDesc: "Ce projet est un tableau de bord ERP moderne conçu pour gérer l'immobilier, les ventes, les finances, les ressources humaines, la logistique et l'administration dans une seule plateforme. Il inclut le suivi des KPI, l'analyse financière, la gestion de projets, la gestion des clients et des biens immobiliers, les workflows d'approvisionnement et les paramètres administratifs, le tout présenté dans une interface d'administration propre et responsive. Technologies utilisées : React, TypeScript, Vite, Tailwind CSS, React Router, Recharts, Zustand et bibliothèques UI modernes. Conçu avec React, TypeScript, Tailwind CSS, React Router, Recharts et Zustand.",
          skills: ["React", "TypeScript", "Tailwind CSS", "React Router", "Recharts", "Zustand"],
          image: "/planet_saturn_final_v10.png"
        },
        {
          num: "07",
          title: "Réservation d'Hôtel",
          desc: "Une application de réservation premium avec filtres de recherche, calendrier et facturation."
        },
        {
          num: "08",
          title: "Automotive AI SaaS Landing Page",
          desc: "Landing page SaaS moderne pour une plateforme d'IA dédiée à l'optimisation des opérations automotive et industriel.",
          fullDesc: "Mon rôle : Front end developer. Description du projet : Développement d'une landing page SaaS moderne pour une plateforme d'IA dédiée à la synchronisation opérationnelle dans le secteur automobile et manufacturier. La plateforme améliore les opérations en temps réel, réduit les erreurs répétées et aligne la communication entre les équipes. Le site inclut une section hero, des partenaires de confiance, les défis industriels de 2026, la répartition de l'écosystème (Operations, Alignment, Transparency, Context), une proposition de valeur, une section équipe et un formulaire de contact pour les leads enterprise. Le design met l'accent sur la clarté, la confiance et le positionnement premium B2B. Lien : https://www.bridgyn.com/ Skills et livrables : Next.js, GSAP, Tailwind CSS.",
          skills: ["Next.js", "GSAP", "Tailwind CSS"],
          image: "/planet_ai.png",
          link: "https://www.bridgyn.com/"
        },
        {
          num: "09",
          title: "Gestionnaire Social Media",
          desc: "Outil de planification de contenu multi-canal avec assistance IA et métriques d'engagement."
        },
        {
          num: "10",
          title: "Suivi Fitness & Santé",
          desc: "Application mobile de bien-être avec suivi des entraînements, nutrition et statistiques."
        },
        {
          num: "11",
          title: "Hub IoT Maison Connectée",
          desc: "Suite de gestion d'équipements IoT avec télémétrie en direct, automatisation et contrôle à distance."
        }
      ]
    },
    experience: {
      label: "Mon Parcours",
      title: "Éducation & Expérience",
      education: "Éducation",
      experience: "Expérience",
      eduItems: [
        {
          date: "2023 – 2025",
          title: "Brevet de Technicien Supérieur Marocain (BTS)",
          subtitle: "Spécialisation : Multimédia, Web Design et Développement Web",
          location: "Taza, Maroc"
        },
        {
          date: "2022 – 2023",
          title: "Études de Licence en Mathématiques et Physique",
          subtitle: "Faculté des Sciences Dhar El Mahraz",
          location: "Fès, Maroc"
        },
        {
          date: "2021 – 2022",
          title: "Baccalauréat Marocain (Équivalent) en Sciences Physiques",
          subtitle: "Option Internationale — Lycée Moulay Driss",
          location: "Fès, Maroc"
        }
      ],
      expItems: [
        {
          date: "2025 – 2026",
          title: "Développeuse Web",
          subtitle: "New Dev",
          location: "Fès, Maroc"
        },
        {
          date: "2024 – 2025",
          title: "Stage en Développement Web",
          subtitle: "New Dev",
          location: "Fès, Maroc"
        },
        {
          date: "2023 – 2024",
          title: "Stage en Design Graphique",
          subtitle: "New Dev",
          location: "Fès, Maroc"
        },
        {
          date: "2022 – 2023",
          title: "Agent Backoffice",
          subtitle: "ChiCall",
          location: "Fès, Maroc"
        }
      ]
    },
    contact: {
      connect: "Connectons-\nnous",
      desc: "Je suis ouverte aux collaborations et discussions. N'hésitez pas à me contacter via le formulaire ou les liens sociaux.",
      email: "E-mail",
      linkedin: "LinkedIn",
      github: "GitHub",
      formTitle: "Envoyez-moi un message",
      name: "Nom",
      emailLabel: "E-mail",
      message: "Votre message",
      sending: "Envoi en cours...",
      sendBtn: "Envoyer le Message",
      success: "Merci ! Votre message a été envoyé avec succès. ♡"
    }
  }
};

const SkillIcon = ({ name, className }: { name: string; className?: string }) => {
  switch (name) {
    case "Figma":
      return (
        <svg className={className} viewBox="0 0 100 150" fill="currentColor">
          <path d="M25 0a25 25 0 0 0 0 50h25V0H25z" />
          <path d="M75 25a25 25 0 1 0-25-25v50a25 25 0 0 0 25-25z" />
          <path d="M25 50a25 25 0 0 0 0 50h25V50H25z" />
          <path d="M50 100a25 25 0 1 0 25-25H50v25z" />
          <path d="M25 100a25 25 0 0 0-25 25c0 13.8 11.2 25 25 25s25-11.2 25-25v-25H25z" />
        </svg>
      );
    case "Photoshop":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="2" width="20" height="20" rx="3" />
          <text x="5" y="15" fill="currentColor" fontSize="10" fontWeight="bold" fontFamily="system-ui">P</text>
          <text x="12" y="17" fill="currentColor" fontSize="8" fontWeight="bold" fontFamily="system-ui">s</text>
        </svg>
      );
    case "Illustrator":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="2" width="20" height="20" rx="3" />
          <text x="4" y="15" fill="currentColor" fontSize="10" fontWeight="bold" fontFamily="system-ui">A</text>
          <text x="13" y="17" fill="currentColor" fontSize="8" fontWeight="bold" fontFamily="system-ui">i</text>
        </svg>
      );
    case "Canva":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path d="M14.5 9c-.5-.7-1.3-1-2.2-1-2 0-3.5 1.5-3.5 3.5s1.5 3.5 3.5 3.5c1 0 1.8-.4 2.2-1l-1-.7c-.3.4-.7.6-1.2.6-1.1 0-2-.8-2-2.4s.9-2.4 2-2.4c.5 0 .9.2 1.2.6l1-.6z" />
        </svg>
      );
    case "C":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 8.5-4.8l-2.5-1.5A7 7 0 1 1 12 5a7 7 0 0 1 6 3.4l2.5-1.5A10 10 0 0 0 12 2z" />
        </svg>
      );
    case "C++":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M9 5a7 7 0 1 0 0 14 7 7 0 0 0 7-5.5l-2.4-.6A4.5 4.5 0 1 1 9 7.5c1.8 0 3.2 1 4 2.5l2.4-.8A7 7 0 0 0 9 5z" />
          <path d="M17 11h-2V9h-1v2h-2v1h2v2h1v-2h2v-1z" />
          <path d="M23 11h-2V9h-1v2h-2v1h2v2h1v-2h2v-1z" />
        </svg>
      );
    case "SQL":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <ellipse cx="12" cy="5" rx="8" ry="3" />
          <path d="M4 5v5c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
          <path d="M4 10v5c0 1.66 3.58 3 8 3s8-1.34 8-3v-5" />
          <path d="M4 15v4c0 1.66 3.58 3 8 3s8-1.34 8-3v-4" />
        </svg>
      );
    case "JavaScript":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <rect width="24" height="24" rx="3" />
          <path d="M19.9 14.8c-.3-.8-.9-1.4-1.9-1.7-1.1-.3-1.6-.7-1.6-1.3 0-.5.4-.9 1.1-.9.8 0 1.2.3 1.5.9l1.7-1c-.5-1-1.4-1.7-2.9-1.7-2 0-3.3 1.1-3.3 2.8 0 1.8 1.1 2.5 2.8 2.9 1.2.3 1.6.7 1.6 1.3 0 .7-.6 1.1-1.5 1.1-.9 0-1.6-.4-2.1-1.2l-1.6 1c.7 1.3 2 2 3.5 2 2.2 0 3.8-1.1 3.8-3.2zm-9.3-5.3H8.3v6.3c0 .9-.5 1.4-1.4 1.4-.7 0-1.1-.4-1.1-1.1H3.6c0 1.9 1.2 3.1 3.3 3.1 2.2 0 3.7-1.1 3.7-3.4V9.5z" fill="var(--bg2)" />
        </svg>
      );
    case "PHP":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <ellipse cx="12" cy="12" rx="10" ry="6" />
          <path d="M6.5 14.5V9.5h2c.8 0 1.3.4 1.3 1s-.5 1-1.3 1H7.8v3h-1.3zm1.3-3.8h.7c.3 0 .5-.1.5-.4s-.2-.4-.5-.4h-.7v.8zm6.7 3.8V9.5h2c.8 0 1.3.4 1.3 1s-.5 1-1.3 1h-1v3H14.5zm1.3-3.8h.7c.3 0 .5-.1.5-.4s-.2-.4-.5-.4h-.7v.8zm-5.8 3.8V11.2h.8V9.5h-.8v-.8c0-.6.4-.8.8-.8.3 0 .5.1.6.2l.3-.8c-.3-.2-.7-.3-1.1-.3-.9 0-1.6.6-1.6 1.7v1H9.8v1.7h.8v3.3h1.3z" fill="var(--bg2)" />
        </svg>
      );
    case "Python":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.9 2c-2.7 0-2.5 1.2-2.5 1.2v1.9h5.1V6.9h-7s-1.8.2-1.8 2.5 1.5 2.5 1.5 2.5h.9V10c0-.8.6-1.5 1.5-1.5h4.1c1 0 1.7-.8 1.7-1.7V4.3s0-2.3-3.5-2.3zm2.2 4.3a.6.6 0 1 1 0-1.2.6.6 0 0 1 0 1.2z" />
          <path d="M12.1 22c2.7 0 2.5-1.2 2.5-1.2v-1.9H9.5v-1.8h7s1.8-.2 1.8-2.5-1.5-2.5-1.5-2.5h-.9v1.9c0 .8-.6 1.5-1.5 1.5H10c-1 0-1.7.8-1.7 1.7v2.5s0 2.3 3.5 2.3zm-2.2-4.3a.6.6 0 1 1 0 1.2.6.6 0 0 1 0-1.2z" />
        </svg>
      );
    case "MySQL":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.1 2c-1.3.1-2.9.7-4.1 1.6-1.2.9-2.1 2.3-2.5 3.7-.4 1.4-.4 3 0 4.4.4 1.4 1.2 2.7 2.4 3.7.8.6 1.7.9 2.7.9.6 0 1.1-.1 1.6-.3-.6.5-1.3.8-2.1.8-1.1 0-2.1-.5-2.8-1.3-.7-.8-1.1-1.9-1.1-3 0-1.1.4-2.2 1.1-3 .7-.8 1.7-1.3 2.8-1.3.6 0 1.1.1 1.6.3.3-1 .8-1.8 1.6-2.5C14.7 2.4 13.5 2 12.1 2z" />
        </svg>
      );
    case "MongoDB":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 1.5c-.3 0-.5.2-.6.4C10.1 5.3 7 10 7 13.5c0 2.8 2.2 5 5 5s5-2.2 5-5c0-3.5-3.1-8.2-4.4-11.6-.1-.2-.3-.4-.6-.4zM12 4c.8 2.4 2.5 5.8 2.5 9.5 0 1.4-1.1 2.5-2.5 2.5S9.5 14.9 9.5 13.5C9.5 9.8 11.2 6.4 12 4z" />
        </svg>
      );
    case "PostgreSQL":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm6.2 8.8c-.3.8-.8 1.5-1.5 2a3.8 3.8 0 0 1-2 .7h-.8V12h.8c.4 0 .8-.2 1-.5.3-.3.4-.7.4-1.1V9.6a1 1 0 0 0-1-1h-.7c-.8 0-1.6.4-2.1 1a2.8 2.8 0 0 0-.7 2l.3 2.1c.1.5-.1 1-.4 1.3-.3.3-.8.5-1.3.5H9.6c-.5 0-1-.2-1.3-.5a1.8 1.8 0 0 1-.4-1.3v-2.3c0-.8.4-1.6 1-2.1.6-.5 1.4-.7 2.2-.7h1.6c1.1 0 2.2.4 3 1.2.8.8 1.2 1.9 1.2 3.1v1.1z" />
        </svg>
      );
    case "MariaDB":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm6 10c-.5.8-1.2 1.5-2.2 1.8A4.8 4.8 0 0 1 12 13h-.8v-1.5h.8c.6 0 1-.2 1.3-.6.2-.3.3-.8.2-1.2V9a1 1 0 0 0-1-1H11c-.8 0-1.5.4-1.8.9l-.3 1.8c-.1.5.1.9.4 1.2s.8.4 1.3.4h1v1.5h-1c-1 0-1.8-.4-2.3-1.1s-.6-1.6-.4-2.5l.3-1.8A2.8 2.8 0 0 1 11.6 6h1.6c1.1 0 2.1.4 2.8 1.1s1 1.7 1 2.8v1.5z" />
        </svg>
      );
    case "Git":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.2 11.2L12.8.8c-.8-.8-2-.8-2.8 0L.8 10.8c-.8.8-.8 2 0 2.8l10.4 10.4c.8.8 2 .8 2.8 0l9.2-9.2c.8-.8.8-2 0-2.8zM19 13.5c-.2.7-.8 1.2-1.5 1.4v2.2c.5.2.8.7.8 1.3 0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5c0-.6.3-1.1.8-1.3v-2.2c-.7-.2-1.2-.8-1.4-1.5h-2.2c-.2.5-.7.8-1.3.8-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5c.6 0 1.1.3 1.3.8h2.2c.2-.7.8-1.2 1.5-1.4V8.7c-.5-.2-.8-.7-.8-1.3 0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5c0 .6-.3 1.1-.8 1.3v2.2c.7.2 1.2.8 1.4 1.5H19z" />
        </svg>
      );
    case "GitHub":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
        </svg>
      );
    case "WordPress":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18.2A8.2 8.2 0 0 1 6 15l2.6-7.5L11 15l2.4-7.5L16 15a8.2 8.2 0 0 1-4 3.2z" />
        </svg>
      );
    case "Laragon":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm8 14.3l-8 4-8-4V8.7l8-4 8 4v7.6z" />
          <path d="M9 8v6h6v-2h-4V8H9z" />
        </svg>
      );
    case "HTML":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M1.5 0h21l-1.9 21.2L12 24 3.4 21.2z" />
          <path d="M12 2.2V21.8l6.8-1.9 1.6-17.7z" fill="var(--bg2)" />
          <path d="M12 9.6H8.5l-.2-2.7h3.7V4.7H5.4l.7 8.2h5.9zm0 5.6l-3.1-.8-.2-2.2H5.9l.4 4.8 5.7 1.6z" fill="currentColor" />
          <path d="M12 9.6h3.5l-.3 3.7-3.2.9v2.8l5.7-1.6.8-8.8H12z" fill="var(--bg2)" />
        </svg>
      );
    case "CSS":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M1.5 0h21l-1.9 21.2L12 24 3.4 21.2z" />
          <path d="M12 2.2V21.8l6.8-1.9 1.6-17.7z" fill="var(--bg2)" />
          <path d="M12 9.6H8.5l-.2-2.7h3.7V4.7H5.4l.7 8.2h5.9zm0 5.6l-3.1-.8-.2-2.2H5.9l.4 4.8 5.7 1.6z" fill="currentColor" />
          <path d="M12 9.6h3.5l-.3 3.7-3.2.9v2.8l5.7-1.6.8-8.8H12z" fill="var(--bg2)" />
        </svg>
      );
    case "React":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
          <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(30 12 12)" />
          <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(90 12 12)" />
          <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(150 12 12)" />
          <circle cx="12" cy="12" r="1.8" fill="currentColor" />
        </svg>
      );
    case "Next.js":
      return (
        <svg className={className} viewBox="0 0 128 128" fill="none" stroke="currentColor">
          <circle cx="64" cy="64" r="62" strokeWidth="4" />
          <path d="M100.5 100.5L46.2 32H36v64h10.4V46.6l49.5 61.8c1.5-1.1 3-2.3 4.6-3.5z" fill="currentColor" />
          <path d="M92 32h10v64H92z" fill="currentColor" />
        </svg>
      );
    case "Node.js":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L4 6.5v9L12 20l8-4.5v-9L12 2zM9 13.5v-3l3-1.7 3 1.7v3l-3 1.7-3-1.7z" />
        </svg>
      );
    case "Laravel":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 3v18M12 3l-8 4v10l8 4 8-4V7l-8-4z" />
          <path d="M12 12l-8-4M12 12l8-4M12 12v9" />
        </svg>
      );
    default:
      return null;
  }
};

const CodingCartoon = ({ lang }: { lang: "en" | "de" | "fr" }) => {
  return (
    <div className="cartoon-wrapper" style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden' }}>
      <svg viewBox="0 0 400 400" className="cartoon-svg" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="bgGlow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.25" />
            <stop offset="100%" stopColor="var(--bg)" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="screenGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--accent-hi)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="pendantGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ec4899" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
        </defs>

        <circle cx="200" cy="200" r="180" fill="url(#bgGlow)" />

        <g className="hair-back">
          <path d="M 120,220 C 100,200 90,160 110,130 C 130,100 170,90 200,90 C 230,90 270,100 290,130 C 310,160 300,200 280,220" fill="#4d3221" />
          <circle cx="115" cy="180" r="28" fill="#4d3221" />
          <circle cx="125" cy="220" r="25" fill="#4d3221" />
          <circle cx="285" cy="180" r="28" fill="#4d3221" />
          <circle cx="275" cy="220" r="25" fill="#4d3221" />
          <circle cx="105" cy="150" r="24" fill="#362216" />
          <circle cx="295" cy="150" r="24" fill="#362216" />
        </g>

        <path d="M 110,360 C 110,290 150,270 200,270 C 250,270 290,290 290,360" fill="#18181b" stroke="#27272a" strokeWidth="2" />
        <rect x="175" y="240" width="50" height="35" rx="6" fill="#121214" stroke="#27272a" strokeWidth="1" />

        <path d="M 180,255 C 180,285 220,285 220,255" fill="none" stroke="#d4d4d8" strokeWidth="1.5" />
        <g transform="translate(197, 280)">
          <circle cx="3" cy="3" r="3" fill="url(#pendantGrad)" />
          <rect x="2" y="5" width="2" height="7" rx="0.5" fill="url(#pendantGrad)" />
          <rect x="0" y="8" width="6" height="2" rx="0.5" fill="url(#pendantGrad)" />
        </g>

        <rect x="180" y="200" width="40" height="45" rx="2" fill="#ffd0b7" />
        <path d="M 180,240 C 180,240 200,248 220,240" fill="none" stroke="#e0a384" strokeWidth="1.5" />

        <rect x="160" y="130" width="80" height="85" rx="40" fill="#ffd0b7" />

        <circle cx="178" cy="182" r="7" fill="#fb7185" fillOpacity="0.4" />
        <circle cx="222" cy="182" r="7" fill="#fb7185" fillOpacity="0.4" />

        <g className="eyes">
          <ellipse cx="182" cy="168" rx="4" ry="4" fill="#382115" className="eye-left" />
          <ellipse cx="218" cy="168" rx="4" ry="4" fill="#382115" className="eye-right" />
          <path d="M 175,160 C 180,157 187,159 190,162" fill="none" stroke="#4d3221" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M 225,160 C 220,157 213,159 210,162" fill="none" stroke="#4d3221" strokeWidth="2.5" strokeLinecap="round" />
        </g>

        <path d="M 190,188 Q 200,198 210,188" fill="none" stroke="#382115" strokeWidth="3.5" strokeLinecap="round" />

        <g className="hair-front">
          <path d="M 155,130 Q 200,105 245,130 Q 260,155 255,185 Q 240,160 220,162 Q 200,140 180,162 Q 160,160 145,185 Q 140,155 155,130 Z" fill="#5c3f2d" />
          <path d="M 145,180 Q 135,210 148,230 Q 155,215 152,195 Z" fill="#5c3f2d" />
          <path d="M 255,180 Q 265,210 252,230 Q 245,215 248,195 Z" fill="#5c3f2d" />
          <path d="M 170,125 Q 200,113 230,125" fill="none" stroke="#a77c5d" strokeWidth="3" strokeLinecap="round" />
          <path d="M 150,150 Q 160,180 155,200" fill="none" stroke="#a77c5d" strokeWidth="2" strokeLinecap="round" />
          <path d="M 250,150 Q 240,180 245,200" fill="none" stroke="#a77c5d" strokeWidth="2" strokeLinecap="round" />
        </g>

        <g className="arm-left">
          <path d="M 125,320 Q 90,320 85,355" fill="none" stroke="#18181b" strokeWidth="16" strokeLinecap="round" />
          <circle cx="85" cy="355" r="7" fill="#ffd0b7" className="typing-hand" />
        </g>

        <g className="workspace">
          <rect x="30" y="365" width="340" height="35" rx="4" fill="#130f1e" stroke="var(--border)" strokeWidth="1.5" />

          <rect x="100" y="355" width="110" height="7" rx="2" fill="#2d2744" stroke="#443c68" strokeWidth="1" />
          <path d="M 110,355 L 122,295 L 202,295 L 198,355 Z" fill="#1c1730" stroke="#443c68" strokeWidth="1.5" />
          <path d="M 113,352 L 124,299 L 199,299 L 195,352 Z" fill="#0c0a15" />

          <polygon points="113,352 40,395 270,395 195,352" fill="url(#screenGlow)" className="laptop-glow" />

          <rect x="135" y="307" width="22" height="3" rx="1.5" fill="#a855f7" />
          <rect x="135" y="315" width="35" height="3" rx="1.5" fill="#ec4899" />
          <rect x="135" y="323" width="15" height="3" rx="1.5" fill="#3b82f6" />
          <rect x="160" y="307" width="15" height="3" rx="1.5" fill="#10b981" />
          <rect x="135" y="331" width="40" height="3" rx="1.5" fill="#eab308" />
          <circle cx="140" cy="342" r="2" fill="#ef4444" />
          <circle cx="146" cy="342" r="2" fill="#eab308" />
          <circle cx="152" cy="342" r="2" fill="#22c55e" />
        </g>

        <g className="waving-arm-group">
          <path d="M 275,320 C 300,290 310,230 280,185" fill="none" stroke="#18181b" strokeWidth="18" strokeLinecap="round" />
          <path d="M 275,320 C 300,290 310,230 280,185" fill="none" stroke="#27272a" strokeWidth="16" strokeLinecap="round" />
          <circle cx="278" cy="174" r="11" fill="#ffd0b7" />
          <path d="M 267,168 C 262,154 270,146 273,163" fill="none" stroke="#ffd0b7" strokeWidth="3" strokeLinecap="round" />
          <path d="M 273,163 C 272,150 280,142 281,161" fill="none" stroke="#ffd0b7" strokeWidth="3" strokeLinecap="round" />
          <path d="M 281,161 C 283,150 291,145 289,163" fill="none" stroke="#ffd0b7" strokeWidth="3" strokeLinecap="round" />
          <path d="M 289,163 C 293,153 301,151 295,168" fill="none" stroke="#ffd0b7" strokeWidth="3" strokeLinecap="round" />
          <path d="M 267,175 C 258,172 258,181 268,181" fill="none" stroke="#ffd0b7" strokeWidth="3" strokeLinecap="round" />
        </g>
      </svg>

      <div className="cartoon-html-glow" />

      <div className="cartoon-speech-bubble">
        <span>{lang === "de" ? "Hallo Welt!" : lang === "fr" ? "Bonjour le monde!" : "Hello, World!"}</span>
        <span className="waving-hand-emoji">👋</span>
      </div>

      <div className="floating-code code-t1">&lt;div&gt;</div>
      <div className="floating-code code-t2">const dev = () =&gt;</div>
      <div className="floating-code code-t3">import React</div>
      <div className="floating-code code-t4">&lt;App /&gt;</div>
      <div className="floating-code code-t5">{`{/* malak */}`}</div>
    </div>
  );
};

const PROJECT_PLANETS = [
  {
    img: "/planet_saturn_final_v10.png",
    glow: "planet-glow-purple",
    texture: "radial-gradient(circle at 30% 28%, rgba(255,255,255,0.98) 0%, rgba(251,191,36,0.9) 10%, rgba(249,115,22,0.96) 22%, rgba(120,53,15,0.9) 48%, rgba(15,23,42,1) 100%)"
  },
  {
    img: "/planet_saturn_final_v10.png",
    glow: "planet-glow-purple",
    texture: "radial-gradient(circle at 32% 30%, rgba(255,255,255,0.98) 0%, rgba(191,219,254,0.85) 12%, rgba(59,130,246,0.95) 20%, rgba(37,99,235,0.9) 42%, rgba(15,23,42,1) 100%)"
  },
  {
    glow: "planet-glow-purple",
    texture: "radial-gradient(circle at 32% 30%, rgba(255,255,255,0.98) 0%, rgba(253,186,116,0.9) 10%, rgba(251,146,60,0.95) 18%, rgba(180,83,9,0.75) 42%, rgba(15,23,42,1) 100%)"
  },
  {
    glow: "planet-glow-purple",
    texture: "radial-gradient(circle at 32% 28%, rgba(255,255,255,0.98) 0%, rgba(153,246,228,0.9) 12%, rgba(45,212,191,0.96) 28%, rgba(13,148,136,0.85) 50%, rgba(15,23,42,1) 100%)"
  },
  {
    glow: "planet-glow-purple",
    texture: "radial-gradient(circle at 35% 26%, rgba(255,255,255,0.98) 0%, rgba(125,211,252,0.9) 8%, rgba(59,130,246,0.96) 28%, rgba(30,64,175,0.9) 48%, rgba(15,23,42,1) 100%)"
  },
  {
    glow: "planet-glow-purple",
    texture: "radial-gradient(circle at 35% 30%, rgba(255,255,255,0.98) 0%, rgba(251,113,133,0.9) 12%, rgba(236,72,153,0.96) 28%, rgba(192,132,252,0.92) 52%, rgba(88,28,135,1) 100%)"
  }
];

const getPlanetData = (idx: number) => {
  return PROJECT_PLANETS[idx % PROJECT_PLANETS.length];
};

const getPlanetBackground = (planet: { img?: string; texture?: string }) => {
  if (planet.img) {
    return `url("${planet.img}") center / cover no-repeat`;
  }

  return `${planet.texture ?? "radial-gradient(circle at 35% 30%, rgba(255,255,255,0.9) 0%, rgba(96,165,250,0.85) 12%, rgba(30,64,175,0.9) 32%, rgba(15,23,42,1) 100%)"} center / cover no-repeat`;
};

export default function Home() {
  const fullName = "Malak Metouagui";
  const [typed, setTyped] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(true);
  const heroRef = useRef(null);

  const [submitting, setSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{ success: boolean; message: string } | null>(null);

  const [lang, setLang] = useState<"en" | "de" | "fr">("en");
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const t = TRANSLATIONS[lang];

  const [stars, setStars] = useState<{ id: number; top: string; left: string; size: number; delay: number; duration: number }[]>([]);
  const [activeProject, setActiveProject] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProject, setModalProject] = useState<number | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setLangOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const generatedStars = Array.from({ length: 35 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 2.5 + 1.2,
      delay: Math.random() * -20,
      duration: Math.random() * 20 + 20,
    }));
    setStars(generatedStars);
  }, []);

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setSubmitting(true);
    setSubmitResult(null);

    const formData = new FormData(form);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await response.json();
      if (data.success) {
        setSubmitResult({ success: true, message: TRANSLATIONS[lang].contact.success });
        form.reset();
      } else {
        setSubmitResult({
          success: false,
          message: data.message || (lang === "de" ? "Fehler beim Senden der Nachricht. Bitte versuche es erneut." : lang === "fr" ? "Échec de l'envoi du message. Veuillez réessayer." : "Failed to send message. Please try again.")
        });
      }
    } catch (err) {
      console.error("Contact form error:", err);
      setSubmitResult({
        success: false,
        message: lang === "de" ? "Netzwerkfehler oder Verbindung verloren. Bitte versuche es erneut." : lang === "fr" ? "Erreur réseau ou connexion perdue. Veuillez réessayer." : "Network error or connection lost. Please try again."
      });
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTyped(fullName.slice(0, i));
      i++;
      if (i > fullName.length) clearInterval(interval);
    }, 80);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={dark ? "theme-dark" : "theme-light"}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        /* ── DARK THEME ── */
        .theme-dark {
          --bg:        #0a0812;
          --bg2:       #130f1e;
          --bg3:       #1c1730;
          --border:    #2e2848;
          --text:      #f0eef8;
          --muted:     #8880aa;
          --accent:    #a855f7;
          --accent-hi: #c084fc;
          --accent-lo: rgba(168,85,247,0.15);
          --accent-glow: rgba(168,85,247,0.25);
          --card-bg:   #130f1e;
          --nav-blur:  rgba(10,8,18,0.85);
          --font-display: 'Syne', sans-serif;
          --font-body:    'DM Sans', sans-serif;
        }

        /* ── LIGHT THEME ── */
        .theme-light {
          --bg:        #faf8ff;
          --bg2:       #f2eeff;
          --bg3:       #e9e2ff;
          --border:    #d4c8f7;
          --text:      #1a1030;
          --muted:     #6b5f88;
          --accent:    #7c3aed;
          --accent-hi: #9f5cf7;
          --accent-lo: rgba(124,58,237,0.1);
          --accent-glow: rgba(124,58,237,0.2);
          --card-bg:   #ffffff;
          --nav-blur:  rgba(250,248,255,0.88);
          --font-display: 'Syne', sans-serif;
          --font-body:    'DM Sans', sans-serif;
        }

        html { scroll-behavior: smooth; }

        .theme-dark, .theme-light {
          background: var(--bg);
          color: var(--text);
          font-family: var(--font-body);
          min-height: 100vh;
          overflow-x: hidden;
          transition: background 0.4s ease, color 0.4s ease;
        }

        ::selection { background: var(--accent); color: #fff; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: var(--bg); }
        ::-webkit-scrollbar-thumb { background: var(--accent); border-radius: 2px; }

        /* ── NAV ── */
        .nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          padding: 20px 48px;
          display: flex; justify-content: space-between; align-items: center;
          transition: all 0.4s ease;
        }
        .nav.scrolled {
          background: var(--nav-blur);
          backdrop-filter: blur(20px);
          padding: 14px 48px;
          border-bottom: 1px solid var(--border);
        }
        .nav-logo {
          font-family: var(--font-display); font-size: 22px; font-weight: 800;
          letter-spacing: -0.5px; color: var(--text); text-decoration: none;
        }
        .nav-logo span { color: var(--accent); }

        .nav-right { display: flex; align-items: center; gap: 12px; }

        /* Theme toggle */
        .theme-toggle {
          width: 44px; height: 44px; border-radius: 50%;
          background: var(--bg2); border: 1px solid var(--border);
          color: var(--text); font-size: 18px;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; transition: all 0.25s ease;
        }
        .theme-toggle:hover { border-color: var(--accent); color: var(--accent); transform: rotate(20deg); }

        .lang-container {
          position: relative;
        }
        .lang-btn {
          font-family: var(--font-display); font-size: 13px; font-weight: 700;
          letter-spacing: 1.5px;
          background: var(--bg2); border: 1px solid var(--border);
          color: var(--text); padding: 11px 18px; border-radius: 100px;
          cursor: pointer; display: flex; align-items: center; gap: 8px;
          transition: all 0.25s ease;
        }
        .lang-btn:hover { border-color: var(--accent); color: var(--accent); }
        .lang-dropdown {
          position: absolute; top: calc(100% + 12px); right: 0;
          background: var(--card-bg); border: 1px solid var(--border);
          border-radius: 16px; overflow: hidden; min-width: 140px;
          box-shadow: 0 24px 60px rgba(0,0,0,0.25);
          display: flex; flex-direction: column;
          z-index: 101;
        }
        .lang-dropdown button {
          display: flex; align-items: center; gap: 10px;
          padding: 12px 18px; font-family: var(--font-display); font-size: 13px;
          font-weight: 600; color: var(--text); text-decoration: none;
          background: none; border: none; border-bottom: 1px solid var(--border);
          cursor: pointer; text-align: left; transition: all 0.2s;
          width: 100%;
        }
        .lang-dropdown button:last-child { border-bottom: none; }
        .lang-dropdown button:hover { background: var(--accent); color: #fff; padding-left: 24px; }
        .lang-dropdown button.active { color: var(--accent); font-weight: 700; }
        .lang-dropdown button.active:hover { color: #fff; }

        .menu-btn {
          font-family: var(--font-display); font-size: 13px; font-weight: 700;
          letter-spacing: 2px; text-transform: uppercase;
          background: none; border: 1px solid var(--border);
          color: var(--text); padding: 10px 22px; border-radius: 100px;
          cursor: pointer; display: flex; align-items: center; gap: 10px;
          transition: all 0.25s ease;
        }
        .menu-btn:hover { border-color: var(--accent); color: var(--accent); }
        .menu-btn.open { background: var(--accent); border-color: var(--accent); color: #fff; }

        .dropdown {
          position: absolute; top: calc(100% + 12px); right: 0;
          background: var(--card-bg); border: 1px solid var(--border);
          border-radius: 16px; overflow: hidden; min-width: 200px;
          box-shadow: 0 24px 60px rgba(0,0,0,0.25);
        }
        .dropdown a {
          display: flex; align-items: center; justify-content: space-between;
          padding: 14px 20px; font-family: var(--font-display); font-size: 14px;
          font-weight: 600; color: var(--text); text-decoration: none;
          border-bottom: 1px solid var(--border); transition: all 0.2s;
        }
        .dropdown a:last-child { border-bottom: none; }
        .dropdown a:hover { background: var(--accent); color: #fff; padding-left: 28px; }
        .dropdown a::after { content: '→'; opacity: 0.4; font-size: 12px; }
        .dropdown a:hover::after { opacity: 1; }

        /* ── HERO ── */
        .hero {
          min-height: 100vh; display: flex; align-items: center;
          position: relative; overflow: hidden; padding: 0 48px;
        }
        .hero-bg { position: absolute; inset: 0; z-index: 0; }
        .hero-grid {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(var(--border) 1px, transparent 1px),
            linear-gradient(90deg, var(--border) 1px, transparent 1px);
          background-size: 60px 60px;
          opacity: 0.35;
        }
        .hero-glow {
          position: absolute; width: 700px; height: 700px; border-radius: 50%;
          background: radial-gradient(circle, var(--accent-glow) 0%, transparent 65%);
          top: -150px; right: -150px; pointer-events: none;
        }
        .hero-glow2 {
          position: absolute; width: 500px; height: 500px; border-radius: 50%;
          background: radial-gradient(circle, var(--accent-lo) 0%, transparent 70%);
          bottom: -50px; left: 0; pointer-events: none;
        }
        .hero-orb {
          position: absolute; width: 300px; height: 300px; border-radius: 50%;
          background: radial-gradient(circle, rgba(168,85,247,0.08) 0%, transparent 70%);
          top: 40%; left: 40%; pointer-events: none;
        }
        .hero-content { position: relative; z-index: 1; max-width: 900px; }

        .hero-tag {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 12px; font-weight: 500; letter-spacing: 2px;
          text-transform: uppercase; color: var(--accent);
          border: 1px solid var(--accent-lo); padding: 6px 14px;
          border-radius: 100px; margin-bottom: 32px;
          background: var(--accent-lo);
        }
        .hero-tag::before {
          content: ''; width: 6px; height: 6px; border-radius: 50%;
          background: var(--accent); animation: pulse 2s infinite;
        }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }

        .hero-name {
          font-family: var(--font-display);
          font-size: clamp(52px, 8vw, 100px); font-weight: 800;
          line-height: 0.95; letter-spacing: -3px; color: var(--text); margin-bottom: 8px;
        }
        .hero-name .cursor {
          display: inline-block; width: 4px; height: 0.85em;
          background: var(--accent); margin-left: 4px;
          vertical-align: middle; animation: blink 1s infinite;
        }
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }

        .hero-role {
          font-family: var(--font-display); font-size: clamp(18px, 2.5vw, 28px);
          font-weight: 600; color: var(--muted); margin-bottom: 28px; letter-spacing: -0.5px;
        }
        .hero-role em { color: var(--accent-hi); font-style: normal; }

        .hero-desc {
          font-size: 16px; line-height: 1.7; color: var(--muted);
          max-width: 500px; margin-bottom: 48px; font-weight: 300;
        }
        .hero-btns { display: flex; gap: 16px; flex-wrap: wrap; }

        .btn-primary {
          font-family: var(--font-display); font-size: 14px; font-weight: 700;
          letter-spacing: 1px; text-transform: uppercase;
          background: var(--accent); color: #fff;
          border: none; padding: 16px 36px; border-radius: 100px;
          cursor: pointer; transition: all 0.25s ease;
          display: inline-flex; align-items: center; gap: 8px;
        }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 12px 40px var(--accent-glow); }

        .btn-outline {
          font-family: var(--font-display); font-size: 14px; font-weight: 700;
          letter-spacing: 1px; text-transform: uppercase;
          background: transparent; color: var(--text);
          border: 1px solid var(--border); padding: 16px 36px;
          border-radius: 100px; cursor: pointer; transition: all 0.25s ease;
        }
        .btn-outline:hover { border-color: var(--accent); color: var(--accent); transform: translateY(-2px); }

        .hero-scroll {
          position: absolute; bottom: 40px; left: 48px;
          display: flex; align-items: center; gap: 12px;
          font-size: 12px; letter-spacing: 2px; text-transform: uppercase; color: var(--muted);
        }
        .hero-scroll::before { content: ''; width: 40px; height: 1px; background: var(--muted); }

        /* ── SECTIONS ── */
        .section { padding: 120px 48px; position: relative; }

        .section-label {
          font-size: 12px; font-weight: 500; letter-spacing: 3px; text-transform: uppercase;
          color: var(--accent); margin-bottom: 16px;
          display: flex; align-items: center; gap: 12px;
        }
        .section-label::before { content: ''; width: 30px; height: 1px; background: var(--accent); }

        .section-title {
          font-family: var(--font-display); font-size: clamp(36px, 5vw, 64px); font-weight: 800;
          letter-spacing: -2px; line-height: 1; color: var(--text); margin-bottom: 60px;
        }

        /* ── ABOUT ── */
        .about-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 80px;
          align-items: center; max-width: 1200px; margin: 0 auto;
        }
        .about-text p { font-size: 17px; line-height: 1.8; color: var(--muted); font-weight: 300; margin-bottom: 20px; }
        .about-text p strong { color: var(--text); font-weight: 500; }

        .about-stats { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 40px; }
        .stat-card {
          background: var(--card-bg); border: 1px solid var(--border);
          border-radius: 16px; padding: 24px; transition: border-color 0.25s;
        }
        .stat-card:hover { border-color: var(--accent); }
        .stat-num { font-family: var(--font-display); font-size: 40px; font-weight: 800; color: var(--accent); line-height: 1; letter-spacing: -1px; }
        .stat-label { font-size: 13px; color: var(--muted); margin-top: 4px; }

        .about-image-wrap { position: relative; }
        .about-image {
          width: 100%; aspect-ratio: 3/4; border-radius: 24px; overflow: hidden;
          background: var(--bg2); border: 1px solid var(--border); position: relative;
        }
        .about-image-inner { width: 100%; height: 100%; background-image: url('/cartoon_girl.png'); background-size: cover; background-position: center top; }
        .about-image::after { content: ''; position: absolute; inset: 0; background: linear-gradient(to top, var(--bg) 0%, transparent 40%); }
        .about-tag {
          position: absolute; bottom: 24px; left: 24px; right: 24px; z-index: 1;
          background: var(--nav-blur); backdrop-filter: blur(20px);
          border: 1px solid var(--border); border-radius: 12px; padding: 16px 20px;
          display: flex; align-items: center; justify-content: space-between;
        }
        .about-tag-name { font-family: var(--font-display); font-size: 16px; font-weight: 700; color: var(--text); }
        .about-tag-role { font-size: 13px; color: var(--muted); margin-top: 2px; }
        .about-tag-dot { width: 10px; height: 10px; border-radius: 50%; background: var(--accent); box-shadow: 0 0 12px var(--accent); animation: pulse 2s infinite; }
        .about-deco { position: absolute; top: -20px; right: -20px; width: 120px; height: 120px; border: 2px solid var(--accent-lo); border-radius: 20px; z-index: -1; }
        
        /* ── CARTOON ART & ANIMATIONS ── */
        .cartoon-wrapper {
          width: 100%;
          height: 100%;
          position: relative;
          background: var(--bg2);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .cartoon-svg {
          width: 100%;
          height: 100%;
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .cartoon-wrapper:hover .cartoon-svg {
          transform: scale(1.03);
        }

        /* ── SVG Animations ── */
        .waving-arm-group {
          transform-origin: 275px 320px;
          animation: svg-wave 2.5s ease-in-out infinite;
        }
        @keyframes svg-wave {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-14deg); }
          50% { transform: rotate(2deg); }
          75% { transform: rotate(-8deg); }
        }

        .typing-hand {
          animation: typing-hand-move 0.35s ease-in-out infinite alternate;
        }
        @keyframes typing-hand-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(-2px, -4px); }
        }

        .eye-left, .eye-right {
          transform-origin: 182px 168px;
          animation: eye-blink 4s infinite;
        }
        .eye-right {
          transform-origin: 218px 168px;
        }
        @keyframes eye-blink {
          0%, 90%, 100% { transform: scaleY(1); }
          95% { transform: scaleY(0.1); }
        }

        .laptop-glow {
          animation: glow-pulse 2s ease-in-out infinite alternate;
        }
        @keyframes glow-pulse {
          0% { opacity: 0.3; }
          100% { opacity: 0.75; }
        }

        /* ── HTML Overlays inside Wrapper ── */
        .cartoon-html-glow {
          position: absolute;
          bottom: 10%;
          left: 30%;
          width: 160px;
          height: 160px;
          background: radial-gradient(circle, rgba(168, 85, 247, 0.25) 0%, rgba(168, 85, 247, 0) 70%);
          pointer-events: none;
          z-index: 2;
          mix-blend-mode: screen;
          animation: html-glow-pulse 3s ease-in-out infinite alternate;
        }
        @keyframes html-glow-pulse {
          0% { transform: scale(0.9); opacity: 0.5; }
          100% { transform: scale(1.1); opacity: 0.9; }
        }

        .cartoon-speech-bubble {
          position: absolute;
          top: 30px;
          right: 30px;
          background: rgba(19, 15, 30, 0.85);
          backdrop-filter: blur(10px);
          border: 1.5px solid var(--accent);
          color: #fff;
          padding: 8px 14px;
          border-radius: 18px;
          border-bottom-right-radius: 0;
          font-size: 13px;
          font-weight: 600;
          font-family: var(--font-display);
          box-shadow: 0 8px 24px rgba(168, 85, 247, 0.25);
          z-index: 5;
          display: flex;
          align-items: center;
          gap: 6px;
          animation: bubble-float 3s ease-in-out infinite;
        }
        @keyframes bubble-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .cartoon-speech-bubble::after {
          content: '';
          position: absolute;
          bottom: -8px;
          right: 1px;
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 8px 8px 0 0;
          border-color: var(--accent) transparent transparent transparent;
        }

        .waving-hand-emoji {
          display: inline-block;
          animation: emoji-wave 1.5s ease-in-out infinite;
          transform-origin: bottom right;
        }
        @keyframes emoji-wave {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-20deg); }
          50% { transform: rotate(10deg); }
          75% { transform: rotate(-15deg); }
        }

        /* Floating Code Particles */
        .floating-code {
          position: absolute;
          bottom: 20%;
          font-family: monospace;
          font-size: 10px;
          font-weight: 600;
          color: var(--accent-hi);
          opacity: 0;
          pointer-events: none;
          z-index: 4;
          padding: 3px 6px;
          background: rgba(168, 85, 247, 0.12);
          border: 1px solid rgba(168, 85, 247, 0.2);
          border-radius: 5px;
        }
        .code-t1 { left: 10%; animation: code-float-up 5s linear infinite; }
        .code-t2 { left: 22%; animation: code-float-up-heavy 6s linear infinite 1s; }
        .code-t3 { left: 45%; animation: code-float-up 5.5s linear infinite 0.5s; }
        .code-t4 { left: 62%; animation: code-float-up-heavy 5.2s linear infinite 1.8s; }
        .code-t5 { left: 75%; animation: code-float-up 6.5s linear infinite 2.8s; }

        @keyframes code-float-up {
          0% { transform: translateY(0) scale(0.8) rotate(0deg); opacity: 0; }
          15% { opacity: 0.7; }
          80% { opacity: 0.7; }
          100% { transform: translateY(-140px) scale(1) rotate(10deg); opacity: 0; }
        }
        @keyframes code-float-up-heavy {
          0% { transform: translateY(0) scale(0.7) rotate(0deg); opacity: 0; }
          20% { opacity: 0.85; }
          75% { opacity: 0.85; }
          100% { transform: translateY(-170px) scale(0.95) rotate(-15deg); opacity: 0; }
        }

        /* ── SKILLS SECTION (ADAPTED TO SITE VIBE) ── */
        .skills-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .skills-grid {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .skills-columns {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 24px;
        }

        .skills-column-left,
        .skills-column-right {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        /* ── CARD STYLING ── */
        .skills-card {
          background: var(--bg2);
          border: 1px solid var(--border);
          border-radius: 24px;
          padding: 32px;
          position: relative;
          overflow: hidden;
          color: var(--text);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 200px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
          transition: all 0.3s ease;
        }

        .skills-card:hover {
          transform: translateY(-4px);
          border-color: var(--accent);
          box-shadow: 0 12px 30px var(--accent-glow);
        }

        /* Special Heights for layout */
        .frontend-card {
          min-height: 180px;
        }
        .backend-card {
          min-height: 380px;
        }
        .databases-card {
          min-height: 180px;
        }
        .tools-design-card {
          flex: 1; /* stretches to match left column */
          min-height: 340px;
        }
        .programming-card {
          min-height: 180px;
        }

        /* Sub-label/Tag */
        .card-tag {
          font-family: var(--font-display);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--accent-hi); /* Glowing theme purple */
          margin-bottom: 8px;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .card-title {
          font-family: var(--font-display);
          font-size: 32px;
          font-weight: 700;
          color: var(--text);
          margin-bottom: 12px;
        }

        .card-desc {
          font-size: 15px;
          line-height: 1.6;
          color: var(--muted);
          max-width: 600px;
          font-weight: 300;
        }

        /* Skill names horizontal list */
        .card-skills-list {
          margin-top: 40px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 1.5px;
          color: var(--muted);
          z-index: 2;
          text-transform: uppercase;
        }

        /* Floating background logos */
        .floating-logos {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
          z-index: 1;
        }

        .floating-logo {
          position: absolute;
          color: var(--accent);
          opacity: 0.18;
          filter: drop-shadow(0 0 4px var(--accent-glow));
          transition: opacity 0.3s ease, transform 0.5s ease, color 0.3s ease, filter 0.3s ease;
        }

        .skills-card:hover .floating-logo {
          opacity: 0.45;
          color: var(--accent-hi);
          filter: drop-shadow(0 0 12px var(--accent-hi));
        }

        /* Active swimming/drifting animations */
        @keyframes float-logo-1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(15px, -12px) rotate(8deg); }
          50% { transform: translate(30px, -25px) rotate(-12deg) scale(1.1); }
          75% { transform: translate(12px, -18px) rotate(6deg); }
        }
        @keyframes float-logo-2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(-15px, 12px) rotate(-8deg); }
          50% { transform: translate(-30px, 25px) rotate(12deg) scale(0.9); }
          75% { transform: translate(-12px, 15px) rotate(-6deg); }
        }
        @keyframes float-logo-3 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(12px, 15px) rotate(6deg); }
          50% { transform: translate(25px, 30px) rotate(-8deg) scale(1.05); }
          75% { transform: translate(15px, 12px) rotate(4deg); }
        }

        .floating-logo:nth-child(3n+1) {
          animation: float-logo-1 12s infinite ease-in-out;
        }
        .floating-logo:nth-child(3n+2) {
          animation: float-logo-2 15s infinite ease-in-out;
        }
        .floating-logo:nth-child(3n+3) {
          animation: float-logo-3 13s infinite ease-in-out;
        }

         /* ── EXPERIENCE / EDUCATION SECTION ── */
         .experience-container {
           max-width: 1200px;
           margin: 0 auto;
         }

         .journey-grid {
           display: grid;
           grid-template-columns: 1fr 1fr;
           gap: 48px;
           margin-top: 40px;
         }

         @media (max-width: 992px) {
           .journey-grid {
             grid-template-columns: 1fr;
             gap: 48px;
           }
         }

         .journey-column-title {
           font-family: var(--font-display);
           font-size: 28px;
           font-weight: 700;
           color: var(--text);
           margin-bottom: 32px;
           display: flex;
           align-items: center;
           gap: 10px;
         }

         .journey-column-title .accent-dot {
           color: var(--accent-hi);
           text-shadow: 0 0 10px var(--accent-glow);
         }

         .timeline {
           position: relative;
           border-left: 1.5px dashed var(--border);
           padding-left: 32px;
           margin-left: 8px;
           display: flex;
           flex-direction: column;
           gap: 40px;
         }

         .timeline-item {
           position: relative;
         }

         .timeline-dot {
           position: absolute;
           left: -41.5px;
           top: 6px;
           width: 18px;
           height: 18px;
           border-radius: 50%;
           background: var(--bg);
           border: 2px solid var(--accent);
           box-shadow: 0 0 8px var(--accent-glow);
           transition: all 0.3s ease;
         }

         .timeline-item:hover .timeline-dot {
           background: var(--accent-hi);
           box-shadow: 0 0 15px var(--accent-hi);
           transform: scale(1.2);
         }

         .timeline-content {
           background: var(--bg2);
           border: 1px solid var(--border);
           border-radius: 16px;
           padding: 24px;
           transition: all 0.3s ease;
           box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
         }

         .timeline-content:hover {
           border-color: var(--accent);
           transform: translateX(4px);
           box-shadow: 0 8px 24px var(--accent-glow);
         }

         .timeline-date {
           display: inline-block;
           font-family: var(--font-display);
           font-size: 12px;
           font-weight: 700;
           color: var(--accent-hi);
           background: var(--accent-lo);
           padding: 4px 12px;
           border-radius: 100px;
           margin-bottom: 12px;
         }

         .timeline-title {
           font-family: var(--font-display);
           font-size: 20px;
           font-weight: 700;
           color: var(--text);
           margin-bottom: 6px;
         }

         .timeline-subtitle {
           font-size: 15px;
           color: var(--text);
           font-weight: 500;
           opacity: 0.9;
           margin-bottom: 6px;
         }

         .timeline-location {
           font-size: 13px;
           color: var(--muted);
           font-style: italic;
         }

         /* ── CONTACT SECTION ── */
         .contact-card {
           background: var(--bg2);
           border: 1px solid var(--border);
           border-radius: 24px;
           padding: 56px;
           display: grid;
           grid-template-columns: 1fr 1.2fr;
           gap: 64px;
           max-width: 1200px;
           margin: 0 auto;
           box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
           position: relative;
           overflow: hidden;
         }

         .contact-left {
           display: flex;
           flex-direction: column;
           justify-content: space-between;
           padding-right: 24px;
           border-right: 1px dashed var(--border);
         }

         .contact-connect-title {
           font-family: var(--font-display);
           font-size: clamp(40px, 6vw, 64px);
           font-weight: 800;
           line-height: 0.95;
           letter-spacing: -2px;
           color: var(--accent-hi);
           margin-bottom: 24px;
         }

         .contact-connect-desc {
           font-size: 16px;
           line-height: 1.7;
           color: var(--muted);
           font-weight: 300;
           margin-bottom: 40px;
         }

         .contact-socials {
           display: flex;
           flex-direction: row;
           flex-wrap: wrap;
           gap: 24px;
           margin-top: 32px;
         }

         .contact-social-link {
           display: flex;
           align-items: center;
           gap: 8px;
           color: var(--text);
           text-decoration: none;
           font-family: var(--font-display);
           font-size: 15px;
           font-weight: 600;
           transition: color 0.25s ease;
         }

         .contact-social-link:hover {
           color: var(--accent-hi);
         }

         .contact-social-link svg {
           color: var(--text);
           transition: transform 0.25s ease;
         }

         .contact-social-link:hover svg {
           transform: scale(1.1);
           color: var(--accent-hi);
         }

         .contact-right {
           display: flex;
           flex-direction: column;
           justify-content: center;
         }

         .contact-form-title {
           font-family: var(--font-display);
           font-size: 24px;
           font-weight: 700;
           color: var(--text);
           margin-bottom: 32px;
           display: flex;
           align-items: center;
           gap: 8px;
         }

         .contact-inputs-row {
           display: grid;
           grid-template-columns: 1fr 1fr;
           gap: 24px;
         }

         @media (max-width: 600px) {
           .contact-inputs-row {
             grid-template-columns: 1fr;
             gap: 0;
           }
         }

         .contact-input-group {
           position: relative;
           margin-bottom: 32px;
         }

         .contact-input-group label {
           display: block;
           font-size: 11px;
           font-weight: 700;
           color: var(--muted);
           margin-bottom: 8px;
           text-transform: uppercase;
           letter-spacing: 1.5px;
         }

         .contact-input-group input,
         .contact-input-group textarea {
           width: 100%;
           background: transparent;
           border: none;
           border-bottom: 1.5px solid var(--border);
           padding: 10px 0;
           color: var(--text);
           font-family: inherit;
           font-size: 16px;
           font-weight: 400;
           transition: border-color 0.25s ease;
           resize: none;
           outline: none;
         }

         .contact-input-group input:focus,
         .contact-input-group textarea:focus {
           border-color: var(--accent);
         }

         .contact-submit-btn {
           font-family: var(--font-display);
           font-size: 13px;
           font-weight: 700;
           letter-spacing: 1.5px;
           text-transform: uppercase;
           background: transparent;
           color: var(--text);
           border: 2px solid var(--accent);
           padding: 14px 36px;
           border-radius: 100px;
           cursor: pointer;
           display: inline-flex;
           align-items: center;
           gap: 10px;
           transition: all 0.25s ease;
           outline: none;
           width: fit-content;
         }

         .contact-submit-btn:hover {
           background: var(--accent);
           color: #fff;
           transform: translateY(-2px);
           box-shadow: 0 8px 24px var(--accent-glow);
         }

         .contact-card-footer {
           grid-column: span 2;
           font-size: 11px;
           color: var(--muted);
           opacity: 0.65;
           margin-top: 24px;
           text-align: right;
           border-top: 1px dashed var(--border);
           padding-top: 16px;
         }

         /* ── BACKGROUND STARS ── */
         .stars-container {
           position: fixed;
           inset: 0;
           pointer-events: none;
           z-index: 0;
           overflow: hidden;
         }

         .star {
           position: absolute;
           background: var(--text);
           border-radius: 50%;
           opacity: 0.1;
           box-shadow: 0 0 8px 1.5px var(--accent-hi);
           animation: drift-and-twinkle linear infinite;
         }

         @keyframes drift-and-twinkle {
           0% {
             transform: translate(0, 0) scale(0.8);
             opacity: 0.08;
           }
           25% {
             opacity: 0.55;
             transform: translate(15px, -20px) scale(1.1);
           }
           50% {
             opacity: 0.12;
             transform: translate(30px, -5px) scale(0.7);
           }
           75% {
             opacity: 0.45;
             transform: translate(15px, 15px) scale(1.05);
           }
           100% {
             transform: translate(0, 0) scale(0.8);
             opacity: 0.08;
           }
         }

         @media (max-width: 768px) {
           .contact-card {
             grid-template-columns: 1fr;
             padding: 36px 24px;
             gap: 40px;
           }
           .contact-left {
             padding-right: 0;
             border-right: none;
             border-bottom: 1px dashed var(--border);
             padding-bottom: 32px;
           }
           .contact-card-footer {
             grid-column: span 1;
             text-align: center;
           }
         }

        /* ── FOOTER ── */
        .divider { height: 1px; background: linear-gradient(to right, transparent, var(--border), transparent); margin: 0 48px; }
        .footer {
          padding: 32px 48px; display: flex; justify-content: space-between;
          align-items: center; border-top: 1px solid var(--border);
        }
        .footer-text { font-size: 13px; color: var(--muted); }
        .footer-text strong { color: var(--text); }

        /* ── PROJECTS SECTION (COSMIC GALAXY VIBE) ── */
        #projects {
          background: linear-gradient(to bottom, var(--bg) 0%, rgba(10, 8, 18, 0.85) 15%, rgba(10, 8, 18, 0.85) 85%, var(--bg) 100%), url('/nebula_bg.png') no-repeat center center;
          background-size: cover;
          position: relative;
          width: 100vw;
          left: 50%;
          right: 50%;
          margin-left: -50vw;
          margin-right: -50vw;
          padding: 100px 0;
          overflow: hidden;
        }

        .projects-container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          padding: 0 24px;
        }

        .projects-galaxy-wrapper {
          position: relative;
          width: 100%;
          min-height: 650px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          margin-top: 48px;
          padding: 40px;
        }

        /* Central Planet */
        .planet-center-container {
          position: relative;
          width: 320px;
          height: 320px;
          border-radius: 50%;
          z-index: 3;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .planet-center-sphere {
          position: absolute;
          width: 100%;
          height: 100%;
          background-size: cover !important;
          background-position: center !important;
          border-radius: 50%;
          box-shadow:
            0 0 16px rgba(255, 255, 255, 0.2),
            0 0 30px rgba(216, 180, 254, 0.7),
            0 0 55px rgba(236, 72, 153, 0.7),
            0 0 90px rgba(168, 85, 247, 0.6),
            0 0 120px rgba(168, 85, 247, 0.5);
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          animation: float-planet 4s ease-in-out infinite alternate;
        }

        @keyframes float-planet {
          0% { transform: translateY(0px) rotate(0deg); }
          100% { transform: translateY(-16px) rotate(4deg); }
        }

        .planet-center-content {
          position: relative;
          z-index: 4;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: rgba(17, 11, 23, 0.78);
          backdrop-filter: blur(12px);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 20px 24px 18px;
          color: #fff;
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: inset 0 0 28px rgba(255, 255, 255, 0.04), inset 0 0 42px rgba(168, 85, 247, 0.1);
        }

        .planet-center-badge {
          background: linear-gradient(135deg, rgba(216,180,254,0.9), rgba(168,85,247,0.95));
          color: #fff;
          font-size: 10px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          padding: 5px 12px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 10px;
          box-shadow: 0 0 12px rgba(216,180,254,0.75), 0 0 20px rgba(168,85,247,0.5);
        }

        .planet-center-num {
          font-size: 14px;
          font-weight: 800;
          color: rgba(255,255,255,0.9);
          letter-spacing: 2px;
          margin-bottom: 6px;
          opacity: 0.9;
        }

        .planet-center-title {
          font-family: var(--font-display);
          font-size: 20px;
          font-weight: 800;
          line-height: 1.05;
          margin-bottom: 10px;
          background: linear-gradient(135deg, #fff, rgba(220, 214, 255, 0.88));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .planet-center-desc {
          font-size: 12px;
          line-height: 1.45;
          color: rgba(255,255,255,0.88);
          margin-bottom: 18px;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* View Button inside Center Planet */
        .planet-center-view-btn {
          cursor: pointer;
          background: rgba(168, 85, 247, 0.2);
          border: 1.5px solid var(--accent);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          transition: all 0.3s ease;
          box-shadow: 0 0 15px rgba(168, 85, 247, 0.3);
        }

        .planet-center-view-btn:hover {
          transform: scale(1.12);
          background: var(--accent);
          box-shadow: 0 0 25px var(--accent);
        }

        .planet-center-view-label {
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--muted);
}
        .planet-center-view-btn:hover + .planet-center-view-label {
          color: #fff;
        }

        /* Orbiting Planets */
        .planet-orbiting-container {
          position: absolute;
          width: 120px;
          height: 120px;
          z-index: 2;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .planet-pos-0 {
          animation: float-pos-0 6s ease-in-out infinite alternate;
        }
        .planet-pos-1 {
          animation: float-pos-1 7s ease-in-out infinite alternate;
        }
        .planet-pos-2 {
          animation: float-pos-2 6.5s ease-in-out infinite alternate;
        }
        .planet-pos-3 {
          animation: float-pos-3 7.5s ease-in-out infinite alternate;
        }
        .planet-pos-4 {
          animation: float-pos-4 6.8s ease-in-out infinite alternate;
        }

        @keyframes float-pos-0 {
          0% { transform: translate(280px, -170px) rotate(-8deg) scale(0.96); }
          100% { transform: translate(330px, -110px) rotate(12deg) scale(1.04); }
        }
        @keyframes float-pos-1 {
          0% { transform: translate(300px, 130px) rotate(10deg) scale(1.04); }
          100% { transform: translate(250px, 190px) rotate(-10deg) scale(0.96); }
        }
        @keyframes float-pos-2 {
          0% { transform: translate(0px, 240px) rotate(-5deg) scale(0.98); }
          100% { transform: translate(0px, 270px) rotate(5deg) scale(1.02); }
        }
        @keyframes float-pos-3 {
          0% { transform: translate(-300px, 130px) rotate(-12deg) scale(0.96); }
          100% { transform: translate(-250px, 190px) rotate(8deg) scale(1.04); }
        }
        @keyframes float-pos-4 {
          0% { transform: translate(-280px, -170px) rotate(8deg) scale(1.04); }
          100% { transform: translate(-330px, -110px) rotate(-8deg) scale(0.96); }
        }

        .project-modal-image-container {
          width: 100%;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid var(--border);
          margin-bottom: 24px;
          background: #000;
          box-shadow: 0 8px 30px rgba(0,0,0,0.3);
          max-height: 280px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .project-modal-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .project-modal-skills {
          margin-top: 24px;
          padding-top: 20px;
          border-top: 1px dashed var(--border);
        }

        .project-modal-skills-title {
          font-family: var(--font-display);
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: var(--accent);
          margin-bottom: 12px;
        }

        .project-modal-skills-list {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .project-modal-skill-badge {
          font-family: var(--font-display);
          font-size: 12px;
          font-weight: 700;
          background: var(--accent-lo);
          color: var(--accent-hi);
          border: 1px solid var(--accent-glow);
          padding: 6px 14px;
          border-radius: 100px;
          box-shadow: 0 0 10px var(--accent-lo);
        }

        .project-modal-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 18px;
          padding: 10px 16px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border);
          color: var(--text);
          text-decoration: none;
          font-family: var(--font-display);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          transition: all 0.25s ease;
        }

        .project-modal-link:hover {
          border-color: var(--accent);
          box-shadow: 0 0 16px var(--accent-glow);
          transform: translateY(-2px);
        }

        /* Projects Nav Pills Selector Strip */
        .projects-nav-pills {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px;
          margin-top: 36px;
          position: relative;
          z-index: 5;
          max-width: 1000px;
          margin-left: auto;
          margin-right: auto;
          padding: 0 16px;
        }

        .project-nav-pill {
          background: var(--bg2);
          border: 1px solid var(--border);
          color: var(--muted);
          padding: 8px 16px;
          border-radius: 100px;
          font-family: var(--font-display);
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.25s ease;
        }

        .project-nav-pill:hover {
          border-color: var(--accent);
          color: var(--text);
          transform: translateY(-2px);
        }

        .project-nav-pill.active {
          background: var(--accent);
          border-color: var(--accent);
          color: #fff;
          box-shadow: 0 4px 20px var(--accent-glow);
        }

        .project-nav-pill .pill-num {
          font-weight: 800;
          opacity: 0.85;
          font-size: 11px;
        }

        .planet-orbiting-sphere {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          background-size: cover !important;
          background-position: center !important;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
        }

        .planet-orbiting-container:hover .planet-orbiting-sphere {
          transform: scale(1.1);
        }

        /* Planet atmosphere glows depending on project */
        .planet-glow-purple {
          box-shadow: inset -8px -8px 20px rgba(0, 0, 0, 0.9),
                      0 0 20px rgba(236, 72, 153, 0.45),
                      0 0 35px rgba(168, 85, 247, 0.25);
        }

        .planet-orbiting-label {
          position: absolute;
          top: -28px;
          background: rgba(10, 8, 18, 0.85);
          backdrop-filter: blur(6px);
          border: 1px solid var(--border);
          color: #fff;
          font-size: 10px;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 12px;
          white-space: nowrap;
          box-shadow: 0 4px 12px rgba(0,0,0,0.3);
          transition: all 0.3s ease;
          opacity: 0.85;
        }
        .planet-orbiting-container:hover .planet-orbiting-label {
          opacity: 1;
          transform: translateY(-2px);
          border-color: var(--accent);
          box-shadow: 0 4px 15px rgba(168, 85, 247, 0.3);
        }

        /* Eye Icon on orbiting planets */
        .planet-orbiting-eye {
          position: absolute;
          bottom: 12px;
          right: 12px;
          width: 24px;
          height: 24px;
          background: var(--bg2);
          border: 1px solid var(--border);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--muted);
          transition: all 0.3s ease;
          z-index: 5;
        }
        .planet-orbiting-container:hover .planet-orbiting-eye {
          background: var(--accent);
          color: #fff;
          border-color: var(--accent);
          transform: scale(1.15);
          box-shadow: 0 0 10px var(--accent);
        }

        /* ── PROJECTS LIGHT THEME ADAPTATION ── */
        .theme-light #projects {
          background: linear-gradient(to bottom, var(--bg) 0%, rgba(250, 248, 255, 0.88) 15%, rgba(250, 248, 255, 0.88) 85%, var(--bg) 100%), url('/nebula_bg.png') no-repeat center center;
          background-size: cover;
        }

        .theme-light .planet-center-content {
          background: rgba(255, 255, 255, 0.78);
          color: var(--text);
          border: 1px solid rgba(124, 58, 237, 0.15);
          box-shadow: inset 0 0 20px rgba(124, 58, 237, 0.05);
        }

        .theme-light .planet-center-desc {
          color: var(--text);
        }

        .theme-light .planet-orbiting-label {
          background: rgba(255, 255, 255, 0.9);
          color: var(--text);
          border: 1px solid var(--border);
          box-shadow: 0 4px 12px rgba(124, 58, 237, 0.1);
        }

        .theme-light .planet-center-num {
          color: var(--muted);
        }

        .theme-light .planet-center-view-label {
          color: var(--muted);
        }

        .theme-light .planet-center-view-btn:hover + .theme-light .planet-center-view-label {
          color: var(--text);
        }

        .theme-light .planet-glow-purple {
          box-shadow: inset -8px -8px 20px rgba(0, 0, 0, 0.2),
                      0 0 20px rgba(236, 72, 153, 0.35),
                      0 0 35px rgba(124, 58, 237, 0.2);
        }

        .theme-light .planet-center-sphere {
          filter: drop-shadow(0 0 20px rgba(236, 72, 153, 0.4))
                  drop-shadow(0 0 35px rgba(124, 58, 237, 0.25));
        }

        /* ── MODAL ── */
        .project-modal-overlay {
          position: fixed;
          top: 0; left: 0; width: 100vw; height: 100vh;
          background: rgba(10, 8, 18, 0.85);
          backdrop-filter: blur(12px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 24px;
        }

        .project-modal-container {
          background: var(--bg2);
          border: 1.5px solid var(--border);
          width: 100%;
          max-width: 600px;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 25px 50px rgba(0,0,0,0.5), 0 0 30px rgba(168, 85, 247, 0.15);
          color: var(--text);
          position: relative;
        }

        .project-modal-close-btn {
          position: absolute;
          top: 16px; right: 16px;
          background: rgba(255,255,255,0.05);
          border: 1px solid var(--border);
          width: 32px; height: 32px;
          border-radius: 50%;
          color: var(--text);
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: all 0.2s ease;
        }
        .project-modal-close-btn:hover {
          background: #ef4444;
          color: #fff;
          border-color: #ef4444;
        }

        .project-modal-header {
          padding: 32px 32px 16px 32px;
          border-bottom: 1px solid var(--border);
        }

        .project-modal-label {
          color: var(--accent);
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          margin-bottom: 6px;
        }

        .project-modal-title {
          font-family: var(--font-display);
          font-size: 24px;
          font-weight: 800;
          background: linear-gradient(to right, #fff, var(--muted));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .project-modal-body {
          padding: 32px;
        }

        .project-modal-visualisation {
          width: 100%;
          height: 240px;
          background: radial-gradient(circle, var(--bg3) 0%, var(--bg2) 100%);
          border-radius: 12px;
          border: 1px dashed var(--border);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          text-align: center;
          padding: 24px;
        }

        .project-modal-visualisation-text {
          font-size: 13px;
          color: var(--muted);
          max-width: 300px;
          margin-top: 12px;
          line-height: 1.5;
        }

        .project-modal-desc {
          font-size: 14px;
          line-height: 1.6;
          color: var(--text);
        }

        @media (max-width: 768px) {
          .projects-galaxy-wrapper {
            min-height: auto;
            flex-direction: column;
            padding: 32px 16px;
            gap: 40px;
          }
          .galaxy-orbit-ring {
            display: none; /* Hide rings on mobile */
          }
          .planet-center-container {
            width: 280px;
            height: 280px;
          }
          .planet-orbiting-container {
            position: relative !important;
            left: auto !important;
            top: auto !important;
            transform: none !important;
            animation: none !important; /* Reset float animation on mobile */
            width: 100%;
            flex-direction: row;
            gap: 16px;
            padding: 12px 16px;
            background: var(--bg3);
            border-radius: 16px;
            border: 1px solid var(--border);
          }
          .planet-orbiting-sphere {
            width: 50px;
            height: 50px;
            flex-shrink: 0;
          }
          .planet-orbiting-label {
            position: relative;
            top: auto;
            left: auto;
            background: transparent;
            border: none;
            padding: 0;
            box-shadow: none;
            font-size: 14px;
            font-weight: 700;
          }
          .planet-orbiting-eye {
            position: relative;
            bottom: auto;
            right: auto;
            margin-left: auto;
          }
        }

        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr; gap: 40px; }
          .section { padding: 80px 24px; }
          .nav, .nav.scrolled { padding: 16px 24px; }
          .hero { padding: 0 24px; }
          .hero-scroll { left: 24px; }
          .divider { margin: 0 24px; }
          .footer { padding: 24px; flex-direction: column; gap: 8px; text-align: center; }
        }
      `}</style>

      {/* Global Background Stars */}
      <div className="stars-container">
        {stars.map((star) => (
          <div
            key={star.id}
            className="star"
            style={{
              top: star.top,
              left: star.left,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: `${star.delay}s`,
              animationDuration: `${star.duration}s`,
            }}
          />
        ))}
      </div>

      {/* NAV */}
      <nav className={`nav${scrolled ? " scrolled" : ""}`}>
        <a href="#home" className="nav-logo">M<span>.</span>Dev</a>
        <div className="nav-right">
          {/* Language selector */}
          <div className="lang-container" ref={langRef}>
            <button
              className="lang-btn"
              onClick={() => setLangOpen(!langOpen)}
              title="Change language"
            >
              🌐 {lang.toUpperCase()}
            </button>
            {langOpen && (
              <motion.div
                className="lang-dropdown"
                initial={{ opacity: 0, y: -8, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                <button onClick={() => { setLang("en"); setLangOpen(false); }} className={lang === "en" ? "active" : ""}>🇺🇸 EN</button>
                <button onClick={() => { setLang("de"); setLangOpen(false); }} className={lang === "de" ? "active" : ""}>🇩🇪 DE</button>
                <button onClick={() => { setLang("fr"); setLangOpen(false); }} className={lang === "fr" ? "active" : ""}>🇫🇷 FR</button>
              </motion.div>
            )}
          </div>

          {/* Dark/Light toggle */}
          <button
            className="theme-toggle"
            onClick={() => setDark(!dark)}
            title={dark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {dark ? "☀️" : "🌙"}
          </button>

          <div style={{ position: "relative" }}>
            <button
              className={`menu-btn${menuOpen ? " open" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? "CLOSE ✕" : "MENU ☰"}
            </button>
            {menuOpen && (
              <motion.div
                className="dropdown"
                initial={{ opacity: 0, y: -8, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                {NAV_IDS.map((id, i) => (
                  <a
                    key={i}
                    href={`#${id}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {t.nav[i]}
                  </a>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="hero" ref={heroRef}>
        <div className="hero-bg">
          <div className="hero-grid" />
          <div className="hero-glow" />
          <div className="hero-glow2" />
          <div className="hero-orb" />
        </div>
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="hero-tag"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {t.hero.tag}
          </motion.div>
          <h1 className="hero-name">
            {typed}
            <span className="cursor" />
          </h1>
          <p className="hero-role">
            {t.hero.role.split(" & ")[0]} &amp; <em>{t.hero.role.split(" & ")[1]}</em>
          </p>
          <p className="hero-desc">
            {t.hero.desc}
          </p>
          <div className="hero-btns">
            <motion.a
              href="/resume.pdf"
              download="Malak_Metouagui_Resume.pdf"
              className="btn-primary"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", justifyContent: "center" }}
            >
              {t.hero.resume}
            </motion.a>
            <motion.a
              href="#contact"
              className="btn-outline"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              style={{ display: "inline-flex", alignItems: "center", textDecoration: "none" }}
            >
              {t.hero.contact}
            </motion.a>
          </div>
        </motion.div>
        <div className="hero-scroll">{t.hero.scroll}</div>
      </section>

      {/* ABOUT */}
      <section id="aboutme" className="section">
        <div className="about-grid">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <div className="section-label">{t.about.label}</div>
            <h2 className="section-title">{t.about.title.split('\n')[0]}<br />{t.about.title.split('\n')[1]}</h2>
            <p dangerouslySetInnerHTML={{ __html: t.about.desc1 }} />
            <p dangerouslySetInnerHTML={{ __html: t.about.desc2 }} />
            <p dangerouslySetInnerHTML={{ __html: t.about.desc3 }} />
            <div className="about-stats">
              {[
                { num: "3+", label: t.about.stats[0] },
                { num: "20+", label: t.about.stats[1] },
                { num: "15+", label: t.about.stats[2] },
                { num: "100%", label: t.about.stats[3] },
              ].map((s, i) => (
                <motion.div
                  key={i} className="stat-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="stat-num">{s.num}</div>
                  <div className="stat-label">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            className="about-image-wrap"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <div className="about-deco" />
            <div className="about-image">
              <CodingCartoon lang={lang} />
              <div className="about-tag">
                <div>
                  <div className="about-tag-name">Malak Metouagui</div>
                  <div className="about-tag-role">{t.about.role}</div>
                </div>
                <div className="about-tag-dot" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="divider" />

      {/* SKILLS */}
      <section id="skills" className="section">
        <div className="skills-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="section-label">{t.skills.label}</div>
            <h2 className="section-title">{t.skills.title}</h2>
          </motion.div>

          <div className="skills-grid">
            {/* Row 1: Frontend Dev (Full width) */}
            <motion.div
              className="skills-card frontend-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div>
                <div className="card-tag">{t.skills.frontend.tag}</div>
                <h3 className="card-title">{t.skills.frontend.title}</h3>
                <p className="card-desc">
                  {t.skills.frontend.desc}
                </p>
              </div>
              <div className="card-skills-list">
                HTML &nbsp;&bull;&nbsp; CSS &nbsp;&bull;&nbsp; JavaScript &nbsp;&bull;&nbsp; React &nbsp;&bull;&nbsp; Next.js
              </div>
              <div className="floating-logos">
                <div className="floating-logo" style={{ top: '15%', right: '15%', width: '70px', height: '70px' }}>
                  <SkillIcon name="HTML" />
                </div>
                <div className="floating-logo" style={{ top: '10%', right: '35%', width: '75px', height: '75px' }}>
                  <SkillIcon name="CSS" />
                </div>
                <div className="floating-logo" style={{ bottom: '15%', right: '10%', width: '75px', height: '75px' }}>
                  <SkillIcon name="JavaScript" />
                </div>
                <div className="floating-logo" style={{ bottom: '10%', right: '25%', width: '80px', height: '80px' }}>
                  <SkillIcon name="React" />
                </div>
                <div className="floating-logo" style={{ top: '15%', right: '5%', width: '75px', height: '75px' }}>
                  <SkillIcon name="Next.js" />
                </div>
              </div>
            </motion.div>

            {/* Columns Layout */}
            <div className="skills-columns">
              {/* Left Column: Backend & Programming */}
              <div className="skills-column-left">
                {/* Backend Dev Card */}
                <motion.div
                  className="skills-card backend-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <div>
                    <div className="card-tag">{t.skills.backend.tag}</div>
                    <h3 className="card-title">{t.skills.backend.title}</h3>
                  </div>
                  <div className="card-skills-list">
                    PHP &nbsp;&bull;&nbsp; Python &nbsp;&bull;&nbsp; Node.js &nbsp;&bull;&nbsp; Laravel
                  </div>
                  <div className="floating-logos">
                    <div className="floating-logo" style={{ top: '15%', right: '15%', width: '90px', height: '90px' }}>
                      <SkillIcon name="PHP" />
                    </div>
                    <div className="floating-logo" style={{ top: '45%', right: '10%', width: '100px', height: '100px' }}>
                      <SkillIcon name="Python" />
                    </div>
                    <div className="floating-logo" style={{ bottom: '20%', left: '10%', width: '85px', height: '85px' }}>
                      <SkillIcon name="Node.js" />
                    </div>
                    <div className="floating-logo" style={{ bottom: '35%', right: '35%', width: '75px', height: '75px' }}>
                      <SkillIcon name="Laravel" />
                    </div>
                  </div>
                </motion.div>

                {/* Programming Lang Card */}
                <motion.div
                  className="skills-card programming-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div>
                    <div className="card-tag">{t.skills.programming.tag}</div>
                    <h3 className="card-title">{t.skills.programming.title}</h3>
                  </div>
                  <div className="card-skills-list">
                    C &nbsp;&bull;&nbsp; C++ &nbsp;&bull;&nbsp; SQL
                  </div>
                  <div className="floating-logos">
                    <div className="floating-logo" style={{ bottom: '15%', left: '10%', width: '75px', height: '75px' }}>
                      <SkillIcon name="C" />
                    </div>
                    <div className="floating-logo" style={{ top: '15%', right: '25%', width: '75px', height: '75px' }}>
                      <SkillIcon name="C++" />
                    </div>
                    <div className="floating-logo" style={{ bottom: '15%', right: '10%', width: '75px', height: '75px' }}>
                      <SkillIcon name="SQL" />
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Right Column: Databases & Tools/Design */}
              <div className="skills-column-right">
                {/* Databases Card */}
                <motion.div
                  className="skills-card databases-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  viewport={{ once: true }}
                >
                  <div>
                    <div className="card-tag">{t.skills.databases.tag}</div>
                    <h3 className="card-title">{t.skills.databases.title}</h3>
                  </div>
                  <div className="card-skills-list">
                    MySQL &nbsp;&bull;&nbsp; MongoDB &nbsp;&bull;&nbsp; PostgreSQL &nbsp;&bull;&nbsp; MariaDB
                  </div>
                  <div className="floating-logos">
                    <div className="floating-logo" style={{ top: '20%', right: '20%', width: '75px', height: '75px' }}>
                      <SkillIcon name="MySQL" />
                    </div>
                    <div className="floating-logo" style={{ bottom: '15%', left: '40%', width: '70px', height: '70px' }}>
                      <SkillIcon name="MongoDB" />
                    </div>
                    <div className="floating-logo" style={{ top: '15%', left: '15%', width: '75px', height: '75px' }}>
                      <SkillIcon name="PostgreSQL" />
                    </div>
                    <div className="floating-logo" style={{ bottom: '15%', right: '10%', width: '70px', height: '70px' }}>
                      <SkillIcon name="MariaDB" />
                    </div>
                  </div>
                </motion.div>

                {/* Tools & Design Card */}
                <motion.div
                  className="skills-card tools-design-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.25 }}
                  viewport={{ once: true }}
                >
                  <div>
                    <div className="card-tag">{t.skills.tools.tag}</div>
                    <h3 className="card-title">{t.skills.tools.title}</h3>
                  </div>
                  <div className="card-skills-list">
                    Git &nbsp;&bull;&nbsp; GitHub &nbsp;&bull;&nbsp; Figma &nbsp;&bull;&nbsp; WordPress &nbsp;&bull;&nbsp; Photoshop &nbsp;&bull;&nbsp; Illustrator &nbsp;&bull;&nbsp; Canva
                  </div>
                  <div className="floating-logos">
                    <div className="floating-logo" style={{ top: '10%', left: '15%', width: '65px', height: '65px' }}>
                      <SkillIcon name="Git" />
                    </div>
                    <div className="floating-logo" style={{ top: '35%', right: '15%', width: '75px', height: '75px' }}>
                      <SkillIcon name="GitHub" />
                    </div>
                    <div className="floating-logo" style={{ top: '60%', left: '10%', width: '70px', height: '70px' }}>
                      <SkillIcon name="Figma" />
                    </div>
                    <div className="floating-logo" style={{ bottom: '20%', right: '10%', width: '65px', height: '65px' }}>
                      <SkillIcon name="WordPress" />
                    </div>
                    <div className="floating-logo" style={{ bottom: '5%', left: '30%', width: '65px', height: '65px' }}>
                      <SkillIcon name="Photoshop" />
                    </div>
                    <div className="floating-logo" style={{ bottom: '35%', left: '40%', width: '70px', height: '70px' }}>
                      <SkillIcon name="Illustrator" />
                    </div>
                    <div className="floating-logo" style={{ bottom: '15%', right: '35%', width: '65px', height: '65px' }}>
                      <SkillIcon name="Canva" />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          <div className="skills-footer">
            {t.skills.footer}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* PROJECTS SECTION */}
      <section id="projects" className="section">
        <div className="projects-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '24px' }}
          >
            <div className="section-label">{t.projects.label}</div>
            <h2 className="section-title">{t.projects.title}</h2>
          </motion.div>

          <div className="projects-galaxy-wrapper">
      
{/* Central Large Planet */}
<div className="planet-center-container">
  <div
    className={`planet-center-sphere ${getPlanetData(activeProject).glow}`}
    style={{
      background: "radial-gradient(circle at 35% 25%, rgba(255,255,255,0.22) 0%, rgba(216,180,254,0.42) 8%, rgba(192,132,252,0.72) 18%, rgba(168,85,247,0.8) 32%, rgba(91,18,115,0.96) 58%, rgba(20,10,27,1) 100%)",
      borderRadius: "50%",
      overflow: "hidden",
    }}
  />

  <div className="planet-center-content">
    <div className="planet-center-badge">
      ✦ {t.projects.featured}
    </div>

    <div className="planet-center-num">
      {t.projects.items[activeProject]?.num}
    </div>

    <h3 className="planet-center-title">
      {t.projects.items[activeProject]?.title}
    </h3>

    <p className="planet-center-desc">
      {t.projects.items[activeProject]?.desc}
    </p>
  </div>

  <button
    className="planet-center-view-btn"
    onClick={() => {
      setModalProject(activeProject);
      setModalOpen(true);
    }}
    aria-label={t.projects.view}
  >
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  </button>

  <div className="planet-center-view-label">
    {t.projects.view}
  </div>
</div>

            {/* Orbiting Planets for ALL projects */}
            {t.projects.items.map((item, idx) => {
              if (idx === activeProject) return null; // Don't show active project in orbit

              // Calculate orbital position dynamically
              const orbitingCount = t.projects.items.length - 1;
              const positionIdx = idx > activeProject ? idx - 1 : idx;
              const angle = (positionIdx / orbitingCount) * (2 * Math.PI) - Math.PI / 2;
              const radiusX = 380;
              const radiusY = 210;
              const x = Math.round(Math.cos(angle) * radiusX);
              const y = Math.round(Math.sin(angle) * radiusY);

              const planetData = getPlanetData(idx);

              return (
                <div
                  key={idx}
                  className="planet-orbiting-container"
                  style={{
                    transform: `translate(${x}px, ${y}px)`,
                  }}
                  onClick={() => setActiveProject(idx)}
                >
                  <div className="planet-orbiting-label">
                    {item.num} {item.title}
                  </div>
                  <div
                    className={`planet-orbiting-sphere ${planetData.glow}`}
                    style={{ background: getPlanetBackground(planetData) }}
                  />
                  <button
                    className="planet-orbiting-eye"
                    onClick={(e) => {
                      e.stopPropagation();
                      setModalProject(idx);
                      setModalOpen(true);
                    }}
                    aria-label={t.projects.view}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Projects Pill Selector Strip */}
          <div className="projects-nav-pills">
            {t.projects.items.map((item, idx) => (
              <button
                key={idx}
                className={`project-nav-pill${idx === activeProject ? " active" : ""}`}
                onClick={() => setActiveProject(idx)}
              >
                <span className="pill-num">{item.num}</span>
                <span className="pill-title">{item.title}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* EXPERIENCE & EDUCATION */}
      <section id="experience" className="section">
        <div className="experience-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="section-label">{t.experience.label}</div>
            <h2 className="section-title">{t.experience.title}</h2>
          </motion.div>

          <div className="journey-grid">
            {/* Education Column */}
            <div className="journey-column">
              <motion.h3
                className="journey-column-title"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <span className="accent-dot">✦</span> {t.experience.education}
              </motion.h3>
              <div className="timeline">
                {t.experience.eduItems.map((item, index) => (
                  <motion.div
                    key={index}
                    className="timeline-item"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    viewport={{ once: true }}
                  >
                    <div className="timeline-dot" />
                    <div className="timeline-content">
                      <div className="timeline-date">{item.date}</div>
                      <h4 className="timeline-title">{item.title}</h4>
                      <p className="timeline-subtitle">{item.subtitle}</p>
                      <p className="timeline-location">{item.location}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Experience Column */}
            <div className="journey-column">
              <motion.h3
                className="journey-column-title"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <span className="accent-dot">✦</span> {t.experience.experience}
              </motion.h3>
              <div className="timeline">
                {t.experience.expItems.map((item, index) => (
                  <motion.div
                    key={index}
                    className="timeline-item"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    viewport={{ once: true }}
                  >
                    <div className="timeline-dot" />
                    <div className="timeline-content">
                      <div className="timeline-date">{item.date}</div>
                      <h4 className="timeline-title">{item.title}</h4>
                      <p className="timeline-subtitle">{item.subtitle}</p>
                      <p className="timeline-location">{item.location}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* CONTACT */}
      <section id="contact" className="section">
        <div className="contact-card">
          <div className="contact-left">
            <div>
              <h2 className="contact-connect-title">{t.contact.connect.split('\n')[0]}<br />{t.contact.connect.split('\n')[1]}</h2>
              <p className="contact-connect-desc">
                {t.contact.desc}
              </p>
            </div>

            <div className="contact-socials">
              <a href="mailto:peepmeela@gmail.com" className="contact-social-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                {t.contact.email}
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-social-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                {t.contact.linkedin}
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="contact-social-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                {t.contact.github}
              </a>
            </div>
          </div>

          <div className="contact-right">
            <h3 className="contact-form-title">
              {t.contact.formTitle} <span style={{ color: "var(--accent-hi)" }}>♡</span>
            </h3>

            {submitResult && (
              <div
                style={{
                  padding: "12px 16px",
                  borderRadius: "12px",
                  marginBottom: "20px",
                  fontSize: "14px",
                  fontWeight: "500",
                  background: submitResult.success ? "rgba(168,85,247,0.15)" : "rgba(239,68,68,0.15)",
                  border: `1px solid ${submitResult.success ? "var(--accent)" : "#ef4444"}`,
                  color: submitResult.success ? "var(--text)" : "#f87171"
                }}
              >
                {submitResult.message}
              </div>
            )}

            <form onSubmit={handleContactSubmit}>
              <div className="contact-inputs-row">
                <div className="contact-input-group">
                  <label htmlFor="contact-name">{t.contact.name}</label>
                  <input type="text" id="contact-name" name="name" required disabled={submitting} />
                </div>

                <div className="contact-input-group">
                  <label htmlFor="contact-email">{t.contact.emailLabel}</label>
                  <input type="email" id="contact-email" name="email" required disabled={submitting} />
                </div>
              </div>

              <div className="contact-input-group">
                <label htmlFor="contact-message">{t.contact.message}</label>
                <textarea id="contact-message" name="message" rows={4} required disabled={submitting}></textarea>
              </div>

              <button type="submit" className="contact-submit-btn" disabled={submitting}>
                {submitting ? t.contact.sending : t.contact.sendBtn}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-text">© 2025 <strong>Malak Metouagui</strong>. {lang === "de" ? "Alle Rechte vorbehalten." : lang === "fr" ? "Tous droits réservés." : "All rights reserved."}</div>
        <div className="footer-text">{lang === "de" ? "Erstellt mit" : lang === "fr" ? "Développé avec" : "Built with"} <strong>Next.js</strong> &amp; <strong>Tailwind CSS</strong></div>
      </footer>

      {/* PROJECT DETAILS MODAL */}
      {modalOpen && modalProject !== null && (
        <div className="project-modal-overlay" onClick={() => setModalOpen(false)}>
          <motion.div
            className="project-modal-container"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
          >
            <button className="project-modal-close-btn" onClick={() => setModalOpen(false)}>✕</button>
            <div className="project-modal-header">
              <div className="project-modal-label">{t.projects.label} {t.projects.items[modalProject].num}</div>
              <h3 className="project-modal-title">{t.projects.items[modalProject].title}</h3>
            </div>
            <div className="project-modal-body">
              {t.projects.items[modalProject].image ? (
                <div className="project-modal-image-container">
                  <img
                    src={t.projects.items[modalProject].image}
                    alt={t.projects.items[modalProject].title}
                    className="project-modal-img"
                  />
                </div>
              ) : (
                <div className="project-modal-visualisation">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ animation: 'bubble-float 3s ease-in-out infinite' }}>
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 16v-4" />
                    <path d="M12 8h.01" />
                  </svg>
                  <div className="project-modal-visualisation-text">
                    <strong>Visualisation Space</strong><br />
                    The files and full assets for {t.projects.items[modalProject].title} will be integrated here upon receipt.
                  </div>
                </div>
              )}

              <p className="project-modal-desc">
                {t.projects.items[modalProject].fullDesc || t.projects.items[modalProject].desc}
              </p>

              {t.projects.items[modalProject].link && (
                <a
                  href={t.projects.items[modalProject].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-modal-link"
                >
                  {t.projects.visitSite} ↗
                </a>
              )}

              {t.projects.items[modalProject].skills && (
                <div className="project-modal-skills">
                  <div className="project-modal-skills-title">Skills &amp; Deliverables</div>
                  <div className="project-modal-skills-list">
                    {t.projects.items[modalProject].skills.map((skill: string, idx: number) => (
                      <span key={idx} className="project-modal-skill-badge">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}

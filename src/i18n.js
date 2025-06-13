import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Footer translations
      Solutions: "Solutions",
      Services: "Services",
      Process: "Process",
      AboutUs: "About us",
      Onboarding: "Onboarding",
      Contact: "Contact",
      Blog: "Blog",
      English: "English",
      DarkMode: "Dark mode",
      AllRightsReserved: "All Rights Reserved Ovacall 2025",
 Solutions: "Solutions",
      // Add Solutions section translations:
      solutions: {
        heading: "What do we bring to your business",
        cards: {
          tailoredB2B: {
            title: "Tailored B2B solutions",
            description:
              "We design custom strategies aligned with your unique business goals, ensuring measurable results and lasting impact."
          },
          multilingualSupport: {
            title: "Multilingual Sales & Support",
            description:
              "Engage your customers in their preferred language, our team is fluent in English and French delivering support across markets."
          },
          expertAgents: {
            title: "Expert Agents, Ready to Go",
            description:
              "Our professional agents are fully trained and ready to integrate with your operations, extending your team’s capabilities."
          }
        }
      },
      // Aboutus translations
      aboutUsButton: 'About Us',
      teamTitle: 'The team behind Ovacall',
      aboutUsParagraph: 'At Ovacall, we go beyond traditional call center services. we combine advanced expertise with genuine empathy to create customer experiences that go beyond answering calls. We become an integral part of your business, understanding your values and goals to deliver personalized support that builds lasting relationships.',
      teamMembers: {
        JohnDoe: 'John Doe',
        JaneSmith: 'Jane Smith',
        RobertJohnson: 'Robert Johnson',
        EmilyDavis: 'Emily Davis',
      },

      // ContactUs translations
      contact_heading: "Ready to elevate your sales with Ovacall?",
      email: "Email",
      call_us: "Call Us",
      address: "Address",
      address_full: "Address road, Postal code, Region, Country",
      selected_date: "Selected Date",
      thank_you: "Thank You",
      we_will_contact: "We will be in touch soon.",
      full_name: "Full Name",
      phone: "Telephone Number",
      subject: "Subject",
      message: "Message",
      send_message: "Send your message",
      select_date: "Select a Date",
      close: "Close",
      confirm: "Confirm Date",
      schedule_consultation: "Schedule a free consultation",
navbar: {
        solutions: "Solutions",
        services: "Services",
        process: "Process",
        aboutUs: "About us",
        onboarding: "OnBoarding",
        contact: "Contact",
        blog: "Blog",
        bookCall: "Book a call"
      },
      // Onboarding translations
      onboarding: {
        title: "Onboarding",
        subtitle: "How to get started",
        step1: {
          title: "1. Schedule a free consultation",
          description: "Book a free consultation with one of our experts to explore how Ovacall can support your business and answer any initial questions."
        },
        step2: {
          title: "2. Define your needs & goals",
          description: "We will collaborate with you to understand your challenges, define key objectives, and outline a clear path toward long-term success."
        },
        step3: {
          title: "3. Launch your team",
          description: "We’ll build and onboard a dedicated team tailored to your goals—ready to integrate smoothly and start delivering results from day one."
        },
        benefits: {
          title: "What will you get from Ovacall",
          items: [
            "High-quality, French and English-speaking agents",
            "Personalized sales and support strategy",
            "Seamless integration with your current systems and processes",
            "A dedicated team that adapts to your needs",
            "Transparent reporting and performance tracking"
          ]
        }
      },
       home: {
        heroImageAlt: "Hero background",
        professionalSalesOutsourcing: "Professional sales outsourcing",
        heroTitle: {
          line1: "Turn calls",
          line2: "into conversions",
          line3: "with ovacall"
        },
        heroSubtitle: "Strengthen your sales with a multilingual, high-performing team that scales with you, without breaking the bank.",
        bookConsultation: "Book your free consultation"
      },
      // Process Section
      process: {
        label: "Process",
        heading: "Our proven 4-steps approach to a successful partnership",
        steps: [
          {
            title: "Discovery & needs assessment",
            description:
              "We start by understanding your needs, challenges, and sales goals. In a free consultation, we’ll ask the right questions to learn about your market, your customers, and what success means to you. This lets us shape the ideal solution for your business."
          },
          {
            title: "Tailored team setup",
            description:
              "Based on your strategy, we hand-pick a team of trained agents who match your industry and brand. We brief and train them on your products, values, and CRM tools. Ovacall builds you a mini in-house team, working from our Tunisian hub. We also set clear KPIs and reporting metrics to match your goals, like lead conversion rates and customer satisfaction scores."
          },
          {
            title: "Easy integration",
            description:
              "Whether you are using your own CRM or ours, our team fits right into your daily workflow. We work closely with your systems and processes so it feels like we are part of your in-house team. The result? Consistent, high-quality service your customers can count on."
          },
          {
            title: "Long-term optimization",
            description:
              "We call, sell, and improve. We track key metrics and gather feedback to adjust and optimize our service based on your evolving needs."
          }
        ]
      },
       chat: {
        title: "Let's Chat!",
        button: "Book your free consultation",
        features: {
          customStrategies: "Custom Strategies",
          teamOfExperts: "Team of experts",
          freeConsultation: "Free consultation"
        }
      },

      // Services translations
      services: {
        heading: "How we help you overcome challenges",
        tabs: {
          operationalCosts: {
            title: "Operational costs",
            heading: "Cut High Operational Costs",
            description:
              "Managing an in-house team means ongoing expenses, salaries, benefits, office space, and more. Ovacall delivers expert sales and support professionals at a fraction of the cost, helping you reduce overhead without sacrificing quality."
          },
          teamScaling: {
            title: "Team scaling",
            heading: "Staffing That Grows With You",
            description:
              "Managing an in-house team means ongoing expenses, salaries, benefits, office space, and more. Ovacall delivers expert sales and support professionals at a fraction of the cost, helping you reduce overhead without sacrificing quality."
          },
          customerService: {
            title: "Customer service",
            heading: "Fix Inconsistent Customer Service",
            description:
              "Overwhelmed in-house teams can’t always keep up, causing slow responses and missed follow-ups. With Ovacall, every customer is met with prompt, professional care from agents trained to represent your brand at its best and convert unhappy customers into satisfied, loyal ones."
          },
          teamRecruiting: {
            title: "Team recruiting",
            heading: "Preserve Resources Spent on Hiring & Training",
            description:
              "Recruiting and training quality agents is time-consuming and expensive — only to start over when turnover hits. Ovacall eliminates the hiring burden with a professional sales and support service that delivers the exact result you need from the get-go."
          }
        }
      }
    }
  },

  fr: {
    translation: {
      // Footer translations
      Solutions: "Solutions",
      Services: "Services",
      Process: "Processus",
      AboutUs: "À propos de nous",
      Onboarding: "Intégration",
      Contact: "Contact",
      Blog: "Blog",
      English: "Anglais",
      DarkMode: "Mode sombre",
      AllRightsReserved: "Tous droits réservés Ovacall 2025",

      // Aboutus translations
      aboutUsButton: 'À propos de nous',
      teamTitle: "L'équipe derrière Ovacall",
      aboutUsParagraph: "Chez Ovacall, nous allons au-delà des services traditionnels de centre d'appels. Nous allions expertise pointue et empathie sincère pour créer des expériences client qui vont au-delà de la simple réponse aux appels. Nous nous intégrons pleinement à votre entreprise et comprenons vos valeurs et vos objectifs pour vous offrir un accompagnement personnalisé et bâtir des relations durables.",
      teamMembers: {
        JohnDoe: 'John Doe',
        JaneSmith: 'Jane Smith',
        RobertJohnson: 'Robert Johnson',
        EmilyDavis: 'Emily Davis',
      },
       chat: {
        title: "Discutons !",
        button: "Réservez votre consultation gratuite",
        features: {
          customStrategies: "Stratégies personnalisées",
          teamOfExperts: "Équipe d'experts",
          freeConsultation: "Consultation gratuite"
        }
      },
      solutions: {
        heading: "Ce que nous apportons à votre entreprise",
        cards: {
          tailoredB2B: {
            title: "Solutions B2B sur mesure",
            description:
              "Nous concevons des stratégies personnalisées alignées sur vos objectifs uniques pour garantir des résultats mesurables et durables."
          },
          multilingualSupport: {
            title: "Ventes & support multilingues",
            description:
              "Interagissez avec vos clients dans leur langue préférée. Notre équipe, fluente en anglais et en français, assure un service sur plusieurs marchés."
          },
          expertAgents: {
            title: "Agents experts prêts à l'emploi",
            description:
              "Nos agents professionnels sont entièrement formés et prêts à s’intégrer à vos opérations, en renforçant les capacités de votre équipe."
          }
        }
      },
       navbar: {
        solutions: "Solutions",
        services: "Services",
        process: "Processus",
        aboutUs: "À propos de nous",
        onboarding: "Intégration",
        contact: "Contact",
        blog: "Blog",
        bookCall: "Réservez un appel"
      },
      
 home: {
        heroImageAlt: "Arrière-plan héros",
        professionalSalesOutsourcing: "Externalisation professionnelle des ventes",
        heroTitle: {
          line1: "Transformez les appels",
          line2: "en conversions",
          line3: "avec ovacall"
        },
        heroSubtitle: "Renforcez vos ventes avec une équipe multilingue et performante qui évolue avec vous, sans vous ruiner.",
        bookConsultation: "Réservez votre consultation gratuite"
      },
      // ContactUs translations
      contact_heading: "Prêt à booster vos ventes avec Ovacall ?",
      email: "Email",
      call_us: "Appelez-nous",
      address: "Adresse",
      address_full: "Adresse, Code postal, Région, Pays",
      selected_date: "Date sélectionnée",
      thank_you: "Merci",
      we_will_contact: "Nous serons bientôt en contact.",
      full_name: "Nom complet",
      phone: "Numéro de téléphone",
      subject: "Sujet",
      message: "Message",
      send_message: "Envoyer votre message",
      select_date: "Sélectionnez une date",
      close: "Fermer",
      confirm: "Confirmer la date",
      schedule_consultation: "Planifier une consultation gratuite",

      // Onboarding translations
      onboarding: {
        title: "Intégration",
        subtitle: "Comment démarrer",
        step1: {
          title: "1. Planifier une consultation gratuite",
          description: "Réservez une consultation gratuite avec l’un de nos experts pour explorer comment Ovacall peut soutenir votre entreprise et répondre à vos premières questions."
        },
        step2: {
          title: "2. Définir vos besoins et objectifs",
          description: "Nous collaborerons avec vous pour comprendre vos défis, définir des objectifs clés et établir un plan clair vers le succès à long terme."
        },
        step3: {
          title: "3. Lancer votre équipe",
          description: "Nous constituerons et intégrerons une équipe dédiée adaptée à vos objectifs—prête à s’intégrer parfaitement et à produire des résultats dès le premier jour."
        },
        benefits: {
          title: "Ce que vous recevrez avec Ovacall",
          items: [
            "Agents de haute qualité parlant français et anglais",
            "Stratégie personnalisée de vente et de support",
            "Intégration fluide avec vos systèmes et processus existants",
            "Équipe dédiée qui s’adapte à vos besoins",
            "Rapports transparents et suivi des performances"
          ]
        }
      },

      // Process Section
      process: {
        label: "Processus",
        heading: "Notre approche en 4 étapes pour une collaboration réussie",
        steps: [
          {
            title: "Découverte et évaluation des besoins",
            description:
              "Nous commençons par comprendre vos besoins, vos défis et vos objectifs commerciaux. Lors d'une consultation gratuite, nous posons les bonnes questions pour connaître votre marché, vos clients et votre définition du succès. Cela nous permet de façonner la solution idéale pour votre entreprise."
          },
          {
            title: "Mise en place d'une équipe sur mesure",
            description:
              "En fonction de votre stratégie, nous sélectionnons une équipe d'agents qualifiés correspondant à votre secteur et à votre marque. Nous les formons sur vos produits, vos valeurs et vos outils CRM. Ovacall vous construit une mini-équipe interne depuis notre hub en Tunisie. Nous définissons également des KPI clairs et des indicateurs adaptés à vos objectifs."
          },
          {
            title: "Intégration facile",
            description:
              "Que vous utilisiez votre propre CRM ou le nôtre, notre équipe s'intègre parfaitement à votre flux de travail. Nous travaillons avec vos systèmes et processus comme si nous faisions partie de votre équipe interne. Résultat : un service cohérent et de qualité."
          },
          {
            title: "Optimisation continue",
            description:
              "Nous appelons, vendons et améliorons. Nous suivons les indicateurs clés et recueillons des retours pour adapter et optimiser notre service selon l’évolution de vos besoins."
          }
        ]
      },

      // Services translations
      services: {
        heading: "Comment nous vous aidons à surmonter les défis",
        tabs: {
          operationalCosts: {
            title: "Coûts opérationnels",
            heading: "Réduisez les coûts opérationnels élevés",
            description:
              "Gérer une équipe interne signifie des dépenses continues, salaires, avantages sociaux, espace de bureau, et plus encore. Ovacall fournit des professionnels experts en ventes et support à une fraction du coût, vous aidant à réduire les frais généraux sans sacrifier la qualité."
          },
          teamScaling: {
            title: "Expansion d'équipe",
            heading: "Un personnel qui grandit avec vous",
            description:
              "Gérer une équipe interne signifie des dépenses continues, salaires, avantages sociaux, espace de bureau, et plus encore. Ovacall fournit des professionnels experts en ventes et support à une fraction du coût, vous aidant à réduire les frais généraux sans sacrifier la qualité."
          },
          customerService: {
            title: "Service client",
            heading: "Résoudre le service client incohérent",
            description:
              "Les équipes internes débordées ne peuvent pas toujours suivre, ce qui entraîne des réponses lentes et des suivis manqués. Avec Ovacall, chaque client reçoit une attention rapide et professionnelle d’agents formés pour représenter votre marque au mieux et transformer les clients mécontents en clients satisfaits et fidèles."
          },
          teamRecruiting: {
            title: "Recrutement d'équipe",
            heading: "Préservez les ressources consacrées à l'embauche et à la formation",
            description:
              "Le recrutement et la formation d’agents de qualité sont chronophages et coûteux, pour ensuite recommencer en cas de turnover. Ovacall élimine ce fardeau grâce à un service professionnel de ventes et support qui livre exactement le résultat dont vous avez besoin dès le départ."
          }
        }
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',            // default language
    fallbackLng: 'en',    // fallback language
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;

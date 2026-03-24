export const projects = [
  {
     slug: 'agenda-project',
     title: 'Agenda System (PHP + SQL)',
     description:
    'A backend-driven scheduling system with structured data handling and persistent storage.',

      overview:
    'A full agenda management system designed to handle scheduling with consistent data storage and retrieval. The application allows users to create, update, and manage events through a structured interface connected to a SQL database.',

      problem:
    'Basic scheduling tools often lack structured data handling and reliable persistence, making it difficult to manage and update events efficiently over time.',

      solution:
    'Developed a PHP-based system connected to a SQL database, implementing full CRUD operations with a clear separation between application logic and data storage. Designed the database schema to ensure consistent relationships and predictable data flow.',

      result:
    'A stable backend-driven application capable of handling real-world scheduling scenarios, with reliable data persistence and efficient event management.',

      howItWorks: [
     'Handles event creation, updates, and deletion through PHP logic',
     'Stores and retrieves data using a structured SQL database',
     'Maintains consistent data flow between interface and backend',
     'Ensures data persistence across sessions',
        ],

       tech: ['PHP', 'SQL', 'HTML', 'CSS'],
       link: '#',

       github: '#', 
       live: '#',
  },
  
  {
  slug: 'portfolio-website',
  title: 'Portfolio Website (Astro)',
  description:
    'A structured portfolio built with Astro and Tailwind, focused on clarity, performance, and project presentation.',

  overview:
    'A personal portfolio designed to present work in a clean, readable, and structured way. Built with Astro and Tailwind CSS, the site focuses on component-based organization, fast page rendering, and a layout that keeps attention on the content.',

  problem:
    'Many portfolio sites feel cluttered, generic, or poorly structured, which makes it harder for projects and technical strengths to stand out clearly.',

  solution:
    'Built the site using Astro with reusable components and a consistent layout system, keeping the design minimal and content-focused. Structured the project pages to present work as case studies, with clear sections for overview, problem, solution, and result.',

  result:
    'A fast, organized portfolio that presents projects more professionally and makes technical work easier to scan, understand, and evaluate.',

  howItWorks: [
    'Uses Astro for fast static page generation and clean routing',
    'Organizes content through reusable components and structured layouts',
    'Presents projects as case studies instead of simple descriptions',
    'Keeps styling consistent with Tailwind utility classes',
       ],

  tech: ['Astro', 'Tailwind CSS', 'TypeScript'],
  link: '#',


  github: '#', 
  live: '#',
}
];
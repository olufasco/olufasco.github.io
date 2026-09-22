// All site content lives here. Edit this file to update the portfolio.

export type Category = 'Backend' | 'Frontend' | 'Desktop & Console'

export interface Project {
  name: string
  summary: string
  highlights?: string[]
  stack: string[]
  category: Category
  /** Public source link. Omit for private repos. */
  repo?: string
  /** Optional extra link (live demo, related repo, ...). */
  extra?: { label: string; url: string }
  note?: string
}

export const profile = {
  name: 'Fasco',
  handle: 'olufasco',
  role: 'Full-Stack Developer',
  tagline:
    'I build ASP.NET Core APIs and the React front ends that sit on top of them: clean domain models, secure auth and interfaces people enjoy using.',
  about: [
    'I work across the whole stack. On the server that means C#, ASP.NET Core, Entity Framework Core and SQL Server, structured with Clean Architecture, CQRS and the repository/unit-of-work patterns when a project calls for it. On the client it means React and TypeScript.',
    'My current flagship is BHL, a PS5 football league platform with automatic promotion and relegation, knockout cups and admin-managed results, built end to end on .NET 8 and React.',
  ],
  github: 'https://github.com/olufasco',
  // Add these to show them in the Contact section. Empty values are hidden.
  email: '',
  linkedin: '',
  cv: '',
}

export const skills: { group: string; items: string[] }[] = [
  {
    group: 'Backend',
    items: ['C#', '.NET 8 / 9', 'ASP.NET Core Web API', 'ASP.NET Core MVC', 'Entity Framework Core', 'ASP.NET Identity', 'JWT & refresh tokens', 'MediatR / CQRS', 'FluentValidation', 'AutoMapper', 'Serilog'],
  },
  {
    group: 'Frontend',
    items: ['React', 'TypeScript', 'JavaScript', 'React Router', 'Axios', 'Vite', 'HTML & CSS'],
  },
  {
    group: 'Data & DevOps',
    items: ['SQL Server', 'PostgreSQL', 'MySQL', 'Docker', 'GitHub Actions', 'CI/CD', 'Swagger / OpenAPI', 'Git'],
  },
]

export const featured: Project[] = [
  {
    name: 'BHL (Brutality House League)',
    summary:
      'A PS5 football tournament platform with player profiles, divisions, fixtures, standings and admin-managed results.',
    highlights: [
      'Automatic promotion & relegation between divisions',
      'BHL Cup knockout tournaments with player self-matching and an admin draw',
      'Scoring engine for forfeits and dynamic house rules; clean-sheet tracking and past-season standings',
      'JWT auth with seeded Admin role and Player self-registration',
    ],
    stack: ['ASP.NET Core 8', 'EF Core', 'SQL Server', 'JWT', 'React'],
    category: 'Backend',
    note: 'Private repo',
    extra: { label: 'Early prototype', url: 'https://github.com/olufasco/BHL-main' },
  },
  {
    name: 'FoodHubPro',
    summary: 'A multi-vendor food ordering and delivery platform API.',
    highlights: [
      'Clean Architecture split into API, Application, Domain and Infrastructure projects',
      'CQRS with MediatR, FluentValidation pipelines and AutoMapper DTOs',
      'ASP.NET Identity with JWT access tokens and refresh tokens',
      'Structured logging with Serilog',
    ],
    stack: ['.NET 9', 'MediatR', 'EF Core', 'Identity', 'JWT', 'Serilog'],
    category: 'Backend',
    repo: 'https://github.com/olufasco/FoodHubPro',
  },
  {
    name: 'Zentrium Hospital Management API',
    summary:
      'The data backbone for a hospital: patients, staff, wards, appointments, billing and pharmacy.',
    highlights: [
      '20+ entity domain model: doctors, nurses, wards, beds, visits, vitals, diagnoses, lab reports',
      'Billing, payments and HMO coverage',
      'Shared BaseEntity and EF Core relationships on SQL Server',
    ],
    stack: ['.NET 8', 'EF Core', 'SQL Server', 'Identity', 'Swagger'],
    category: 'Backend',
    repo: 'https://github.com/olufasco/Zentrium.HospitalManagement.Api',
  },
  {
    name: 'ProductOrderApi',
    summary: 'An e-commerce REST API covering products, categories, carts and orders.',
    highlights: [
      'Repository + Unit of Work data access',
      'JWT authentication with BCrypt password hashing',
      'Request validation with FluentValidation',
    ],
    stack: ['.NET 8', 'EF Core', 'SQL Server', 'JWT', 'BCrypt'],
    category: 'Backend',
    repo: 'https://github.com/olufasco/ProductOrderApi',
  },
]

export const projects: Project[] = [
  {
    name: 'FinShark',
    summary: 'React + TypeScript company search that queries the Financial Modeling Prep API and shows results as cards.',
    stack: ['React', 'TypeScript', 'Axios'],
    category: 'Frontend',
    repo: 'https://github.com/olufasco/FIN-SHARK',
  },
  {
    name: 'Dating App Front End',
    summary: 'Multi-page dating app UI with profiles, matches and chat, built as a team project.',
    stack: ['React', 'React Router', 'Vite'],
    category: 'Frontend',
    repo: 'https://github.com/IT-Specialist1/Dating-FrontEnd',
  },
  {
    name: 'API Library System',
    summary: 'Versioned REST API for books, authors and genres, secured with Identity and JWT.',
    stack: ['.NET 8', 'API Versioning', 'Identity', 'JWT'],
    category: 'Backend',
    repo: 'https://github.com/olufasco/APILibrarySystem',
  },
  {
    name: 'Library Management System',
    summary: 'MVC app for members, borrow requests and transactions with an admin area; tested with FluentAssertions and EF InMemory.',
    stack: ['ASP.NET Core MVC', 'Identity', 'EF Core'],
    category: 'Backend',
    repo: 'https://github.com/olufasco/LibraryManagementSystem',
  },
  {
    name: 'Task Management System',
    summary: 'MVC task tracker with account management and an admin dashboard.',
    stack: ['ASP.NET Core MVC', 'Identity', 'SQL Server'],
    category: 'Backend',
    repo: 'https://github.com/olufasco/TaskManagementSystem',
  },
  {
    name: 'Pokemon Review API',
    summary: 'REST API for Pokémon, owners, categories and reviews that models many-to-many relationships in EF Core.',
    stack: ['.NET 8', 'EF Core', 'AutoMapper'],
    category: 'Backend',
    repo: 'https://github.com/olufasco/PokemonReview',
  },
  {
    name: 'React Todo App',
    summary: 'A typed todo list built with React and TypeScript on Vite.',
    stack: ['React', 'TypeScript', 'Vite'],
    category: 'Frontend',
    repo: 'https://github.com/olufasco/React-Todo-App',
  },
  {
    name: 'Sneaker E-commerce Site',
    summary: 'A responsive storefront for Nike and Jordan sneakers in plain HTML, CSS and JavaScript.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    category: 'Frontend',
    repo: 'https://github.com/olufasco/Ecommerce',
  },
  {
    name: 'Fasco Bank (WinForms)',
    summary: 'Windows Forms banking app for creating accounts, logging in and leaving reviews.',
    stack: ['C#', 'WinForms', '.NET 8'],
    category: 'Desktop & Console',
    repo: 'https://github.com/olufasco/FascoWinApp',
  },
  {
    name: 'Fasco Bank (Console)',
    summary: 'OOP console banking system with current and savings accounts built on an abstract Account class.',
    stack: ['C#', '.NET 8', 'OOP'],
    category: 'Desktop & Console',
    repo: 'https://github.com/olufasco/FascoBankApp',
  },
  {
    name: 'ATM App',
    summary: 'Console ATM with PIN check, balance, deposits and withdrawals.',
    stack: ['C#', '.NET 8'],
    category: 'Desktop & Console',
    repo: 'https://github.com/olufasco/AtmApp',
  },
]

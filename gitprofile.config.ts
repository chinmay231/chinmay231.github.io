// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'chinmay231', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 4, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: ['chinmay231/chinmay231.github.io'], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['chinmay231/Compio','chinmay231/Stock-Prediction','chinmay231/FUSTT','chinmay231/Fraud_detection_ML'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'Work Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Compio-Benchmarker',
          description:
            'A benchmarking tool for evaluating performance of LLM pipeline for real-world use-case on hybrid/cloud/on-prem architectures.',
          imageUrl:
            '',
          link: '',
        },
        {
          title: 'SVSI-Swiss Vault Storage Intelligence',
          description:
            'Llama3.2 8B on-prem hosted powering RAG solution to interact with VaultFS (proprietary file system) stored files',
          imageUrl:
            '',
          link: '',
        },
        {
          title: 'Imagilect',
          description:
            'Real-time LPR on streaming video feed during vaultFS storage for tracking highway vehicle frequency.',
          imageUrl:
            '',
          link: '',
        },
      ],
    },
  },
  seo: { title: 'Portfolio of Chinmay Kapoor', description: '', imageURL: '' },
  social: {
    linkedin: 'chinmay-kapoor-m-eng-b67344200',
    x: '',
    mastodon: '',
    researchGate: 'Chinmay-Kapoor',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: 'kapoorchinmay231',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    discord: '',
    telegram: '',
    website: 'https://chinmay231.github.io/',
    phone: '',
    email: 'chinmaykapoor2301@gmail.com',
  },
  resume: {
    fileUrl:
      'AI7_25.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'SQL',
    'C/C++',
    'Azure',
    'Fabric',
    'Power BI',
    'Synapse',
    'Git',
    'DevOps',
    'FastAPI',
    'PyTorch',
    'TensorFlow',
    'Data Factory',
    'Docker',
    'Kubernetes',
    'GCP',
    'BigQuery',
    'Vertex AI',
    'Firebase',
    'PySpark',
    'Databricks',
    'LangChain',
    'Llama.cpp',
    'AWS',
    'SageMaker',
    'Bedrock',
    'EC2',
    'Boto3',
    'Lambda',
    'HuggingFace',
    'Gemini AI API',
    'OpenAI Embeddings',
    'Qdrant',
    'FAISS',
    'MongoDB',
    'Airflow',
    'Streamlit',
    'Grafana',
    'Tableau',
  ],
  experiences: [
    {
      company: 'SwissVault GmbH',
      position: 'Data & AI Engineer',
      from: 'January 2024',
      to: 'Present',
      companyLink: 'https://swissvault.io',
    },
    {
      company: 'SOLIDS Lab',
      position: 'Research Assistant (ML Team Lead)',
      from: 'January 2022',
      to: 'August 2024',
      companyLink: 'https://www.linkedin.com/company/solids-lab/about/',
    },
    {
      company: 'United Lex LPO',
      position: 'Software Engineer - Intern',
      from: 'March 2018',
      to: 'Oct 2018',
      companyLink: 'https://unitedlex.com/',
    },
  ],
  certifications: [],
  educations: [
    {
      institution: 'University of Victoria',
      degree: 'M.Eng. in ECE (Specialization in AI-Transformer Architectures)',
      from: '2021',
      to: '2024',
    },
    {
      institution: 'Amity University',
      degree: 'B.Tech. in Computer Science',
      from: '2017',
      to: '2021',
    },
  ],
  publications: [
    {
      title: 'FUSTT: Forecasting using Spatio-Temporal Transformers for Blue Carbon Ecosystems',
      conferenceName: 'Springer(Accepted)',
      journalName: '',
      authors: 'Chinmay Kapoor, Navneet Kaur Popli',
      link: 'Awaiting Publication',
      description:
        'Developed a novel approach utilizing flagged and dual-stage encoder systems in Spatio-Temporal Transformers to predict long-term sequences of required conditions for sustainable Blue Carbon Ecosystems.',
    },
    {
      title: 'Concrete Characteristics Evaluation using ML to reduce carbon emissions in production',
      conferenceName: 'Springer',
      journalName: 'CSCE 2022',
      authors: 'Chinmay Kapoor, Navneet Kaur Popli',
      link: 'https://link.springer.com/chapter/10.1007/978-3-031-34027-7_86',
      description:
        'Devised an ML prediction model using XGBoost, stacked LSTM, ANFIS etc for concrete properties for carbon emission reduction .',
    },
    {
      title: 'Human Activity Recognition using Deep Learning',
      conferenceName: 'IEEE Xplore',
      journalName: 'Confluence 2021',
      authors: 'Chinmay Kapoor, Lamiyah Khattar',
      link: 'https://ieeexplore.ieee.org/document/9377114',
      description:
        'Evaluating human activity detection via wearable sensor data using LSTM & hybrid CNN-LSTM Models',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'kapoorchinmay231', // to hide blog section, keep it empty
    limit: 5, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'halloween',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: true,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made by <a 
      class="text-primary" href="https://github.com/chinmay231/"
      target="_blank"
      rel="noreferrer"
    >Chinmay Kapoor</a> all Copyright © 2024`,

  enablePWA: true,
};

export default CONFIG;

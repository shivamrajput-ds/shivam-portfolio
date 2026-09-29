export type Project = {
  id: string; category: string; title: string; description: string;
  contribution: string; decision: string; boundary: string;
  technologies: string[]; proof: { value: string; label: string };
  links: { label: string; url: string }[];
};
export const portfolio = {
  name: 'Shivam Rajput', role: 'Data Scientist', location: 'India',
  email: 'shivamrajput.datascientist@gmail.com', resume: '/resume.pdf',
  introduction: 'I turn data into evidence and build machine learning systems around it. My work connects statistics, NLP, and applied ML with strong problem-solving fundamentals.',
  interests: ['Machine learning', 'Deep learning', 'NLP', 'Problem solving'],
  navigation: [
    { label: 'About', id: 'about' }, { label: 'Projects', id: 'projects' },
    { label: 'Skills', id: 'skills' }, { label: 'LeetCode', id: 'leetcode' },
    { label: 'Journey', id: 'journey' }, { label: 'Contact', id: 'contact' },
  ],
  socials: [
    { label: 'GitHub', url: 'https://github.com/shivamrajput-ds' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/shivam-rajput-b0407632b/' },
    { label: 'LeetCode', url: 'https://leetcode.com/u/ShivamSynapse/' },
    { label: 'X / Twitter', url: 'https://x.com/ShivamR65014299' },
  ],
  about: [
    'I’m a Data Scientist in India, pursuing a B.Tech in Computer Science with an AI & ML specialization at Uttaranchal University. I’m interested in the full path from an ambiguous question to an analysis or model whose results can be inspected.',
    'My projects explore complaint analytics, statistical experiments, ML auditing, and retrieval systems. Alongside that work, I practice algorithms, Python, SQL, and Pandas to strengthen the fundamentals behind reliable implementations. I’m continuing to explore deep learning and NLP, with a focus on careful evaluation, clear assumptions, and useful outcomes.',
  ],
  focus: ['Statistical reasoning', 'Reliable machine learning', 'Language & retrieval'],
  education: { institution: 'Uttaranchal University', degree: 'B.Tech · Computer Science & Engineering', specialization: 'Artificial Intelligence & Machine Learning', period: '2023 — 2027', note: 'Pursuing', grade: '8.7 / 10.0 CGPA', location: 'Dehradun, India' },
  skills: [
    { number: '01', title: 'Data & analysis', description: 'Structure, query, and make sense of data.', items: ['Python', 'Pandas', 'NumPy', 'SQL / MS SQL Server', 'PyArrow / Parquet'] },
    { number: '02', title: 'Machine learning', description: 'Build baselines. Validate the assumptions.', items: ['scikit-learn', 'Classification & regression', 'Cross-validation', 'SHAP', 'Deep learning · exploring'] },
    { number: '03', title: 'Language & AI', description: 'Connect language models to evidence.', items: ['NLP / TF-IDF', 'BGE / BM25', 'ChromaDB', 'CrossEncoder reranking', 'LangGraph'] },
    { number: '04', title: 'Statistics', description: 'Separate a signal from uncertainty.', items: ['A/B testing', 'Confidence intervals', 'Effect sizes & power', 'SciPy / Statsmodels', 'Prophet forecasting'] },
    { number: '05', title: 'Engineering', description: 'Make the work reproducible and usable.', items: ['FastAPI', 'Streamlit', 'MLflow', 'Docker', 'pytest / GitHub Actions'] },
    { number: '06', title: 'Computer science', description: 'Practice the fundamentals underneath.', items: ['Data structures & algorithms', 'Dynamic programming', 'Divide and conquer', 'Hash tables', 'Problem solving'] },
  ],
  leetcode: {
    handle: 'ShivamSynapse', url: 'https://leetcode.com/u/ShivamSynapse/',
    snapshot: 'Provided profile snapshot · September 2026',
    total: 576, rank: '161,001', rating: '1,495', contests: 13, acceptance: '72.59%',
    submissions: 1336, activeDays: 143, maxStreak: 23,
    contestGlobalRank: '404,557 / 884,439', contestTop: '46.18%',
    difficulties: [{label: 'Easy', value: 262}, {label: 'Medium', value: 272}, {label: 'Hard', value: 42}],
    languages: [{ label: 'Python3', value: 482 }, { label: 'MS SQL Server', value: 75 }, { label: 'Pandas', value: 36 }],
    badges: ['50 Days Badge 2026', '100 Days Badge 2026', 'Introduction to Pandas'],
    topics: [{label:'Array',value:269},{label:'Hash Table',value:141},{label:'String',value:112},{label:'Database',value:77},{label:'Sorting',value:74},{label:'Math',value:66},{label:'Dynamic Programming',value:35},{label:'Divide and Conquer',value:14},{label:'Monotonic Stack',value:11}],
  },
  provenance: { original: 'https://shivamrajput-ds.github.io/portfolio-website/', checked: '2026-09-27' },
};
export const projects: Project[] = [
  {
    id: 'complaints', category: 'LARGE-SCALE ANALYTICS', title: 'Customer Complaint Intelligence',
    description: 'From a multi-gigabyte complaint file to a usable decision layer.',
    contribution: 'Built a processing pipeline, company risk analysis, NLP routing, forecasting, and an interactive Streamlit dashboard for CFPB complaint data.',
    decision: 'Process the raw CSV in chunks; serve precomputed Parquet summaries so the dashboard never needs to load the full file.',
    boundary: 'Complaint volume is not adjusted for customer base. Narrative coverage is 23.84%, which limits the scope of text analysis.',
    technologies: ['Python', 'Pandas / PyArrow', 'scikit-learn', 'Prophet', 'Streamlit'],
    proof: { value: '15.95M', label: 'complaint records processed' },
    links: [{label:'Source code',url:'https://github.com/shivamrajput-ds/customer-complaint-intelligence'},{label:'Evaluation',url:'https://github.com/shivamrajput-ds/customer-complaint-intelligence/blob/main/docs/evaluation.md'},{label:'Walkthrough',url:'https://youtu.be/ZrXg5p7wbqM'}],
  },
  {
    id: 'experiment', category: 'STATISTICAL EXPERIMENTATION', title: 'Marketing A/B Testing',
    description: 'Is a conversion lift meaningful enough to act on?',
    contribution: 'Analyzed an advertisement-versus-PSA experiment with effect sizes, confidence intervals, and power planning.',
    decision: 'Interpret the observed +0.769 percentage-point uplift alongside uncertainty and rollout costs, rather than relying on a p-value alone.',
    boundary: 'Causal conclusions depend on valid assignment and logging. Positive statistical evidence does not establish profitability.',
    technologies: ['Python', 'Pandas', 'SciPy', 'Statsmodels'],
    proof: { value: '588,101', label: 'users in the experiment' },
    links: [{label:'Source code',url:'https://github.com/shivamrajput-ds/marketing-ab-testing-analysis'},{label:'Experiment report',url:'https://github.com/shivamrajput-ds/marketing-ab-testing-analysis/blob/main/docs/EXPERIMENT_REPORT.md'}],
  },
  {
    id: 'audit', category: 'ML RELIABILITY', title: 'Agentic ML Audit Copilot',
    description: 'Check the data before trusting the model.',
    contribution: 'Built deterministic checks for leakage, imbalance, and data quality, with a human review gate, baseline models, MLflow tracking, and SHAP reports.',
    decision: 'Keep risk decisions in Python. Use the LLM for explanations and reports, while a person approves risky workflows.',
    boundary: 'Designed for single-machine tabular classification and regression review; not automated model selection or enterprise governance.',
    technologies: ['scikit-learn', 'LangGraph', 'MLflow / SHAP', 'FastAPI'],
    proof: { value: 'Human review', label: 'before risky workflows continue' },
    links: [{label:'Source code',url:'https://github.com/shivamrajput-ds/Agentic-ML-Audit-Copilot'},{label:'Walkthrough',url:'https://youtu.be/kFzNam74QBc'}],
  },
  {
    id: 'retrieval', category: 'NLP & RETRIEVAL', title: 'Enterprise RAG Assistant',
    description: 'Give numerical and semantic questions different paths.',
    contribution: 'Built document ingestion, hybrid retrieval, reranking, source citations, and deterministic Pandas analytics behind a FastAPI service and React interface.',
    decision: 'Route exact CSV and Excel calculations to Pandas; combine BGE and BM25 with CrossEncoder reranking for semantic questions.',
    boundary: 'The strict evaluation covers 29 cases. A separate 1,642-case benchmark still has an open latency acceptance gate.',
    technologies: ['BGE / BM25', 'CrossEncoder', 'Pandas', 'FastAPI'],
    proof: { value: '29 cases', label: 'in the strict hybrid RAGAS evaluation' },
    links: [{label:'Source code',url:'https://github.com/shivamrajput-ds/enterprise-rag-assistant'},{label:'Evaluation',url:'https://github.com/shivamrajput-ds/enterprise-rag-assistant/blob/main/docs/EVALUATION_REPORT.md'},{label:'Walkthrough',url:'https://youtu.be/Rvdz9DKtz5o'}],
  },
];

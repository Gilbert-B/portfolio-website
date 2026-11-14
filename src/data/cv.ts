// CV content, taken from the owner's CV (Gilbert_Botchway_Data_CV.docx, Nov 2026).
// Keep wording faithful to the CV. Phone number deliberately not published.
export const CV = {
  headline: 'Data Analyst | Power BI | SQL | Python | Product Analytics',
  summary:
    'Data Analyst with 6+ years of experience in data preparation, business intelligence, product analytics and operational reporting. Experienced in extracting, cleaning and transforming data from MongoDB, SQL, Excel and enterprise systems using Python, pandas, SQL and Power Query, then translating it into actionable insights through Power BI and Apache Superset. Strong stakeholder-facing capability, from problem definition and data feasibility through prototyping, analysis and user adoption.',
  skills: [
    { area: 'Analytics', items: 'Data cleaning, exploratory analysis, trend/pattern analysis, KPI development, data validation, product and operational analytics' },
    { area: 'Tools', items: 'Power BI, DAX, Power Query, SQL, Python/pandas, MongoDB, Excel, Jupyter Notebook, Apache Superset' },
    { area: 'Data integration', items: 'SQL views/stored procedures, MongoDB-to-SQL pipelines, database connectivity, reporting datasets, data migration' },
    { area: 'Business', items: 'Requirements gathering, problem definition, stakeholder engagement, dashboard prototyping, reporting automation, user training' },
  ],
  experience: [
    {
      role: 'Data Analyst',
      org: 'GetINNOtized GmbH',
      place: 'Accra, Ghana',
      period: 'March 2023 – Present',
      points: [
        'Partner with stakeholders to understand analytical problems, assess data availability, define requirements and develop decision-support solutions through iterative prototyping.',
        'Built a daily-refreshed Power BI performance solution for recurring cohorts of approximately 50–90 learners, analysing attendance, competency scores, feedback, dropout risk, certifications and graduation outcomes.',
        'Developed learner drill-down and watch-list analytics that helped programme teams compare individual performance with cohort benchmarks and intervene with at-risk learners.',
        'Built a programme-impact dashboard combining demographics, learner feedback and pre-/post-training income information to support sponsor assessment of training effectiveness.',
        'Analysed one year of burglary incidents across approximately 25 retail locations, revealing patterns in location, timing, frequency and financial loss that informed targeted security improvements.',
        'Built product analytics for a job platform serving approximately 300 users, covering user activity, job sourcing, matching, engagement, applications and employer responses.',
        'Developed an automated Python/Jupyter pipeline to extract nested MongoDB data, clean and transform it with pandas, load structured tables into SQL and feed Power BI/Apache Superset reports.',
        'Created SQL views and stored procedures for reusable reporting datasets and used job-board insights to refine sourcing priorities, support human job curation and identify abnormal drops in match volumes.',
        'Convert recurring ad hoc data requests into reusable or automated reports and train users to interpret dashboards and KPIs.',
      ],
    },
    {
      role: 'Product Manager – Biz360 ERP (Part-time Consulting)',
      org: 'Pandora Software Consulting Ltd',
      place: 'Accra, Ghana',
      period: 'October 2020 – Present',
      points: [
        'Support ERP product development and implementations across approximately 15 client organisations, translating business and reporting requirements into functional specifications.',
        'Defined data/reporting logic, calculations, filters, groupings and outputs for accounting, sales, purchasing, payroll and inventory reports.',
        'Analyse transaction flows to determine how operational data should be captured and presented, then test system outputs and provide structured feedback to developers.',
        'Gather requirements directly from users and train client teams on ERP processes and reporting.',
      ],
    },
    {
      role: 'SAP Consulting Associate',
      org: 'Persol Systems Ltd',
      place: 'Accra, Ghana',
      period: 'October 2020 – March 2023',
      points: [
        'Worked across five SAP Business One implementations, leading one end-to-end and supporting four additional projects.',
        'Led requirements gathering, configuration, data migration and user training across finance, sales, purchasing, inventory, banking and fixed assets.',
        'Migrated master and financial data from legacy systems and Excel using SAP DTW, including charts of accounts, customers, suppliers, items, opening balances and journal entries.',
        'Validated migrated data through reconciliations, inventory counts, trial-balance/financial-statement checks and client sign-off.',
      ],
    },
    {
      role: 'Finance Intern',
      org: 'Rigworld International Services',
      place: 'Accra, Ghana',
      period: 'November 2019 – April 2020',
      points: ['Maintained AP/AR records, supported month-end reporting and performed petty-cash/account reconciliations.'],
    },
  ],
  education: [
    { title: 'MSc Accounting and Finance', where: 'University of Ghana', year: '2025' },
    { title: 'BSc Business Administration (Accounting)', where: 'Kwame Nkrumah University of Science and Technology', year: '2018' },
    { title: 'Institute of Chartered Accountants, Ghana (ICAG)', where: 'Level 2', year: '' },
  ],
  certifications: [
    { title: 'Data Science Professional', where: 'ALX / Explore AI Academy' },
    { title: 'Google Business Intelligence Specialization', where: 'Coursera' },
    { title: 'Data Analysis and Visualization with Microsoft Power BI', where: 'Udacity' },
    { title: 'Financial Modeling and Valuation Analyst (FMVA)', where: 'Corporate Finance Institute' },
  ],
};

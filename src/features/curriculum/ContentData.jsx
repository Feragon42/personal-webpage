import mercantilLogo from '../../assets/banco_mercantil_logo.jpg'
import bhdLogo from '../../assets/bancobhd_logo.jpg'
import banescoLogo from '../../assets/banesco_logo.jpg'
import datanaliticaLogo from '../../assets/datanalitica_logo.jpg'
import dukeLogo from '../../assets/duke_logo.jpg'
import humanoLogo from '../../assets/humano_logo.jpg'
import ibmLogo from '../../assets/ibm_logo.jpg'
import itcLogo from '../../assets/itc_soluciones_tecnologicas_s_a_s_logo.jpg'
import microsoftLogo from '../../assets/microsoft_logo.jpg'
import sasLogo from '../../assets/sas_logo.jpg'
import whizlabsLogo from '../../assets/whizlabs_software_logo.jpg'


function GetSkills() {
    return [
        'PL/SQL',
        'Microsoft Azure Data Factory',
        'Python',
        'SAS',
        'PostgreSQL',
        'REST/APIs',
        'Git/GitHub',
        'Docker',
        'React',
        'TailwindCSS',
    ]
}

function GetExperience() {
    return [
        {
            role: 'Data Engineer',
            company: 'Banco BHD',
            logo: bhdLogo,
            period: '2022/03 - Present',
            points: [
                `Designed, implemented, and maintained ETL pipelines to consolidate source tables from multiple 
                core systems into a centralized Oracle OCI Data Lake, using Azure Data Factory with daily, weekly and 
                monthly batch loads.`,
                `Assigned Data Engineer in all stages of development and implementation of an Income Inference 
                 initiative, building reusable dimension and master tables consumed by various business areas. `,
                `Created ingestion pipelines and ELT processes using Azure Data Factory, PL/SQL, and Azure 
                 Storage Accounts, serving as input for models executed in Azure Machine Learning.`,
                `Developed a Python-based scraping system to retrieve public payroll records from government 
entities and integrate them as new features for model training.`,
                `Created a comprehensive transaction view per customer, integrating multiple transaction types 
across systems to identify internal fund transfers between clients, classify transactions by 
internal/external destination, and map them to relevant economic activity categories. Managing to 
illustrate each customer's economic history and behavioral footprint through their transactional 
patterns.`,
                `Participated in maintenance and support (BAU) for advanced analytics projects including Customer 
                Retention, Pricing, and Next Product to Buy for Corporate Banking, joining in their late-phase 
                development and contributing to their stabilization and enhancement.`,
            ],
        },
        {
            role: 'Programmer Analyst I',
            company: 'Humano Seguros',
            logo: humanoLogo,
            period: '2019/09 - 2022/03',
            points: [
                `Developed PL/SQL backend procedures to support quoting systems for general insurance products, 
including vehicle and property coverage.`,
                `Acted as backend developer for the Intermediary Mobile App, participating from project kickoff 
through production deployment over an 8-month cycle, followed by 6 months of continuous 
improvements and maintenance.`,
                `Contributed to the creation of IZI, a mobile app targeting younger clients, working from the early 
ideation phase in cross-functional workshops. Collaborated closely with external outsourcing teams 
responsible for UI/UX and front-end development.`,
                `Delivered backend support and business logic for various customer-facing applications, ensuring 
stability and responsiveness in transactional services.`,
            ],
        },
        {
            role: 'Data Integrator Consultant',
            company: 'Datanalitica',
            logo: datanaliticaLogo,
            period: '2017/12 - 2019/05',
            points: [
                `Assigned as Data Engineer to implement SAS Financial Management at the Central Bank of Colombia.`,
                `Led the identification and mapping of data sources from the bank’s core transactional systems in 
coordination with internal stakeholders.`,
                `Designed and developed ETL pipelines in SAS Data Integration Studio to populate the OLAP cube 
required for SAS FM.`,
                `Successfully delivered a fully populated data structure within a 4-month timeline, enabling business consultants to complete reporting configuration and analysis in later stages.`,
                `Designed data integration solutions for additional banking clients using SAS (Base, EG, Miner, DIS) and R, supporting reporting and analytics needs across departments.`,
                `Delivered technical training to banking professionals in SAS Enterprise Guide (Basic and Advanced), strengthening client capabilities post-implementation.`,
            ]
        }
    ]
}

function GetProjects() {
    return [
        {
            name: 'Rift Oracle',
            description: 'League of Legends patch analytics platform that compares the impact of Buff and Nerf changes on champions against its performance in high elo and competitive matches.',
            stack: 'Python, Web Scraping, SQLite, Data Analysis, Streamlit',
        },
    ]
}

function GetAboutMe(){
    const years_of_experience = new Date().getFullYear() - 2017
    return [
        `${years_of_experience}+ years of experience`,
        'Cross-functional teams',
        'Problem solving',
        'Highly organized',
        'Continuous learning',
        'Open to remote roles',
    ]
}

function GetCertifications() {
    return [
        {
            name: 'Azure ML: Designing and Preparing Machine Learning Solutions',
            issuer: 'Whizlabs',
            logo: whizlabsLogo,
            date: '2026',
            link: 'https://www.coursera.org/account/accomplishments/verify/GOQJUX5R64AO',
        },
        {
            name: 'Python Project for Data Engineering',
            issuer: 'IBM',
            logo: ibmLogo,
            date: '2025',
            link: 'https://www.coursera.org/account/accomplishments/verify/VSYL1M9TM3CB',
        },
        {
            name: 'Python, Bash and SQL  Essentials for Data  Engineering',
            issuer: 'Duke University',
            logo: dukeLogo,
            date: '2025',
            link: 'https://www.coursera.org/account/accomplishments/specialization/M48AN741C1SE',
        },
        {
            name: 'Microsoft Certified: Azure Data Fundamentals',
            issuer: 'Microsoft',
            logo: microsoftLogo,
            date: '2022',
            link: 'https://www.credly.com/badges/92964f18-23fb-499e-aee0-85cc7d02ff3c/linked_in_profile',
        },
        {
            name: 'SAS Certified Data Integration Developer for SAS 9',
            issuer: 'SAS',
            logo: sasLogo,
            date: '2018',
            link: 'https://www.credly.com/badges/4a82a71b-07c3-4fd7-9891-4d5b7d2f65b1/linked_in_profile',
        },
        {
            name: 'SAS Certified Advanced Programmer for SAS 9',
            issuer: 'SAS',
            logo: sasLogo,
            date: '2018',
            link: 'https://www.credly.com/badges/58a147b9-46ac-4b62-8389-9a8c6fcff21d/linked_in_profile',
        }
    ]
}

export { GetSkills, GetExperience, GetProjects, GetAboutMe, GetCertifications }
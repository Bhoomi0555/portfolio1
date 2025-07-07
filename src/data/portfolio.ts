import { Project, Certificate, Skill, Education } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'AI-Powered DevOps Pipeline',
    description: 'Automated CI/CD pipeline with machine learning-based optimization for deployment strategies.',
    techStack: ['Python', 'Docker', 'Kubernetes', 'TensorFlow', 'Jenkins'],
    image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800',
    github: 'https://github.com/bhoomikhandelwal'
  },
  {
    id: '2',
    title: 'Smart Analytics Dashboard',
    description: 'Real-time data visualization platform with predictive analytics and interactive charts.',
    techStack: ['React', 'Python', 'FastAPI', 'PostgreSQL', 'Chart.js'],
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
    github: 'https://github.com/bhoomikhandelwal'
  },
  {
    id: '3',
    title: 'ML Model Deployment Platform',
    description: 'Scalable platform for deploying and monitoring machine learning models in production.',
    techStack: ['Docker', 'MLflow', 'AWS', 'Python', 'FastAPI'],
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    github: 'https://github.com/bhoomikhandelwal'
  },
  {
    id: '4',
    title: 'Intelligent Code Review Bot',
    description: 'AI-powered code review assistant that provides automated feedback and suggestions.',
    techStack: ['Python', 'OpenAI', 'GitHub API', 'Docker', 'PostgreSQL'],
    image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
    github: 'https://github.com/bhoomikhandelwal'
  }
];

export const certificates: Certificate[] = [
  {
    id: '1',
    title: 'Google Cloud Study Jam',
    issuer: 'Google Cloud',
    date: '2024',
    image: 'https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '2',
    title: 'NPTEL Machine Learning',
    issuer: 'NPTEL',
    date: '2024',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '3',
    title: 'NPTEL Data Science',
    issuer: 'NPTEL',
    date: '2024',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '4',
    title: 'Prayogam 2024',
    issuer: 'Technical Conference',
    date: '2024',
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

export const skills: Skill[] = [
  { name: 'Python', category: 'Programming', level: 90 },
  { name: 'JavaScript', category: 'Programming', level: 85 },
  { name: 'Java', category: 'Programming', level: 80 },
  { name: 'TypeScript', category: 'Programming', level: 75 },
  { name: 'React', category: 'Web', level: 85 },
  { name: 'HTML/CSS', category: 'Web', level: 90 },
  { name: 'Node.js', category: 'Web', level: 80 },
  { name: 'Docker', category: 'DevOps', level: 85 },
  { name: 'Kubernetes', category: 'DevOps', level: 70 },
  { name: 'Jenkins', category: 'DevOps', level: 75 },
  { name: 'AWS', category: 'DevOps', level: 70 },
  { name: 'TensorFlow', category: 'ML', level: 80 },
  { name: 'scikit-learn', category: 'ML', level: 85 },
  { name: 'Pandas', category: 'ML', level: 90 },
  { name: 'Leadership', category: 'Soft', level: 85 },
  { name: 'Communication', category: 'Soft', level: 90 },
  { name: 'Problem Solving', category: 'Soft', level: 95 }
];

export const education: Education[] = [
  {
    id: '1',
    period: '2023-2027',
    title: 'B.Tech AI & Data Science',
    score: 'CGPA: 8.0/10',
    description: 'Specialized in Artificial Intelligence and Data Science with focus on machine learning algorithms, neural networks, and data analytics.'
  },
  {
    id: '2',
    period: '2022-2023',
    title: '12th Grade (PCM)',
    score: '74.8%',
    description: 'Physics, Chemistry, Mathematics with strong foundation in analytical thinking and problem-solving.'
  },
  {
    id: '3',
    period: '2020-2021',
    title: '10th Grade',
    score: '89%',
    description: 'Comprehensive secondary education with excellence in mathematics and science subjects.'
  }
];

export const currentlyLearning = [
  'Docker & Kubernetes',
  'System Design',
  'Transformers',
  'MLOps',
  'Cloud Architecture'
];
import { Project, Certificate, Skill, Education } from '../types';

export const projects: Project[] = [
  {
    id: '3',
    title: 'Code to Story Teller',
    description: 'In this project, you can write code and, for understanding code, you can convert it into a story. There is also an option to generate stories in multiple languages.',
    techStack: ['Python', 'NLP', 'Streamlit', 'Gradio'],
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80',
    github: ''
  },
  {
    id: '4',
    title: 'AI DJ',
    description: 'You can control music with your finger gestures, like pause, stop, rewind, and play music.',
    techStack: ['AI', 'Gesture Recognition', 'Music Control', 'Python', 'Streamlit'],
    image: '/hand.jpg',
    github: ''
  },
  {
    id: '5',
    title: 'Woman Safety Portal',
    description: 'A Streamlit project for women safety. At night, you can send a message and connect with your loved ones, and there is an emergency number as well.',
    techStack: ['Python', 'Streamlit'],
    image: '/woman.jpg',
    github: ''
  },
  {
    id: '6',
    title: 'CI/CD Pipeline Project',
    description: 'A robust CI/CD pipeline setup for automated testing, building, and deployment using modern DevOps tools. Integrates with GitHub Actions, Docker, Jenkins, and Git Bash for seamless delivery.',
    techStack: ['CI/CD', 'GitHub Actions', 'Docker', 'Jenkins', 'Git Bash'],
    image: '/cd.jpg',
    github: ''
  },
  {
    id: '7',
    title: 'All-in-One Dashboard',
    description: 'A powerful dashboard that combines messaging, calling, web scraping, Docker and Linux monitoring, and a file manager—all in one place. Perfect for productivity and system management.',
    techStack: ['React', 'Node.js', 'WebRTC', 'Docker', 'Linux', 'File Manager', 'Twilio', 'OpenCV'],
    image: '/dashboard.jpg',
    github: ''
  }
];

export const certificates: Certificate[] = [
  {
    id: '1',
    title: 'Google Cloud Study Jam',
    issuer: 'Google Cloud',
    date: '25-02-2024',
    image: '/cloud.jpg'
  },
  {
    id: '2',
    title: 'Prayogam-2024',
    issuer: 'Poornima University',
    date: '28-02-2024',
    image: '/pu.jpg'
  },
  {
    id: '3',
    title: 'Food Packaging Technology',
    issuer: 'NPTEL ONLINE CERTIFICATION',
    date: '10-11-2024',
    image: '/food.jpg'
  },
  {
    id: '4',
    title: 'Employment Communication A Lab Based Course',
    issuer: 'NPTEL ONLINE CERTIFICATION',
    date: '4-04-2025',
    image: '/employment.jpg'
  }
];

export const skills: Skill[] = [
  { name: 'Python', category: 'Programming', level: 90, logo: 'python' },
  { name: 'JavaScript', category: 'Programming', level: 85, logo: 'javascript' },
  { name: 'Java', category: 'Programming', level: 80, logo: 'java' },
  { name: 'React', category: 'Web', level: 85, logo: 'react' },
  { name: 'HTML/CSS', category: 'Web', level: 90, logo: 'html5' },
  { name: 'Node.js', category: 'Web', level: 80, logo: 'nodejs' },
  { name: 'Docker', category: 'DevOps', level: 85, logo: 'docker' },
  { name: 'Jenkins', category: 'DevOps', level: 75, logo: 'jenkins' },
  { name: 'scikit-learn', category: 'ML', level: 85, logo: 'scikitlearn' },
  { name: 'Pandas', category: 'ML', level: 90, logo: 'pandas' },
  // New skills
  { name: 'Git', category: 'DevOps', level: 85, logo: 'git' },
  { name: 'GitHub', category: 'DevOps', level: 85, logo: 'github' },
  { name: 'Linux', category: 'DevOps', level: 80, logo: 'linux' },
  { name: 'MySQL', category: 'Web', level: 75, logo: 'mysql' },
  { name: 'CI&CD', category: 'DevOps', level: 80, logo: 'cicd' },
  { name: 'MongoDB', category: 'Web', level: 75, logo: 'mongodb' },
  { name: 'PowerBI', category: 'Web', level: 70, logo: 'powerbi' },
  { name: 'R', category: 'Programming', level: 70, logo: 'r' },
  // Soft Skills
  { name: 'Teamwork', category: 'Soft', level: 90, logo: '🤝' },
  { name: 'Adaptability', category: 'Soft', level: 88, logo: '🔄' },
  { name: 'Time management', category: 'Soft', level: 85, logo: '⏰' },
  { name: 'Leadership', category: 'Soft', level: 85, logo: '🧑‍💼' },
  { name: 'Communication', category: 'Soft', level: 90, logo: '💬' },
  { name: 'Problem Solving', category: 'Soft', level: 95, logo: '🧠' }
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
  { name: 'Flutter', logo: 'flutter' },
  { name: 'Kubernetes', logo: 'kubernetes' },
  { name: 'Terraform', logo: 'terraform' },
  { name: 'AWS', logo: 'aws' },
];
const posts = [
  {
    id: 1,
    title: 'Tech University Launches New AI Research Center',
    excerpt:
      'Our state-of-the-art AI Research Center brings together faculty, students, and industry partners to advance machine learning, robotics, and ethical AI development.',
    author: 'Dr. Elena Rostova',
    date: '2026-06-28',
    tags: ['Research', 'Technology'],
    readingTime: '5 min read',
    image: { gradient: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)', label: 'AI Lab' },
  },
  {
    id: 2,
    title: 'Fall 2026 Admissions: What You Need to Know',
    excerpt:
      'Application deadlines, required documents, and scholarship opportunities for prospective students applying to Tech University this fall semester.',
    author: 'Admissions Office',
    date: '2026-06-15',
    tags: ['Admissions', 'Campus Life'],
    readingTime: '4 min read',
    image: { gradient: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)', label: 'Admissions' },
  },
  {
    id: 3,
    title: 'Student Spotlight: Building Drones That Save Lives',
    excerpt:
      'Meet Maya Patel, an aerospace engineering senior whose capstone project uses autonomous drones for disaster relief mapping in remote regions.',
    author: 'Sarah Jenkins',
    date: '2026-06-02',
    tags: ['Campus Life', 'Alumni'],
    readingTime: '6 min read',
    image: { gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)', label: 'Spotlight' },
  },
  {
    id: 4,
    title: 'Annual Tech Innovation Summit Draws 2,000 Attendees',
    excerpt:
      'Industry leaders, alumni, and students gathered for three days of keynotes, hackathons, and startup pitch competitions on campus.',
    author: 'Events Team',
    date: '2026-05-20',
    tags: ['Events', 'Technology'],
    readingTime: '3 min read',
    image: { gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', label: 'Summit' },
  },
  {
    id: 5,
    title: 'New Biotech Lab Opens for Undergraduate Researchers',
    excerpt:
      'The expanded genomics and bioinformatics facility gives undergraduates hands-on access to CRISPR tools and high-throughput sequencing equipment.',
    author: 'Dr. Marcus Vance',
    date: '2026-05-08',
    tags: ['Research', 'Campus Life'],
    readingTime: '4 min read',
    image: { gradient: 'linear-gradient(135deg, #ec4899 0%, #db2777 100%)', label: 'Biotech' },
  },
  {
    id: 6,
    title: 'Alumni Network Reaches 50,000 Members Worldwide',
    excerpt:
      'Our growing alumni community spans 80 countries, offering mentorship programs, career pipelines, and regional networking chapters.',
    author: 'Alumni Relations',
    date: '2026-04-22',
    tags: ['Alumni', 'Campus Life'],
    readingTime: '5 min read',
    image: { gradient: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)', label: 'Alumni' },
  },
  {
    id: 7,
    title: 'Sustainability Initiative: Campus Goes Carbon Neutral by 2030',
    excerpt:
      'Tech University announces a comprehensive plan including solar installations, green building standards, and a student-led sustainability fund.',
    author: 'Campus Operations',
    date: '2026-04-10',
    tags: ['Campus Life', 'Research'],
    readingTime: '7 min read',
    image: { gradient: 'linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)', label: 'Green Campus' },
  },
  {
    id: 8,
    title: 'How Our MBA Program Prepares Leaders for the AI Era',
    excerpt:
      'Dean of Business shares how the curriculum integrates data analytics, executive leadership, and responsible technology governance.',
    author: 'Prof. James Whitfield',
    date: '2026-03-28',
    tags: ['Admissions', 'Technology'],
    readingTime: '6 min read',
    image: { gradient: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)', label: 'MBA' },
  },
  {
    id: 9,
    title: 'Spring Career Fair: 120 Employers, 3,500 Students',
    excerpt:
      'Recruiters from top tech firms, aerospace companies, and startups connected with students for internships and full-time roles.',
    author: 'Career Services',
    date: '2026-03-15',
    tags: ['Events', 'Alumni'],
    readingTime: '3 min read',
    image: { gradient: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)', label: 'Career Fair' },
  },
];

export default posts;

export function getAllTags(postList) {
  const tagSet = new Set();
  postList.forEach((post) => post.tags.forEach((tag) => tagSet.add(tag)));
  return Array.from(tagSet).sort();
}

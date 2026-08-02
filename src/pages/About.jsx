import React from 'react';
import { GraduationCap, Microscope, Users, ArrowUpRight, Check } from 'lucide-react';

// ─── Data ──────────────────────────────────────────────────────────────────
const STATS = [
  { value: '1998',    label: 'Year Founded' },
  { value: '12,000+', label: 'Enrolled Students' },
  { value: '850+',    label: 'Faculty Members' },
  { value: '80+',     label: 'Countries Represented' },
];

const RANKINGS = [
  { rank: '#1',     category: 'National Innovation',  body: 'National Education Rankings 2026',         note: 'Pioneering educational models and startup incubators.' },
  { rank: 'Top 50', category: 'Global Technology',    body: 'QS World University Rankings 2026',        note: 'Computer science, engineering and applied sciences.' },
  { rank: 'ABET',   category: 'Fully Accredited',     body: 'Accreditation Board for Engineering & Technology', note: 'All engineering and computing programs.' },
];

const VALUES = [
  {
    Icon: GraduationCap,
    title: 'Academic Excellence',
    body: 'A rigorous, industry-aligned curriculum that prioritises critical thinking, technical depth, and high-impact scholarship. Every programme is co-designed with leading employers.',
  },
  {
    Icon: Microscope,
    title: 'Innovative Research',
    body: 'We tackle global challenges in AI, aerospace, and biotechnology — translating fundamental theory into real-world breakthroughs that shape policy, industry, and lives.',
  },
  {
    Icon: Users,
    title: 'Inclusive Community',
    body: 'A campus where every perspective is valued and every student has equitable access to opportunity. Diversity is not a policy here — it is the foundation of our intellectual culture.',
  },
];

const LEADERS = [
  {
    name: 'Dr. Aris Thorne',
    role: 'President & Vice Chancellor',
    tenure: 'Since 2014',
    bio: 'Pioneering educationist with 25+ years leading high-tech academic programmes across four continents. Previously Dean of Engineering at MIT Sloan.',
    image: '/aris_thorne.png',
  },
  {
    name: 'Prof. Elena Rostova',
    role: 'Provost & VP Academics',
    tenure: 'Since 2017',
    bio: "Renowned computer scientist and curriculum architect. Author of the university's industry-partnership framework adopted by six peer institutions.",
    image: '/elena_rostova.png',
  },
  {
    name: 'Dr. Marcus Vance',
    role: 'Dean of Research',
    tenure: 'Since 2016',
    bio: 'Leading aerospace researcher with $40M+ in competitive grants from NASA, DARPA, and the European Research Council.',
    image: '/marcus_vance.png',
  },
  {
    name: 'Sarah Jenkins',
    role: 'Director of Student Affairs',
    tenure: 'Since 2019',
    bio: 'Dedicated to building equitable student support systems. Spearheaded the university\'s first mental health and career-readiness initiative.',
    image: '/sarah_jenkins.png',
  },
];

const CAMPUS = [
  'State-of-the-art sports and recreation complex',
  '60+ active student clubs and societies',
  'Student-run innovation and co-working hubs',
  'Global exchange programmes across 40 universities',
];

const TIMELINE = [
  {
    year: '1998',
    title: 'Founded',
    body: 'Established with 200 students and a mandate to bridge computing disciplines with industrial practice. Four programmes, one campus.',
  },
  {
    year: '2006',
    title: 'Research Expansion',
    body: 'The Aerospace & Robotics Innovation Lab opened, backed by government grants and corporate partnerships. Research headcount tripled.',
  },
  {
    year: '2015',
    title: 'New Campus',
    body: '100-acre smart campus inaugurated — green-certified buildings, dedicated AI labs, and high-performance cleanroom facilities.',
  },
  {
    year: '2026',
    title: 'Global Standing',
    body: '12,000+ students from 80+ countries. Consistently ranked among the world\'s top technology universities for graduate employability.',
  },
];

// ─── Main page ─────────────────────────────────────────────────────────────
export default function About() {
  return (
    <div className="bg-white text-slate-900 font-sans antialiased selection:bg-blue-100 selection:text-blue-900">

      {/* ── HERO ────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-24 bg-gradient-to-b from-[#f8fafc] via-white to-white">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-3xl pointer-events-none -z-10" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-600 mb-6 border border-blue-100/50">
                About TechUniversity
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 leading-[1.08] mb-6">
                Fostering Excellence.<br />
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Driving Innovation.
                </span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed font-light mb-8 max-w-2xl">
                Founded at the intersection of technology and humanity, TechUniversity is a leading global
                institution committed to rigorous education, world-changing research, and an environment where
                tomorrow's leaders are empowered to thrive.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="/register"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-all duration-200 shadow-md shadow-blue-500/10 hover:shadow-lg hover:shadow-blue-500/20 group"
                >
                  Apply Now
                  <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
                <a
                  href="/courses"
                  className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200/60 rounded-xl transition-all duration-200 hover:text-slate-900"
                >
                  Browse Courses
                </a>
              </div>
            </div>

            {/* Right Premium Editorial Image Block */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/10 border-4 border-white ring-1 ring-slate-100">
                <img
                  src="/university_hero.png"
                  alt="TechUniversity smart campus building"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
              </div>
              
              {/* Floating micro-infographic */}
              <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4 max-w-[260px] animate-fade-in">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Academics</h4>
                  <p className="text-sm font-bold text-slate-900">Ranked Top 50 Globally for Applied Sciences</p>
                </div>
              </div>
            </div>

          </div>

          {/* Prominent Statistics Row */}
          <div className="mt-24 lg:mt-32 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="bg-slate-50/50 rounded-2xl p-6 lg:p-8 border border-slate-100 hover:border-blue-100 hover:bg-white hover:shadow-xl hover:shadow-slate-100/50 transition-all duration-300 group"
              >
                <div className="text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-950 bg-gradient-to-br from-slate-950 to-slate-700 bg-clip-text text-transparent group-hover:text-blue-600 transition-colors duration-200">
                  {s.value}
                </div>
                <div className="text-xs lg:text-sm font-medium text-slate-500 mt-2">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RANKINGS & ACCREDITATION ─────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#fafaf9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-semibold tracking-wider uppercase text-blue-600 mb-3 block">
              Recognition
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 leading-tight">
              Global Rankings &amp; Academic Accreditation
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed font-light">
              Our commitment to academic excellence is reflected in global benchmarks and rigorous peer reviews.
            </p>
          </div>

          {/* Rankings Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {RANKINGS.map((r, idx) => {
              // Accent borders depending on cards
              const accents = [
                'hover:border-amber-400 border-l-amber-500',
                'hover:border-blue-500 border-l-blue-600',
                'hover:border-emerald-500 border-l-emerald-500',
              ];
              const textAccents = [
                'text-amber-600',
                'text-blue-600',
                'text-emerald-600',
              ];

              return (
                <div
                  key={r.rank}
                  className={`relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 border-l-4 ${accents[idx % 3]} flex flex-col justify-between h-full group`}
                >
                  <div>
                    <span className={`text-4xl font-extrabold tracking-tight mb-4 block group-hover:scale-105 transition-transform duration-200 origin-left ${textAccents[idx % 3]}`}>
                      {r.rank}
                    </span>
                    <h3 className="text-lg font-bold text-slate-950 mb-2 leading-snug">
                      {r.category}
                    </h3>
                    <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-4">
                      {r.body}
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed font-light">
                      {r.note}
                    </p>
                  </div>
                  <div className="absolute top-6 right-6 text-slate-300 group-hover:text-blue-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── MISSION & VALUES ─────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-semibold tracking-wider uppercase text-blue-600 mb-3 block">
              Our Core Purpose
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 leading-tight">
              The Values That Define Everything We Do
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed font-light">
              We cultivate an environment of academic rigour, relentless discovery, and supportive community.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="relative bg-slate-50/50 hover:bg-white rounded-2xl p-8 border border-slate-100 hover:border-blue-100 hover:shadow-xl transition-all duration-300 flex flex-col items-start group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 shadow-sm shadow-blue-500/5 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <v.Icon size={22} strokeWidth={2} />
                </div>
                <h3 className="text-lg font-bold text-slate-950 mb-3 tracking-tight">
                  {v.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-light">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP ───────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#fafaf9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-end mb-16">
            <div className="lg:col-span-5">
              <span className="text-xs font-semibold tracking-wider uppercase text-blue-600 mb-3 block">
                Leadership
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 leading-tight">
                University Leadership
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-light max-w-2xl">
                Visionary academics and administrators who have dedicated their careers to building one of the world's
                most forward-looking technology universities.
              </p>
            </div>
          </div>

          {/* Leaders Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {LEADERS.map((l) => (
              <div
                key={l.name}
                className="flex flex-col rounded-2xl bg-white border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                {/* Faculty Portrait Box */}
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-slate-100">
                  <img
                    src={l.image}
                    alt={l.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur-md text-white text-[10px] tracking-wider uppercase font-semibold px-2.5 py-1 rounded-md">
                    {l.tenure}
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-base font-bold text-slate-950 leading-snug group-hover:text-blue-600 transition-colors">
                    {l.name}
                  </h3>
                  <span className="text-xs text-blue-600 font-semibold mt-1 mb-3">
                    {l.role}
                  </span>
                  <p className="text-xs text-slate-500 leading-relaxed font-light flex-1">
                    {l.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAMPUS LIFE ──────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* Left Content & Checklist Column */}
            <div className="lg:col-span-6">
              <span className="text-xs font-semibold tracking-wider uppercase text-blue-600 mb-3 block">
                Life at TechUniversity
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 mb-6 leading-tight">
                A Campus Built for Discovery and Personal Growth
              </h2>
              <p className="text-base text-slate-600 leading-relaxed font-light mb-8 max-w-xl">
                Growth at Tech University happens everywhere — not just in lecture halls.
                Over 60 active clubs and societies span competitive coding leagues, aerospace design
                teams, music ensembles, sports squads, and community volunteering. The campus is
                designed to produce well-rounded, globally capable graduates.
              </p>
              <ul className="space-y-4">
                {CAMPUS.map((item) => (
                  <li key={item} className="flex items-start gap-3.5">
                    <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mt-0.5 shrink-0">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span className="text-sm text-slate-700 font-medium leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Balanced Image + Metrics Column */}
            <div className="lg:col-span-6 flex flex-col gap-8">
              {/* Refined Image Box */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl shadow-slate-900/5 border border-slate-100">
                <img
                  src="/campus_life.png"
                  alt="Students collaborating on campus"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent" />
                <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                  Vibrant Campus
                </div>
              </div>

              {/* Grid of Key Campus Metrics */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { number: '60+',   label: 'Student Clubs' },
                  { number: '40',    label: 'Partner Universities' },
                  { number: '94%',   label: 'Employability Rate' },
                  { number: '3.2:1', label: 'Student-to-Advisor' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="bg-slate-50/60 rounded-2xl p-4 lg:p-5 border border-slate-100 hover:bg-white hover:shadow-md transition-all duration-200"
                  >
                    <div className="text-xl lg:text-2xl font-extrabold text-slate-950">
                      {item.number}
                    </div>
                    <div className="text-xs text-slate-500 font-medium mt-1">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── HISTORY & MILESTONES ─────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#fafaf9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-semibold tracking-wider uppercase text-blue-600 mb-3 block">
              History
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 leading-tight">
              25 Years of Building Something Meaningful
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed font-light">
              From our modest origins to an internationally recognized centre of research and learning.
            </p>
          </div>

          {/* Clean Modern Vertical Timeline */}
          <div className="max-w-4xl mx-auto relative pl-8 border-l-2 border-slate-200 space-y-12 py-4 ml-4 md:ml-auto">
            {TIMELINE.map((item) => (
              <div key={item.year} className="relative group">
                
                {/* Custom Pulsing Node Marker */}
                <div className="absolute -left-[41px] top-2 w-5 h-5 rounded-full bg-white border-4 border-slate-200 group-hover:border-blue-600 transition-colors duration-300 flex items-center justify-center shadow-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-blue-600 transition-colors duration-300" />
                </div>
                
                {/* Modern Milestone Card */}
                <div className="bg-white rounded-2xl p-6 lg:p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 group-hover:translate-x-1">
                  <span className="text-base font-extrabold tracking-wider text-blue-600 block mb-1">
                    {item.year}
                  </span>
                  <h3 className="text-lg font-bold text-slate-950 mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-light">
                    {item.body}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLOSING CTA ──────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="relative bg-gradient-to-br from-[#0b122f] to-[#1c2541] rounded-3xl p-8 md:p-16 overflow-hidden shadow-2xl shadow-slate-900/20">
            {/* Decorative background glows */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
            
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="max-w-xl">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
                  Ready to Begin Your Journey?
                </h2>
                <p className="text-blue-200/80 text-sm sm:text-base font-light mt-3 leading-relaxed">
                  Explore our academic programmes or apply today for the upcoming intake.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-4 shrink-0">
                <a
                  href="/courses"
                  className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-white border border-white/20 hover:bg-white/10 rounded-xl transition-all duration-200"
                >
                  Browse Courses
                </a>
                <a
                  href="/register"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-blue-900 bg-white hover:bg-blue-50 rounded-xl transition-all duration-200 shadow-xl shadow-white/5 group"
                >
                  Apply Now
                  <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

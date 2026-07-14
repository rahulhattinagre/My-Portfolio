import { motion } from 'framer-motion';

const education = [
  {
    title: 'Bachelor of Engineering',
    school: 'Sinhgad Institute of Technology',
    period: 'Expected Graduation: 2027',
    detail: 'Computer Engineering • Strong foundation in software engineering & system design',
    cgpa: '8.32/10',
  },
  {
    title: 'Diploma in Information Technology',
    school: 'Government Polytechnic Thane',
    period: '—',
    detail: 'Percentage: 87.94% • Focus on fundamentals & applied programming',
    cgpa: '87.94%',
  },
];


export function Education() {
  return (
    <section id="education" className="border-t border-white/5">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-semibold leading-tight">Education</h2>
            <p className="mt-3 max-w-2xl text-secondaryText">
              Timeline of academic milestones with focus on practical software development.
            </p>
          </div>
        </div>

        <div className="relative mt-10 pl-6">
          <div className="absolute left-2 top-0 h-full w-px bg-white/10" />
          <div className="space-y-5">
            {education.map((e, idx) => (
              <motion.div
                key={e.title + idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                className="relative"
              >
                <div className="absolute -left-6 top-3 h-10 w-10 rounded-full border border-primary/40 bg-[rgba(0,194,168,.08)] grid place-items-center shadow-soft">
                  <div className="h-2.5 w-2.5 rounded-full bg-primary" />
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md shadow-soft">
                  <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold">{e.title}</h3>
                      <p className="mt-1 text-secondaryText">{e.school}</p>
                    </div>
                    <div className="text-sm text-secondaryText">{e.period}</div>
                  </div>

                  <p className="mt-4 text-sm text-secondaryText">{e.detail}</p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <span className="inline-flex items-center rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-secondaryText">
                      {e.title.startsWith('Bachelor') ? 'CGPA' : 'Percentage'}:
                      <span className="ml-2 text-white">{e.cgpa}</span>
                    </span>

                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


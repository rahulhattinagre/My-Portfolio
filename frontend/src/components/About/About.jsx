export function About() {
  return (
    <section id="about" className="border-t border-white/5">
      <div className="mx-auto max-w-6xl px-4 py-16">

        <h2 className="text-3xl font-bold text-white">About Me</h2>

        <p className="mt-4 max-w-3xl text-secondaryText leading-8">
          I am a final-year Computer Engineering student at
          <span className="text-primary font-medium">
            {" "}Sinhgad Institute of Technology
          </span>
          , passionate about software development, problem-solving, and building
          secure, scalable, and user-friendly web applications. I enjoy turning
          ideas into practical solutions while continuously learning modern
          technologies and improving my software engineering skills.
        </p>

        {/* Skills */}

        <div className="mt-12 grid gap-6 md:grid-cols-2">

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-xl font-semibold text-primary mb-3">
              Languages
            </h3>

            <p className="text-secondaryText">
              Java • C++
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-xl font-semibold text-primary mb-3">
              Core CS
            </h3>

            <p className="text-secondaryText">
              Data Structures & Algorithms • Object-Oriented Programming •
              Operating Systems • Computer Networks
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-xl font-semibold text-primary mb-3">
              Backend
            </h3>

            <p className="text-secondaryText">
              Spring Framework • Spring Boot • Spring Security • REST APIs •
              JWT Authentication • JPA / Hibernate
            </p>
          </div>

          {/* Tech Stack */}

          <div className="mt-10 space-y-5">

            <div>
              <h3 className="text-lg font-semibold text-primary inline">
                Languages:
              </h3>
              <span className="ml-2 text-secondaryText">
                Java • C++
              </span>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-cyan-400 inline">
                Core CS:
              </h3>
              <span className="ml-2 text-secondaryText">
                Data Structures & Algorithms • Object-Oriented Programming • Operating Systems • Computer Networks
              </span>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-green-400 inline">
                Backend:
              </h3>
              <span className="ml-2 text-secondaryText">
                Spring Framework • Spring Boot • Spring Security • REST APIs • JWT Authentication • JPA/Hibernate
              </span>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-yellow-400 inline">
                Frontend:
              </h3>
              <span className="ml-2 text-secondaryText">
                React.js • JavaScript • HTML5 • CSS3 • Tailwind CSS
              </span>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-orange-400 inline">
                Databases:
              </h3>
              <span className="ml-2 text-secondaryText">
                MySQL • MongoDB
              </span>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-pink-400 inline">
                Tools:
              </h3>
              <span className="ml-2 text-secondaryText">
                Git • GitHub • Postman • Maven • IntelliJ IDEA • VS Code • Docker (Learning)
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
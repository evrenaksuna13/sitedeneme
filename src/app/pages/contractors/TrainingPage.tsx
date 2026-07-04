import { Link } from "react-router";
import { ChevronRight, Monitor, Users, Award, Clock, ArrowRight } from "lucide-react";
import HeroBanner from "../../components/shared/HeroBanner";
import SectionHeading from "../../components/shared/SectionHeading";
import CTABanner from "../../components/shared/CTABanner";
import { useTranslation } from "../../i18n/LanguageContext";

const COURSES = [
  { title: "GAF Installation Fundamentals", format: "Online", duration: "4 hours", level: "Beginner", category: "Installation", gradient: "from-blue-700 to-blue-900" },
  { title: "Timberline HDZ Advanced Installation", format: "Online", duration: "3 hours", level: "Intermediate", category: "Installation", gradient: "from-slate-600 to-slate-900" },
  { title: "Ventilation Design & Best Practices", format: "Online", duration: "2.5 hours", level: "Intermediate", category: "Technical", gradient: "from-teal-700 to-teal-900" },
  { title: "Commercial TPO Membrane Systems", format: "In-Person", duration: "1 day", level: "Advanced", category: "Commercial", gradient: "from-sky-700 to-sky-900" },
  { title: "Storm Damage Assessment", format: "Online", duration: "2 hours", level: "All Levels", category: "Inspection", gradient: "from-orange-700 to-orange-900" },
  { title: "Business Development for Contractors", format: "Online", duration: "3 hours", level: "All Levels", category: "Business", gradient: "from-violet-700 to-violet-900" },
  { title: "Modified Bitumen Systems", format: "In-Person", duration: "2 days", level: "Advanced", category: "Commercial", gradient: "from-indigo-700 to-indigo-900" },
  { title: "Roofing Safety Certification", format: "Online + Exam", duration: "5 hours", level: "Required", category: "Safety", gradient: "from-red-700 to-red-900" },
  { title: "Master Elite Recertification", format: "Online", duration: "4 hours", level: "Master Elite", category: "Certification", gradient: "from-amber-700 to-amber-900" },
];

export default function TrainingPage() {
  const { t, lang } = useTranslation();
  return (
    <div>
      <div className="bg-[var(--secondary)] border-b border-[var(--border)] py-2.5 px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs font-sans text-gray-500">
          <Link to="/" className="hover:text-[var(--gaf-red)]">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/contractors" className="hover:text-[var(--gaf-red)]">For Contractors</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[var(--gaf-near-black)]">Training Academy</span>
        </div>
      </div>

      <HeroBanner
        height="short"
        title={t("training.title")}
        subtitle={t("training.subtitle")}
        eyebrow={t("training.eyebrow")}
      />

      {/* Format overview */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading eyebrow={t("training.formatsEyebrow")} title={t("training.formatsTitle")} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            {[
              { icon: Monitor, title: "Online Courses", desc: "Self-paced modules accessible 24/7 from any device. Complete coursework between jobs on your schedule.", count: "150+ courses" },
              { icon: Users, title: "In-Person Workshops", desc: "Hands-on training at GAF facilities and regional training centers across North America.", count: "40+ workshops annually" },
              { icon: Award, title: "Certification Exams", desc: "Proctored exams required for certification and recertification. Available online and at testing centers.", count: "Quarterly exams" },
            ].map(({ icon: Icon, title, desc, count }) => (
              <div key={title} className="bg-[var(--secondary)] border border-[var(--border)] p-6">
                <div className="w-12 h-12 bg-[var(--gaf-near-black)] flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-[var(--gaf-near-black)] mb-2">{title}</h3>
                <p className="text-gray-600 text-sm font-sans leading-relaxed mb-3">{desc}</p>
                <span className="text-[var(--gaf-red)] text-sm font-semibold font-sans">{count}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course catalog */}
      <section className="py-16 px-6 bg-[var(--secondary)]">
        <div className="max-w-7xl mx-auto">
          <SectionHeading eyebrow={t("training.catalogEyebrow")} title={t("training.catalogTitle")} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4">
            {COURSES.map((course) => (
              <div key={course.title} className="bg-white border border-[var(--border)] overflow-hidden">
                <div className={`h-24 bg-gradient-to-br ${course.gradient} flex items-end p-3`}>
                  <span className="text-white text-xs font-semibold bg-black/30 px-2 py-0.5 font-sans">{course.category}</span>
                </div>
                <div className="p-5">
                  <h4 className="text-[var(--gaf-near-black)] font-bold text-base mb-2">{course.title}</h4>
                  <div className="flex items-center gap-4 text-xs text-gray-500 font-sans mb-4">
                    <span className="flex items-center gap-1"><Monitor className="w-3 h-3" />{course.format}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{course.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-semibold px-2 py-0.5 font-sans ${
                      course.level === "Beginner" ? "bg-green-100 text-green-800" :
                      course.level === "Advanced" ? "bg-red-100 text-red-800" :
                      course.level === "Required" ? "bg-orange-100 text-orange-800" :
                      "bg-gray-100 text-gray-700"
                    }`}>
                      {course.level}
                    </span>
                    <button className="text-[var(--gaf-red)] font-semibold text-sm font-sans flex items-center gap-1 hover:gap-2 transition-all">
                      Enroll <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        headline={t("training.ctaTitle")}
        subtext="Start with our free orientation course and get on the path to Master Elite."
        ctaLabel={t("training.startFree")}
        ctaHref="/contractors"
        secondaryCta={{ label: "View Full Catalog", href: "/contractors/resources" }}
      />
    </div>
  );
}

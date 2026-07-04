import { Link } from "react-router";
import { Clock, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import type { Article } from "../../data/articles";

interface ArticleCardProps {
  article: Article;
}

const categoryColors: Record<string, string> = {
  Homeowners: "bg-blue-100 text-blue-800",
  Contractors: "bg-red-100 text-red-800",
  Commercial: "bg-slate-100 text-slate-800",
  "Product News": "bg-orange-100 text-orange-800",
  "Storm Damage": "bg-purple-100 text-purple-800",
  Sustainability: "bg-green-100 text-green-800",
  "How-To": "bg-teal-100 text-teal-800",
};

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="bg-white border border-[var(--border)] overflow-hidden flex flex-col group"
    >
      <div className={`aspect-[16/9] bg-gradient-to-br ${article.gradientFrom} ${article.gradientTo}`} />
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-3">
          <span className={`text-xs font-semibold px-2 py-1 rounded-full font-sans ${categoryColors[article.category] ?? "bg-gray-100 text-gray-800"}`}>
            {article.category}
          </span>
          <span className="flex items-center gap-1 text-xs text-gray-500 font-sans">
            <Clock className="w-3 h-3" /> {article.readTime} min read
          </span>
        </div>
        <h3 className="text-[var(--gaf-near-black)] text-lg font-bold leading-snug mb-2 group-hover:text-[var(--gaf-red)] transition-colors">
          {article.title}
        </h3>
        <p className="text-gray-600 text-sm font-sans leading-relaxed flex-1 line-clamp-3 mb-4">
          {article.excerpt}
        </p>
        <div className="flex items-center justify-between text-xs text-gray-500 font-sans">
          <span>{article.author} · {article.date}</span>
          <Link
            to={`/resources/${article.slug}`}
            className="inline-flex items-center gap-1 text-[var(--gaf-red)] font-semibold hover:gap-2 transition-all text-sm"
          >
            Read <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

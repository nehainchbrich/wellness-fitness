import { useRouter } from "next/router";
import BlogDetailContent from "../../components/blog/BlogDetailContent";
import BlogSidebar from "../../components/blog/Sidebar";
import styles from "../../styles/BlogDetail.module.css";
import Sidebar from "../../components/blog/Sidebar";

export default function BlogDetailPage() {
  const router = useRouter();
  const { slug } = router.query;

  const blogs = {
    1: { title: "The Future of Wellness & Meditation Blog 1", description: "Explore how the new era of wellness is shaping mental clarity...", image: "/images/our-mission.jpg" }, author: "Dr. Meera Sharma",
    2: { title: "The Future of Wellness & Meditation Blog 2", description: "Explore how the new era of wellness is shaping mental clarity...", image: "/images/our-mission.jpg" },
    3: { title: "The Future of Wellness & Meditation Blog 3", description: "Explore how the new era of wellness is shaping mental clarity...", image: "/images/our-mission.jpg" },
    4: { title: "The Future of Wellness & Meditation Blog 4",  description: "Explore how the new era of wellness is shaping mental clarity...", image: "/images/our-mission.jpg" },
  };

  // Wait for router to load
  if (!router.isReady) return <p>Loading...</p>;

  const blog = blogs[slug];

  if (!blog) return <p>Blog not found</p>;

  return (
    <div className={styles.blogDetail}>
      <div className={styles.layout}>
        <BlogDetailContent blog={blog} />
        <Sidebar/>
      </div>
    </div>
  );
}

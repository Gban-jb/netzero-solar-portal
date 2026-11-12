/**
 * DATA ACCESS LAYER
 * -----------------
 * The only module that knows where content comes from.
 *
 * Today every function reads from the typed files in `src/content/`.
 * The project specification calls for PostgreSQL on Neon or Supabase
 * holding the news feed, the weekly updates and the gallery entries.
 * When that move happens, replace the bodies of these functions with
 * database queries — the signatures are already async and every page
 * and component already awaits them, so nothing else has to change.
 */
import { departments } from "@/content/departments";
import { students } from "@/content/students";
import { news } from "@/content/news";
import { gallery } from "@/content/gallery";
import type {
  Department,
  DepartmentSlug,
  GalleryItem,
  NewsItem,
  StudentProfile,
} from "@/lib/types";

export async function getDepartments(): Promise<Department[]> {
  return departments;
}

export async function getDepartment(
  slug: string,
): Promise<Department | undefined> {
  return departments.find((d) => d.slug === slug);
}

export async function getStudents(): Promise<StudentProfile[]> {
  return [...students].sort((a, b) => a.number - b.number);
}

export async function getStudent(
  slug: string,
): Promise<StudentProfile | undefined> {
  return students.find((s) => s.slug === slug);
}

export async function getNews(limit?: number): Promise<NewsItem[]> {
  const sorted = [...news].sort((a, b) => b.date.localeCompare(a.date));
  return typeof limit === "number" ? sorted.slice(0, limit) : sorted;
}

export async function getNewsItem(slug: string): Promise<NewsItem | undefined> {
  return news.find((n) => n.slug === slug);
}

export async function getNewsByDepartment(
  slug: DepartmentSlug,
): Promise<NewsItem[]> {
  return (await getNews()).filter((n) => n.department === slug);
}

export async function getGallery(
  department?: DepartmentSlug | "project",
): Promise<GalleryItem[]> {
  return department ? gallery.filter((g) => g.department === department) : gallery;
}

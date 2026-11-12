import type { Metadata } from "next";
import { getDepartments, getNews } from "@/lib/content";
import { NewsCard } from "@/components/cards";
import { Breadcrumbs, EmptyState, PageHeader, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Updates",
  description:
    "Project updates from the AAMU Net Zero Solar Electric Initiative, published after agreement at the weekly BESS management meeting.",
};

export default async function NewsPage() {
  const [news, departments] = await Promise.all([getNews(), getDepartments()]);

  const deptName = (slug: string) =>
    slug === "project"
      ? "Project-wide"
      : departments.find((d) => d.slug === slug)?.shortName ?? "Project";

  return (
    <>
      <PageHeader
        eyebrow="News feed"
        title="Project updates"
        lede="Updates are gathered once a week from every department and published after the weekly BESS management meeting agrees what goes on the record. Each entry notes who the publication was agreed with."
      />
      <Breadcrumbs trail={[{ label: "Home", href: "/" }, { label: "Updates" }]} />

      <Section>
        {news.length > 0 ? (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {news.map((item) => (
              <NewsCard key={item.slug} item={item} departmentName={deptName(item.department)} />
            ))}
          </div>
        ) : (
          <EmptyState
            title="No updates yet"
            detail="The first updates will appear here once the weekly reporting cycle begins publishing."
          />
        )}
      </Section>
    </>
  );
}

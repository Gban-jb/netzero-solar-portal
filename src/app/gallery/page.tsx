import type { Metadata } from "next";
import { getGallery } from "@/lib/content";
import { GalleryCard } from "@/components/cards";
import { Breadcrumbs, PageHeader, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Photo gallery",
  description:
    "Photographs from drone flights, site visits and the BESS management site for the AAMU Net Zero Solar Electric Initiative.",
};

export default async function GalleryPage() {
  const gallery = await getGallery();
  const pending = gallery.filter((g) => !g.src).length;

  return (
    <>
      <PageHeader
        eyebrow="Photo archive"
        title="From the site"
        lede="Drone imagery, site visits and the battery storage site. Every entry carries its location and capture date; where those are not yet confirmed, the entry says so rather than guessing."
      />
      <Breadcrumbs trail={[{ label: "Home", href: "/" }, { label: "Gallery" }]} />

      <Section>
        {pending > 0 && (
          <p className="mb-8 rounded-lg border border-ink-200 bg-white px-4 py-3 text-sm text-ink-600">
            <span className="font-semibold text-ink-900">{pending} of {gallery.length} slots</span>{" "}
            are placeholders. Photographs are added as flights and site visits return
            imagery, each with its date, location and a written description.
          </p>
        )}

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {gallery.map((item) => (
            <GalleryCard key={item.id} item={item} />
          ))}
        </div>
      </Section>
    </>
  );
}

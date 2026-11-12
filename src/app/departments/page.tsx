import type { Metadata } from "next";
import { getDepartments } from "@/lib/content";
import { DepartmentCard } from "@/components/cards";
import { Breadcrumbs, PageHeader, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Departments",
  description:
    "The five AAMU departments contributing to the Net Zero Solar Electric Initiative: Engineering and BESS, Animal and Food Science, Architecture, Natural Resources and Soil Science, and Communications.",
};

export default async function DepartmentsPage() {
  const departments = await getDepartments();

  return (
    <>
      <PageHeader
        eyebrow="Project structure"
        title="Five departments, one site"
        lede="The solar farm is studied from five directions at once. Each department sets its own scope, runs its own schedule, and writes its own section of this portal in its own words."
      />
      <Breadcrumbs trail={[{ label: "Home", href: "/" }, { label: "Departments" }]} />

      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {departments.map((dept) => (
            <DepartmentCard key={dept.slug} dept={dept} />
          ))}
        </div>
      </Section>
    </>
  );
}

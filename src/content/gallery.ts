import type { GalleryItem } from "@/lib/types";

/**
 * PHOTO GALLERY
 * -------------
 * Entries with an empty `src` render as a clearly labelled empty slot,
 * so the gallery layout can be reviewed before real photographs arrive.
 *
 * TO ADD A PHOTO:
 *   1. Put the file in `public/gallery/` (keep it under about 500 KB —
 *      the AAMU integration package specifies image-size limits).
 *   2. Add an entry below with `src: "/gallery/your-file.jpg"`.
 *   3. Write a real `alt` description. This is an accessibility
 *      requirement for the Weeks 19–22 deliverable, not optional.
 */
export const gallery: GalleryItem[] = [
  {
    id: "bess-site-overview",
    caption: "Battery storage units in place beside the array",
    src: "/gallery/bess-site-overview.jpg",
    alt: "Five white battery storage cabinets standing on concrete pads at the BESS site, with a green pad-mounted transformer in front of them and rows of photovoltaic panels behind the perimeter fence",
    capturedOn: "",
    location: "BESS site, east of the solar array",
    department: "engineering",
  },
  {
    id: "bess-cabinet-interior",
    caption: "Inside a storage cabinet — battery modules and inverter",
    src: "/gallery/bess-cabinet-interior.jpg",
    alt: "An open battery storage cabinet showing five stacked battery modules wired with orange high-voltage connectors above an inverter section, with a smoke detector, heat detector and suppression cylinder mounted on the inside of the door",
    capturedOn: "",
    location: "BESS site — cabinet 014",
    department: "engineering",
  },
  {
    id: "bess-site-signage",
    caption: "The BESS installation under construction",
    src: "/gallery/bess-site-signage.jpg",
    alt: "Wide view of the battery energy storage site showing the installed cabinets, empty concrete pads awaiting further units, and the Alabama A&M University project sign at the site entrance",
    capturedOn: "",
    location: "BESS site entrance",
    department: "engineering",
  },
  {
    id: "pv-array-overview",
    caption: "Solar array, full-site overview",
    src: "",
    alt: "Aerial view of the AAMU photovoltaic array showing panel rows across the site",
    capturedOn: "",
    location: "Solar farm — full site",
    department: "engineering",
    flightId: "",
  },
  {
    id: "pv-row-baseline",
    caption: "Panel row baseline — row and table reference",
    src: "",
    alt: "Close aerial view of a single panel row used as the baseline image for repeat comparison",
    capturedOn: "",
    location: "Row / table reference pending",
    department: "engineering",
    flightId: "",
  },
  {
    id: "thermal-sample",
    caption: "Radiometric thermal capture",
    src: "",
    alt: "Thermal image of panel rows showing relative surface temperature across modules",
    capturedOn: "",
    location: "Solar farm",
    department: "engineering",
    flightId: "",
  },
  {
    id: "agrivoltaic-plot",
    caption: "Ground cover beneath the array",
    src: "",
    alt: "Vegetation growing in the partial shade between photovoltaic panel rows",
    capturedOn: "",
    location: "Between array rows",
    department: "animal-food-science",
  },
  {
    id: "soil-sampling",
    caption: "Soil sampling in progress",
    src: "",
    alt: "Soil sampling being carried out at a marked location on the solar site",
    capturedOn: "",
    location: "Sampling point pending",
    department: "natural-resources-soil-science",
  },
  {
    id: "site-visit",
    caption: "Weekly site visit",
    src: "",
    alt: "Project team members during a scheduled visit to the solar site",
    capturedOn: "",
    location: "Solar farm",
    department: "project",
  },
  {
    id: "team-meeting",
    caption: "Weekly BESS management meeting",
    src: "",
    alt: "The project team during the weekly meeting at the BESS management site",
    capturedOn: "",
    location: "BESS management site",
    department: "project",
  },
];

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import "./Publications.css";

const publications = [
  {
    year: 2024,
    type: "journal",
    kind: "Multicentre study",
    title:
      "Robot-Assisted Video Endoscopic Inguinal Lymph Node Dissection for Penile Cancer: An Indian Multicenter Experience",
    authors:
      "Rawal SK, Khanna A, Singh A, Jindal T, Sk R, Kumar B, Taori R, Pratihar SK, Vasudeo V, Saurabh N, Ali M, Malla I, Adhikari K",
    source: "Journal of Endourology",
    details: "2024 May 7. Epub ahead of print. PMID: 38661519",
    doi: "10.1089/end.2023.0719",
  },
  {
    year: 2023,
    type: "journal",
    kind: "Cohort study",
    firstAuthor: true,
    title:
      "Prostate cancer detection using magnetic resonance imaging-transrectal ultrasound fusion biopsy: A retrospective cohort study",
    authors: "Pratihar SK, Khanna A, Vasudeo V, et al.",
    source: "Indian Journal of Urology",
    details: "2023;39(4):297-302",
    doi: "10.4103/iju.iju_147_23",
  },
  {
    year: 2023,
    type: "journal",
    kind: "Case report",
    firstAuthor: true,
    title:
      "Cutaneous Radiation-Associated Angiosarcoma After Treatment of Carcinoma Penis: First Report from Tertiary Cancer Centre of North India",
    authors: "Pratihar SK, Khanna A, Chakraborty A, et al.",
    source: "Indian Journal of Surgical Oncology",
    details: "2023",
    doi: "10.1007/s13193-023-01766-0",
  },
  {
    year: 2023,
    type: "journal",
    kind: "Comparative study",
    title:
      "Surgical and oncological outcomes of robot-assisted versus laparoscopic radical nephroureterectomy for upper-tract urothelial carcinoma: A single-center comparative analysis",
    authors:
      "Vasudeo V, Singh A, Khanna A, Rawal SK, Pratihar SK, Saurabh N, Kumar B, Ali M, Sharma P, Akotkar S, Sharma G, Kesarwani B",
    source: "Indian Journal of Urology",
    details: "39(4):285-291",
    doi: "10.4103/iju.iju_128_23",
  },
  {
    year: 2023,
    type: "journal",
    kind: "Clinical series",
    title:
      "Robot-assisted retroperitoneal lymph node dissection for post-chemotherapy residual mass in testicular cancer: Long-term experience from a tertiary care centre",
    authors:
      "Vasudeo V, Khanna A, Pratihar SK, Jaipuria J, Chakraborty A, Rawal SK, Singh A",
    source: "Journal of Minimal Access Surgery",
    details: "2023 Apr-Jun;19(2):288-295",
    doi: "10.4103/jmas.jmas_141_22",
  },
  {
    year: 2023,
    type: "journal",
    kind: "Clinical series",
    title:
      "Robotic re-exploration for post-operative in house complications following robotic pelvic uro-oncologic surgery: Initial experience, tips and tricks",
    authors:
      "Singh A, Khanna A, Jaipuria J, Gupta S, Pratihar SK, Vasudeo V, Gupta R, Rawal SK",
    source: "Journal of Minimal Access Surgery",
    details: "2023 Jan-Mar;19(1):95-100",
    doi: "10.4103/jmas.jmas_1_22",
  },
  {
    year: 2023,
    type: "journal",
    kind: "Case report",
    title:
      "Enzalutamide-Induced Acute Maculopapular Rash in Treatment of Metastatic Prostate Cancer: First Case Report from a Tertiary Cancer Care Center of North India",
    authors: "Chakraborty A, Khanna A, Vasudeo V, Pratihar S, Singh A, Rawal S",
    source: "Indian Journal of Surgical Oncology",
    details: "14:1-5",
    doi: "10.1007/s13193-023-01719-7",
  },
  {
    year: 2023,
    type: "abstract",
    kind: "Conference abstract",
    title:
      "Initial experience of robot assisted radical prostatectomy with Mantra multiarm robotic platform",
    authors: "Rawal S, Khanna A, Singh A, Vasudev V, Pratihar S, Saurabh N, Kumar B, Ali M",
    source: "European Urology Open Science",
    details: "55:S78",
    doi: "10.1016/S2666-1683(23)00452-4",
  },
  {
    year: 2023,
    type: "abstract",
    kind: "Conference abstract",
    title:
      "Our early clinical experience with Mantra multi arm surgical robotic system (SS Innovations group company) in major uro-oncological surgeries",
    authors: "Singh A, Khanna A, Pratihar S, Vasudev V, Saurabh N, Rawal S",
    source: "Journal of Urology",
    details: "209. MP68-12",
    doi: "10.1097/JU.0000000000003331.12",
  },
  {
    year: 2023,
    type: "abstract",
    kind: "Conference abstract",
    title:
      "Comparison of long term functional and oncological outcomes of robot assisted video endoscopic inguinal lymph node dissection between clinically non-palpable and palpable inguinal lymphadenopathy",
    authors: "Singh A, Khanna A, Vasudev V, Pratihar S, Saurabh N, Rawal S",
    source: "European Urology",
    details: "83:S910",
    doi: "10.1016/S0302-2838(23)00688-7",
  },
  {
    year: 2023,
    type: "abstract",
    kind: "Conference abstract",
    title:
      "Robotic radical nephrectomy with level I-II inferior vena cava tumour thrombectomy: insight from our initial experience",
    authors: "Saurabh N, Singh A, Khanna A, Vasudeo V, Pratihar S, Rawal S",
    source: "European Urology Open Science",
    details: "55:S238",
    doi: "10.1016/S2666-1683(23)00592-X",
  },
  {
    year: 2023,
    type: "abstract",
    kind: "Conference abstract",
    title:
      "Misidentifying Superior Mesenteric Artery (SMA) as left renal artery during robot assisted laparoscopic left Nephron Sparing Surgery (NSS): Prevention and management, points to learn",
    authors: "Saurabh N, Khanna A, Singh A, Pratihar S, Vasudeo V, Rawal S",
    source: "European Urology Open Science",
    details: "55:S236",
    doi: "10.1016/S2666-1683(23)00590-6",
  },
  {
    year: 2020,
    type: "journal",
    kind: "Retrospective review",
    title:
      "An audit of management of male urethral stricture and its outcome: a single centre retrospective review",
    authors: "Bagchi PK, Pratihar SK, Rajeev TP, Barua SK, Sarma D, Phukan M",
    source: "International Surgery Journal",
    details: "2020;7:774-80",
  },
  {
    year: 2020,
    type: "journal",
    kind: "Retrospective review",
    title:
      "Duplex kidney anomalies and associated pathology: a single centre retrospective review",
    authors: "Sarma D, Pratihar SK, Rajeev TP, Barua SK, Bagchi PK, Phukan M",
    source: "International Surgery Journal",
    details: "2020;7:76-82",
  },
  {
    year: 2020,
    type: "journal",
    kind: "Randomised study",
    title:
      "A Comparative Study between Holmium Laser, Pneumatic Lithotripsy and Shock Pulse in Terms of Efficacy and Safety in Percutaneous Nephrolithotomy (PCNL): A Prospective Randomised Study",
    authors: "Rajeev TP, Pratihar SK, Sarma D, Baruah SJ, Barua K, Bagchi PK, Phukan M",
    source: "Journal of Endoluminal Endourology",
    details: "3(1):e1-e8",
  },
  {
    year: 2019,
    type: "journal",
    kind: "Case report",
    title:
      "Double penile fracture with complete urethral disruption following anal intercourse: a case report",
    authors:
      "Barua SK, Pratihar SK, Rajeev TP, Baruah SJ, Bagchi PK, Sarma D, Phukan M, Saurabh N",
    source: "International Surgery Journal",
    details: "v. 6, n. 7, p. 2602-2604, June 2019",
  },
  {
    year: 2019,
    type: "journal",
    kind: "Clinical study",
    title: "Cervical lymphadenopathy as initial presentation of genito-urinary cancer",
    authors: "Barua SK, Pratihar SK, Kaman PK, Garg A, Rajeev TP, Baruah SJ, et al.",
    source: "International Journal of Otorhinolaryngology and Head and Neck Surgery",
    details: "2019;5:1739-44",
  },
];

const folders = [
  {
    id: "journal",
    tab: "Folder 01",
    title: "Indexed Journal Papers",
    note: "Peer-reviewed articles, surgical audits, diagnostic studies, and case reports.",
  },
  {
    id: "abstract",
    tab: "Folder 02",
    title: "Conference Science",
    note: "Robotic surgery abstracts presented at international urology congresses.",
  },
].map((folder) => ({
  ...folder,
  items: publications.filter((item) => item.type === folder.id),
}));

const COLLAPSED_COUNT = 6;
const SELF_PATTERN = /(Pratihar,? ?S(?:K|\.)?)/;

const years = publications.map((item) => item.year);

const catalogMeta = [
  { value: publications.length, label: "Records" },
  {
    value: publications.filter((item) => item.firstAuthor).length,
    label: "First author",
  },
  {
    value: new Set(publications.map((item) => item.source)).size,
    label: "Journals",
  },
  { value: `${Math.min(...years)}-${String(Math.max(...years)).slice(2)}`, label: "Years" },
];

const Authors = ({ text }) =>
  text.split(SELF_PATTERN).map((part, index) =>
    SELF_PATTERN.test(part) ? <strong key={index}>{part}</strong> : part,
  );

const ResearchDocument = ({ item, number }) => (
  <article
    className={`research-document${item.firstAuthor ? " is-first-author" : ""}`}
  >
    <header className="research-document-masthead">
      <span>{item.source}</span>
      <span>{item.year}</span>
    </header>

    <div className="research-document-body">
      <div className="research-document-meta">
        <span className="document-number">
          No. {String(number).padStart(2, "0")}
        </span>
        <span>{item.kind}</span>
      </div>
      <h4>{item.title}</h4>
      <p className="research-document-authors">
        <Authors text={item.authors} />
      </p>
      <span className="research-document-lines" aria-hidden="true" />
    </div>

    <footer className="research-document-footer">
      <span>{item.details}</span>
      {item.doi && (
        <a
          href={`https://doi.org/${item.doi}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open "${item.title}" by DOI`}
        >
          DOI
          <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      )}
    </footer>

    {item.firstAuthor && (
      <span className="research-document-stamp" aria-label="First author">
        First
        <br />
        author
      </span>
    )}
  </article>
);

const ResearchFolder = ({ folder }) => {
  const [expanded, setExpanded] = useState(false);
  const canCollapse = folder.items.length > COLLAPSED_COUNT + 1;
  const visible =
    canCollapse && !expanded
      ? folder.items.slice(0, COLLAPSED_COUNT)
      : folder.items;

  return (
    <section className="research-folder" aria-labelledby={`folder-${folder.id}`}>
      <div className="research-folder-tab">
        <span>{folder.tab}</span>
        <h3 id={`folder-${folder.id}`}>{folder.title}</h3>
        <p>{folder.note}</p>
        <small>{folder.items.length} documents</small>
      </div>

      <div className="research-documents">
        {visible.map((item, index) => (
          <ResearchDocument item={item} number={index + 1} key={item.title} />
        ))}
      </div>

      {canCollapse && (
        <button
          type="button"
          className="research-folder-more"
          aria-expanded={expanded}
          onClick={() => setExpanded((value) => !value)}
        >
          {expanded
            ? "Put documents back"
            : `Pull out all ${folder.items.length} documents`}
        </button>
      )}
    </section>
  );
};

const Publications = () => (
  <div className="research-desk">
    <aside className="research-catalog">
      <div className="catalog-folder-icon" aria-hidden="true">
        <span />
        <span />
      </div>
      <span className="research-catalog-label">Research archive</span>
      <h3>Evidence from uro-oncology, robotics, and surgical outcomes.</h3>
      <dl className="research-catalog-meta">
        {catalogMeta.map((item) => (
          <div key={item.label}>
            <dt>{item.label}</dt>
            <dd>{item.value}</dd>
          </div>
        ))}
      </dl>
    </aside>

    <div className="research-folder-stack">
      {folders.map((folder) => (
        <ResearchFolder folder={folder} key={folder.id} />
      ))}
    </div>
  </div>
);

export default Publications;

import {
  ArrowUpRight,
  CalendarDays,
  MapPin,
  Mic2,
  Newspaper,
  Radio,
} from "lucide-react";
import "./MediaUpdates.css";

const updates = [
  {
    id: "01",
    status: "Upcoming",
    type: "Conference",
    date: "18 Jun 2026",
    title: "North India Uro-Oncology Forum",
    location: "New Delhi",
    summary:
      "Panel discussion on robotic surgery pathways for prostate and kidney cancer care.",
  },
  {
    id: "02",
    status: "Upcoming",
    type: "Workshop",
    date: "04 Jul 2026",
    title: "Robotic Urology Skill Lab",
    location: "RGCIRC, Rohini",
    summary:
      "Teaching session for surgical residents focused on console planning and operative safety.",
  },
  {
    id: "03",
    status: "Recent",
    type: "Media",
    date: "12 May 2026",
    title: "Bladder Cancer Warning Signs",
    location: "Online awareness talk",
    summary:
      "A short patient education session on blood in urine, early diagnosis, and timely evaluation.",
  },
  {
    id: "04",
    status: "Recent",
    type: "Update",
    date: "22 Apr 2026",
    title: "Cancer Survivorship Follow-Up Notes",
    location: "Clinic update",
    summary:
      "Follow-up pathways refined for prostate, kidney, and bladder cancer surveillance visits.",
  },
];

const typeIcons = {
  Conference: Mic2,
  Workshop: CalendarDays,
  Media: Radio,
  Update: Newspaper,
};

const MediaUpdates = () => {
  const featuredUpdate = updates[0];
  const otherUpdates = updates.slice(1);

  return (
    <section className="media-updates-section" id="media">
      <div className="media-updates-container">
        <div className="media-updates-header">
          <div>
            <span className="media-updates-tag">Media & Updates</span>
            <h2>Conferences, Talks & Clinic Notes</h2>
          </div>
          <p>
            Recent and upcoming academic events, patient-awareness sessions, and
            practice updates from the uro-oncology desk.
          </p>
        </div>

        <div className="media-updates-layout">
          <article className="media-feature-card">
            <div className="media-feature-meta">
              <span>{featuredUpdate.status}</span>
              <span>{featuredUpdate.type}</span>
            </div>
            <div className="media-feature-icon">
              <Mic2 size={30} />
            </div>
            <p className="media-feature-date">{featuredUpdate.date}</p>
            <h3>{featuredUpdate.title}</h3>
            <p>{featuredUpdate.summary}</p>
            <div className="media-feature-location">
              <MapPin size={16} />
              {featuredUpdate.location}
            </div>
          </article>

          <div className="media-updates-list">
            {otherUpdates.map((update) => {
              const Icon = typeIcons[update.type] || Newspaper;

              return (
                <article className="media-update-item" key={update.id}>
                  <div className="media-update-date">
                    <span>{update.date.split(" ")[0]}</span>
                    <small>{update.date.replace(`${update.date.split(" ")[0]} `, "")}</small>
                  </div>

                  <div className="media-update-body">
                    <div className="media-update-labels">
                      <span>{update.status}</span>
                      <span>{update.type}</span>
                    </div>
                    <h3>{update.title}</h3>
                    <p>{update.summary}</p>
                    <div className="media-update-location">
                      <MapPin size={14} />
                      {update.location}
                    </div>
                  </div>

                  <div className="media-update-icon" aria-hidden="true">
                    <Icon size={22} />
                    <ArrowUpRight size={16} />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaUpdates;

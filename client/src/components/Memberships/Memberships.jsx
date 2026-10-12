import assamUrologicalStamp from "../../assets/assam-urological-society.png";
import surgeonsAssociationStamp from "../../assets/association-of-surgeons.png";
import eauStamp from "../../assets/eau.png";
import siuStamp from "../../assets/siu.jpg";
import usiStamp from "../../assets/usi.jpg";
import "./Memberships.css";

const memberships = [
  {
    code: "USI",
    name: "Urological Society of India",
    note: "National urology society",
    scope: "National",
    stamp: usiStamp,
  },
  {
    code: "AUS",
    name: "Assam Urological Society",
    note: "Regional urology community",
    scope: "Regional",
    stamp: assamUrologicalStamp,
  },
  {
    code: "EAU",
    name: "European Association of Urology",
    note: "International urology forum",
    scope: "International",
    stamp: eauStamp,
  },
  {
    code: "SIU",
    name: "Societe Internationale d'Urologie",
    note: "Global urological society",
    scope: "International",
    stamp: siuStamp,
  },
  {
    code: "ASI",
    name: "Association of Surgeons of India",
    note: "Surgical professional body",
    scope: "National",
    stamp: surgeonsAssociationStamp,
  },
];

const scopes = ["National", "Regional", "International"].map((scope) => ({
  scope,
  count: memberships.filter((item) => item.scope === scope).length,
}));

const CancelLines = () => (
  <svg
    className="membership-cancel-lines"
    viewBox="0 0 120 40"
    preserveAspectRatio="none"
    aria-hidden="true"
  >
    {[6, 14, 22, 30].map((y) => (
      <path
        key={y}
        d={`M0 ${y} q7.5 -5 15 0 t15 0 t15 0 t15 0 t15 0 t15 0 t15 0 t15 0`}
      />
    ))}
  </svg>
);

const Memberships = () => (
  <div className="membership-registry">
    <aside className="membership-registry-card">
      <div className="membership-registry-head">
        <span>Society registry</span>
        <span>No. {String(memberships.length).padStart(2, "0")}</span>
      </div>
      <h3>Credential marks across urology and surgical communities.</h3>
      <p>
        A compact record of the professional bodies connected to his clinical,
        academic, and surgical practice.
      </p>

      <dl className="membership-registry-scopes">
        {scopes.map((item) => (
          <div key={item.scope}>
            <dt>{item.scope}</dt>
            <dd>{String(item.count).padStart(2, "0")}</dd>
          </div>
        ))}
      </dl>

      <div className="membership-registry-seals" aria-hidden="true">
        {memberships.slice(0, 3).map((membership) => (
          <span className="membership-seal" key={membership.code}>
            <img src={membership.stamp} alt="" loading="lazy" />
          </span>
        ))}
        <span className="membership-registry-verified">Verified societies</span>
      </div>
    </aside>

    <ul className="membership-stamp-wall" aria-label="Professional societies">
      {memberships.map((membership, index) => (
        <li className="membership-stamp" key={membership.code}>
          <div className="membership-stamp-paper">
            <img
              className="membership-stamp-watermark"
              src={membership.stamp}
              alt=""
              loading="lazy"
            />

            <span className="membership-stamp-code">{membership.code}</span>
            <span className="membership-stamp-meta">
              No. {String(index + 1).padStart(2, "0")}
              <span>{membership.scope}</span>
            </span>

            <h3>{membership.name}</h3>
            <p>{membership.note}</p>

            <div className="membership-postmark" aria-hidden="true">
              <span className="membership-seal">
                <img src={membership.stamp} alt="" loading="lazy" />
              </span>
              <CancelLines />
            </div>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default Memberships;

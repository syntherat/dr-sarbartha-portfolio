import {
  CalendarDays,
  CheckCircle2,
  Clock3,
  ExternalLink,
  Info,
  MapPin,
  Video,
} from "lucide-react";
import "./Schedule.css";

const clinic = {
  hospital: "Rajiv Gandhi Cancer Institute & Research Centre",
  shortName: "RGCIRC, Rohini",
  location: "Rohini, Delhi",
  address: "Sector 5, Rohini, New Delhi",
  days: "Monday to Saturday",
  time: "10:00 AM to 2:00 PM",
  room: "Uro-Oncology OPD",
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=Rajiv%20Gandhi%20Cancer%20Institute%20Rohini%20Delhi",
  image:
    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1400&auto=format&fit=crop",
};

const dateFormatter = new Intl.DateTimeFormat("en-IN", {
  day: "numeric",
  month: "short",
});

const weekdayFormatter = new Intl.DateTimeFormat("en-IN", {
  weekday: "long",
});

const getNextThreeDays = () =>
  Array.from({ length: 3 }, (_, index) => {
    const date = new Date();
    date.setDate(date.getDate() + index);

    const isAvailable = date.getDay() !== 0;

    return {
      id: date.toISOString(),
      date: `${dateFormatter.format(date)}, ${weekdayFormatter.format(date)}`,
      isToday: index === 0,
      isAvailable,
    };
  });

const Schedule = () => {
  const nextDays = getNextThreeDays();

  return (
    <section className="schedule-section" id="schedule">
      <div className="schedule-container">
        <div className="schedule-header">
          <span className="schedule-tag">
            <CalendarDays size={18} />
            Clinic Schedule
          </span>
          <div className="schedule-heading-row">
            <h2>Consultation Schedule</h2>
            <p>
              Dr. Sarbartha Kumar Pratihar is available for in-person
              uro-oncology consultations at RGCIRC, Rohini.
            </p>
          </div>
        </div>

        <div className="schedule-layout">
          <article className="clinic-card">
            <div className="clinic-image">
              <img src={clinic.image} alt={`${clinic.hospital} interior`} />
            </div>

            <div className="clinic-content">
              <span className="clinic-location">
                <MapPin size={16} />
                {clinic.location}
              </span>
              <h3>{clinic.hospital}</h3>
              <p>{clinic.address}</p>

              <div className="clinic-meta">
                <div>
                  <Clock3 size={18} />
                  <span>
                    <strong>{clinic.days}</strong>
                    {clinic.time}
                  </span>
                </div>
                <div>
                  <Info size={18} />
                  <span>
                    <strong>{clinic.room}</strong>
                    Appointment timings may vary on holidays.
                  </span>
                </div>
              </div>

              <a
                className="clinic-map-link"
                href={clinic.mapUrl}
                target="_blank"
                rel="noreferrer"
              >
                View location on Google Maps
                <ExternalLink size={15} />
              </a>
            </div>
          </article>

          <div className="schedule-days">
            <div className="schedule-days-header">
              <span>
                <Clock3 size={19} />
                Next 3 Days
              </span>
              <p>Upcoming availability</p>
            </div>

            <div className="schedule-day-grid">
              {nextDays.map((day) => (
                <article
                  className={`schedule-day-card ${day.isToday ? "today" : ""} ${
                    !day.isAvailable ? "unavailable" : ""
                  }`}
                  key={day.id}
                >
                  <div className="schedule-day-top">
                    <h3>{day.date}</h3>
                    {day.isToday && <span>Today</span>}
                  </div>

                  <div className="schedule-status">
                    <CheckCircle2 size={17} />
                    <span>
                      {day.isAvailable
                        ? `Available at ${clinic.shortName}`
                        : "OPD consultation closed"}
                    </span>
                  </div>

                  <p className="schedule-time">
                    {day.isAvailable ? clinic.time : "Emergency care via hospital desk"}
                  </p>

                  <div className="schedule-actions">
                    <a href="#contact">Book Visit</a>
                    <a href="#contact">Ask Online</a>
                  </div>
                </article>
              ))}
            </div>

            <div className="online-consult-card">
              <Video size={34} />
              <div>
                <h3>Online Consultations Available</h3>
                <p>Book a video consultation for review visits or second opinions.</p>
              </div>
              <a href="#contact">Book Appointment</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;

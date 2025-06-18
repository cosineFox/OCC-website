import Navbar from "../../components/navbar"

export default function Archives() {
  return (
    <>
      <Navbar />

      <div className="container-fluid">
        <div className="window">
          <div className="window-header">
            <span>📁 OCC Archives</span>
            <div className="window-controls">
              <div className="window-control-btn">_</div>
              <div className="window-control-btn">□</div>
              <div className="window-control-btn">×</div>
            </div>
          </div>
          <div className="window-content">
            <h1>Club Archives</h1>
            <p>Browse through our collection of past events, projects, and memorable moments.</p>

            <div className="row">
              <div className="col-md-4">
                <div className="win95-card">
                  <div className="win95-card-header">📅 2024 Events</div>
                  <ul>
                    <li>🎉 OCC Launch Event</li>
                    <li>🤖 First AI Workshop</li>
                    <li>💻 Web Development Bootcamp</li>
                    <li>🏆 Mini Hackathon</li>
                  </ul>
                  <a href="#" className="btn-win95">
                    View Gallery
                  </a>
                </div>
              </div>

              <div className="col-md-4">
                <div className="win95-card">
                  <div className="win95-card-header">📸 Photo Gallery</div>
                  <p>Collection of photos from our events, workshops, and team building activities.</p>
                  <p>
                    <strong>Latest:</strong> AI Workshop Series
                  </p>
                  <a href="#" className="btn-win95">
                    Browse Photos
                  </a>
                </div>
              </div>

              <div className="col-md-4">
                <div className="win95-card">
                  <div className="win95-card-header">📄 Documents</div>
                  <ul>
                    <li>📋 Meeting Minutes</li>
                    <li>📊 Event Reports</li>
                    <li>📝 Project Documentation</li>
                    <li>📈 Annual Reports</li>
                  </ul>
                  <a href="#" className="btn-win95">
                    Access Files
                  </a>
                </div>
              </div>
            </div>

            <div className="window" style={{ margin: "16px 0" }}>
              <div className="window-header">
                <span>🏆 Hall of Fame</span>
              </div>
              <div className="window-content">
                <div className="row">
                  <div className="col-md-6">
                    <h3>Outstanding Contributors</h3>
                    <div className="win95-card">
                      <div className="win95-card-header">🌟 Founding Members</div>
                      <p>Recognition for the pioneers who established OCC and laid the foundation for our community.</p>
                      <ul>
                        <li>Project Leaders</li>
                        <li>Event Organizers</li>
                        <li>Technical Mentors</li>
                        <li>Community Builders</li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <h3>Project Achievements</h3>
                    <div className="win95-card">
                      <div className="win95-card-header">🏅 Completed Projects</div>
                      <ul>
                        <li>✅ Club Website Development</li>
                        <li>✅ First Workshop Series</li>
                        <li>✅ Partnership with Axis</li>
                        <li>🔄 Ongoing: Hackathon Planning</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="win95-card">
              <div className="win95-card-header">📊 Statistics</div>
              <div className="row">
                <div className="col-md-3 text-center">
                  <h3>25+</h3>
                  <p>Active Members</p>
                </div>
                <div className="col-md-3 text-center">
                  <h3>8</h3>
                  <p>Events Organized</p>
                </div>
                <div className="col-md-3 text-center">
                  <h3>4</h3>
                  <p>Active Projects</p>
                </div>
                <div className="col-md-3 text-center">
                  <h3>1</h3>
                  <p>University Partnership</p>
                </div>
              </div>
            </div>

            <div className="win95-card">
              <div className="win95-card-header">💾 Digital Archive Access</div>
              <p>Access our complete digital archive including:</p>
              <ul>
                <li>📹 Event recordings and presentations</li>
                <li>💻 Source code from workshops and projects</li>
                <li>📚 Learning resources and tutorials</li>
                <li>📋 Templates and documentation</li>
              </ul>
              <p>
                <em>Note: Some content may require member login.</em>
              </p>
              <a href="#" className="btn-win95-primary">
                Request Access
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="win95-status-bar">
        <div className="status-section">Archive Loaded</div>
        <div className="status-section">2024 Records</div>
        <div style={{ marginLeft: "auto" }}>
          <div className="status-section">🕐 {new Date().toLocaleTimeString()}</div>
        </div>
      </div>
    </>
  )
}

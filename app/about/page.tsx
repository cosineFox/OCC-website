import Navbar from "../../components/navbar"

export default function About() {
  return (
    <>
      <Navbar />

      <div className="container-fluid">
        <div className="window">
          <div className="window-header">
            <span>ℹ️ About OCC</span>
            <div className="window-controls">
              <div className="window-control-btn">_</div>
              <div className="window-control-btn">□</div>
              <div className="window-control-btn">×</div>
            </div>
          </div>
          <div className="window-content">
            <h1>About Open Computing Club</h1>
            <p className="lead">Learn more about our mission, team, and how to get involved.</p>

            <div className="row">
              <div className="col-md-8">
                <h2>Our Story</h2>
                <p>
                  Open Computing Club (OCC) was founded in 2024 at Universiti Teknologi PETRONAS with a simple yet
                  powerful vision: to create a community where passionate individuals can thrive in a tech-focused
                  environment.
                </p>

                <p>
                  We recognized that many students had brilliant ideas but lacked a supportive community to help them
                  execute these ideas. OCC bridges that gap by providing not just a platform, but a family of
                  like-minded individuals who believe in turning concepts into reality.
                </p>

                <h2>Partnership with Axis</h2>
                <p>
                  Our collaboration with <strong>Axis</strong> enhances our capabilities significantly. Axis brings
                  specialized expertise in AI and ML, conducting workshops and providing resources that complement our
                  broader tech initiatives. This partnership ensures our members have access to cutting-edge knowledge
                  and industry-relevant skills.
                </p>

                <h2>Contact Information</h2>
                <div className="win95-card">
                  <div className="win95-card-header">📧 Get in Touch</div>
                  <p>
                    <strong>Email:</strong> occ@utp.edu.my
                  </p>
                  <p>
                    <strong>Location:</strong> Universiti Teknologi PETRONAS, Perak
                  </p>
                  <p>
                    <strong>Meeting Time:</strong> Every Friday, 7:00 PM
                  </p>
                  <p>
                    <strong>Meeting Place:</strong> Computer Lab 2, Block 14
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="win95-card">
                  <div className="win95-card-header">👥 Leadership Team</div>
                  <p>
                    <strong>President:</strong> [Name]
                  </p>
                  <p>
                    <strong>Vice President:</strong> [Name]
                  </p>
                  <p>
                    <strong>Technical Lead:</strong> [Name]
                  </p>
                  <p>
                    <strong>Events Coordinator:</strong> [Name]
                  </p>
                  <p>
                    <strong>Axis Liaison:</strong> [Name]
                  </p>
                </div>

                <div className="win95-card">
                  <div className="win95-card-header">📊 Club Stats</div>
                  <p>
                    <strong>Founded:</strong> 2024
                  </p>
                  <p>
                    <strong>Members:</strong> 25+ active
                  </p>
                  <p>
                    <strong>Projects:</strong> 4 ongoing
                  </p>
                  <p>
                    <strong>Events:</strong> 8 completed
                  </p>
                  <p>
                    <strong>Partnerships:</strong> 1 (Axis)
                  </p>
                </div>

                <div className="win95-card">
                  <div className="win95-card-header">🎯 Focus Areas</div>
                  <ul>
                    <li>Web Development</li>
                    <li>Mobile Apps</li>
                    <li>AI & Machine Learning</li>
                    <li>Data Science</li>
                    <li>Cybersecurity</li>
                    <li>Game Development</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="window" style={{ margin: "16px 0" }}>
              <div className="window-header">
                <span>🚀 How to Join OCC</span>
              </div>
              <div className="window-content">
                <div className="row">
                  <div className="col-md-6">
                    <h3>Membership Requirements</h3>
                    <ul>
                      <li>✅ Be a UTP student</li>
                      <li>✅ Have passion for technology or events</li>
                      <li>✅ Willingness to contribute actively</li>
                      <li>✅ Commitment to execute ideas</li>
                      <li>✅ Attend regular meetings</li>
                    </ul>

                    <h3>Application Process</h3>
                    <ol>
                      <li>Attend one of our Friday meetings</li>
                      <li>Fill out the membership form</li>
                      <li>Present a brief introduction about yourself</li>
                      <li>Participate in a group discussion</li>
                      <li>Get approved by the committee</li>
                    </ol>
                  </div>

                  <div className="col-md-6">
                    <div className="win95-card">
                      <div className="win95-card-header">💡 What We Offer</div>
                      <ul>
                        <li>🛠️ Technical workshops and training</li>
                        <li>🤝 Networking opportunities</li>
                        <li>💻 Access to resources and tools</li>
                        <li>🏆 Competition participation</li>
                        <li>🎓 Skill development programs</li>
                        <li>🌟 Leadership opportunities</li>
                        <li>📈 Portfolio building projects</li>
                      </ul>
                    </div>

                    <div className="win95-card">
                      <div className="win95-card-header">⚠️ Important Note</div>
                      <p>
                        OCC is <strong>not</strong> for passive participants. We're looking for individuals who are
                        ready to contribute, lead initiatives, and help build something meaningful together.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-3">
                  <a href="#" className="btn-win95-primary">
                    Apply for Membership
                  </a>
                  <a href="#" className="btn-win95">
                    Attend Next Meeting
                  </a>
                </div>
              </div>
            </div>

            <div className="win95-card">
              <div className="win95-card-header">🌐 Connect With Us</div>
              <div className="row">
                <div className="col-md-4">
                  <h4>Social Media</h4>
                  <ul>
                    <li>📘 Facebook: OCC UTP</li>
                    <li>📷 Instagram: @occ_utp</li>
                    <li>🐦 Twitter: @occ_utp</li>
                    <li>💼 LinkedIn: OCC UTP</li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <h4>Development</h4>
                  <ul>
                    <li>💻 GitHub: github.com/occ-utp</li>
                    <li>📚 Documentation: docs.occ-utp.com</li>
                    <li>🔧 Discord: OCC Tech Community</li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <h4>Resources</h4>
                  <ul>
                    <li>📖 Learning Hub</li>
                    <li>🎥 Workshop Recordings</li>
                    <li>📋 Project Templates</li>
                    <li>💾 Code Repository</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="win95-status-bar">
        <div className="status-section">About Page Loaded</div>
        <div className="status-section">Contact Info Available</div>
        <div style={{ marginLeft: "auto" }}>
          <div className="status-section">🕐 {new Date().toLocaleTimeString()}</div>
        </div>
      </div>
    </>
  )
}

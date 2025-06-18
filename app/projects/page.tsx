import Navbar from "../../components/navbar"

export default function Projects() {
  return (
    <>
      <Navbar />

      <div className="container-fluid">
        <div className="window">
          <div className="window-header">
            <span>💻 OCC Projects</span>
            <div className="window-controls">
              <div className="window-control-btn">_</div>
              <div className="window-control-btn">□</div>
              <div className="window-control-btn">×</div>
            </div>
          </div>
          <div className="window-content">
            <h1>Our Projects</h1>
            <p>Discover the innovative projects developed by OCC members and our collaboration with Axis.</p>

            <div className="row">
              <div className="col-md-6">
                <div className="win95-card">
                  <div className="win95-card-header">🤖 AI/ML Workshop Series</div>
                  <p>
                    <strong>Status:</strong> Ongoing
                  </p>
                  <p>
                    <strong>Partner:</strong> Axis
                  </p>
                  <p>
                    Comprehensive workshop series covering machine learning fundamentals, neural networks, and practical
                    AI applications.
                  </p>
                  <a href="#" className="btn-win95">
                    View Details
                  </a>
                </div>
              </div>

              <div className="col-md-6">
                <div className="win95-card">
                  <div className="win95-card-header">🏆 Inter-University Hackathon 2024</div>
                  <p>
                    <strong>Status:</strong> Planning
                  </p>
                  <p>
                    <strong>Date:</strong> Q2 2024
                  </p>
                  <p>
                    Annual hackathon bringing together students from universities across Malaysia to solve real-world
                    problems.
                  </p>
                  <a href="#" className="btn-win95">
                    Register Interest
                  </a>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="win95-card">
                  <div className="win95-card-header">🌐 OCC Website Project</div>
                  <p>
                    <strong>Status:</strong> In Development
                  </p>
                  <p>
                    <strong>Tech Stack:</strong> Next.js, Bootstrap 386
                  </p>
                  <p>
                    Our official website featuring a retro Windows 95 theme, showcasing club activities and projects.
                  </p>
                  <a href="#" className="btn-win95-primary">
                    You're Here!
                  </a>
                </div>
              </div>

              <div className="col-md-6">
                <div className="win95-card">
                  <div className="win95-card-header">🏢 Industry Visit Program</div>
                  <p>
                    <strong>Status:</strong> Scheduled
                  </p>
                  <p>
                    <strong>Next Visit:</strong> Tech Mahindra
                  </p>
                  <p>
                    Regular visits to tech companies to provide students with industry insights and networking
                    opportunities.
                  </p>
                  <a href="#" className="btn-win95">
                    Join Next Visit
                  </a>
                </div>
              </div>
            </div>

            <div className="win95-card">
              <div className="win95-card-header">📋 Project Submission Guidelines</div>
              <h3>Want to propose a project?</h3>
              <ol>
                <li>Prepare a project proposal with clear objectives</li>
                <li>Identify required resources and timeline</li>
                <li>Present to the OCC committee</li>
                <li>Get approval and start building!</li>
              </ol>
              <p>
                <strong>Remember:</strong> We're looking for people who don't just have ideas, but are willing to
                execute them!
              </p>
              <a href="/about" className="btn-win95-primary">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="win95-status-bar">
        <div className="status-section">Projects Loaded</div>
        <div className="status-section">4 Active Projects</div>
        <div style={{ marginLeft: "auto" }}>
          <div className="status-section">🕐 {new Date().toLocaleTimeString()}</div>
        </div>
      </div>
    </>
  )
}

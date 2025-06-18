"use client"

import Navbar from "../components/navbar"

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="container-fluid">
        {/* Welcome Window */}
        <div className="window">
          <div className="window-header">
            <span>🖥️ Welcome to Open Computing Club</span>
            <div className="window-controls">
              <div className="window-control-btn">_</div>
              <div className="window-control-btn">□</div>
              <div className="window-control-btn">×</div>
            </div>
          </div>
          <div className="window-content">
            <div className="row">
              <div className="col-md-8">
                <h1>Open Computing Club</h1>
                <h2>Universiti Teknologi PETRONAS</h2>
                <p className="lead">
                  A community of tech enthusiasts who come together to <strong>lead</strong>, <strong>learn</strong>,
                  and <strong>live</strong> in a tech-based environment.
                </p>

                <div className="ascii-art mb-3 tabular-nums text-center px-0 mt-0 ml-0 leading-[0.6rem]">
                  {`   
 ██████╗  ██████╗ ██████╗
██╔═══██╗██╔════╝██╔════╝
██║   ██║██║     ██║     
██║   ██║██║     ██║     
╚██████╔╝╚██████╗╚██████╗
 ╚═════╝  ╚═════╝ ╚═════╝
                         

                     
Open Computing Club  
UTP Perak - Est. 2024`}
                </div>

                <p>
                  Run by students, for students. We're here to create a space where passionate individuals can focus on
                  what they love - whether that's technology, events, or bringing innovative ideas to life.
                </p>

                <div className="d-flex gap-2 mb-3">
                  <button
                    type="button"
                    className="btn-win95-primary mx-0 px-[1em]"
                    onClick={() => (window.location.href = "/projects")}
                  >
                    View Projects
                  </button>
                  <button type="button" className="btn-win95" onClick={() => (window.location.href = "/about")}>
                    Learn More
                  </button>
                </div>
              </div>

              <div className="col-md-4">
                <div className="win95-card">
                  <div className="win95-card-header">📊 Quick Stats</div>
                  <p>
                    <strong>Location:</strong> UTP Perak
                  </p>
                  <p>
                    <strong>Founded:</strong> 2024
                  </p>
                  <p>
                    <strong>Focus:</strong> Tech Community
                  </p>
                  <p>
                    <strong>Members:</strong> Growing!
                  </p>
                  <p>
                    <strong>Partner:</strong> Axis
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What is OCC Window */}
        <div className="window">
          <div className="window-header">
            <span>❓ What is OCC?</span>
            <div className="window-controls">
              <div className="window-control-btn">_</div>
              <div className="window-control-btn">□</div>
              <div className="window-control-btn">×</div>
            </div>
          </div>
          <div className="window-content">
            <div className="row">
              <div className="col-md-6">
                <h3>Our Community</h3>
                <p>
                  OCC is a group of people that come together to <strong>lead</strong>, <strong>learn</strong> and{" "}
                  <strong>live</strong> in a tech-based community. Within this community, members pitch and plan tech
                  events and various projects they are passionate about.
                </p>

                <h3>Partnership with Axis</h3>
                <p>
                  Collaborating with us is <strong>Axis</strong>, who plan workshops and provide resources in terms of
                  skills and tech expertise, typically consisting of AI and ML.
                </p>
              </div>

              <div className="col-md-6">
                <div className="win95-card">
                  <div className="win95-card-header">🎯 Our Mission</div>
                  <ul>
                    <li>Foster tech innovation</li>
                    <li>Build lasting connections</li>
                    <li>Execute passionate ideas</li>
                    <li>Provide learning opportunities</li>
                    <li>Create a supportive community</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Does It Exist Window */}
        <div className="window">
          <div className="window-header">
            <span>🤔 Why Does OCC Exist?</span>
            <div className="window-controls">
              <div className="window-control-btn">_</div>
              <div className="window-control-btn">□</div>
              <div className="window-control-btn">×</div>
            </div>
          </div>
          <div className="window-content">
            <div className="row">
              <div className="col-md-8">
                <h3>Providing Safe Spaces</h3>
                <p>
                  We are here to provide a <strong>safe space</strong> allowing tech people to focus on tech, and events
                  people to focus on events. Providing them a community to grow in and stay motivated.
                </p>

                <div className="win95-card">
                  <div className="win95-card-header">🏗️ What We Believe</div>
                  <p>
                    Everyone deserves a place where they can pursue their passions without judgment, where ideas are
                    welcomed, and where execution is encouraged. That's what OCC provides.
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="win95-card">
                  <div className="win95-card-header">💡 Core Values</div>
                  <ul>
                    <li>
                      <strong>Focus:</strong> Tech for tech people
                    </li>
                    <li>
                      <strong>Growth:</strong> Community development
                    </li>
                    <li>
                      <strong>Motivation:</strong> Staying inspired
                    </li>
                    <li>
                      <strong>Safety:</strong> Judgment-free zone
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What Kind of Work Window */}
        <div className="window">
          <div className="window-header">
            <span>⚙️ What Kind of Work Do We Do?</span>
            <div className="window-controls">
              <div className="window-control-btn">_</div>
              <div className="window-control-btn">□</div>
              <div className="window-control-btn">×</div>
            </div>
          </div>
          <div className="window-content">
            <div className="row">
              <div className="col-md-3">
                <div className="win95-card">
                  <div className="win95-card-header">🛠️ Tech Workshops</div>
                  <p>Hands-on learning sessions covering the latest technologies and programming languages.</p>
                </div>
              </div>

              <div className="col-md-3">
                <div className="win95-card">
                  <div className="win95-card-header">🏆 Hackathons</div>
                  <p>Inter-university competitions where teams build innovative solutions in limited time.</p>
                </div>
              </div>

              <div className="col-md-3">
                <div className="win95-card">
                  <div className="win95-card-header">💻 Project Development</div>
                  <p>Collaborative tech projects that solve real-world problems and build portfolios.</p>
                </div>
              </div>

              <div className="col-md-3">
                <div className="win95-card">
                  <div className="win95-card-header">🏢 Industry Visits</div>
                  <p>Networking opportunities and insights into the professional tech world.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Is This For Everyone Window */}
        <div className="window">
          <div className="window-header">
            <span>👥 Is This For Everyone?</span>
            <div className="window-controls">
              <div className="window-control-btn">_</div>
              <div className="window-control-btn">□</div>
              <div className="window-control-btn">×</div>
            </div>
          </div>
          <div className="window-content">
            <div className="row">
              <div className="col-md-8">
                <h3>For the Passionate</h3>
                <p>
                  <strong>No</strong>, it is for people who are passionate about whatever they are doing, whether it be
                  events or tech. It is for people who aren't afraid to throw out ideas <strong>AND</strong> actually
                  execute them.
                </p>

                <div className="win95-card">
                  <div className="win95-card-header">✅ You're a good fit if you:</div>
                  <ul>
                    <li>Have passion for technology or event management</li>
                    <li>Aren't afraid to share your ideas</li>
                    <li>Are willing to execute and follow through</li>
                    <li>Want to grow in a supportive community</li>
                    <li>Enjoy collaborative work</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-4">
                <div className="win95-card">
                  <div className="win95-card-header">⚠️ Not for you if:</div>
                  <ul>
                    <li>You just want to attend events passively</li>
                    <li>You're not willing to contribute</li>
                    <li>You avoid taking initiative</li>
                    <li>You're not passionate about tech or events</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What's Next Window */}
        <div className="window">
          <div className="window-header">
            <span>🚀 What's Next?</span>
            <div className="window-controls">
              <div className="window-control-btn">_</div>
              <div className="window-control-btn">□</div>
              <div className="window-control-btn">×</div>
            </div>
          </div>
          <div className="window-content">
            <div className="row">
              <div className="col-md-6">
                <h3>More Networking!</h3>
                <p>Both internally and externally.</p>

                <div className="win95-card">
                  <div className="win95-card-header">🔗 Internal Networking</div>
                  <ul>
                    <li>Stronger bonds between members</li>
                    <li>Cross-collaboration on projects</li>
                    <li>Mentorship programs</li>
                    <li>Knowledge sharing sessions</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6">
                <div className="win95-card">
                  <div className="win95-card-header">🌐 External Networking</div>
                  <ul>
                    <li>Partnerships with other universities</li>
                    <li>Industry connections</li>
                    <li>Alumni network building</li>
                    <li>Tech community engagement</li>
                  </ul>
                </div>

                <div className="text-center mt-3">
                  <a href="/projects" className="btn-win95-primary px-[1em] py-[0.5em]">
                    Join Our Projects
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Status Bar */}
      <div className="win95-status-bar">
        <div className="status-section">Ready</div>
        <div className="status-section">OCC v1.0</div>
        <div className="status-section">UTP Perak</div>
        <div style={{ marginLeft: "auto" }}>
          <div className="status-section">🕐 {new Date().toLocaleTimeString()}</div>
        </div>
      </div>
    </>
  )
}

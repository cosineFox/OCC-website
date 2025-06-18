import Navbar from "../../../components/navbar"
import Footer from "../../../components/footer"

export default function Examples() {
  return (
    <>
      <Navbar />

      <div className="container-fluid">
        <div className="window">
          <div className="window-header">Examples - Bootstrap 386 Templates and Demos</div>
          <div className="window-content">
            <h1>Examples</h1>
            <p className="lead">
              Dozens of custom components and templates to help you get started with Bootstrap 386 and create that
              perfect 90s aesthetic for your web applications.
            </p>

            <div className="alert alert-info">
              <strong>Note:</strong> All examples are optimized for 640x480 and 800x600 screen resolutions!
            </div>

            <div className="row">
              <div className="col-md-6 col-lg-4 mb-4">
                <div className="card">
                  <div className="card-header">💻 Desktop Application</div>
                  <div className="card-body">
                    <h5 className="card-title">Windows 95 Style App</h5>
                    <p className="card-text">
                      Complete desktop application interface with menus, toolbars, and status bars.
                    </p>
                    <a href="#" className="btn btn-primary">
                      View Demo
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 mb-4">
                <div className="card">
                  <div className="card-header">📄 Document Viewer</div>
                  <div className="card-body">
                    <h5 className="card-title">Text Editor Interface</h5>
                    <p className="card-text">
                      Notepad-style interface for viewing and editing documents with authentic styling.
                    </p>
                    <a href="#" className="btn btn-primary">
                      View Demo
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 mb-4">
                <div className="card">
                  <div className="card-header">🎮 Game Interface</div>
                  <div className="card-body">
                    <h5 className="card-title">Retro Game UI</h5>
                    <p className="card-text">
                      Classic game interface with score displays, health bars, and control panels.
                    </p>
                    <a href="#" className="btn btn-primary">
                      View Demo
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 mb-4">
                <div className="card">
                  <div className="card-header">📊 System Monitor</div>
                  <div className="card-body">
                    <h5 className="card-title">Performance Monitor</h5>
                    <p className="card-text">
                      System monitoring interface with graphs, meters, and diagnostic information.
                    </p>
                    <a href="#" className="btn btn-primary">
                      View Demo
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 mb-4">
                <div className="card">
                  <div className="card-header">💾 File Manager</div>
                  <div className="card-body">
                    <h5 className="card-title">Windows Explorer Style</h5>
                    <p className="card-text">
                      File browser interface with tree view, file listings, and toolbar controls.
                    </p>
                    <a href="#" className="btn btn-primary">
                      View Demo
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 mb-4">
                <div className="card">
                  <div className="card-header">🌐 Web Browser</div>
                  <div className="card-body">
                    <h5 className="card-title">Netscape Navigator Style</h5>
                    <p className="card-text">
                      Classic web browser interface with address bar, bookmarks, and navigation buttons.
                    </p>
                    <a href="#" className="btn btn-primary">
                      View Demo
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 mb-4">
                <div className="card">
                  <div className="card-header">📧 Email Client</div>
                  <div className="card-body">
                    <h5 className="card-title">Outlook Express Style</h5>
                    <p className="card-text">
                      Email application interface with folder tree, message list, and compose window.
                    </p>
                    <a href="#" className="btn btn-primary">
                      View Demo
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 mb-4">
                <div className="card">
                  <div className="card-header">🎵 Media Player</div>
                  <div className="card-body">
                    <h5 className="card-title">WinAmp Style Player</h5>
                    <p className="card-text">
                      Music player interface with equalizer, playlist, and classic LCD display.
                    </p>
                    <a href="#" className="btn btn-primary">
                      View Demo
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 mb-4">
                <div className="card">
                  <div className="card-header">🔧 Control Panel</div>
                  <div className="card-body">
                    <h5 className="card-title">System Settings</h5>
                    <p className="card-text">
                      Windows Control Panel style interface for system configuration and settings.
                    </p>
                    <a href="#" className="btn btn-primary">
                      View Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <h2>Code Examples</h2>
            <p>Here's how to create a basic window with Bootstrap 386:</p>

            <div
              style={{
                backgroundColor: "var(--dos-black)",
                color: "var(--dos-light-gray)",
                padding: "8px",
                fontFamily: "DOS, monospace",
                marginBottom: "16px",
              }}
            >
              {`<div class="window">
  <div class="window-header">
    My Application - Document1
  </div>
  <div class="window-content">
    <p>Your content goes here...</p>
    <button class="btn btn-primary">OK</button>
    <button class="btn">Cancel</button>
  </div>
</div>`}
            </div>

            <h2>Template Downloads</h2>
            <div className="alert alert-warning">
              <strong>Download Instructions:</strong>
              <ol>
                <li>Insert a blank 1.44 MB floppy disk</li>
                <li>Right-click on the download link</li>
                <li>Select "Save to A:\"</li>
                <li>Wait for the download to complete (may take 5-10 minutes on 14.4k modem)</li>
              </ol>
            </div>

            <table className="table">
              <thead>
                <tr>
                  <th>Template</th>
                  <th>File Size</th>
                  <th>Download</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Desktop App Template</td>
                  <td>245 KB</td>
                  <td>
                    <a href="#" className="btn btn-primary">
                      Download
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Game Interface Template</td>
                  <td>189 KB</td>
                  <td>
                    <a href="#" className="btn btn-primary">
                      Download
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>System Monitor Template</td>
                  <td>312 KB</td>
                  <td>
                    <a href="#" className="btn btn-primary">
                      Download
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Complete Template Pack</td>
                  <td>1.2 MB</td>
                  <td>
                    <a href="#" className="btn btn-success">
                      Download All
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

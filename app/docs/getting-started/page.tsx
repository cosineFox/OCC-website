import Navbar from "../../../components/navbar"
import Footer from "../../../components/footer"

export default function GettingStarted() {
  return (
    <>
      <Navbar />

      <div className="container-fluid">
        <div className="window">
          <div className="window-header">Getting Started - Bootstrap 386 Installation Guide</div>
          <div className="window-content">
            <h1>Getting Started</h1>
            <p className="lead">
              Get started with Bootstrap 386, the world's most popular framework for building responsive, mobile-first
              sites, with a retro 90s twist.
            </p>

            <div className="alert alert-warning">
              <strong>Warning:</strong> Make sure you have at least 4 MB of RAM and a 486 processor or better!
            </div>

            <h2>Quick Start</h2>
            <p>
              Looking to quickly add Bootstrap 386 to your project? Use our CDN, provided free by the folks at
              GeoCities.
            </p>

            <h3>CSS</h3>
            <div
              style={{
                backgroundColor: "var(--dos-black)",
                color: "var(--dos-light-gray)",
                padding: "8px",
                fontFamily: "DOS, monospace",
                marginBottom: "16px",
              }}
            >
              {`<link rel="stylesheet" href="https://cdn.bootstrap386.com/bootstrap.css"
      integrity="sha384-..." crossorigin="anonymous">`}
            </div>

            <h3>JS, Popper.js, and jQuery</h3>
            <div
              style={{
                backgroundColor: "var(--dos-black)",
                color: "var(--dos-light-gray)",
                padding: "8px",
                fontFamily: "DOS, monospace",
                marginBottom: "16px",
              }}
            >
              {`<script src="https://code.jquery.com/jquery-1.2.6.min.js"></script>
<script src="https://cdn.bootstrap386.com/bootstrap.js"></script>`}
            </div>

            <h2>Starter Template</h2>
            <p>
              Be sure to have your pages set up with the latest design and development standards. That means using an
              HTML5 doctype and including a viewport meta tag for proper responsive behaviors.
            </p>

            <div
              style={{
                backgroundColor: "var(--dos-black)",
                color: "var(--dos-light-gray)",
                padding: "8px",
                fontFamily: "DOS, monospace",
                marginBottom: "16px",
              }}
            >
              {`<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap 386 CSS -->
    <link href="bootstrap386.css" rel="stylesheet">

    <title>Hello, world!</title>
  </head>
  <body>
    <h1>Hello, world!</h1>

    <!-- Bootstrap 386 JavaScript -->
    <script src="bootstrap386.js"></script>
  </body>
</html>`}
            </div>

            <h2>System Requirements</h2>
            <div className="card">
              <div className="card-header">Minimum System Requirements</div>
              <div className="card-body">
                <ul>
                  <li>Intel 486 DX2/66 MHz processor or equivalent</li>
                  <li>4 MB RAM (8 MB recommended)</li>
                  <li>VGA graphics card</li>
                  <li>Sound Blaster compatible sound card (optional)</li>
                  <li>MS-DOS 6.22 or Windows 95</li>
                  <li>Netscape Navigator 2.0 or Internet Explorer 3.0</li>
                  <li>1.44 MB floppy disk drive</li>
                </ul>
              </div>
            </div>

            <h2>Installation Methods</h2>

            <h3>Method 1: Floppy Disk Installation</h3>
            <div
              style={{
                backgroundColor: "var(--dos-black)",
                color: "var(--dos-light-gray)",
                padding: "8px",
                fontFamily: "DOS, monospace",
                marginBottom: "16px",
              }}
            >
              {`C:\\> copy A:\\bootstrap386.css C:\\WINDOWS\\
C:\\> copy A:\\bootstrap386.js C:\\WINDOWS\\`}
            </div>

            <h3>Method 2: CD-ROM Installation</h3>
            <div
              style={{
                backgroundColor: "var(--dos-black)",
                color: "var(--dos-light-gray)",
                padding: "8px",
                fontFamily: "DOS, monospace",
                marginBottom: "16px",
              }}
            >
              {`C:\\> D:
D:\\> install.exe`}
            </div>

            <h3>Method 3: Download via Modem</h3>
            <p>Connect to your local BBS and download BOOT386.ZIP (1.2 MB)</p>
            <div
              style={{
                backgroundColor: "var(--dos-black)",
                color: "var(--dos-light-gray)",
                padding: "8px",
                fontFamily: "DOS, monospace",
                marginBottom: "16px",
              }}
            >
              {`C:\\> pkunzip BOOT386.ZIP
C:\\> cd BOOT386
C:\\BOOT386> install.bat`}
            </div>

            <div className="alert alert-info">
              <strong>Pro Tip:</strong> For best results, use a 14.4k modem or faster for downloading!
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

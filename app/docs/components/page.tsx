import Navbar from "../../../components/navbar"
import Footer from "../../../components/footer"

export default function Components() {
  return (
    <>
      <Navbar />

      <div className="container-fluid">
        <div className="window">
          <div className="window-header">Components - Bootstrap 386 UI Elements</div>
          <div className="window-content">
            <h1>Components</h1>
            <p className="lead">
              Over a dozen reusable components built to provide iconography, dropdowns, input groups, navigation,
              alerts, and much more, all with that authentic 90s look.
            </p>

            <h2>Buttons</h2>
            <p>Use Bootstrap's custom button styles for actions in forms, dialogs, and more.</p>

            <div className="mb-3">
              <button type="button" className="btn btn-primary me-2">
                Primary
              </button>
              <button type="button" className="btn btn-success me-2">
                Success
              </button>
              <button type="button" className="btn btn-danger me-2">
                Danger
              </button>
              <button type="button" className="btn me-2">
                Default
              </button>
            </div>

            <h2>Alerts</h2>
            <p>Provide contextual feedback messages for typical user actions.</p>

            <div className="alert alert-info">
              <strong>Info!</strong> This is an info alert with that classic 90s styling.
            </div>

            <div className="alert alert-warning">
              <strong>Warning!</strong> Better check yourself, you're not looking too good.
            </div>

            <div className="alert alert-danger">
              <strong>Error!</strong> Change a few things up and try submitting again.
            </div>

            <h2>Forms</h2>
            <p>Examples and usage guidelines for form control styles, layout options, and custom components.</p>

            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input type="email" className="form-control" id="exampleInputEmail1" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
              </div>
              <div className="mb-3">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Check me out
                </label>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>

            <h2>Progress Bars</h2>
            <p>Documentation and examples for using custom progress components.</p>

            <div className="progress mb-3">
              <div className="progress-bar" role="progressbar" style={{ width: "25%" }}>
                25%
              </div>
            </div>

            <div className="progress mb-3">
              <div className="progress-bar" role="progressbar" style={{ width: "50%" }}>
                50%
              </div>
            </div>

            <div className="progress mb-3">
              <div className="progress-bar" role="progressbar" style={{ width: "75%" }}>
                75%
              </div>
            </div>

            <h2>Tables</h2>
            <p>Documentation and examples for opt-in styling of tables.</p>

            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>

            <h2>Cards</h2>
            <p>Bootstrap's cards provide a flexible and extensible content container.</p>

            <div className="row">
              <div className="col-md-4">
                <div className="card">
                  <div className="card-header">Featured</div>
                  <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card">
                  <div className="card-header">Header</div>
                  <div className="card-body">
                    <h5 className="card-title">Another card</h5>
                    <p className="card-text">Some quick example text to build on the card title.</p>
                    <a href="#" className="btn btn-success">
                      Action
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card">
                  <div className="card-header">Info</div>
                  <div className="card-body">
                    <h5 className="card-title">Third card</h5>
                    <p className="card-text">More example text for this retro-styled card component.</p>
                    <a href="#" className="btn btn-danger">
                      Click me
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

import './App.css'

function App() {
  return (
    <>
      <section className="contentpage">
        <div>
          <img className="logo" src="/Logo.svg"></img>
          <h1 className="title"> Interested in our business pricing? </h1>
          <h2 className="subtitle"> Fill out the form to view details and we’ll contact you as soon as possible. </h2>
        </div>
        <div className="info">
          <div className="info1">
            <h4>Name</h4>
            <h4>Company Email</h4>
          </div>
          <div className="info2">
            <div className="name">
              <input style={{ color: "#CDD5E0", fontWeight: "600" }} type="text" placeholder='Ethan Johnson' />
            </div>
            <div className="email">
              <input style={{ color: "#CDD5E0", fontWeight: "600" }} type="email" placeholder="ethan@johnson.com" />
            </div>
          </div>
          <div className="info3">
            <h4>Company Size</h4>
            <h4>Subject</h4>
          </div>
          <div className="info4">
            <div className="cs">
              <select className="selectContainer">
                <option> 50 employees </option>
                <option> 100 employees </option>
              </select>
            </div>
            <div className="subject">
              <select className="selectContainer">
                <option> Building Landing pages </option>
                <option> Creating Landing pages </option>
              </select>
            </div>
          </div>
          <div className="message">
            <div className='info3'>
              <h4>Message</h4>
            </div>
            <div className="info5">
              <input type="text" placeholder='50-100 employees' />
            </div>
          </div>
          <div className="button">
            <button className="buttonText"> Contact Sales</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default App

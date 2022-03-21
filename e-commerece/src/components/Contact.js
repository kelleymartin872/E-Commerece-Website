const Contact = () => {
  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col-12 text-center py-4 my-4 ">
          <h1>Have Some Question?</h1>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-md-5 d-flex justify-content-center">
          <img
            src="/asset/images/contact.png"
            alt="contact us"
            height="300px"
            width="300px"
          />
        </div>
        <div className="col-md-6">
          <form>
            <div class="mb-3">
              <label for="exampleForm" class="form-label">
                Full Name
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleForm"
                placeholder="Enter Your Full Name"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
          </form>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
              Example textarea
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="5"
            ></textarea>
          </div>
          <button type="submit" class="btn btn-outline-primary">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;

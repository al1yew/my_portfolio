import { useForm, ValidationError } from "@formspree/react";

const ContactSection = () => {
  const [state, handleSubmit] = useForm("mdoryeeo");

  return (
    <section className="contact" id="Contact">
      <div className="container">
        <div className="row all">
          <h1>Contact Me!</h1>
          <form
            method="POST"
            onSubmit={handleSubmit}
            className={
              state.succeeded
                ? "succeeded contactform col-lg-10 col-md-10 col-sm-12 col-12"
                : "contactform col-lg-10 col-md-10 col-sm-12 col-12"
            }
          >
            <div className="inputkeeper col-lg-12 col-md-12 col-sm-12 col-12">
              <input
                id="fullname"
                type="text"
                name="fullname"
                placeholder="Your Full Name:"
              />
              <ValidationError
                prefix="Fullname"
                field="fullname"
                errors={state.errors}
              />
            </div>
            <div className="inputkeeper col-lg-12 col-md-12 col-sm-12 col-12">
              <textarea
                id="message"
                name="message"
                placeholder="Your Message:"
              ></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <button type="submit" disabled={state.submitting}>
              Send
            </button>
            <span className={state.succeeded ? "showspan" : "hidespan"}>
              Thank You!
            </span>
          </form>
        </div>
      </div>
    </section>
  );
};
export default ContactSection;

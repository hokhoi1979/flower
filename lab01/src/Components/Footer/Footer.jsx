import React from "react";
import "./Footer.scss";
import map from "../../img/map.jpg";
function Footer() {
  return (
    <>
      <div className="Footer">
        <div className="Footer__left">
          <h3>DOOGEE</h3>
          <br />
          <h6>Teardown</h6>
          <h6>News</h6>
          <h6>Partners</h6>
          <h6>About us</h6>
          <h6>Contact us</h6>
          <h6>Terms of</h6>
        </div>

        <div className="Footer__left">
          <h3>Social</h3>
          <br />
          <h6>Facebook</h6>
          <h6>Twitter</h6>
          <h6>Youtube</h6>
        </div>

        <div className="Footer__left">
          <h3>Service</h3>
          <br />
          <h6>Compare</h6>
          <h6>Download</h6>
          <h6>Feedback</h6>
          <h6>Bug Report</h6>
        </div>

        <div className="Footer__left">
          <h3>Activity</h3>
          <br />
          <h6>Influencers</h6>
          <h6>Affiliate</h6>
          <h6>Co-branding</h6>
          <h6>Honor</h6>
          <h6>Giveaway</h6>
        </div>

        <div className="Footer__p">
          <p>Copyright©2019 </p>
        </div>

        <div className="Footer__right">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.163958945934!2d106.79814837485847!3d10.875131189279713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d8a6b19d6763%3A0x143c54525028b2e!2zTmjDoCBWxINuIGjDs2EgU2luaCB2acOqbiBUUC5IQ00!5e0!3m2!1svi!2s!4v1727801844992!5m2!1svi!2s"
            width="200%"
            height="100%"
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default Footer;

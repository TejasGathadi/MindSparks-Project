import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Features.css"; // Ensure you import your custom CSS file

export default function Features() {
  return (
    <>
      <section className="py-5 text-white mt-3">
        <div className="container">
          {/* Top Three Features */}
          <div className="row g-4 mb-4">
            {[
              {
                title: "Our Aim",
                text: "To inspire and equip students with the knowledge and skills needed to excel in STEM fields, fostering a lifelong love for learning and innovation.",
                bg: "bg-danger",
                image: "/images/aim.png", // Replace with actual image URL
              },
              {
                title: "Our Vision",
                text: "To ignite curiosity in young minds, foster creativity through hands-on learning, and inspire innovation for a brighter future.",
                bg: "bg-info",
                image: "/images/telescope.png", // Replace with actual image URL
              },
              {
                title: "Our Mission",
                text: "To empower students with experiential STEM education, nurturing problem-solving skills and a passion for discovery.",
                bg: "bg-warning",
                image: "/images/rocket.png", // Replace with actual image URL
              },
            ].map((feature, index) => (
              <div key={index} className="col-md-4 d-flex">
                <div
                  className={`p-4 rounded ${feature.bg} text-white d-flex flex-column justify-content-between feature-box`}
                  style={{ minHeight: "100%" }}
                >
                  <div className="d-flex align-items-center mb-2">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="feature-image me-3"
                    />
                    <h5 className="fs-3 fw-bold mb-0 text-dark">
                      {feature.title}
                    </h5>
                  </div>
                  <p className="mb-0 text-dark">
                    <q>{feature.text}</q>
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Main Banner Section */}
        </div>
      </section>
    </>
  );
}

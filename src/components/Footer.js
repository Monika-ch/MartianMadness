import React from "react";
import "../styled-components/Footer.css";

const date = new Date().getFullYear();

export default function Footer() {
  return (
    <React.Fragment>
      <section className='footer-section'>
        <div className='container footer-container'>
          <div className='row'>
            <div className='col'>
              <p className='p-5'>Martian Madness &copy; {date}</p>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

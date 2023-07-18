import React from "react";

const Footer = () => {
  return (
    <footer className="bg-wh-900 text-wh-50 py-10 px-10">
      <div className="justify-between mx-auto gap-16 sm:flex">
        {/* COLUMN 1 */}
        <div className="mt-16 basis-1/2 sm:mt-0">
          <h4 className="font-bold">DDK SI-FI & AI BLOG</h4>
          <p className="my-5">
            Nulla sed tempor mauris, sed venenatis turpis. Mauris id mattis
            lectus. In lacus urna, fermentum non consectetur sed, sollicitudin
            vitae lacus. Mauris non porttitor magna, in mattis ligula.
          </p>
          <p>©DDK All Rights Reserved.</p>
        </div>
        {/* COLUMN 2 */}
        <div className="mt-16 basis-1/4 sm:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Aenean risus tortor</p>
          <p className="my-5">Dictum a libero ut</p>
          <p>Aliquet faucibus felis</p>
          <p>©DDK All Rights Reserved.</p>
        </div>
        {/* COLUMN 3 */}
        <div className="mt-16 basis-1/4 sm:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Sed pretium enim lorem vel commodo.</p>
          <p>(333)000-3330</p>
          <p>©DDK All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

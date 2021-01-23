import React from "react";

import { ClientLayout } from "../../components/client";

const AboutUsClientScreen = () => {
  return (
    <ClientLayout>
      <main>
        <h1 className="ps-5">About Us</h1>
        <div className="row">
          <div className="col-xl-4 m-5 p-2 pt-0 mt-0">
            <h2>Municipio de Penacova</h2>
            <h6>
              Cras tristique tincidunt enim. Morbi mattis sem at sapien lobortis
              suscipit. Sed enim risus, imperdiet vel nibh eget, lobortis
              ultrices elit. Sed sit amet eros pulvinar leo euismod egestas at
              quis erat. Quisque vulputate nulla sodales, tempus neque a, mattis
              justo. Nunc eget sem in massa porta eleifend. In ligula turpis,
              congue at ullamcorper eget, ultrices in lorem. Maecenas blandit
              tincidunt est in cursus. Nam eu lobortis ex. Praesent scelerisque
              condimentum velit, nec pretium massa malesuada vel. Integer vel
              dictum ipsum, ac accumsan mauris.
            </h6>
            <h6>
              Sed non justo eu mauris laoreet gravida ac id nisl. Donec eleifend
              molestie purus quis posuere. Donec vestibulum sit amet turpis ac
              ultricies. Maecenas dignissim, felis quis fringilla vehicula, mi
              orci facilisis leo, quis consectetur magna arcu nec tellus.{" "}
            </h6>
          </div>
          <div
            className="col-xl-2 m-5 justify-content-end"
            style={{ border: "1px solid #707070" }}
          >
            <div></div>
          </div>
        </div>
      </main>
    </ClientLayout>
  );
};

export default AboutUsClientScreen;

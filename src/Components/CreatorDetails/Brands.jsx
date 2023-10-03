import React, { useState } from "react";
import LinkIcon from "@mui/icons-material/Link";

import "./style.css";

function Brands({ brands }) {
  const [showDetails, setShowDetails] = useState(false);

  if (brands.length == 0)
    return <div className="mt-4">Currently there are no Brands</div>;
  else
    return (
      <div className="mt-4 d-flex gap-5">
        {brands.map((brand) => (
          <div className="creatorInfoListItemWrapperCont mx-auto">
            <img
              src={brand.brand_image}
              className="creatorInfoListItemMainCont"
              onMouseOver={() => {
                setShowDetails(true);
              }}
            />
            <div
              className={
                showDetails
                  ? "creatorInfoListItemContentCont"
                  : "creatorInfoListItemContentNoDisplayCont"
              }
              onMouseOut={() => {
                setShowDetails(false);
              }}
            >
              <h3 className="creatorInfoListItemContentTitleCont">
                {brand.brand_name}
              </h3>
              <a
                className="creatorInfoListItemIconCont"
                href={brand.brand_url}
                target="_blank"
              >
                <LinkIcon width={20} height={20} />
              </a>
            </div>
          </div>
        ))}
      </div>
    );
}

export default Brands;

import React, { useState } from "react";
import LinkIcon from "@mui/icons-material/Link";

import "./style.css";

function Products({ referrals }) {
  const [showDetails, setShowDetails] = useState(false);

  if (referrals.length == 0)
    return <div className="mt-4">Currently there are no Referrals</div>;
  else
    return (
      <div className="mt-4 d-flex gap-5">
        {referrals.map((item) => (
          <div className="creatorInfoListItemWrapperCont mx-auto">
            <img
              src={item.referral_image}
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
                {item.referral_name}
              </h3>
              <a
                className="creatorInfoListItemIconCont"
                href={item.referral_url}
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

export default Products;

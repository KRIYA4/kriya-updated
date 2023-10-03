import React, { useState } from "react";
import LinkIcon from "@mui/icons-material/Link";

import "./style.css";

function Products({ products }) {
  const [showDetails, setShowDetails] = useState(false);

  if (products.length == 0)
    return <div className="mt-4">Currently there are no Products</div>;
  else
    return (
      <div className="mt-4 d-flex gap-5">
        {products.map((product) => (
          <div className="creatorInfoListItemWrapperCont mx-auto">
            <img
              src={product.product_image}
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
                {product.product_name}
              </h3>
              <a
                className="creatorInfoListItemIconCont"
                href={product.product_url}
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

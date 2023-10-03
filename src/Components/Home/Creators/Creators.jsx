import React, { useEffect, useState } from "react";
import {
  collection,
  query,
  onSnapshot,
  orderBy,
  limit,
} from "firebase/firestore";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { db } from "../../../firebase-config";
import Card from "./Card";

function Creators() {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, "profile_details"),
      orderBy("followers_count", "desc"),
      limit(6)
    );
    // const snap = onSnapshot(q, (querySnapshot) => {
    //   setCreators(querySnapshot.docs.map((doc) => ({ ...doc.data() })));
    // });
    // return snap;
  }, []);

  return (
    <section id="team" className="team">
      <div className="container" data-aos="fade-up">
        <header className="text-center my-4">
          <h2>Creators</h2>
          <h3>Top Creators</h3>
        </header>

        <div className="text-center">
          <div className="row justify-content-center">
            {creators.map((creator, index) => (
              <Card
                key={index}
                name={creator.first_name + " " + creator.last_name}
                image={creator.profile_image}
                tags={creator.tags}
                fb={creator.facebook_link}
                followers={creator.followers_count}
                creator={creator}
              />
            ))}
          </div>
        </div>
        <Button
          variant="contained"
          component={Link}
          to={"creators"}
          className="mx-auto d-flex col-3 my-5"
        >
          See All
        </Button>
      </div>
    </section>
  );
}

export default Creators;

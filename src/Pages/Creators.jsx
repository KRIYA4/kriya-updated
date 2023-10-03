import React, { useEffect, useState,useContext } from 'react';
import { Link } from 'react-router-dom';
import {
  collection,
  getDocs,
  orderBy,
  startAfter,
  limit,
  onSnapshot,
} from 'firebase/firestore';
import themeContext from "../Theme/ThemeContext";
import { Navbar } from '../Components';
import { db } from '../firebase-config'; // Import your Firebase configuration
import Fuse from 'fuse.js';
import {
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  Pagination,
} from '@mui/material';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';

const Creators = () => {
  const [creatorsData, setCreatorsData] = useState([]);
  const [data, setdata] = useState([]);
  const [creators, setCreators] = useState([]);
  const [queryCreators, setQueryCreators] = useState([]);
  const [pages, setPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(3); // Number of cards per page
  
  const options = {
    includeScore: true,
    isCaseSensitive: false,
    keys: ['name'],
  };

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'profile_user'));
        const jsonData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

        // Sort the data by followers in descending order
        jsonData.sort((a, b) => b.followers - a.followers);

        // Update creatorsData
        setCreatorsData(jsonData);

        // Update creators with names for Fuse.js
        const creatorNames = jsonData.map((item) => ({ name: item.name }));
        setCreators(creatorNames);

        // Calculate the number of pages based on the number of items and items per page
        const numPages = Math.ceil(jsonData.length / perPage);
        setPages(numPages);

        // Initialize queryCreators with the first three items
        setQueryCreators(jsonData.slice(0, perPage));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchdata();
  }, [perPage]);

  const getSearch = (name) => {
    const result = fuse.search(name);
    const processedData = name ? result.map((search) => search.item) : creatorsData;
    setQueryCreators(processedData);
  };

  const fuse = new Fuse(creators, options);
  const { isDark, setTheme } = useContext(themeContext);
  const fetchNext = (pg) => {
    setCurrentPage(pg);

    const startIndex = (pg - 1) * perPage;
    const endIndex = startIndex + perPage;

    const paginatedData = creatorsData.slice(startIndex, endIndex);
    setQueryCreators(paginatedData);
  };

  return (
    <>
      <Navbar />
      <br />
      <br/>
      <br/>
      <div className="bg-gray-200">
        <section id="ourAstrologer">
          <div className="container">
            <div className="title text-center">
              <h5 data-aos="fade-up" data-aos-duration="1000" className="font-bold" style={{ color: "#3090f0" }}>
                OUR CREATORS
              </h5>
              <FormControl
                className="mx-auto my-4 col-8"
                sx={{ m: 1 }}
                variant="standard"
              >
                <InputLabel htmlFor="standard-adornment-amount">
                  Search
                </InputLabel>
                <Input
                  id="standard-adornment-amount"
                  onChange={(e) => getSearch(e.target.value)}
                  startAdornment={
                    <InputAdornment position="start">
                      <PersonSearchIcon />
                    </InputAdornment>
                  }
                />
              </FormControl>
            </div>

            <div className="astrologerList">
              <div className="row">
                {queryCreators.map((item, index) => (
                  <div className="col-lg-4 col-sm-6" key={index}>
                    <Link to={`/${item.username}`}>
                      <div class="">
                        <div class="card-body text-center">
                          <img src={item.image} alt="avatar"
                            class="rounded-circle img-fluid" style={{ width: "150px" }} />
                          <h5 class="my-3" style={{ color: "#3090f0" }}>{item.name}</h5>
                          <p class="mb-1" style={{color:isDark ? "white":"black" }}>{item.category}</p>

                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            {pages > 1 && (
              <Pagination
                count={pages}
                color="primary"
                className="mx-auto my-4 d-block col-6"
                onChange={(_, pg) => fetchNext(pg)}
              />
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default Creators;

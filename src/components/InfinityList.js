import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import ProductCard from "./ProductCard";
import Grid from "./Grid";

const InfinityList = (props) => {
  const listRef = useRef(null);
  const perLoad = 6; // items each load
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setData(props.data.slice(0, perLoad));
    setIndex(1);
  }, [props.data]);

  useEffect(() => {
    if (listRef && listRef.current) {
      window.addEventListener("scroll", () => {
        if (
          window.scrollY + window.innerHeight >=
          listRef?.current?.clientHeight + listRef?.current?.offsetTop + 200
        ) {
          setLoad(true);
        }
      });
    }
  }, [listRef]);

  useEffect(() => {
    const getItems = () => {
      const pages = Math.floor(props.data.length / perLoad);
      const maxIndex = props.data.length % perLoad === 0 ? pages : pages + 1;

      if (load && index <= maxIndex) {
        const start = perLoad * index;
        const end = start + perLoad;

        setData(data.concat(props.data.slice(start, end)));
        setIndex(index + 1);
      }
    };
    if (data.length !== props.data.length) {
      getItems();
    }
    setLoad(false);
  }, [load, index, data, props.data]);

  return (
    <div ref={listRef}>
      <Grid col={3} mdCol={2} smCol={1}>
        {data.map((item) => {
          return (
            <ProductCard
              key={item.id}
              title={item.title}
              price={Number(item.price)}
              img1={item.img1}
              img2={item.img2}
              id={item.id}
            />
          );
        })}
      </Grid>
    </div>
  );
};

InfinityList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default InfinityList;

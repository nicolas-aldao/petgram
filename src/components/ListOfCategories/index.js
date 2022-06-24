import React, { useState, useEffect } from "react";
import { Category } from "../Category";
import { LoadingSpinner } from "../LoadingSpinner";
import { List, Item } from "./styles";
import { categories as mockCategories } from "../../../api/db.json";
import { resolve } from "path";

function useCategoriesDate() {
  const [categories, setCategories] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(function() {
    setLoading(true);
    window
      .fetch("https://petgram-server-nicolas-aldao.vercel.app/categories")
      .then(res => res.json())
      .then(response => {
        setCategories(response);
        setLoading(false);
      });
  }, []);

  return { categories, loading };
}

export const ListOfCategories = () => {
  const [showFixed, setShowFixed] = useState(false);
  const { categories, loading } = useCategoriesDate();
  const [apiItem, setApiItem] = useState([]);
  useEffect(function() {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200;
      showFixed !== newShowFixed && setShowFixed(newShowFixed);
      setShowFixed(newShowFixed);
    };
    document.addEventListener("scroll", onScroll);

    return () => document.removeEventListener("scroll", onScroll);
  });

  useEffect(function() {
    //setLoading(true);
    window
      .fetch("https://naldao-tasks-api.herokuapp.com/tasks")
      .then(res => res.json())
      .then(response => {
        const arrayRespon = [];
        response.map(item => {
          arrayRespon.push(item);
        });
        setApiItem(arrayRespon);
      });
  }, []);

  const renderList = fixed => (
    <List fixed={fixed}>
      {loading
        ? [1, 2, 3, 4, 5, 6].map(category => (
            <Item key={category} style={{ marginBottom: "20px" }}>
              <Category loading={loading} />
            </Item>
          ))
        : categories.map(category => (
            <Item key={category}>
              <Category {...category} />
            </Item>
          ))}
    </List>
  );

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
      {apiItem ? (
        apiItem.map(item => (
          <p key={JSON.parse(JSON.stringify(item["id"]))}>
            {JSON.parse(JSON.stringify(item["title"]))}
          </p>
        ))
      ) : (
        <p>no</p>
      )}
    </>
  );
};

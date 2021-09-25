import React from "react";

export const Section = (props) => {
  return <section className="section">{props.children}</section>;
};

export const SectionTitle = (props) => {
  return (
    <section
      className={`section__title ${props.className ? props.className : ""}`}
    >
      {props.children}
    </section>
  );
};

export const SectionBody = (props) => {
  return (
    <section
      className={`section__body ${props.className ? props.className : ""}`}
    >
      {props.children}
    </section>
  );
};

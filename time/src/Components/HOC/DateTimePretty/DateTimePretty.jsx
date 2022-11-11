import React from "react";
import moment from "moment/moment";

function DateTime(props) {
  return <p className="date">{props.date}</p>;
}

function WithDateTimePretty(Component) {
  return function (props) {
    const dateAgo = moment(props.date).fromNow();
    return <Component {...props} date={dateAgo} />;
  };
}

export const DateTimePretty = WithDateTimePretty(DateTime);

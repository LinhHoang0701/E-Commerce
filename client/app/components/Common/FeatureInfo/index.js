import React from "react";
import CountUp from "react-countup";
import { ArrowDownward, ArrowUpward, ArrowRightAlt } from "@material-ui/icons";

const FeatureInfo = (props) => {
  const { data, analyst, users, orders } = props;

  const sumOfTotal = (value) => {
    let total = 0;
    total = value.reduce((a, b) => a + b["Total"], 0);
    return total;
  };
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">
            ${" "}
            <CountUp className="featuredMoney" to={0} end={sumOfTotal(data)} />
          </span>
          <span className="featuredMoneyRate"></span>
        </div>
        <span className="featuredSub">
          Increased by 100% <ArrowUpward className="featuredIcon" />
        </span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Orders</span>
        <div className="featuredMoneyContainer">
          <CountUp className="featuredMoney" to={0} end={orders.length} />
          <span className="featuredMoneyRate"></span>
        </div>
        <span className="featuredSub">
          Increased by 100% <ArrowUpward className="featuredIcon" />
        </span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Users</span>
        <div className="featuredMoneyContainer">
          <CountUp className="featuredMoney" to={0} end={users.length} />
          <span className="featuredMoneyRate"></span>
        </div>
        <span className="featuredSub">
          Increased by 0% <ArrowRightAlt className="featuredIcon dash" />
        </span>
      </div>
    </div>
  );
};

export default FeatureInfo;

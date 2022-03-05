import React from "react";
import CountUp from "react-countup";

import "./FeatureInfo.css";

const FeatureInfo = (props) => {
  const { data, analyst } = props;

  const sumOfTotal = (value) => {
    let total = 0;
    total = value.reduce((a, b) => a + b["Total"], 0);
    return total;
  };

  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Weekly Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">
            ${" "}
            <CountUp className="featuredMoney" to={0} end={sumOfTotal(data)} />
          </span>
          <span className="featuredMoneyRate"></span>
        </div>
        <span className="featuredSub">
          Increased by 100% <i class="fa fa-arrow-up featuredIcon"></i>
        </span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Weekly Orders</span>
        <div className="featuredMoneyContainer">
          <CountUp className="featuredMoney" to={0} end={analyst.length} />
          <span className="featuredMoneyRate"></span>
        </div>
        <span className="featuredSub">
          Increased by 100% <i class="fa fa-arrow-up featuredIcon"></i>
        </span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Visitors Online</span>
        <div className="featuredMoneyContainer">
          <CountUp className="featuredMoney" to={0} end={0} />
          <span className="featuredMoneyRate"></span>
        </div>
        <span className="featuredSub">
          Increased by 0%{" "}
          <i class="fa fa-arrow-right featuredIcon dash"></i>
        </span>
      </div>
    </div>
  );
};

export default FeatureInfo;

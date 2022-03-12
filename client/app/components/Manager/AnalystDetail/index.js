/**
 *
 * Analyst
 *
 */
import React, { useEffect } from "react";
import Chart from "../../Common/Chart";
import FeatureInfo from "../../Common/FeatureInfo";

const AnalystDetail = (props) => {
  const { analyst, users, orders } = props;
  
  const data = [
    {
      name: "Dec",
      Total: analyst.dec,
    },
    {
      name: "Jan",
      Total: analyst.jan,
    },
    {
      name: "Feb",
      Total: analyst.feb,
    },
    {
      name: "Mar",
      Total: analyst.mar,
    },
  ];
  return (
    <div className="analyze-details">
      <div className="info">
        <div className="desc">
          <FeatureInfo
            data={data}
            analyst={analyst}
            users={users}
            orders={orders}
          />
          <Chart data={data} title={"Incoming Analyst"} grid dataKey="Total" />
        </div>
      </div>
    </div>
  );
};

export default AnalystDetail;

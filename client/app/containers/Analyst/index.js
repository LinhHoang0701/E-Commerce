/*
 *
 * Account
 *
 */

import React from "react";
import { connect } from "react-redux";

import actions from "../../actions";

import AnalystDetail from "../../components/Manager/AnalystDetail";
import SubPage from "../../components/Manager/SubPage";

class Analyst extends React.PureComponent {
  componentDidMount() {
    this.props.fetchAnalyst();
    this.props.searchUsers("");
    this.props.fetchCustomerOrders();
  }

  render() {
    const { analyst, users, order } = this.props;

    return (
      <div className="account">
        <SubPage title={"Dashboard"} isMenuOpen={null}>
          <AnalystDetail analyst={analyst} users={users} orders={order} />
        </SubPage>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    analyst: state.analyst.analyst,
    users: state.users.users,
    order: state.order.allOrders,
  };
};

export default connect(mapStateToProps, actions)(Analyst);

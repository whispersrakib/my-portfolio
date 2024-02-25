import React from "react";
function Expcard(props) {
  console.log(props.data[0].s_date);
  return (
    <div className="experience">
      {props.data.map((ele, index) => {
        return (
          <div className="exp_card_container" key={index}>
            <div className="exp_date">
              {ele.s_date} --{ele.e_date}
            </div>
            <div className="exp_detail">
              <p className="con_name">
                {ele.name}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="custom_color"
                >
                  <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
                </svg>
              </p>
              <p className="com_role"> {ele.role}</p>
              <div>
                {ele.details.map((res, index) => {
                  return <p key={index}>{res}</p>;
                })}
              </div>
              <div className="tech_used">
                {ele.technology_used.map((sk, index) => {
                  return (
                    <p className="esk" key={index}>
                      {sk}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}


    </div>
  );
}
export default Expcard;

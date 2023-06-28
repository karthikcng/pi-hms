import React from "react";
import { Patient1 } from "../../NavBar/Patient1";

export const Patient = () => {
  return (
    <div>
      <Patient1 />
      <div className="mt-5">
        <div className="container">
          <div className="add_btn mt-2 mb-2">
            <table class="table">
              <thead>
                <tr className="table-dark">
                  <th scope="col">Sl No</th>
                  <th scope="col">Patient No</th>
                  <th scope="col"> Patient Name</th>
                  <th scope="col">Phone No</th>
                  <th scope="col">Registration</th>
                  <th scope="col">Action Buttons</th>
                </tr>
              </thead>
            </table>
            <tbody></tbody>
          </div>
        </div>
      </div>
    </div>
  );
};

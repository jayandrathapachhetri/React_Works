import { useEffect, useState } from "react";
import { Link, useNavigate} from "react-router-dom";
// import "./App.css";

const EmpListing = () => {
  const [empdata, empdatachange] = useState([]);
  const navigate = useNavigate();

  // href is use so no need of navigate 
  // const LoadDetail = (id) => {
  //   navigate("/employee/detail/" +id);
  // };

  // const LoadEdit = (id) => {
  //   navigate("/employee/edit/" +id);
  // };

  const Removefunction = (id) => {
    if (window.confirm("Do you want to remove?")) {
      fetch("http://localhost:3000/employee/" +id, {
        method: "DELETE",
      })
        .then((res) => {
          alert("Removed successfully.");
          //refreah our page
          window.location.reload();
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  useEffect(() => {
    fetch(`http://localhost:3000/employee`)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        empdatachange(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div className="container">
      <div className="card">
        <div className="card-title">
          <h2>Employee Listing</h2>
        </div>
        <div className="card-body">
          <div className="divbtn">
            <Link to="employee/create" className="btn btn-success">
              Add New (+)
            </Link>
          </div>
          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Email</td>
                <td>Phone</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {empdata &&
                empdata.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>
                      <a
                        href={"employee/edit/"+item.id}
                        className="btn btn-success"
                      >
                        Edit
                      </a>
                      <a
                        // href="remove"
                        onClick={() => {
                          Removefunction(item.id);
                        }}
                        className="btn btn-danger"
                      >
                        Remove
                      </a>
                      <a
                         href={"employee/detail/"+item.id}
                        className="btn btn-primary"
                      >
                        Detail
                      </a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmpListing;

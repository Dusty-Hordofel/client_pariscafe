import React from "react";
import { Link } from "react-router-dom";
import "./AdminTasks.css";

const AdminTasks = () => {
  //list of AdminTasks that are currently running
  const adminTasks = [
    { name: "Add Category", link: "/admin/category/create" },
    { name: "Add Dish", link: "/admin/dish/create" },
    { name: "Manage Orders", link: "/orders" },
  ];

  const createAdminLinks = () => (
    <div className="admin-links">
      <ul>
        {adminTasks.map((task, i) => (
          <li key={i}>
            <Link
              to={task.link}
              style={{
                marginTop: "3px",
                color: "var(--primary-navy)",
                float: "left",
              }}
            >
              {task.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  return <>{createAdminLinks()}</>;
};

export default AdminTasks;

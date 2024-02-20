import React from "react";
import Rocket from "./Components/rocket";

const App = () => {
  const arrObj = [
    {
      title: "FREE",
      user: "Single User",
      store: "50GB Strorage",
      UPP: "Unlimited Public Projects",
      access: "Community Access",
    },
    {
      title: "PLUS",
      user: "5 User",
      store: "50GB Strorage",
      UPP: "Unlimited Public Projects",
      access: "Community Access",
      privateproject: "Unlimited Private Projects",
      support: "Dedicated Phone Support",
      domain: "Free Subdomain",
    },
    {
      title: "PRO",
      user: "5 User",
      store: "50GB Strorage",
      UPP: "Unlimited Public Projects",
      access: "Community Access",
      privateproject: "Unlimited Private Projects",
      support: "Dedicated Phone Support",
      domain: "Free Subdomain",
      msr: "Monthly Status Reports",
    },
  ];

  return (
    <div>
      <Rocket arrObj={arrObj} />
    </div>
  );
};

export default App;

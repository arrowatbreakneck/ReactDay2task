import React from "react";
// import './Components/rocket.css'

const Rocket = ({ arrObj }) => {
    const handleit =()=>{
        alert("you selected the pack that suits you ")

    }
  return (
    <div style={{ display: "flex", justifyItems: "center" ,flexFlow:"column" ,width:"100%",height:"100%",borderTop:"20px",backgroundColor:"blue"}}>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        {arrObj.map((item, index) => {
          return (
            <>
              <div key={index}>
                <div class="col">
                  <div class="card h-100">
                    <div class="card-body">
                      <h5 class="card-title">{item.title}</h5>

                      <ul>
                        <li>{item.user}</li>
                        <li>{item.store}</li> <li>{item.UPP}</li>
                        <li>{item.access}</li> <li> {item.privateproject}</li>
                        <li> {item.support}</li> <li>{item.domain}</li>
                        <li>{item.msr}</li>
                      </ul>
                      <div class="d-grid gap-2 col-6 mx-auto">

  <button onClick={{handleit}} class="btn btn-primary" type="button">select</button>
</div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};
export default Rocket;

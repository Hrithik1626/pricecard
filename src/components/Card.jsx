import React from 'react'
function Card({data}) {
  return <div className="col-lg-4">



  <div className="Card mb-5 mb-lg-0">
    <div className="Card-body">
      <h5 className="Card-title text-muted text-uppercase text-center">{data.plan}</h5>
      <h6 className="Card-price text-center">${data.price}<span className="period">/month</span></h6>
      <hr/>
      <ul className="fa-ul">
        <li className={data.isuser?"":"text-muted"}><span className="fa-li"><i className={data.User?"fas fa-check":"fas fa-times"}></i></span>{data.plan!=="FREE"?<b>{data.user}</b>:data.user}</li>
        <li className={data.isstorage?"":"text-muted"}><span className="fa-li"><i className={data.Storage?"fas fa-check":"fas fa-times"}></i></span>{data.storage}</li>
        <li className={data.ispublicproducts?"":"text-muted"}><span className="fa-li"><i className={data.PublicProducts?"fas fa-check":"fas fa-times"}></i></span>{data.PublicProducts}</li>
        <li className={data.iscommunity?"":"text-muted"}><span className="fa-li"><i className={data.community?"fas fa-check":"fas fa-times"}></i></span>{data.communityAccess}</li>
        <li className={data.isprivateproducts?"":"text-muted"}><span className="fa-li"><i className={data.PrivateProjects?"fas fa-check":"fas fa-times"}></i></span>{data.privateProjects}</li>
        <li className={data.isphone?"":"text-muted"}><span className="fa-li"><i className={data.Phone?"fas fa-check":"fas fa-times"}></i></span>{data.phoneSupport}</li>
        <li className={data.issubdomain?"":"text-muted"}><span className="fa-li"><i className={data.SubDomain?"fas fa-check":"fas fa-times"}></i></span>{data.plan==="PRO"?<><b>Unlimited</b> {data.subDomain}</>:data.subDomain}</li>
        <li className={data.ismonthlyreports?"":"text-muted"}><span className="fa-li"><i className={data.Reports?"fas fa-check":"fas fa-times"}></i></span>{data.reports}</li>
      </ul>
      <div className="d-grid">
        <a href="#" className="btn btn-primary text-uppercase">Button</a>
      </div>
    </div>
  </div>
</div>
}


export default Card
import React from 'react'
function Card({data}) {
  return <div className="col-lg-4">



  <div className="Card mb-5 mb-lg-0">
    <div className="Card-body">
      <h5 className="Card-title text-muted text-uppercase text-center">{data.plan}</h5>
      <h6 className="Card-price text-center">${data.price}<span className="period">/month</span></h6>
      <hr/>
      <ul className="fa-ul">
      <li className={data.isUser?"":"text-muted"}><span className="fa-li"><i className={data.isUser?"fas fa-check":"fas fa-times"}></i></span>{data.plan!=="FREE"?<b>{data.user}</b>:data.user}</li>
        <li className={data.isstorage?"":"text-muted"}><span className="fa-li"><i className={data.isstorage?"fas fa-check":"fas fa-times"}></i></span>{data.storage}</li>
        <li className={data.ispublicproducts?"":"text-muted"}><span className="fa-li"><i className={data.ispublicproducts?"fas fa-check":"fa fa-times"}></i></span>{data.publicproducts}</li>
        <li className={data.iscommunity?"":"text-muted"}><span className="fa-li"><i className={data.iscommunity?"fas fa-check":"fas fa-times"}></i></span>{data.community}</li>
        <li className={data.isprivateproducts?"":"text-muted"}><span className="fa-li"><i className={data.isprivateproducts?"fas fa -check":"fas fa-times"}></i></span>{data.privateproducts}</li>
        <li className={data.isphone?"":"text-muted"}><span className="fa-li"><i className={data.isphone?"fas fa -check":"fas fa-times"}></i></span>{data.phone}</li>
        <li className={data.issubdomain?"":"text-muted"}><span className="fa-li"><i className={data.issubdomain?"fas fa -check":"fas fa-times"}></i></span>{data.plan==="PRO"?<><b>Unlimited</b> {data.subdomain}</>:data.subDomain}</li>
        <li className={data.ismonthlyreports?"":"text-muted"}><span className="fa-li"><i className={data.ismonthlyreports?"fas fa -check":"fas fa-times"}></i></span>{data.monthlyreports}</li>
      </ul>
      <div className="d-grid">
        <a href="#" className="btn btn-primary text-uppercase">Button</a>
      </div>
    </div>
  </div>
</div>
}


export default Card
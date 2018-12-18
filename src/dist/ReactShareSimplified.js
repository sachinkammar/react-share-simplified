import React, { Component } from "react";
import {
  FacebookShareButton,
  GooglePlusShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  GooglePlusIcon,
  EmailIcon,
  WhatsappIcon
} from "react-share";
import './ReactShareSimplified.css';

class ReactShareSimplified extends Component {
    constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    const {url,title,facebook,googlePlus,twitter,whatsapp,email,addClass,Previewemail} = this.props;
    let {facebookClass,twitterClass,googlePlusClass,whatsappClass,emailClass} = this.props || "shareIcon";
    console.log("iconsize",this.props.iconSize);
    let iconSize = 32;
    if(this.props.iconSize!==undefined){
        iconSize = this.props.iconSize
    }
    return (
      <span className={addClass}>
        {facebook && (<FacebookShareButton url={url} quote={title} style={{outline:'none'}} className={facebookClass}>
          <FacebookIcon
            size={iconSize}
            round />
        </FacebookShareButton>)}
        
        {googlePlus && (<GooglePlusShareButton url={url} quote={title} style={{outline:'none'}} className={googlePlusClass}>
          <GooglePlusIcon
            size={iconSize}
            round />
        </GooglePlusShareButton>)}
        
        {twitter && (<TwitterShareButton url={url} quote={title} style={{outline:'none'}}  className={twitterClass}>
          <TwitterIcon
            size={iconSize}
            round />
        </TwitterShareButton>)}
        
        {whatsapp && (<WhatsappShareButton url={url} quote={title} style={{outline:'none'}} className={whatsappClass}>
          <WhatsappIcon
            size={iconSize}
            round />
        </WhatsappShareButton>)}
        
        {email && (<EmailShareButton url={url} quote={title} style={{outline:'none'}} className={emailClass}>
          <EmailIcon
            size={iconSize}
            round />
        </EmailShareButton>)}
        {Previewemail && (<EmailShareButton url={url} quote={title} style={{outline:'none'}} className={emailClass}>
          <EmailIcon
            size={iconSize}
            round />
        </EmailShareButton>)}
      </span>
    );
  }
}
export default ReactShareSimplified;
import React from 'react';
import avatar from '../../../../assets/images/accardo1.png';
import resume from '../../../../assets/docs/Steven_Accardo_Resume.pdf';

const LandingDetails = () => {
  return (
    <div className="landingDetails">
      <img className="landingDetails__img" src={avatar} alt="My Picture" />
      <h1 className="landingDetails__primaryHeader u-head-primary">Curious about hiring me? Well, let me help you decide!</h1>
      <h4 className="landingDetails__secondaryHeader u-head-seceondary">
        You can find my general resume here{' '}
        <a target="_blank" href={resume} className="landingDetails__resumeLink">
          résumé
        </a>.
      </h4>
      <a target="_blank" href="https://medium.com/@accardo.steven" className="landingDetails__articleLink">
        View Articles I Have Written Here!
      </a>
    </div>
  );
};

export default LandingDetails;

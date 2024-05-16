import React from 'react';
import { useState, useEffect } from 'react';
import OtpTimer from "otp-timer";

const Timer = () => {
    return (

          <OtpTimer
            minutes={1}
            seconds={0}
            text="زمان باقی مانده"
            resend={Timer}
          />
    
      );
};

export default Timer;
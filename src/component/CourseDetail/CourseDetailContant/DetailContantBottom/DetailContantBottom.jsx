import React from "react";


const DetailContantBottom = () => {
    return(
<div className="h-[600px] border-solid border-[red] border-[1px] flex flex-row-reverse">
    <div className="w-[600px]
     border-solid border-[green] border-[1px]
      bg-[url('assets/img/coursedetail/bottomdetail.jpg')] bg-cover"></div>
    <div className="w-[950px] bg-[#F9F9F9] direction">
        <div className="w-[400px] h-[80px] text-[50px] text-[#004458] text-right">مزایای این دوره</div>
    </div>
</div>
    );
};

export {DetailContantBottom  };
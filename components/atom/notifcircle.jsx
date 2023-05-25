import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { selectAllDataTransaction, selectAllTransaction } from "../../store/alltransaction/alltransaction.selector";

export default function Notifcircle({ colorStroke = "#fff", size = 17 }) {
  const alltransaction = useSelector(selectAllTransaction);

  let lengthtransaction = 0;
  if (alltransaction) {
    lengthtransaction = alltransaction.length;
  }
  return (
    <Link href="/notify">
      <div className="h-9 w-9 rounded-full border  flex items-center justify-center relative" style={{ borderColor: `${colorStroke}` }}>
        {lengthtransaction != 0 && <div className="h-3 w-3 bg-[#FB7777] rounded-full absolute right-[6px] top-[5px] text-[8px] text-white text-center">{lengthtransaction}</div>}
        <svg width="15" height="19" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M13.7344 14.75H13.2422V7.77734C13.2422 4.88369 11.1032 2.49248 8.32031 2.09463V1.29688C8.32031 0.843652 7.95322 0.476562 7.5 0.476562C7.04678 0.476562 6.67969 0.843652 6.67969 1.29688V2.09463C3.89678 2.49248 1.75781 4.88369 1.75781 7.77734V14.75H1.26562C0.902637 14.75 0.609375 15.0433 0.609375 15.4062V16.0625C0.609375 16.1527 0.683203 16.2266 0.773438 16.2266H5.20312C5.20312 17.4939 6.23262 18.5234 7.5 18.5234C8.76738 18.5234 9.79688 17.4939 9.79688 16.2266H14.2266C14.3168 16.2266 14.3906 16.1527 14.3906 16.0625V15.4062C14.3906 15.0433 14.0974 14.75 13.7344 14.75ZM7.5 17.2109C6.95654 17.2109 6.51562 16.77 6.51562 16.2266H8.48438C8.48438 16.77 8.04346 17.2109 7.5 17.2109ZM3.23438 14.75V7.77734C3.23438 6.63711 3.67734 5.5666 4.4833 4.76064C5.28926 3.95469 6.35977 3.51172 7.5 3.51172C8.64023 3.51172 9.71074 3.95469 10.5167 4.76064C11.3227 5.5666 11.7656 6.63711 11.7656 7.77734V14.75H3.23438Z"
            fill={colorStroke}
          />
        </svg>
      </div>
    </Link>
  );
}

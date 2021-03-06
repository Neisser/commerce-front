import Link from 'next/link'
const ForCompanies = () => {
    return (
      <>
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
            <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">
                <div>
                <svg
                        width="100%"
                        height="3rem"
                        viewBox="0 0 101 34"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                        d="M20.9702 22.1981C20.9702 22.6413 20.8502 22.9959 20.6103 23.2491C20.3704 23.5024 20.0344 23.629 19.6146 23.629C19.2427 23.629 18.9308 23.5024 18.6668 23.2491C18.4149 22.9959 18.2829 22.6413 18.2829 22.1981V5.73628C18.2829 5.30574 18.4149 4.96384 18.6668 4.71058C18.9188 4.45732 19.2427 4.33069 19.6146 4.33069C20.0344 4.33069 20.3704 4.45732 20.6103 4.71058C20.8502 4.96384 20.9702 5.30574 20.9702 5.73628V22.1981Z"
                        fill="#08AEBB"
                        />
                        <path
                        d="M33.1708 23.629C32.403 23.629 31.9591 23.2238 31.8152 22.4007C31.5033 22.8819 31.0834 23.2491 30.5555 23.5277C30.0277 23.8063 29.3919 23.9456 28.6721 23.9456C27.8323 23.9456 27.0765 23.7936 26.4047 23.5023C25.7329 23.2111 25.169 22.7932 24.7012 22.274C24.2333 21.7549 23.8734 21.1217 23.6334 20.3746C23.3815 19.6402 23.2616 18.8297 23.2616 17.9433V11.1686C23.2616 10.7254 23.3815 10.3835 23.6215 10.1303C23.8614 9.88969 24.1853 9.76306 24.5932 9.76306C24.9771 9.76306 25.301 9.88969 25.5529 10.1303C25.8048 10.3709 25.9248 10.7254 25.9248 11.1686V17.9433C25.9248 18.9184 26.1647 19.6908 26.6566 20.2733C27.1485 20.8558 27.8683 21.147 28.816 21.147C29.7638 21.147 30.4716 20.8558 30.9394 20.286C31.4073 19.7161 31.6352 18.931 31.6352 17.9433V11.1686C31.6352 10.7254 31.7552 10.3835 31.9951 10.1303C32.2351 9.88969 32.571 9.76306 32.9909 9.76306C33.3628 9.76306 33.6747 9.88969 33.9386 10.1303C34.1905 10.3709 34.3225 10.7254 34.3225 11.1686V22.4007C34.3225 22.7806 34.2145 23.0718 33.9866 23.2997C33.7467 23.515 33.4827 23.629 33.1708 23.629Z"
                        fill="#08AEBB"
                        />
                        <path
                        d="M40.1889 14.9676C40.7767 15.2081 41.2806 15.4614 41.6884 15.702C42.0963 15.9426 42.4442 16.2085 42.7322 16.4871C43.0921 16.867 43.344 17.2975 43.4999 17.7787C43.6559 18.2599 43.7279 18.8551 43.7279 19.5642C43.7279 20.096 43.6319 20.6026 43.452 21.0964C43.26 21.5903 42.9961 22.0335 42.6482 22.4134C42.3003 22.7932 41.8804 23.1098 41.3885 23.3504C40.8967 23.591 40.3448 23.705 39.721 23.705C39.1811 23.705 38.6413 23.6163 38.1254 23.4264C37.6096 23.2365 37.1657 22.9959 36.8058 22.7046C36.5898 22.5273 36.4099 22.3247 36.2539 22.0841C36.11 21.8562 36.038 21.5903 36.038 21.299C36.038 20.9698 36.146 20.6659 36.3739 20.3746C36.6018 20.0834 36.8778 19.9441 37.2017 19.9441C37.4776 19.9441 37.7775 20.0454 38.0894 20.2353C38.3174 20.3873 38.5693 20.5013 38.8332 20.6026C39.0972 20.7039 39.3971 20.7545 39.721 20.7545C40.1889 20.7545 40.5248 20.6279 40.7527 20.3746C40.9686 20.1214 41.0766 19.8048 41.0766 19.4249C41.0766 19.0703 41.0166 18.7918 40.8967 18.6018C40.7767 18.4119 40.6327 18.2473 40.4648 18.1206C40.1049 17.842 39.709 17.6268 39.2891 17.4748C38.8572 17.3229 38.4493 17.1329 38.0415 16.8797C37.5016 16.5504 37.0697 16.1325 36.7578 15.626C36.4459 15.1195 36.2899 14.461 36.2899 13.6506C36.2899 13.0555 36.3859 12.5236 36.5659 12.0424C36.7578 11.5612 37.0097 11.1433 37.3456 10.8014C37.6815 10.4595 38.0774 10.1936 38.5213 10.0037C38.9772 9.81374 39.4691 9.7251 40.0089 9.7251C40.5488 9.7251 41.0886 9.8264 41.6165 10.0417C42.1443 10.2569 42.5522 10.5735 42.8281 11.0041C43.0201 11.2826 43.104 11.6372 43.104 12.0677C43.104 12.4096 43.0081 12.7136 42.8161 12.9668C42.6242 13.2201 42.3243 13.3467 41.9164 13.3467C41.7604 13.3467 41.5925 13.3087 41.4125 13.2327C41.2326 13.1568 41.1006 13.0554 41.0046 12.9288C40.7407 12.5743 40.3568 12.3843 39.8649 12.3843C39.613 12.3843 39.3971 12.4856 39.2051 12.6756C39.0132 12.8782 38.9172 13.1568 38.9172 13.5366C38.9172 13.8785 38.9892 14.1445 39.1331 14.3344C39.3011 14.5244 39.649 14.7396 40.1889 14.9676Z"
                        fill="#08AEBB"
                        />
                        <path
                        d="M48.1427 9.88972H48.9824C49.3903 9.88972 49.7142 10.0164 49.9542 10.2696C50.1941 10.5229 50.3141 10.8774 50.3141 11.3206C50.3141 11.7132 50.1941 12.0424 49.9542 12.321C49.7142 12.5869 49.3903 12.7262 48.9824 12.7262H48.1427V19.273C48.1427 19.6022 48.1906 19.8681 48.2746 20.0581C48.3586 20.2607 48.4786 20.4126 48.6345 20.5266C48.7905 20.6406 48.9584 20.7292 49.1504 20.7672C49.3423 20.8178 49.5343 20.8558 49.7622 20.8685C50.1221 20.9065 50.398 21.0458 50.59 21.299C50.7819 21.5523 50.8779 21.8942 50.8779 22.3247C50.8779 22.7173 50.7459 23.0339 50.482 23.2745C50.2181 23.5151 49.8342 23.629 49.3183 23.629C48.7785 23.629 48.2746 23.553 47.8067 23.3884C47.3389 23.2238 46.931 22.9705 46.5831 22.616C46.2352 22.2614 45.9593 21.8182 45.7673 21.261C45.5754 20.7165 45.4794 20.0581 45.4794 19.2983V12.7262C45.1195 12.6756 44.8436 12.5236 44.6516 12.2577C44.4597 11.9918 44.3637 11.6879 44.3637 11.3206C44.3637 10.9281 44.4597 10.5988 44.6516 10.3456C44.8436 10.0923 45.1195 9.95304 45.4794 9.91505V5.7616C45.4794 5.3184 45.6114 4.96384 45.8633 4.71058C46.1152 4.45732 46.4391 4.33069 46.811 4.33069C47.2309 4.33069 47.5668 4.45732 47.8067 4.71058C48.0467 4.96384 48.1666 5.3184 48.1666 5.7616V9.88972H48.1427Z"
                        fill="#08AEBB"
                        />
                        <path
                        d="M54.9808 10.8521C55.3646 10.4216 55.8445 10.0797 56.4084 9.82641C56.9722 9.57315 57.584 9.44652 58.2798 9.44652C59.1196 9.44652 59.8754 9.61114 60.5712 9.92771C61.255 10.2443 61.8429 10.6875 62.3227 11.2447C62.8026 11.8018 63.1745 12.4603 63.4264 13.2327C63.6783 13.9925 63.8103 14.8156 63.8103 15.702V22.1981C63.8103 22.6413 63.6903 22.9959 63.4504 23.2491C63.2105 23.5024 62.8866 23.629 62.4787 23.629C62.0948 23.629 61.7709 23.5024 61.5189 23.2491C61.267 22.9959 61.147 22.6413 61.147 22.1981V15.702C61.147 15.2082 61.0751 14.7523 60.9431 14.3344C60.8111 13.9165 60.6192 13.5493 60.3553 13.2454C60.1033 12.9415 59.7794 12.7009 59.4075 12.5236C59.0356 12.3463 58.6038 12.2577 58.1239 12.2577C57.656 12.2577 57.2241 12.3463 56.8402 12.5236C56.4563 12.7009 56.1204 12.9415 55.8325 13.2454C55.5566 13.5493 55.3407 13.9039 55.1967 14.3344C55.0527 14.7523 54.9808 15.2082 54.9808 15.702V22.1981C54.9808 22.6413 54.8608 22.9959 54.6209 23.2491C54.3809 23.5024 54.045 23.629 53.6251 23.629C53.2532 23.629 52.9413 23.5024 52.6774 23.2491C52.4255 22.9959 52.2935 22.6413 52.2935 22.1981V5.73628C52.2935 5.30574 52.4255 4.96384 52.6774 4.71058C52.9293 4.45732 53.2532 4.33069 53.6251 4.33069C54.045 4.33069 54.3809 4.45732 54.6209 4.71058C54.8608 4.96384 54.9808 5.30574 54.9808 5.73628V10.8521Z"
                        fill="#08AEBB"
                        />
                        <path
                        d="M72.4959 9.44653C73.4316 9.44653 74.3074 9.63648 75.1472 10.0164C75.9749 10.3963 76.7067 10.9028 77.3305 11.5359C77.9544 12.1691 78.4462 12.9035 78.8061 13.7519C79.166 14.6003 79.358 15.4868 79.358 16.4238C79.358 16.905 79.238 17.2596 79.0101 17.5128C78.7821 17.7534 78.4462 17.88 78.0264 17.88H68.561C68.633 18.3359 68.8009 18.7665 69.0528 19.159C69.3048 19.5516 69.6047 19.8935 69.9766 20.1847C70.3365 20.4759 70.7444 20.7039 71.1763 20.8558C71.6081 21.0205 72.052 21.0964 72.5079 21.0964C73.0837 21.0964 73.6116 20.9951 74.0914 20.7799C74.5713 20.5646 75.0032 20.2607 75.3751 19.8681C75.531 19.7162 75.699 19.6022 75.8909 19.5136C76.0829 19.4249 76.2508 19.3743 76.4308 19.3743C76.7907 19.3743 77.0906 19.5136 77.3305 19.7922C77.5705 20.0707 77.6904 20.4 77.6904 20.7799C77.6904 20.9825 77.6664 21.1597 77.6185 21.3497C77.5705 21.527 77.4745 21.6916 77.3425 21.8435C76.7307 22.5527 76.0229 23.0719 75.1951 23.4138C74.3674 23.7556 73.4796 23.9329 72.5079 23.9329C71.5602 23.9329 70.6724 23.743 69.8326 23.3631C69.0049 22.9832 68.2731 22.4767 67.6492 21.8182C67.0254 21.1724 66.5336 20.4126 66.1856 19.5262C65.8257 18.6525 65.6458 17.7028 65.6458 16.7024C65.6458 15.702 65.8257 14.765 66.1856 13.8786C66.5455 13.0048 67.0374 12.2324 67.6492 11.5739C68.2731 10.9154 68.9929 10.3963 69.8326 10.0164C70.6604 9.63648 71.5482 9.44653 72.4959 9.44653ZM72.4959 12.283C72.04 12.283 71.5961 12.3717 71.1643 12.5236C70.7324 12.6882 70.3365 12.9162 69.9886 13.2074C69.6407 13.4987 69.3408 13.8532 69.0888 14.2458C68.8369 14.6383 68.669 15.0689 68.573 15.5247H76.4188C76.3348 15.0689 76.1789 14.6383 75.9269 14.2458C75.675 13.8532 75.3751 13.5113 75.0152 13.2074C74.6553 12.9162 74.2594 12.6882 73.8275 12.5236C73.3836 12.359 72.9518 12.283 72.4959 12.283Z"
                        fill="#08AEBB"
                        />
                        <path
                        d="M82.4771 9.76309C82.861 9.76309 83.1489 9.88972 83.3409 10.143C83.5328 10.3962 83.6408 10.7508 83.6648 11.194C84.1207 10.6748 84.6005 10.2949 85.1284 10.067C85.6562 9.83906 86.2681 9.7251 86.9759 9.7251C87.3598 9.7251 87.6837 9.83906 87.9476 10.0543C88.1995 10.2696 88.3315 10.6368 88.3315 11.1307C88.3315 11.5232 88.2355 11.8398 88.0556 12.0804C87.8636 12.321 87.5757 12.4603 87.1678 12.4856C86.496 12.5363 85.9442 12.6376 85.5123 12.8022C85.0804 12.9668 84.7325 13.1947 84.4806 13.4733C84.2286 13.7646 84.0607 14.1065 83.9647 14.5117C83.8687 14.9169 83.8208 15.3601 83.8208 15.854V22.3247C83.8208 22.692 83.7008 22.9959 83.4609 23.2491C83.2209 23.5024 82.897 23.629 82.4891 23.629C82.0812 23.629 81.7573 23.5024 81.5054 23.2491C81.2535 22.9959 81.1335 22.6793 81.1335 22.2994V11.3206C81.1335 10.8901 81.2295 10.5229 81.4214 10.219C81.6374 9.91504 81.9853 9.76309 82.4771 9.76309Z"
                        fill="#08AEBB"
                        />
                        <path
                        d="M92.9023 14.9676C93.4901 15.2081 93.9939 15.4614 94.4018 15.702C94.8097 15.9426 95.1576 16.2085 95.4455 16.4871C95.8054 16.867 96.0574 17.2975 96.2133 17.7787C96.3693 18.2599 96.4413 18.8551 96.4413 19.5642C96.4413 20.096 96.3453 20.6026 96.1653 21.0964C95.9734 21.5903 95.7095 22.0335 95.3616 22.4134C95.0137 22.7932 94.5938 23.1098 94.1019 23.3504C93.6101 23.591 93.0582 23.705 92.4344 23.705C91.8945 23.705 91.3547 23.6163 90.8388 23.4264C90.323 23.2365 89.8791 22.9959 89.5192 22.7046C89.3032 22.5273 89.1233 22.3247 88.9673 22.0841C88.8234 21.8562 88.7514 21.5903 88.7514 21.299C88.7514 20.9698 88.8594 20.6659 89.0873 20.3746C89.3152 20.0834 89.5912 19.9441 89.9151 19.9441C90.191 19.9441 90.4909 20.0454 90.8028 20.2353C91.0308 20.3873 91.2827 20.5013 91.5466 20.6026C91.8105 20.7039 92.1105 20.7545 92.4344 20.7545C92.9022 20.7545 93.2382 20.6279 93.4661 20.3746C93.682 20.1214 93.79 19.8048 93.79 19.4249C93.79 19.0703 93.73 18.7918 93.6101 18.6018C93.4901 18.4119 93.3461 18.2473 93.1782 18.1206C92.8183 17.842 92.4224 17.6268 92.0025 17.4748C91.5706 17.3229 91.1627 17.1329 90.7548 16.8797C90.215 16.5504 89.7831 16.1325 89.4712 15.626C89.1593 15.1195 89.0033 14.461 89.0033 13.6506C89.0033 13.0555 89.0993 12.5236 89.2792 12.0424C89.4712 11.5612 89.7231 11.1433 90.059 10.8014C90.3949 10.4595 90.7908 10.1936 91.2347 10.0037C91.6906 9.81374 92.1824 9.7251 92.7223 9.7251C93.2622 9.7251 93.802 9.8264 94.3299 10.0417C94.8577 10.2569 95.2656 10.5735 95.5415 11.0041C95.7335 11.2826 95.8174 11.6372 95.8174 12.0677C95.8174 12.4096 95.7215 12.7136 95.5295 12.9668C95.3376 13.2201 95.0377 13.3467 94.6298 13.3467C94.4738 13.3467 94.3059 13.3087 94.1259 13.2327C93.946 13.1568 93.814 13.0554 93.718 12.9288C93.4541 12.5743 93.0702 12.3843 92.5783 12.3843C92.3264 12.3843 92.1105 12.4856 91.9185 12.6756C91.7266 12.8782 91.6306 13.1568 91.6306 13.5366C91.6306 13.8785 91.7026 14.1445 91.8465 14.3344C92.0145 14.5244 92.3624 14.7396 92.9023 14.9676Z"
                        fill="#08AEBB"
                        />
                        <path
                        d="M11.1329 9.45923C12.1166 9.45923 13.0404 9.64917 13.9161 10.0417C14.7919 10.4216 15.5237 10.9914 16.0995 11.7259C16.2075 11.8779 16.2915 12.0298 16.3275 12.1944C16.3755 12.359 16.3994 12.511 16.3994 12.6376C16.3994 13.0302 16.2555 13.3721 15.9796 13.676C15.7036 13.9799 15.3797 14.1192 15.0198 14.1192C14.6959 14.1192 14.396 13.9799 14.1321 13.7013C13.7242 13.2708 13.2683 12.9289 12.7525 12.6756C12.2366 12.4224 11.6968 12.2957 11.1209 12.2957C10.5331 12.2957 9.98123 12.4097 9.47737 12.6376C8.97351 12.8656 8.52963 13.1821 8.15774 13.5873C7.78584 13.9926 7.48592 14.4611 7.26998 15.0056C7.05404 15.5501 6.94607 16.1199 6.94607 16.7278C6.94607 17.3356 7.05404 17.9054 7.26998 18.4373C7.48592 18.9691 7.78584 19.4376 8.15774 19.8302C8.52963 20.2227 8.97351 20.5393 9.47737 20.7672C9.98123 20.9952 10.5331 21.1091 11.1209 21.1091C11.6968 21.1091 12.2366 20.9952 12.7525 20.7799C13.2683 20.5646 13.7122 20.2354 14.0841 19.8049C14.24 19.6402 14.396 19.5263 14.54 19.4756C14.6839 19.4123 14.8519 19.387 15.0198 19.387C15.3797 19.387 15.7036 19.5263 16.0036 19.8049C16.3035 20.0834 16.4474 20.4253 16.4474 20.8179C16.4474 21.1471 16.3035 21.4764 16.0276 21.8056C15.3917 22.4894 14.6479 23.0212 13.7962 23.3885C12.9444 23.7557 12.0567 23.9456 11.1209 23.9456C10.1732 23.9456 9.28542 23.7557 8.44566 23.3758C7.61789 22.9959 6.88609 22.4894 6.26226 21.8309C5.63844 21.1851 5.14657 20.4253 4.79867 19.5389C4.43877 18.6652 4.25882 17.7155 4.25882 16.7151C4.25882 15.7147 4.43877 14.7777 4.79867 13.8913C5.15857 13.0175 5.65043 12.2451 6.26226 11.5866C6.88609 10.9281 7.60589 10.4089 8.44566 10.0291C9.29742 9.66184 10.1852 9.45923 11.1329 9.45923Z"
                        fill="#08AEBB"
                        />
                        <path
                        d="M11.0729 18.7031C12.1264 18.7031 12.9804 17.8017 12.9804 16.6897C12.9804 15.5777 12.1264 14.6763 11.0729 14.6763C10.0195 14.6763 9.16547 15.5777 9.16547 16.6897C9.16547 17.8017 10.0195 18.7031 11.0729 18.7031Z"
                        fill="#77C6C8"
                        />
                        <path
                        d="M11.1089 24.604C9.63332 24.604 8.2657 24.2494 7.10202 23.6416C6.91008 23.5403 6.74212 23.7936 6.88608 23.9582L10.677 28.0357C10.881 28.2509 11.2169 28.2509 11.4208 28.0357L15.2478 23.9962C15.3917 23.8442 15.2238 23.591 15.0318 23.6796C13.9041 24.2748 12.5485 24.604 11.1089 24.604Z"
                        fill="#77C6C8"
                        />
                    </svg>
                </div>
                <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                    <p className="pb-2">Si tu tienda ya está registrada, deberás enviar los siguientes datos a hola@clusthers.com 
                        para subir tu catálogo a la página. Si no lo está, registrala <Link href="/registro"><a className='underline font-semibold' >aquí.</a></Link>
                    </p>
                    <ul className="list-disc space-y-2">
                    <li className="flex items-start">
                        <span className="h-6 flex items-center sm:h-7">
                        <svg className="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" ClipRule="evenodd" />
                        </svg>
                        </span>
                        <p className="ml-2">                                                                                                                                        
                        Nombre del producto + descripción + imagen(formato .jpg)
                        </p>
                    </li>
                    <li className="flex items-start">
                        <span className="h-6 flex items-center sm:h-7">
                        <svg className="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" ClipRule="evenodd" />
                        </svg>
                        </span>
                        <p className="ml-2">
                        Cantidad disponible
                        </p>
                    </li>
                    <li className="flex items-start">
                        <span className="h-6 flex items-center sm:h-7">
                        <svg className="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" ClipRule="evenodd" />
                        </svg>
                        </span>
                        <p className="ml-2">Cantidad máxima y mínima a vender + precio</p>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
      </>
    )
  }
  
  export default ForCompanies;
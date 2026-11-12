/* Seanapps Pro · prototype (données d’exemple) */
const BUILD='12/11 à 17:03';
/* Icônes : bibliothèque Seanapps (Seanapps/Library, style Lucide, trait 1,5) */
const I = {"info": "<path d=\"M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z\"/>", "grid": "<path d=\"M9 3H4C3.44772 3 3 3.44772 3 4V11C3 11.5523 3.44772 12 4 12H9C9.55228 12 10 11.5523 10 11V4C10 3.44772 9.55228 3 9 3Z\"/><path d=\"M20 3H15C14.4477 3 14 3.44772 14 4V7C14 7.55228 14.4477 8 15 8H20C20.5523 8 21 7.55228 21 7V4C21 3.44772 20.5523 3 20 3Z\"/><path d=\"M20 12H15C14.4477 12 14 12.4477 14 13V20C14 20.5523 14.4477 21 15 21H20C20.5523 21 21 20.5523 21 20V13C21 12.4477 20.5523 12 20 12Z\"/><path d=\"M9 16H4C3.44772 16 3 16.4477 3 17V20C3 20.5523 3.44772 21 4 21H9C9.55228 21 10 20.5523 10 20V17C10 16.4477 9.55228 16 9 16Z\"/>", "boat": "<path d=\"M10 2L21 14H3L10 2ZM10 2V18M22 18H2C2 19.0609 2.42143 20.0783 3.17157 20.8284C3.92172 21.5786 4.93913 22 6 22H18C19.0609 22 20.0783 21.5786 20.8284 20.8284C21.5786 20.0783 22 19.0609 22 18Z\"/>", "search": "<path d=\"M21.0002 21L16.7002 16.7M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z\"/>", "bell": "<path d=\"M10.3 21C10.4674 21.3044 10.7135 21.5583 11.0125 21.7352C11.3116 21.912 11.6526 22.0053 12 22.0053C12.3475 22.0053 12.6885 21.912 12.9876 21.7352C13.2866 21.5583 13.5327 21.3044 13.7 21M6 8C6 6.4087 6.63214 4.88258 7.75736 3.75736C8.88258 2.63214 10.4087 2 12 2C13.5913 2 15.1174 2.63214 16.2426 3.75736C17.3679 4.88258 18 6.4087 18 8C18 15 21 17 21 17H3C3 17 6 15 6 8Z\"/>", "chev": "<path d=\"M9 18L15 12L9 6\"/>", "back": "<path d=\"M15 18L9 12L15 6\"/>", "users": "<path d=\"M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H6C4.93913 15 3.92172 15.4214 3.17157 16.1716C2.42143 16.9217 2 17.9391 2 19V21M22 20.9999V18.9999C21.9993 18.1136 21.7044 17.2527 21.1614 16.5522C20.6184 15.8517 19.8581 15.3515 19 15.1299M16 3.12988C16.8604 3.35018 17.623 3.85058 18.1676 4.55219C18.7122 5.2538 19.0078 6.11671 19.0078 7.00488C19.0078 7.89305 18.7122 8.75596 18.1676 9.45757C17.623 10.1592 16.8604 10.6596 16 10.8799M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z\"/>", "msg": "<path d=\"M18 9H20C20.5304 9 21.0391 9.21071 21.4142 9.58579C21.7893 9.96086 22 10.4696 22 11V22L18 18H12C11.4696 18 10.9609 17.7893 10.5858 17.4142C10.2107 17.0391 10 16.5304 10 16V15M14 9C14 9.53043 13.7893 10.0391 13.4142 10.4142C13.0391 10.7893 12.5304 11 12 11H6L2 15V4C2 2.9 2.9 2 4 2H12C12.5304 2 13.0391 2.21071 13.4142 2.58579C13.7893 2.96086 14 3.46957 14 4V9Z\"/>", "key": "<path d=\"M2 17.9999V20.9999C2 21.5999 2.4 21.9999 3 21.9999H7V18.9999H10V15.9999H12L13.4 14.5999C14.7898 15.0841 16.3028 15.0822 17.6915 14.5947C19.0801 14.1071 20.2622 13.1628 21.0444 11.916C21.8265 10.6693 22.1624 9.19409 21.9971 7.73165C21.8318 6.26922 21.1751 4.90617 20.1344 3.86549C19.0937 2.8248 17.7307 2.1681 16.2683 2.00281C14.8058 1.83751 13.3306 2.17341 12.0839 2.95556C10.8372 3.7377 9.89279 4.91979 9.40525 6.30844C8.91771 7.69708 8.91585 9.21008 9.4 10.5999L2 17.9999Z\"/><path d=\"M16.5 8C16.7761 8 17 7.77614 17 7.5C17 7.22386 16.7761 7 16.5 7C16.2239 7 16 7.22386 16 7.5C16 7.77614 16.2239 8 16.5 8Z\"/>", "clip": "<path d=\"M16 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H8M12 11H16M12 16H16M8 11H8.01M8 16H8.01M9 2H15C15.5523 2 16 2.44772 16 3V5C16 5.55228 15.5523 6 15 6H9C8.44772 6 8 5.55228 8 5V3C8 2.44772 8.44772 2 9 2Z\"/>", "hist": "<path d=\"M3 12C3 13.78 3.52784 15.5201 4.51677 17.0001C5.50571 18.4802 6.91131 19.6337 8.55585 20.3149C10.2004 20.9961 12.01 21.1743 13.7558 20.8271C15.5016 20.4798 17.1053 19.6226 18.364 18.364C19.6226 17.1053 20.4798 15.5016 20.8271 13.7558C21.1743 12.01 20.9961 10.2004 20.3149 8.55585C19.6337 6.91131 18.4802 5.50571 17.0001 4.51677C15.5201 3.52784 13.78 3 12 3C9.48395 3.00947 7.06897 3.99122 5.26 5.74L3 8M8 8H3V3M12 7V12L16 14\"/>", "share": "<path d=\"M8.59009 13.51L15.4201 17.49M15.4101 6.51001L8.59009 10.49M21 5C21 6.65685 19.6569 8 18 8C16.3431 8 15 6.65685 15 5C15 3.34315 16.3431 2 18 2C19.6569 2 21 3.34315 21 5ZM9 12C9 13.6569 7.65685 15 6 15C4.34315 15 3 13.6569 3 12C3 10.3431 4.34315 9 6 9C7.65685 9 9 10.3431 9 12ZM21 19C21 20.6569 19.6569 22 18 22C16.3431 22 15 20.6569 15 19C15 17.3431 16.3431 16 18 16C19.6569 16 21 17.3431 21 19Z\"/>", "euro": "<path d=\"M4 10H16M4 14H13M19.0002 6.00003C17.5772 4.70768 15.7224 3.99427 13.8002 4.00003C12.7627 4.01308 11.7379 4.23037 10.7845 4.63949C9.83098 5.0486 8.96742 5.64153 8.24311 6.38442C7.5188 7.1273 6.94792 8.00559 6.56307 8.96913C6.17822 9.93266 5.98694 10.9626 6.00015 12C6.00015 16.4 9.50015 20 13.8002 20C15.8002 20 17.6002 19.2 19.0002 18\"/>", "gear": "<path d=\"M12.222 2H11.782C11.2515 2 10.7428 2.21071 10.3677 2.58579C9.99267 2.96086 9.78195 3.46957 9.78195 4V4.18C9.7816 4.53073 9.68901 4.87519 9.51349 5.17884C9.33797 5.48248 9.08569 5.73464 8.78195 5.91L8.35196 6.16C8.04792 6.33554 7.70303 6.42795 7.35195 6.42795C7.00088 6.42795 6.65599 6.33554 6.35195 6.16L6.20195 6.08C5.74302 5.81526 5.19779 5.74344 4.68596 5.88031C4.17412 6.01717 3.73751 6.35154 3.47196 6.81L3.25196 7.19C2.98722 7.64893 2.9154 8.19416 3.05226 8.706C3.18913 9.21783 3.52349 9.65445 3.98196 9.92L4.13196 10.02C4.43423 10.1945 4.68557 10.4451 4.86101 10.7468C5.03644 11.0486 5.12985 11.391 5.13196 11.74V12.25C5.13335 12.6024 5.04161 12.949 4.866 13.2545C4.69039 13.5601 4.43716 13.8138 4.13196 13.99L3.98196 14.08C3.52349 14.3456 3.18913 14.7822 3.05226 15.294C2.9154 15.8058 2.98722 16.3511 3.25196 16.81L3.47196 17.19C3.73751 17.6485 4.17412 17.9828 4.68596 18.1197C5.19779 18.2566 5.74302 18.1847 6.20195 17.92L6.35195 17.84C6.65599 17.6645 7.00088 17.5721 7.35195 17.5721C7.70303 17.5721 8.04792 17.6645 8.35196 17.84L8.78195 18.09C9.08569 18.2654 9.33797 18.5175 9.51349 18.8212C9.68901 19.1248 9.7816 19.4693 9.78195 19.82V20C9.78195 20.5304 9.99267 21.0391 10.3677 21.4142C10.7428 21.7893 11.2515 22 11.782 22H12.222C12.7524 22 13.2611 21.7893 13.6362 21.4142C14.0112 21.0391 14.222 20.5304 14.222 20V19.82C14.2223 19.4693 14.3149 19.1248 14.4904 18.8212C14.6659 18.5175 14.9182 18.2654 15.222 18.09L15.652 17.84C15.956 17.6645 16.3009 17.5721 16.652 17.5721C17.003 17.5721 17.3479 17.6645 17.652 17.84L17.802 17.92C18.2609 18.1847 18.8061 18.2566 19.318 18.1197C19.8298 17.9828 20.2664 17.6485 20.532 17.19L20.752 16.8C21.0167 16.3411 21.0885 15.7958 20.9516 15.284C20.8148 14.7722 20.4804 14.3356 20.022 14.07L19.872 13.99C19.5667 13.8138 19.3135 13.5601 19.1379 13.2545C18.9623 12.949 18.8706 12.6024 18.872 12.25V11.75C18.8706 11.3976 18.9623 11.051 19.1379 10.7455C19.3135 10.4399 19.5667 10.1862 19.872 10.01L20.022 9.92C20.4804 9.65445 20.8148 9.21783 20.9516 8.706C21.0885 8.19416 21.0167 7.64893 20.752 7.19L20.532 6.81C20.2664 6.35154 19.8298 6.01717 19.318 5.88031C18.8061 5.74344 18.2609 5.81526 17.802 6.08L17.652 6.16C17.3479 6.33554 17.003 6.42795 16.652 6.42795C16.3009 6.42795 15.956 6.33554 15.652 6.16L15.222 5.91C14.9182 5.73464 14.6659 5.48248 14.4904 5.17884C14.3149 4.87519 14.2223 4.53073 14.222 4.18V4C14.222 3.46957 14.0112 2.96086 13.6362 2.58579C13.2611 2.21071 12.7524 2 12.222 2Z\"/><path d=\"M12.002 15C13.6588 15 15.002 13.6569 15.002 12C15.002 10.3431 13.6588 9 12.002 9C10.3451 9 9.00195 10.3431 9.00195 12C9.00195 13.6569 10.3451 15 12.002 15Z\"/>", "award": "<path d=\"M15.477 12.8899L16.992 21.4159C17.009 21.5163 16.9949 21.6195 16.9516 21.7116C16.9084 21.8038 16.838 21.8806 16.7499 21.9317C16.6619 21.9828 16.5603 22.0058 16.4588 21.9976C16.3573 21.9894 16.2607 21.9504 16.182 21.8859L12.602 19.1989C12.4292 19.0698 12.2192 19 12.0035 19C11.7878 19 11.5778 19.0698 11.405 19.1989L7.819 21.8849C7.74032 21.9493 7.64386 21.9882 7.54249 21.9964C7.44112 22.0046 7.33967 21.9817 7.25166 21.9308C7.16365 21.8798 7.09327 21.8032 7.04991 21.7112C7.00656 21.6192 6.99228 21.5162 7.009 21.4159L8.523 12.8899M18 8C18 11.3137 15.3137 14 12 14C8.68629 14 6 11.3137 6 8C6 4.68629 8.68629 2 12 2C15.3137 2 18 4.68629 18 8Z\"/>", "check": "<path d=\"M20 6L9 17L4 12\"/>", "filter": "<path d=\"M3 6H21M7 12H17M10 18H14\"/>", "mail": "<path d=\"M22 7L13.03 12.7C12.7213 12.8934 12.3643 12.996 12 12.996C11.6357 12.996 11.2787 12.8934 10.97 12.7L2 7M4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V6C2 4.89543 2.89543 4 4 4Z\"/>", "phone": "<path d=\"M21.9975 16.92V19.92C21.9986 20.1985 21.9416 20.4742 21.83 20.7293C21.7184 20.9845 21.5548 21.2136 21.3496 21.4019C21.1443 21.5901 20.9021 21.7335 20.6382 21.8227C20.3744 21.9119 20.0949 21.9451 19.8175 21.92C16.7403 21.5856 13.7845 20.5341 11.1875 18.85C8.77132 17.3147 6.72283 15.2662 5.18749 12.85C3.49747 10.2412 2.44573 7.27099 2.11749 4.18C2.0925 3.90347 2.12537 3.62476 2.21399 3.36162C2.30262 3.09849 2.44506 2.85669 2.63226 2.65162C2.81945 2.44655 3.0473 2.28271 3.30128 2.17052C3.55527 2.05833 3.82983 2.00026 4.10749 2H7.10749C7.5928 1.99522 8.06328 2.16708 8.43125 2.48353C8.79922 2.79999 9.03957 3.23945 9.10749 3.72C9.23411 4.68007 9.46894 5.62273 9.80749 6.53C9.94204 6.88792 9.97115 7.27691 9.8914 7.65088C9.81164 8.02485 9.62635 8.36811 9.35749 8.64L8.08749 9.91C9.51105 12.4135 11.5839 14.4864 14.0875 15.91L15.3575 14.64C15.6294 14.3711 15.9726 14.1858 16.3466 14.1061C16.7206 14.0263 17.1096 14.0555 17.4675 14.19C18.3748 14.5286 19.3174 14.7634 20.2775 14.89C20.7633 14.9585 21.2069 15.2032 21.524 15.5775C21.8412 15.9518 22.0097 16.4296 21.9975 16.92Z\"/>", "x": "<path d=\"M18 6L6 18M6 6L18 18\"/>", "pulse": "<path d=\"M22 12H19.52C19.083 11.9991 18.6577 12.1413 18.3091 12.405C17.9606 12.6686 17.708 13.0392 17.59 13.46L15.24 21.82C15.2249 21.8719 15.1933 21.9175 15.15 21.95C15.1067 21.9825 15.0541 22 15 22C14.9459 22 14.8933 21.9825 14.85 21.95C14.8067 21.9175 14.7751 21.8719 14.76 21.82L9.24 2.18C9.22485 2.12807 9.19327 2.08246 9.15 2.05C9.10673 2.01754 9.05409 2 9 2C8.94591 2 8.89327 2.01754 8.85 2.05C8.80673 2.08246 8.77515 2.12807 8.76 2.18L6.41 10.54C6.29246 10.9592 6.04138 11.3285 5.69486 11.592C5.34835 11.8555 4.92532 11.9988 4.49 12H2\"/>", "clock": "<path d=\"M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z\"/>", "edit": "<path d=\"M15 5L19 9M21.1739 6.81189C21.7026 6.28332 21.9997 5.56636 21.9998 4.81875C21.9999 4.07113 21.703 3.3541 21.1744 2.82539C20.6459 2.29668 19.9289 1.99961 19.1813 1.99951C18.4337 1.99942 17.7166 2.29632 17.1879 2.82489L3.84193 16.1739C3.60975 16.4054 3.43805 16.6904 3.34193 17.0039L2.02093 21.3559C1.99509 21.4424 1.99314 21.5342 2.01529 21.6217C2.03743 21.7092 2.08285 21.7891 2.14673 21.8529C2.21061 21.9167 2.29055 21.962 2.37809 21.984C2.46563 22.006 2.55749 22.0039 2.64393 21.9779L6.99693 20.6579C7.3101 20.5626 7.59511 20.392 7.82693 20.1609L21.1739 6.81189Z\"/>", "wifi": "<path d=\"M12 20H12.01M2 8.8199C4.75011 6.36013 8.31034 5.00024 12 5.00024C15.6897 5.00024 19.2499 6.36013 22 8.8199M5 12.8591C6.86929 11.0268 9.38247 10.0005 12 10.0005C14.6175 10.0005 17.1307 11.0268 19 12.8591M8.5 16.429C9.43464 15.5129 10.6912 14.9998 12 14.9998C13.3088 14.9998 14.5654 15.5129 15.5 16.429\"/>", "user": "<path d=\"M19 21V19C19 17.9391 18.5786 16.9217 17.8284 16.1716C17.0783 15.4214 16.0609 15 15 15H9C7.93913 15 6.92172 15.4214 6.17157 16.1716C5.42143 16.9217 5 17.9391 5 19V21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z\"/>", "sparkle": "<path d=\"M19.9985 3V7M21.9985 5H17.9985M3.99854 17V19M4.99854 18H2.99854M9.93548 15.5C9.8462 15.1539 9.66581 14.8381 9.41309 14.5854C9.16037 14.3327 8.84455 14.1523 8.49848 14.063L2.36348 12.481C2.25881 12.4513 2.16668 12.3883 2.10109 12.3014C2.03549 12.2146 2 12.1088 2 12C2 11.8912 2.03549 11.7854 2.10109 11.6986C2.16668 11.6118 2.25881 11.5487 2.36348 11.519L8.49848 9.93601C8.84442 9.84681 9.16017 9.66658 9.41288 9.41404C9.66559 9.16151 9.84604 8.84589 9.93548 8.50001L11.5175 2.36501C11.5469 2.25992 11.6099 2.16735 11.6968 2.1014C11.7837 2.03545 11.8899 1.99976 11.999 1.99976C12.1081 1.99976 12.2142 2.03545 12.3012 2.1014C12.3881 2.16735 12.4511 2.25992 12.4805 2.36501L14.0615 8.50001C14.1508 8.84608 14.3311 9.1619 14.5839 9.41462C14.8366 9.66734 15.1524 9.84773 15.4985 9.93701L21.6335 11.518C21.739 11.5471 21.832 11.61 21.8983 11.6971C21.9646 11.7841 22.0005 11.8906 22.0005 12C22.0005 12.1094 21.9646 12.2159 21.8983 12.3029C21.832 12.39 21.739 12.4529 21.6335 12.482L15.4985 14.063C15.1524 14.1523 14.8366 14.3327 14.5839 14.5854C14.3311 14.8381 14.1508 15.1539 14.0615 15.5L12.4795 21.635C12.4501 21.7401 12.3871 21.8327 12.3002 21.8986C12.2132 21.9646 12.1071 22.0003 11.998 22.0003C11.8889 22.0003 11.7827 21.9646 11.6958 21.8986C11.6089 21.8327 11.5459 21.7401 11.5165 21.635L9.93548 15.5Z\"/>", "eye": "<path d=\"M2 12C2 12 5 5 12 5C19 5 22 12 22 12C22 12 19 19 12 19C5 19 2 12 2 12Z\"/><path d=\"M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z\"/>", "alert": "<path d=\"M12.0024 9V13M12.0024 17H12.0124M21.7324 18L13.7324 3.99998C13.5579 3.69218 13.305 3.43617 12.9993 3.25805C12.6936 3.07993 12.3462 2.98608 11.9924 2.98608C11.6386 2.98608 11.2911 3.07993 10.9854 3.25805C10.6798 3.43617 10.4268 3.69218 10.2524 3.99998L2.25237 18C2.07605 18.3053 1.9836 18.6519 1.98438 19.0045C1.98516 19.3571 2.07915 19.7032 2.25682 20.0078C2.43449 20.3124 2.68952 20.5646 2.99607 20.7388C3.30261 20.9131 3.64978 21.0032 4.00237 21H20.0024C20.3533 20.9996 20.6979 20.9069 21.0017 20.7313C21.3054 20.5556 21.5576 20.3031 21.7329 19.9991C21.9082 19.6951 22.0004 19.3504 22.0003 18.9995C22.0002 18.6486 21.9078 18.3039 21.7324 18Z\"/>", "target": "<path d=\"M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z\"/><path d=\"M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z\"/><path d=\"M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z\"/>", "star": "<path d=\"M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z\"/>", "book": "<path d=\"M12 7C12 5.93913 11.5786 4.92172 10.8284 4.17157C10.0783 3.42143 9.06087 3 8 3H2V18H9C9.79565 18 10.5587 18.3161 11.1213 18.8787C11.6839 19.4413 12 20.2044 12 21M12 7V21M12 7C12 5.93913 12.4214 4.92172 13.1716 4.17157C13.9217 3.42143 14.9391 3 16 3H22V18H15C14.2044 18 13.4413 18.3161 12.8787 18.8787C12.3161 19.4413 12 20.2044 12 21\"/>", "zap": "<path d=\"M4.00341 14C3.81418 14.0006 3.62864 13.9476 3.46836 13.847C3.30809 13.7464 3.17964 13.6024 3.09796 13.4317C3.01628 13.261 2.9847 13.0706 3.00691 12.8827C3.02912 12.6947 3.10419 12.517 3.22341 12.37L13.1234 2.17C13.1977 2.08428 13.2989 2.02636 13.4104 2.00573C13.5219 1.98511 13.6371 2.00301 13.7371 2.0565C13.8371 2.11 13.916 2.1959 13.9607 2.30011C14.0055 2.40432 14.0135 2.52065 13.9834 2.63L12.0634 8.65C12.0068 8.80152 11.9878 8.96452 12.008 9.12501C12.0282 9.28549 12.0871 9.43868 12.1795 9.57143C12.2719 9.70417 12.3952 9.81251 12.5387 9.88716C12.6822 9.96181 12.8417 10.0005 13.0034 10H20.0034C20.1926 9.99935 20.3782 10.0524 20.5385 10.153C20.6987 10.2536 20.8272 10.3976 20.9089 10.5683C20.9905 10.739 21.0221 10.9294 20.9999 11.1173C20.9777 11.3053 20.9026 11.483 20.7834 11.63L10.8834 21.83C10.8091 21.9157 10.708 21.9736 10.5964 21.9943C10.4849 22.0149 10.3697 21.997 10.2697 21.9435C10.1697 21.89 10.0908 21.8041 10.0461 21.6999C10.0013 21.5957 9.99333 21.4794 10.0234 21.37L11.9434 15.35C12 15.1985 12.019 15.0355 11.9988 14.875C11.9786 14.7145 11.9198 14.5613 11.8273 14.4286C11.7349 14.2958 11.6116 14.1875 11.4681 14.1128C11.3246 14.0382 11.1652 13.9995 11.0034 14H4.00341Z\"/>", "send": "<path d=\"M11 13L2 9L22 2L15 22L11 13ZM22 2L11 13\"/>", "droplet": "<path d=\"M12 22C13.8565 22 15.637 21.2625 16.9497 19.9497C18.2625 18.637 19 16.8565 19 15C19 13 18 11.1 16 9.5C14 7.9 12.5 5.5 12 3C11.5 5.5 10 7.9 8 9.5C6 11.1 5 13 5 15C5 16.8565 5.7375 18.637 7.05025 19.9497C8.36301 21.2625 10.1435 22 12 22Z\"/>", "waves": "<path d=\"M2 6C2.6 6.5 3.2 7 4.5 7C7 7 7 5 9.5 5C12.1 5 11.9 7 14.5 7C17 7 17 5 19.5 5C20.8 5 21.4 5.5 22 6M2 12C2.6 12.5 3.2 13 4.5 13C7 13 7 11 9.5 11C12.1 11 11.9 13 14.5 13C17 13 17 11 19.5 11C20.8 11 21.4 11.5 22 12M2 18C2.6 18.5 3.2 19 4.5 19C7 19 7 17 9.5 17C12.1 17 11.9 19 14.5 19C17 19 17 17 19.5 17C20.8 17 21.4 17.5 22 18\"/>", "compass": "<path d=\"M16.24 7.76001L14.436 13.171C14.3378 13.4656 14.1724 13.7333 13.9528 13.9528C13.7333 14.1724 13.4656 14.3378 13.171 14.436L7.76001 16.24L9.56401 10.829C9.66219 10.5344 9.82762 10.2668 10.0472 10.0472C10.2668 9.82762 10.5344 9.66219 10.829 9.56401L16.24 7.76001Z\"/><path d=\"M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z\"/>", "bed": "<path d=\"M2 4V20M2 8H20C20.5304 8 21.0391 8.21071 21.4142 8.58579C21.7893 8.96086 22 9.46957 22 10V20M2 17H22M6 8V17\"/>", "cog": "<path d=\"M12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4M12 20C9.87827 20 7.84344 19.1571 6.34315 17.6569C4.84285 16.1566 4 14.1217 4 12M12 20V22M12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12M12 4V2M4 12H2M14 12C14 12.5304 13.7893 13.0391 13.4142 13.4142C13.0391 13.7893 12.5304 14 12 14C11.4696 14 10.9609 13.7893 10.5858 13.4142C10.2107 13.0391 10 12.5304 10 12C10 11.4696 10.2107 10.9609 10.5858 10.5858C10.9609 10.2107 11.4696 10 12 10C12.5304 10 13.0391 10.2107 13.4142 10.5858C13.7893 10.9609 14 11.4696 14 12ZM14 12H22M17 20.6599L16 18.9299M11 10.2701L7 3.34009M20.6602 17L18.9302 16M3.33984 7L5.06984 8M20.6602 7L18.9302 8M3.33984 17L5.06984 16M17 3.34009L16 5.07009M11 13.73L7 20.66\"/>"};
const ic=(n,s=20,w=1.5)=>`<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${w>=2.2?2:1.5}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${I[n]||I.info}</svg>`;

const NEW='<span class="chip c-new">Nouveau</span>';
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const nf=(v,d=0)=>Number(v).toLocaleString('fr-FR',{minimumFractionDigits:d,maximumFractionDigits:d});

/* ======================= Métiers ======================= */
const ROLES=[
  {id:'directeur',l:'Directeur',i:'award',d:'Vue d’ensemble de la concession : activité, état du parc, alertes et ventes que les capteurs font apparaître.'},
  {id:'commercial',l:'Commercial',i:'euro',d:'Vos ventes, vos clients, et les ventes que les capteurs repèrent pour vous (batterie usée, bateau mal équipé…).'},
  {id:'technicien',l:'Technicien',i:'pulse',d:'Les alertes capteurs en cours, bateau par bateau, et l’état des boîtiers pour diagnostiquer à distance.'},
  {id:'atelier',l:'Atelier',i:'gear',d:'Les entretiens à prévoir d’après les heures moteur, le planning et la charge de l’atelier.'}
];
const roleOf=id=>ROLES.find(r=>r.id===id);

/* ======================= Données d'exemple ======================= */
const S = {
  user:(()=>{try{return localStorage.getItem('sp-user')||'directeur'}catch(e){return 'directeur'}})(),
  role:(()=>{try{const u=localStorage.getItem('sp-user')||'directeur';return u==='directeur'?(localStorage.getItem('sp-role')||'directeur'):u}catch(e){return 'directeur'}})(),
  cb:'b2', capOnlyMine:false, q:'', fam:'',
  tasks:[
    {id:'t1',kind:'insp',title:'Faire le « Contrôle à 1 an » de Test Boat',ctx:'Prévu avant le 27/08/2026',late:true,go:'#bateaux',boat:'b3',done:false},
    {id:'t2',kind:'stock',title:'Déclarer le stock et régulariser 8 bateaux',ctx:'Déclaration de novembre · 3 réponses déjà préparées',go:'#stock',done:false},
    {id:'t3',kind:'msg',title:'Répondre à Jean Teste',ctx:'Reçu il y a 3 h. Répondre ?',nudge:true,go:'#messages',done:false},
    {id:'t4',kind:'box',title:'Activer le boîtier de Princess 3',ctx:'Étape 4 sur 5 de la mise en service',go:'#bateaux',boat:'b1',done:false},
    {id:'t5',kind:'client',title:'Relancer Edouard Gatouillat',ctx:'Consentement Insight manquant · Princess 1',go:'#clients',done:true}
  ],
  boats:[
    {id:'b1',name:'Princess 3',owner:'killian hocquet',status:'Mise en service',brand:'P',hin:'FR-BEN3K401G526',order:'CMD-24-0612',steps:[true,true,true,false,false]},
    {id:'b2',name:'Princess 2',owner:'Jean Teste',status:'Vendu',brand:'P',notif:3,hin:'FR-PRI2B114H526',order:'63871'},
    {id:'b3',name:'Test Boat',owner:'Jane Doe',status:'Vendu',brand:'T',insp:'Contrôle à 1 an en retard',hin:'FR-CNBZW121J122',order:'64090'},
    {id:'b4',name:'Fastkiti',owner:'killian hocquet',status:'Vendu',brand:'C',hin:'FR-CNB45F902K526',order:'62214'},
    {id:'b5',name:'Virtual Customer Test Boat',owner:'Test A',status:'Mise en service',brand:'K',steps:[true,true,false,false,false]},
    {id:'b6',name:'Princess 1',owner:'Edouard Gatouillat',status:'Vendu',brand:'S',notif:3,hin:'FR-PRI1A087G526',order:'61540'},
    {id:'b7',name:'Mate (Simulation 22)',owner:'Ronan Leroy',status:'Vendu',brand:'M',hin:'FR-JEA22M310L526',order:'63002'}
  ],
  sel:'b1',
  convs:[
    {id:'c1',name:'Jean Teste',boat:'Princess 2',last:'Bonjour, une alerte batterie s’affiche depuis ce matin…',ago:'il y a 3 h',unread:true,msgs:[
      {me:false,t:'Bonjour, une alerte batterie s’affiche depuis ce matin sur l’app. Est-ce que je dois m’inquiéter ?',h:'10:12'}]},
    {id:'c2',name:'Jane Doe',boat:'Test Boat',last:'Vous : Parfait, on vous attend jeudi à 9 h.',ago:'hier',msgs:[
      {me:false,t:'Bonjour, je peux passer pour le contrôle à 1 an la semaine prochaine ?',h:'Hier 16:02'},
      {me:true,t:'Bonjour Jane, oui bien sûr. Jeudi 9 h vous convient ?',h:'Hier 16:40'},
      {me:false,t:'Oui très bien.',h:'Hier 17:05'},
      {me:true,t:'Parfait, on vous attend jeudi à 9 h.',h:'Hier 17:10'}]},
    {id:'c3',name:'Ronan Leroy',boat:'Mate (Simulation 22)',last:'Vous : Le devis est dans vos documents.',ago:'lun.',msgs:[
      {me:false,t:'Vous avez pu préparer le devis pour l’hivernage ?',h:'Lun. 09:20'},
      {me:true,t:'Le devis est dans vos documents.',h:'Lun. 10:35'}]}
  ],
  conv:'c1',
  showOwners:false
};
const sel=()=>S.boats.find(b=>b.id===S.sel);
const boat=id=>S.boats.find(b=>b.id===id);

/* ---------- Séries capteurs : 7 jours, une valeur par heure (mer. 4 0 h → mar. 10 14 h) ---------- */
const DAYS=['mer. 4','jeu. 5','ven. 6','sam. 7','dim. 8','lun. 9','mar. 10'];
const NOWH=6*24+14;
const hourLabel=i=>`${DAYS[Math.floor(i/24)]} · ${i%24} h`;
function rng(seed){return()=>{seed=(seed*16807)%2147483647;return (seed-1)/2147483646}}
function series(seed,f){const r=rng(seed);const a=[];for(let i=0;i<=NOWH;i++)a.push(f(i,r()));return a}
const sun=i=>Math.max(0,Math.sin(((i%24)-7)/12*Math.PI));
const CUT=NOWH-20; // Princess 2 : prise de quai débranchée lundi 18 h
const SER={
  b2:{batt:series(11,(i,r)=>i<CUT?12.72+.12*sun(i)+(r-.5)*.05:12.62-(i-CUT)*.061+(r-.5)*.03),
      hum:series(12,(i,r)=>64+2*Math.sin(i/24*2*Math.PI)+(r-.5)*1.6),
      pres:series(13,(i,r)=>1019-Math.max(0,i-96)*.19+(r-.5)*.5)},
  b3:{batt:series(21,(i,r)=>12.38+.14*sun(i)+(r-.5)*.05),
      hum:series(22,(i,r)=>60+2*Math.sin(i/24*2*Math.PI)+(r-.5)*1.4),
      pres:series(23,(i,r)=>1020-Math.max(0,i-96)*.18+(r-.5)*.5)},
  b4:{batt:series(31,(i,r)=>12.6+.12*sun(i)+(r-.5)*.05).slice(0,NOWH-1),
      hum:series(32,(i,r)=>63+2*Math.sin(i/24*2*Math.PI)+(r-.5)*1.4).slice(0,NOWH-1),
      pres:series(33,(i,r)=>1018-Math.max(0,i-96)*.18+(r-.5)*.5).slice(0,NOWH-1)},
  b6:{batt:series(41,(i,r)=>12.66+.18*sun(i)+(r-.5)*.05),
      hum:series(42,(i,r)=>69.5+i/NOWH*11+1.6*Math.sin(i/24*2*Math.PI)+(r-.5)*1.2),
      pres:series(43,(i,r)=>1019-Math.max(0,i-96)*.2+(r-.5)*.5)},
  b7:{batt:series(51,(i,r)=>12.74+.1*sun(i)+(r-.5)*.05),
      hum:series(52,(i,r)=>57+2*Math.sin(i/24*2*Math.PI)+(r-.5)*1.4),
      pres:series(53,(i,r)=>1019-Math.max(0,i-96)*.19+(r-.5)*.5)}
};
const last=a=>a[a.length-1];

/* ---------- Valeurs actuelles par bateau (bateaux avec boîtier actif) ---------- */
const V={
  b2:{battS:last(SER.b2.batt),soc:22,soh:88,battM:12.5,quai:false,eh:186,next:250,et:81,op:3.6,cale:false,porte:false,mvt:false,fumee:false,carb:64,cap:400,eau:40,noires:35,hum:last(SER.b2.hum),tc:15,pres:last(SER.b2.pres),gsm:4,hubB:100,sat:9,lastSeen:'il y a 4 min',
      since:{battS:'depuis ce matin 6 h',quai:'depuis lundi 18 h'}},
  b3:{battS:last(SER.b3.batt),soc:71,soh:62,battM:12.6,quai:true,eh:412,next:500,et:83,op:3.4,cale:false,porte:false,mvt:false,carb:30,cap:300,eau:75,noires:10,hum:last(SER.b3.hum),tc:16,pres:last(SER.b3.pres),gsm:3,hubB:96,sat:8,lastSeen:'il y a 6 min',
      since:{battS:'mesuré le 2 nov.'}},
  b4:{battS:last(SER.b4.batt),soc:84,soh:94,battM:12.7,quai:true,eh:98,next:100,et:79,op:3.7,porte:false,carb:55,cap:180,eau:60,hum:last(SER.b4.hum),tc:15,pres:last(SER.b4.pres),gsm:1,hubB:78,sat:5,lastSeen:'il y a 2 h 10',
      since:{gsm:'depuis 12 h 05',eh:'à la dernière sortie, dim. 8'}},
  b6:{battS:last(SER.b6.batt),soc:90,soh:91,battM:12.8,quai:true,sol:45,solE:310,eh:132,next:250,et:80,op:3.8,cale:false,mvt:false,fumee:false,carb:80,cap:500,eau:20,noires:15,hum:last(SER.b6.hum),tc:9,pres:last(SER.b6.pres),gsm:4,hubB:100,sat:10,lastSeen:'il y a 3 min',
      since:{hum:'en hausse depuis mercredi'}},
  b7:{battS:last(SER.b7.batt),soc:93,soh:90,battM:12.8,quai:true,eh:247,next:250,et:82,op:3.5,cale:false,porte:false,carb:45,cap:250,eau:65,noires:5,hum:last(SER.b7.hum),tc:14,pres:last(SER.b7.pres),gsm:4,hubB:100,sat:9,lastSeen:'il y a 5 min',
      since:{eh:'à la dernière sortie, sam. 7'}}
};
const NOBOX={b1:'Boîtier installé, pas encore activé (étape 4 de la mise en service).',b5:'Boîtier pas encore installé.'};
const online=id=>V[id]&&V[id].gsm>1;

/* ---------- Appareils : ce que la concession voit, regroupé par appareil ---------- */
const FAM={
  securite:{t:'Sécurité et surveillance',roles:['technicien','directeur','commercial']},
  batteries:{t:'Batteries et électricité',roles:['technicien','atelier','commercial']},
  moteur:{t:'Moteur et carburant',roles:['atelier','technicien','commercial']},
  reservoirs:{t:'Réservoirs et eau',roles:['atelier','technicien']},
  navigation:{t:'Navigation et position',roles:['technicien']},
  meteo:{t:'Météo et environnement',roles:['technicien','directeur']},
  confort:{t:'Confort et éclairage',roles:['technicien','commercial']},
  boitier:{t:'Le boîtier Seanapps et ses connexions',roles:['technicien']},
  verifier:{t:'À vérifier',roles:['technicien']}
};
const ST_OK=t=>['ok',t];
const DEV=[
  {k:'battS',fam:'batteries',n:'Batterie de service',raw:['Service Battery','State of Charge','State of Health'],ser:'batt',
   what:'La batterie de la vie à bord : lumières, frigo, pompes (dont la pompe de cale).',
   main:v=>nf(v.battS,1)+' V',gauge:v=>v.soc,
   subs:v=>[['Charge',v.soc+' %'],['Santé (usure)',v.soh+' %']],
   st:v=>v.battS<11.8?['crit','Presque vide : la pompe de cale peut s’arrêter']:v.battS<12.2?['warn','Faible']:v.soh<70?['warn','Batterie usée ('+v.soh+' %)']:ST_OK('Bien chargée'),
   why:{directeur:'Première cause d’alerte du parc sur 90 jours.',commercial:'Santé sous 70 % : proposer une batterie neuve.',technicien:'Sous 11,8 V : appeler le client, vérifier le courant de quai.',atelier:'Santé sous 70 % : prévoir le remplacement à la prochaine visite.'}},
  {k:'battM',fam:'batteries',n:'Batterie moteur',raw:['Engine Voltage'],
   what:'La batterie qui démarre le moteur, comme celle d’une voiture.',
   main:v=>nf(v.battM,1)+' V',subs:()=>[],
   st:v=>v.battM<12.2?['warn','Risque de ne pas démarrer']:ST_OK('Démarrage assuré'),
   why:{technicien:'Sous 12,2 V, le moteur risque de ne pas démarrer.',atelier:'À tester avant chaque remise à l’eau.'}},
  {k:'quai',fam:'batteries',n:'Prise de quai',raw:['Shore Power','Shore power 1 voltage','Shore power 1 frequency'],
   what:'Le bateau est-il branché à la borne électrique du ponton ?',
   main:v=>v.quai?'Branché':'Débranché',
   subs:v=>[['Tension',v.quai?'229 V':'0 V'],['Fréquence',v.quai?'50 Hz':'—']],
   st:v=>v.quai?ST_OK('Courant du port reçu'):['warn','Courant du port coupé : les batteries se vident'],
   why:{technicien:'Coupure : prévenir la capitainerie ou le client.',directeur:'Une coupure non vue, c’est un client mécontent.',commercial:'Argument de vente du capteur de prise de quai.'}},
  {k:'sol',fam:'batteries',n:'Panneaux solaires',raw:['Solar Power','Solar Energy'],
   what:'Ce que produisent les panneaux en ce moment, et sur la journée.',
   main:v=>v.sol+' W',subs:v=>[['Énergie du jour',nf(v.solE)+' Wh']],
   st:()=>ST_OK('Produit normalement'),why:{technicien:'Production nulle en plein jour : régulateur à vérifier.'}},
  {k:'eh',fam:'moteur',n:'Moteur',raw:['Engine Hours','Engine Temperature','Oil Pressure'],
   what:'Le compteur d’heures dit quand faire la révision, comme le kilométrage d’une voiture.',
   main:v=>nf(v.eh)+' h',gauge:v=>Math.min(100,v.eh/v.next*100),
   subs:v=>[['Prochaine révision',nf(v.next)+' h'],['Température (dernière sortie)',v.et+' °C'],['Pression d’huile',nf(v.op,1)+' bar']],
   st:v=>v.next-v.eh<=10?['warn','Révision dans '+(v.next-v.eh)+' h']:ST_OK('Révision dans '+(v.next-v.eh)+' h'),
   why:{atelier:'Moins de 10 h avant la révision : planifier un créneau.',commercial:'Révision proche : proposer un contrat d’entretien.',technicien:'Surchauffe ou chute d’huile : alerte immédiate.',directeur:'Les révisions viennent d’ici : c’est du travail pour l’atelier.'}},
  {k:'carb',fam:'moteur',n:'Carburant',raw:['Fuel Level'],
   what:'La jauge du réservoir de carburant.',
   main:v=>v.carb+' %',gauge:v=>v.carb,subs:v=>[['Environ',nf(v.carb*v.cap/100)+' L sur '+v.cap+' L']],
   st:v=>v.carb<15?['warn','Réservoir presque vide']:ST_OK('Niveau correct'),
   why:{atelier:'Pour l’hivernage, un réservoir plein limite la condensation.'}},
  {k:'cale',fam:'securite',n:'Eau dans la cale',raw:['Bilge sensor'],
   what:'Détecte l’eau qui s’accumule au fond du bateau, sous le plancher.',
   main:v=>v.cale?'Eau détectée':'Sec',subs:()=>[],
   st:v=>v.cale?['crit','Possible voie d’eau']:ST_OK('Rien à signaler'),
   why:{technicien:'Alerte : intervenir le jour même.',directeur:'Le capteur le plus important pour le propriétaire.',commercial:'Pas installé ? C’est la première vente à proposer.'}},
  {k:'porte',fam:'securite',n:'Porte de cabine',raw:['Door','Capteur de porte - Signal strength'],
   what:'Un aimant sur la porte : il signale toute ouverture.',
   main:v=>v.porte?'Ouverte':'Fermée',subs:()=>[['Pile','80 %'],['Signal Bluetooth','−62 dBm, bon']],
   st:v=>v.porte?['warn','Ouverte bateau vide']:ST_OK('Fermée'),
   why:{technicien:'Ouverture bateau vide : intrusion possible.',commercial:'Se vend avec le détecteur de mouvement.'}},
  {k:'mvt',fam:'securite',n:'Détecteur de mouvement',raw:['Motion Sensor'],
   what:'Détecte une présence dans la cabine, comme une alarme de maison.',
   main:v=>v.mvt?'Mouvement':'Aucun mouvement',subs:()=>[],
   st:v=>v.mvt?['crit','Présence à bord']:ST_OK('Rien à signaler'),why:{technicien:'Présence à bord bateau vide : prévenir le client.'}},
  {k:'fumee',fam:'securite',n:'Détecteur de fumée',raw:['Smoke Detector'],
   what:'Comme le détecteur de fumée d’une maison.',
   main:v=>v.fumee?'Fumée':'Pas de fumée',subs:()=>[],
   st:v=>v.fumee?['crit','Alerte incendie']:ST_OK('Rien à signaler'),why:{technicien:'Alerte incendie : appeler le port immédiatement.'}},
  {k:'eau',fam:'reservoirs',n:'Eau douce',raw:['Fresh Water Level'],
   what:'L’eau propre pour l’évier et la douche.',
   main:v=>v.eau+' %',gauge:v=>v.eau,subs:()=>[],
   st:()=>ST_OK('Niveau correct'),why:{atelier:'À vidanger avant l’hivernage (gel).'}},
  {k:'noires',fam:'reservoirs',n:'Eaux noires (toilettes)',raw:['Black water Level'],
   what:'Le réservoir des toilettes, à vider au port.',
   main:v=>v.noires+' %',gauge:v=>v.noires,subs:()=>[],
   st:v=>v.noires>80?['warn','Presque plein']:ST_OK('Niveau correct'),why:{atelier:'À vider avant la sortie de l’eau.'}},
  {k:'hum',fam:'meteo',n:'Humidité cabine',raw:['Humidity','Temperature'],ser:'hum',
   what:'Trop d’humidité fait apparaître de la moisissure, surtout l’hiver.',
   main:v=>nf(v.hum)+' %',gauge:v=>v.hum,subs:v=>[['Température cabine',v.tc+' °C']],
   st:v=>v.hum>75?['warn','Trop humide : risque de moisissure']:ST_OK('Air sain'),
   why:{technicien:'Au-dessus de 75 % : aérer ou installer un déshumidificateur.',commercial:'Humidité haute : proposer déshumidificateur ou hivernage.',directeur:'Signal utile pour vendre les hivernages.'}},
  {k:'pres',fam:'meteo',n:'Pression atmosphérique',raw:['Atmospheric Pressure'],ser:'pres',
   what:'Comme un baromètre : si elle baisse vite, le mauvais temps arrive.',
   main:v=>nf(v.pres)+' hPa',subs:()=>[['Sur 24 h','en baisse de 5 hPa']],
   st:()=>ST_OK('Vent annoncé, rien d’urgent'),why:{technicien:'Baisse rapide : vérifier les amarres des bateaux au port.',directeur:'Coup de vent annoncé : prévenir l’équipe du port.'}},
  {k:'gsm',fam:'boitier',n:'Boîtier Seanapps',raw:['GSM Signal strength','Hub Battery','GPS Satellites'],
   what:'Le boîtier envoie les valeurs par le réseau mobile. Sans réseau, plus de nouvelles.',
   main:v=>v.gsm+' / 5 barres',subs:v=>[['Dernier envoi',v.lastSeen],['Batterie du boîtier',v.hubB+' %'],['Satellites GPS',v.sat]],
   st:v=>v.gsm<=1?['warn','Réseau faible : données en retard']:ST_OK('Données à jour'),
   why:{technicien:'Données en retard : vérifier l’antenne ou l’emplacement au port.',directeur:'Un boîtier hors ligne ne protège plus le bateau.'}}
];
function devicesOf(id){const v=V[id];if(!v)return[];return DEV.filter(d=>v[d.k]!==undefined).map(d=>({...d,s:d.st(v)}))}
function alerts(){
  const out=[];
  S.boats.forEach(b=>{devicesOf(b.id).forEach(d=>{if(d.s[0]!=='ok')out.push({b,d,sev:d.s[0],txt:d.s[1],val:d.main(V[b.id]),since:(V[b.id].since||{})[d.k]||''})})});
  return out.sort((a,b)=>(a.sev==='crit'?0:1)-(b.sev==='crit'?0:1));
}
function boatState(id){if(!V[id])return'off';const s=devicesOf(id).map(d=>d.s[0]);return s.includes('crit')?'crit':s.includes('warn')?'warn':'ok'}

/* ---------- Les 169 capteurs de la liste ---------- */
const SENSORS=[["AC Input Voltage", "voltage_volts", "batteries", "Tension du courant de quai", "La tension qui arrive de la borne du port, normalement environ 230 V comme une prise de maison."], ["AC Output Voltage", "voltage_volts", "batteries", "Convertisseur (onduleur)", "Le convertisseur transforme le 12 V des batteries en 230 V pour les prises à bord. On voit s'il marche et quelle tension il donne."], ["Actual Temperature", "temperature_kelvin", "meteo", "Température de l'air", "La température dehors ou dans la cabine."], ["Aft Door", "boolean_open", "securite", "Porte ou trappe ouverte", "Un contact sur une porte, une porte arrière ou un hublot/trappe. Il dit si c'est ouvert ou fermé."], ["Air cond", "boolean_connected", "confort", "Climatisation", "Indique si la climatisation est branchée ou allumée."], ["Air pressure", "pressure_mbar", "meteo", "Pression atmosphérique", "La pression de l'air, comme sur un baromètre. Si elle baisse vite, le mauvais temps arrive. Le boîtier Océano Vox apparaît deux fois dans la liste, avec et sans accent."], ["Alarme de incêndio ou inundação", "boolean_activated", "securite", "Alarme incendie ou inondation", "Une alarme qui se déclenche en cas de feu ou d'inondation (nom en portugais). La liste précise : valeur 0 ou 1."], ["Alternator Potential", "voltage_volts", "batteries", "Alternateur", "L'alternateur recharge les batteries quand le moteur tourne, comme une dynamo de vélo. On mesure la tension qu'il produit."], ["Altitude", "length_meters", "navigation", "Altitude", "L'altitude donnée par le GPS. Sur un bateau, elle reste proche de 0 m. La liste note d'ailleurs qu'il faudrait relier les valeurs qui viennent du même capteur."], ["Atmospheric Pressure", "pressure_hpa", "meteo", "Pression atmosphérique", "La pression de l'air, comme sur un baromètre. Si elle baisse vite, le mauvais temps arrive. Le boîtier Océano Vox apparaît deux fois dans la liste, avec et sans accent."], ["AWA", "angle_radians", "meteo", "Vent apparent", "Le vent ressenti sur le bateau quand il avance : son angle (AWA) et sa vitesse (AWS). C'est comme le vent qu'on sent à vélo."], ["AWS", "speed_mps", "meteo", "Vent apparent", "Le vent ressenti sur le bateau quand il avance : son angle (AWA) et sa vitesse (AWS). C'est comme le vent qu'on sent à vélo."], ["Battery Board Current", "current_ampere", "batteries", "Courant électrique", "La quantité d'électricité qui entre ou sort de la batterie, en ampères. Positif = elle se recharge, négatif = elle se vide."], ["Battery board state of charge", "relative_percentage", "batteries", "Charge de la batterie", "La jauge de la batterie, comme sur un téléphone. Quatre noms différents pour la même idée."], ["Battery Board Temperature", "temperature_kelvin", "batteries", "Température des batteries", "Une batterie trop chaude s'abîme et peut devenir dangereuse."], ["Battery Voltage", "voltage_volts", "batteries", "Tension d'une batterie", "La tension (en volts) d'une batterie, sans préciser laquelle. Plus la tension est haute, plus la batterie est chargée."], ["Bewegungsmelder", "boolean_activated", "securite", "Détecteur de mouvement", "Détecte une présence dans la cabine, comme une alarme de maison. « Bewegungsmelder » est le même capteur en allemand."], ["Bilge sensor", "boolean_activated", "securite", "Eau dans la cale", "La cale est le fond du bateau, sous le plancher. Ce capteur détecte si de l'eau s'y accumule."], ["Black water Level", "relative_percentage", "reservoirs", "Eaux noires (toilettes)", "Le réservoir qui recueille les eaux des toilettes. Il faut le vider au port. Les noms changent selon sa place : avant, arrière, bâbord, tribord."], ["BLE status", "power_dbm", "boitier", "Liaison Bluetooth", "La force du signal entre le boîtier et un petit capteur sans fil (une porte, un compteur…). Plus le chiffre est proche de 0, meilleure est la liaison."], ["Board and Engine Voltage", "voltage_volts", "batteries", "Batterie moteur", "La batterie qui sert à démarrer le moteur, comme celle d'une voiture."], ["Bränslenivå (styrbord)", "relative_percentage", "moteur", "Niveau de carburant", "La jauge du réservoir d'essence ou de gasoil. « Bränslenivå (styrbord) » veut dire niveau de carburant tribord, en suédois (côté droit)."], ["Cabin Lights", "unknown", "confort", "Lumières", "Les éclairages à bord : cabine, salon (saloon), cuisine (galley), et les petites lumières d'ambiance bleues ou blanches (courtesy)."], ["Capacity", "capacity_liters", "reservoirs", "Taille du réservoir", "La contenance totale d'un réservoir, en litres. Sert à transformer un pourcentage en litres."], ["Capteur de porte - Signal strength", "power_dbm", "boitier", "Liaison Bluetooth", "La force du signal entre le boîtier et un petit capteur sans fil (une porte, un compteur…). Plus le chiffre est proche de 0, meilleure est la liaison."], ["COG", "angle_radians", "navigation", "Route suivie", "La direction réelle dans laquelle le bateau avance, en degrés (0° = nord, 90° = est)."], ["COG Reference", "unknown", "navigation", "Route suivie", "La direction réelle dans laquelle le bateau avance, en degrés (0° = nord, 90° = est)."], ["COI/O1 Toilet flush", "unknown", "reservoirs", "Chasse d'eau", "Indique quand on tire la chasse des toilettes."], ["Concentration Dioxyde d'azote (NO2)", "pressure_mbar", "meteo", "Pollution de l'air (gaz)", "Des gaz polluants, surtout dans les ports près des gros navires et des routes."], ["Concentration Dioxyde de souffre (SO2)", "pressure_mbar", "meteo", "Pollution de l'air (gaz)", "Des gaz polluants, surtout dans les ports près des gros navires et des routes."], ["Concentration Monoxyde de carbone (CO)", "pressure_mbar", "meteo", "Monoxyde de carbone (CO)", "Un gaz invisible et sans odeur, rejeté par les moteurs et les chauffages. Il est mortel en cabine fermée."], ["Concentration Ozone (O3)", "pressure_mbar", "meteo", "Pollution de l'air (gaz)", "Des gaz polluants, surtout dans les ports près des gros navires et des routes."], ["Concentration particules < 10µm (PM10)", "pressure_mbar", "meteo", "Particules fines", "Des poussières minuscules dans l'air. Plus elles sont petites (PM1), plus elles entrent loin dans les poumons."], ["Concentration particules < 1µm (PM1)", "pressure_mbar", "meteo", "Particules fines", "Des poussières minuscules dans l'air. Plus elles sont petites (PM1), plus elles entrent loin dans les poumons."], ["Concentration particules < 2,5µm (PM2,5)", "pressure_mbar", "meteo", "Particules fines", "Des poussières minuscules dans l'air. Plus elles sont petites (PM1), plus elles entrent loin dans les poumons."], ["Courtesy Lights Blue", "unknown", "confort", "Lumières", "Les éclairages à bord : cabine, salon (saloon), cuisine (galley), et les petites lumières d'ambiance bleues ou blanches (courtesy)."], ["Courtesy Lights White", "unknown", "confort", "Lumières", "Les éclairages à bord : cabine, salon (saloon), cuisine (galley), et les petites lumières d'ambiance bleues ou blanches (courtesy)."], ["Ctrl1/O1 Roof open", "unknown", "securite", "Toit ouvert", "Indique si le toit ouvrant (hard-top) est ouvert."], ["Current", "current_ampere", "batteries", "Courant électrique", "La quantité d'électricité qui entre ou sort de la batterie, en ampères. Positif = elle se recharge, négatif = elle se vide."], ["Day Cruise", "unknown", "navigation", "Mode jour / mode nuit", "Des réglages tout prêts qui allument les bons équipements (lumières, instruments) pour naviguer de jour ou de nuit."], ["DC Voltage", "voltage_volts", "batteries", "Tension d'une batterie", "La tension (en volts) d'une batterie, sans préciser laquelle. Plus la tension est haute, plus la batterie est chargée."], ["Destination Latitude", "angle_latitude_degrees", "navigation", "Destination", "Les coordonnées GPS du point où le bateau veut aller."], ["Destination Longitude", "angle_longitude_degrees", "navigation", "Destination", "Les coordonnées GPS du point où le bateau veut aller."], ["Direction Order", "unknown", "navigation", "Consigne du pilote automatique", "La direction demandée au pilote automatique, qui tient la barre tout seul."], ["Données environnementales station uRADMonitor Temperature", "temperature_kelvin", "meteo", "Température de l'air", "La température dehors ou dans la cabine."], ["Door", "boolean_open", "securite", "Porte ou trappe ouverte", "Un contact sur une porte, une porte arrière ou un hublot/trappe. Il dit si c'est ouvert ou fermé."], ["Energy", "watt_hours", "batteries", "Énergie consommée ou produite", "La quantité totale d'électricité, en wattheures, comme le compteur électrique d'une maison."], ["Engine Alert Port Engine 3 1", "unknown", "moteur", "Alertes moteur", "Des codes d'alerte envoyés directement par le moteur bâbord (côté gauche)."], ["Engine Alert Port Engine 3 2", "unknown", "moteur", "Alertes moteur", "Des codes d'alerte envoyés directement par le moteur bâbord (côté gauche)."], ["Engine Boost Pressure", "pressure_hpa", "moteur", "Pression du turbo", "Le turbo souffle de l'air dans le moteur pour lui donner plus de puissance. On mesure la force de ce souffle."], ["Engine hours", "time_seconds", "moteur", "Heures moteur", "Le compteur du moteur, comme le kilométrage d'une voiture. C'est lui qui dit quand faire la vidange et l'entretien."], ["Engine Hours", "time_hours", "moteur", "Heures moteur", "Le compteur du moteur, comme le kilométrage d'une voiture. C'est lui qui dit quand faire la vidange et l'entretien."], ["Engine Room Fan", "unknown", "moteur", "Ventilation salle moteur", "Le ventilateur qui évacue la chaleur et les vapeurs d'essence de la salle moteur."], ["Engine Speed", "angular_velocity_rpm", "moteur", "Régime moteur", "La vitesse de rotation du moteur, en tours par minute, comme le compte-tours d'une voiture."], ["Engine Temperature", "temperature_kelvin", "moteur", "Température moteur", "Si le moteur chauffe trop, il peut casser."], ["Engine Tilt/Trim", "relative_percentage", "moteur", "Inclinaison du moteur (trim)", "Sur un moteur hors-bord, l'angle du moteur vers le haut ou vers le bas. Il change la façon dont le bateau avance."], ["Engine Voltage", "voltage_volts", "batteries", "Batterie moteur", "La batterie qui sert à démarrer le moteur, comme celle d'une voiture."], ["Equalization Time Remaining", "time_seconds", "batteries", "Charge d'entretien", "Temps restant d'une charge spéciale qui « rééquilibre » la batterie pour la garder en forme."], ["Freezer", "temperature_celsius", "confort", "Congélateur", "La température du congélateur."], ["Frequency", "frequency_hz", "batteries", "Fréquence du courant", "Le rythme du courant alternatif, normalement 50 Hz en Europe. S'il varie, il y a un souci électrique."], ["Fresh Water Level", "relative_percentage", "reservoirs", "Eau douce", "L'eau propre pour l'évier et la douche. Un bateau peut avoir plusieurs réservoirs : avant, bâbord (gauche), tribord (droite)."], ["Fresh Water Pump", "unknown", "reservoirs", "Pompe à eau douce", "La pompe qui envoie l'eau aux robinets."], ["Fuel Level", "relative_percentage", "moteur", "Niveau de carburant", "La jauge du réservoir d'essence ou de gasoil. « Bränslenivå (styrbord) » veut dire niveau de carburant tribord, en suédois (côté droit)."], ["Fuel Pressure", "unknown", "moteur", "Pression du carburant", "La pression avec laquelle le carburant arrive au moteur. Si elle baisse, un filtre est peut-être bouché."], ["Fuel Rate", "rate_liters_per_hour", "moteur", "Consommation de carburant", "Combien de litres le moteur brûle par heure."], ["FWD Holding Tank", "relative_percentage", "reservoirs", "Eaux noires (toilettes)", "Le réservoir qui recueille les eaux des toilettes. Il faut le vider au port. Les noms changent selon sa place : avant, arrière, bâbord, tribord."], ["Galley Lights", "unknown", "confort", "Lumières", "Les éclairages à bord : cabine, salon (saloon), cuisine (galley), et les petites lumières d'ambiance bleues ou blanches (courtesy)."], ["Generator Battery", "voltage_volts", "batteries", "Batterie du groupe électrogène", "La batterie qui sert à démarrer le groupe électrogène (voir famille Moteur)."], ["Genset Fuel level", "relative_percentage", "moteur", "Groupe électrogène", "Le groupe électrogène est un petit moteur qui fabrique de l'électricité à bord. On suit ses heures, son régime, sa température et son carburant, comme pour le moteur principal."], ["Genset Hours", "time_hours", "moteur", "Groupe électrogène", "Le groupe électrogène est un petit moteur qui fabrique de l'électricité à bord. On suit ses heures, son régime, sa température et son carburant, comme pour le moteur principal."], ["Genset running hours (mac: B43) - BLE status", "power_dbm", "boitier", "Liaison Bluetooth", "La force du signal entre le boîtier et un petit capteur sans fil (une porte, un compteur…). Plus le chiffre est proche de 0, meilleure est la liaison."], ["Genset running hours (mac: BF9) - BLE status", "power_dbm", "boitier", "Liaison Bluetooth", "La force du signal entre le boîtier et un petit capteur sans fil (une porte, un compteur…). Plus le chiffre est proche de 0, meilleure est la liaison."], ["Genset running hours (mac: C0C) - BLE status", "power_dbm", "boitier", "Liaison Bluetooth", "La force du signal entre le boîtier et un petit capteur sans fil (une porte, un compteur…). Plus le chiffre est proche de 0, meilleure est la liaison."], ["Genset Speed", "angular_velocity_rpm", "moteur", "Groupe électrogène", "Le groupe électrogène est un petit moteur qui fabrique de l'électricité à bord. On suit ses heures, son régime, sa température et son carburant, comme pour le moteur principal."], ["Genset Temperature", "temperature_kelvin", "moteur", "Groupe électrogène", "Le groupe électrogène est un petit moteur qui fabrique de l'électricité à bord. On suit ses heures, son régime, sa température et son carburant, comme pour le moteur principal."], ["GPS Satellites", "gps_integer", "boitier", "Satellites GPS", "Le nombre de satellites captés. Plus il y en a, plus la position du bateau est précise."], ["Gray Water Level", "relative_percentage", "reservoirs", "Eaux grises", "Le réservoir des eaux de l'évier et de la douche."], ["GSM Signal strength", "rssi_lookup", "boitier", "Réseau mobile", "La qualité du réseau téléphone (4G) captée par le boîtier. C'est grâce à lui que les données arrivent dans l'app."], ["Hatch status", "boolean_open", "securite", "Porte ou trappe ouverte", "Un contact sur une porte, une porte arrière ou un hublot/trappe. Il dit si c'est ouvert ou fermé."], ["HDG (M)", "angle_radians", "navigation", "Cap", "La direction vers laquelle pointe l'avant du bateau. (M) = par rapport au nord de la boussole, (T) = par rapport au vrai nord."], ["HDG (T)", "angle_radians", "navigation", "Cap", "La direction vers laquelle pointe l'avant du bateau. (M) = par rapport au nord de la boussole, (T) = par rapport au vrai nord."], ["HDOP", "unknown", "boitier", "Précision du GPS", "Une note de précision de la position. Plus le chiffre est petit, plus la position est fiable."], ["Holding #1 (Forward)", "relative_percentage", "reservoirs", "Eaux noires (toilettes)", "Le réservoir qui recueille les eaux des toilettes. Il faut le vider au port. Les noms changent selon sa place : avant, arrière, bâbord, tribord."], ["Holding #3 (Aft)", "relative_percentage", "reservoirs", "Eaux noires (toilettes)", "Le réservoir qui recueille les eaux des toilettes. Il faut le vider au port. Les noms changent selon sa place : avant, arrière, bâbord, tribord."], ["Holding Tank", "relative_percentage", "reservoirs", "Eaux noires (toilettes)", "Le réservoir qui recueille les eaux des toilettes. Il faut le vider au port. Les noms changent selon sa place : avant, arrière, bâbord, tribord."], ["Holding Tank #1", "relative_percentage", "reservoirs", "Eaux noires (toilettes)", "Le réservoir qui recueille les eaux des toilettes. Il faut le vider au port. Les noms changent selon sa place : avant, arrière, bâbord, tribord."], ["Holding Tank #3", "relative_percentage", "reservoirs", "Eaux noires (toilettes)", "Le réservoir qui recueille les eaux des toilettes. Il faut le vider au port. Les noms changent selon sa place : avant, arrière, bâbord, tribord."], ["House Batteries Temp", "temperature_kelvin", "batteries", "Température des batteries", "Une batterie trop chaude s'abîme et peut devenir dangereuse."], ["Hub Battery", "relative_percentage", "boitier", "Batterie du boîtier", "La batterie interne du boîtier, qui le fait tenir même si le courant du bateau est coupé."], ["HUB - BLE status", "power_dbm", "boitier", "Liaison Bluetooth", "La force du signal entre le boîtier et un petit capteur sans fil (une porte, un compteur…). Plus le chiffre est proche de 0, meilleure est la liaison."], ["Humidity", "relative_humidity", "meteo", "Humidité", "L'humidité de l'air dans la cabine. Trop d'humidité fait apparaître de la moisissure."], ["Inverter", "unknown", "batteries", "Convertisseur (onduleur)", "Le convertisseur transforme le 12 V des batteries en 230 V pour les prises à bord. On voit s'il marche et quelle tension il donne."], ["Level", "relative_percentage", "reservoirs", "Réservoir sans nom précis", "La jauge d'un réservoir, sans dire lequel (eau, carburant…). « Tankfüllstand » veut dire niveau du réservoir en allemand. « Port » et « Starboard » veulent dire bâbord et tribord."], ["MF695 S2", "boolean_activated", "verifier", "Référence technique", "Ressemble à une référence de produit avec un numéro d'entrée. On ne sait pas ce qu'il surveille."], ["Motion Sensor", "boolean_activated", "securite", "Détecteur de mouvement", "Détecte une présence dans la cabine, comme une alarme de maison. « Bewegungsmelder » est le même capteur en allemand."], ["MPPT1 current", "current_ampere", "batteries", "Panneaux solaires", "Ce que produisent les panneaux solaires : tension, courant, puissance et énergie du jour. Le « MPPT » est le régulateur qui gère cette charge."], ["Navigation Lights", "unknown", "navigation", "Feux de navigation", "Les feux obligatoires la nuit (rouge, vert, blanc) pour être vu des autres bateaux."], ["Night Cruise", "unknown", "navigation", "Mode jour / mode nuit", "Des réglages tout prêts qui allument les bons équipements (lumières, instruments) pour naviguer de jour ou de nuit."], ["NMEA Instruments", "boolean_power", "boitier", "Instruments de bord", "Indique si les instruments de navigation (sondeur, anémomètre, GPS du bateau) sont allumés et envoient leurs données au boîtier."], ["Number of GPS Satellites", "gps_integer", "boitier", "Satellites GPS", "Le nombre de satellites captés. Plus il y en a, plus la position du bateau est précise."], ["Offset", "length_meters", "navigation", "Profondeur d'eau", "La hauteur d'eau sous le bateau, donnée par le sondeur. « Offset » est le réglage qui corrige la mesure selon la place de la sonde."], ["Oil Pressure", "pressure_hpa", "moteur", "Pression d'huile", "L'huile protège le moteur. Si sa pression chute, le moteur s'abîme très vite."], ["Oil temperature", "temperature_kelvin", "moteur", "Température d'huile", "La chaleur de l'huile moteur."], ["PDOP", "unknown", "boitier", "Précision du GPS", "Une note de précision de la position. Plus le chiffre est petit, plus la position est fiable."], ["Percent Engine Load", "relative_percentage", "moteur", "Effort du moteur", "À quel pourcentage de sa puissance (ou de sa force) le moteur travaille."], ["Percent Engine Torque 1", "relative_percentage", "moteur", "Effort du moteur", "À quel pourcentage de sa puissance (ou de sa force) le moteur travaille."], ["Percent Engine Torque 2", "relative_percentage", "moteur", "Effort du moteur", "À quel pourcentage de sa puissance (ou de sa force) le moteur travaille."], ["Pitch", "angle_radians", "navigation", "Mouvements du bateau", "Comment le bateau bouge sur les vagues : tangage (l'avant monte et descend), roulis (il penche à gauche et à droite), lacet (il tourne), et vitesse de rotation."], ["Port", "relative_percentage", "reservoirs", "Réservoir sans nom précis", "La jauge d'un réservoir, sans dire lequel (eau, carburant…). « Tankfüllstand » veut dire niveau du réservoir en allemand. « Port » et « Starboard » veulent dire bâbord et tribord."], ["PORT Holding Tank", "relative_percentage", "reservoirs", "Eaux noires (toilettes)", "Le réservoir qui recueille les eaux des toilettes. Il faut le vider au port. Les noms changent selon sa place : avant, arrière, bâbord, tribord."], ["Position", "angle_radians", "navigation", "Position", "La position du bateau. Dans la liste, elle est notée comme un angle, ce qui est inhabituel."], ["Pression atmosphérique boitier Oceano Vox", "pressure_mbar", "meteo", "Pression atmosphérique", "La pression de l'air, comme sur un baromètre. Si elle baisse vite, le mauvais temps arrive. Le boîtier Océano Vox apparaît deux fois dans la liste, avec et sans accent."], ["Pression atmosphérique boitier Océano Vox", "pressure_mbar", "meteo", "Pression atmosphérique", "La pression de l'air, comme sur un baromètre. Si elle baisse vite, le mauvais temps arrive. Le boîtier Océano Vox apparaît deux fois dans la liste, avec et sans accent."], ["Rate", "angle_radians", "navigation", "Mouvements du bateau", "Comment le bateau bouge sur les vagues : tangage (l'avant monte et descend), roulis (il penche à gauche et à droite), lacet (il tourne), et vitesse de rotation."], ["Relay", "boolean_activated", "batteries", "Interrupteur commandé à distance", "Un relais est un interrupteur qu'on peut actionner depuis l'app, par exemple pour allumer un chauffage ou une pompe."], ["Relay 1", "boolean_activated", "batteries", "Interrupteur commandé à distance", "Un relais est un interrupteur qu'on peut actionner depuis l'app, par exemple pour allumer un chauffage ou une pompe."], ["Relay 2", "boolean_activated", "batteries", "Interrupteur commandé à distance", "Un relais est un interrupteur qu'on peut actionner depuis l'app, par exemple pour allumer un chauffage ou une pompe."], ["Relay Output", "boolean_activated", "batteries", "Interrupteur commandé à distance", "Un relais est un interrupteur qu'on peut actionner depuis l'app, par exemple pour allumer un chauffage ou une pompe."], ["Roll", "angle_radians", "navigation", "Mouvements du bateau", "Comment le bateau bouge sur les vagues : tangage (l'avant monte et descend), roulis (il penche à gauche et à droite), lacet (il tourne), et vitesse de rotation."], ["Route °", "angle_radians", "navigation", "Route suivie", "La direction réelle dans laquelle le bateau avance, en degrés (0° = nord, 90° = est)."], ["Running hours", "time_seconds", "moteur", "Heures moteur", "Le compteur du moteur, comme le kilométrage d'une voiture. C'est lui qui dit quand faire la vidange et l'entretien."], ["RuzMor", "boolean_activated", "verifier", "Noms de test", "Ces noms ne correspondent à aucun équipement connu. Ce sont probablement des capteurs créés pour des essais."], ["Saloon Lights", "unknown", "confort", "Lumières", "Les éclairages à bord : cabine, salon (saloon), cuisine (galley), et les petites lumières d'ambiance bleues ou blanches (courtesy)."], ["SaLut", "boolean_activated", "verifier", "Noms de test", "Ces noms ne correspondent à aucun équipement connu. Ce sont probablement des capteurs créés pour des essais."], ["Service Battery", "voltage_volts", "batteries", "Batterie de service", "La batterie qui fait marcher la vie à bord : lumières, frigo, pompes, prises."], ["Shore Power", "boolean_connected", "batteries", "Branché au port", "Dit si le bateau est branché à la borne électrique du ponton (le « courant de quai »)."], ["Shore power 1 frequency", "frequency_hz", "batteries", "Fréquence du courant", "Le rythme du courant alternatif, normalement 50 Hz en Europe. S'il varie, il y a un souci électrique."], ["Shore power 1 voltage", "voltage_volts", "batteries", "Tension du courant de quai", "La tension qui arrive de la borne du port, normalement environ 230 V comme une prise de maison."], ["Signal strength", "power_dbm", "boitier", "Liaison Bluetooth", "La force du signal entre le boîtier et un petit capteur sans fil (une porte, un compteur…). Plus le chiffre est proche de 0, meilleure est la liaison."], ["Smoke Detector", "boolean_activated", "securite", "Détecteur de fumée", "Comme le détecteur de fumée d'une maison."], ["SOC 0-10V to 0 -> 100%", "boolean_connected", "batteries", "Charge de la batterie", "La jauge de la batterie, comme sur un téléphone. Quatre noms différents pour la même idée."], ["SOG", "speed_mps", "navigation", "Vitesse sur le fond", "La vraie vitesse du bateau par rapport à la terre, donnée par le GPS. On la compte en nœuds (1 nœud ≈ 1,85 km/h)."], ["Solar Current", "current_ampere", "batteries", "Panneaux solaires", "Ce que produisent les panneaux solaires : tension, courant, puissance et énergie du jour. Le « MPPT » est le régulateur qui gère cette charge."], ["Solar Energy", "watt_hours", "batteries", "Panneaux solaires", "Ce que produisent les panneaux solaires : tension, courant, puissance et énergie du jour. Le « MPPT » est le régulateur qui gère cette charge."], ["Solar Power", "watts", "batteries", "Panneaux solaires", "Ce que produisent les panneaux solaires : tension, courant, puissance et énergie du jour. Le « MPPT » est le régulateur qui gère cette charge."], ["Solar Voltage", "voltage_volts", "batteries", "Panneaux solaires", "Ce que produisent les panneaux solaires : tension, courant, puissance et énergie du jour. Le « MPPT » est le régulateur qui gère cette charge."], ["Source", "unknown", "verifier", "Source", "Sans doute la source d'énergie utilisée (port, batterie, générateur), mais le type de valeur est inconnu."], ["SPARE", "boolean_connected", "verifier", "Entrée libre", "« Spare » veut dire « de réserve » : une entrée du boîtier pas encore attribuée."], ["Speed", "unknown", "navigation", "Vitesse du bateau", "La vitesse, sans préciser comment elle est mesurée."], ["Speed Ground Referenced", "speed_mps", "navigation", "Vitesse sur le fond", "La vraie vitesse du bateau par rapport à la terre, donnée par le GPS. On la compte en nœuds (1 nœud ≈ 1,85 km/h)."], ["Speed Water Referenced", "speed_mps", "navigation", "Vitesse sur l'eau", "La vitesse par rapport à l'eau. Elle diffère de la vitesse sur le fond à cause du courant."], ["Starboard", "relative_percentage", "reservoirs", "Réservoir sans nom précis", "La jauge d'un réservoir, sans dire lequel (eau, carburant…). « Tankfüllstand » veut dire niveau du réservoir en allemand. « Port » et « Starboard » veulent dire bâbord et tribord."], ["State of Charge", "relative_percentage", "batteries", "Charge de la batterie", "La jauge de la batterie, comme sur un téléphone. Quatre noms différents pour la même idée."], ["State-of-Charge", "voltage_percentage", "batteries", "Charge de la batterie", "La jauge de la batterie, comme sur un téléphone. Quatre noms différents pour la même idée."], ["State of Health", "unknown", "batteries", "Santé de la batterie", "L'usure de la batterie. Une batterie neuve est à 100 %, une batterie fatiguée tient moins longtemps."], ["Status", "boolean_activated", "securite", "Porte ou trappe ouverte", "Un contact sur une porte, une porte arrière ou un hublot/trappe. Il dit si c'est ouvert ou fermé."], ["STBD Holding Tank", "relative_percentage", "reservoirs", "Eaux noires (toilettes)", "Le réservoir qui recueille les eaux des toilettes. Il faut le vider au port. Les noms changent selon sa place : avant, arrière, bâbord, tribord."], ["Systems Off", "unknown", "batteries", "Tout allumer / tout éteindre", "Une commande ou un état global qui allume ou coupe tous les systèmes du bateau d'un coup."], ["Systems On", "unknown", "batteries", "Tout allumer / tout éteindre", "Une commande ou un état global qui allume ou coupe tous les systèmes du bateau d'un coup."], ["TALALUTTE", "boolean_activated", "verifier", "Noms de test", "Ces noms ne correspondent à aucun équipement connu. Ce sont probablement des capteurs créés pour des essais."], ["Tank 1", "relative_percentage", "reservoirs", "Réservoir sans nom précis", "La jauge d'un réservoir, sans dire lequel (eau, carburant…). « Tankfüllstand » veut dire niveau du réservoir en allemand. « Port » et « Starboard » veulent dire bâbord et tribord."], ["Tank 2", "relative_percentage", "reservoirs", "Réservoir sans nom précis", "La jauge d'un réservoir, sans dire lequel (eau, carburant…). « Tankfüllstand » veut dire niveau du réservoir en allemand. « Port » et « Starboard » veulent dire bâbord et tribord."], ["Tankfüllstand", "relative_percentage", "reservoirs", "Réservoir sans nom précis", "La jauge d'un réservoir, sans dire lequel (eau, carburant…). « Tankfüllstand » veut dire niveau du réservoir en allemand. « Port » et « Starboard » veulent dire bâbord et tribord."], ["Temperature", "temperature_celsius", "meteo", "Température de l'air", "La température dehors ou dans la cabine."], ["Time Remaining", "time_seconds", "batteries", "Autonomie restante", "Combien de temps la batterie peut encore tenir avec la consommation actuelle."], ["TWA", "angle_radians", "meteo", "Vent réel", "Le vrai vent, sans l'effet de la vitesse du bateau : angle (TWA) et vitesse (TWS)."], ["TWS", "speed_mps", "meteo", "Vent réel", "Le vrai vent, sans l'effet de la vitesse du bateau : angle (TWA) et vitesse (TWS)."], ["Unkown Level D", "relative_percentage", "verifier", "Niveau inconnu", "Un niveau de réservoir dont on ne connaît pas la nature (et dont le nom contient une faute)."], ["Variation", "angle_radians", "navigation", "Écart de la boussole", "La différence entre le nord de la boussole et le vrai nord. Elle change selon l'endroit sur la Terre."], ["Vitesse du bateau", "unknown", "navigation", "Vitesse du bateau", "La vitesse, sans préciser comment elle est mesurée."], ["Voltage", "voltage_volts", "batteries", "Tension d'une batterie", "La tension (en volts) d'une batterie, sans préciser laquelle. Plus la tension est haute, plus la batterie est chargée."], ["Water #1 (Forward)", "relative_percentage", "reservoirs", "Eau douce", "L'eau propre pour l'évier et la douche. Un bateau peut avoir plusieurs réservoirs : avant, bâbord (gauche), tribord (droite)."], ["Water #2 (Port)", "relative_percentage", "reservoirs", "Eau douce", "L'eau propre pour l'évier et la douche. Un bateau peut avoir plusieurs réservoirs : avant, bâbord (gauche), tribord (droite)."], ["Water #3 (Starboard)", "relative_percentage", "reservoirs", "Eau douce", "L'eau propre pour l'évier et la douche. Un bateau peut avoir plusieurs réservoirs : avant, bâbord (gauche), tribord (droite)."], ["Water Depth", "length_meters", "navigation", "Profondeur d'eau", "La hauteur d'eau sous le bateau, donnée par le sondeur. « Offset » est le réglage qui corrige la mesure selon la place de la sonde."], ["Water Temperature", "temperature_kelvin", "meteo", "Température de l'eau", "La température de la mer."], ["Water usage", "capacity_liters", "reservoirs", "Eau consommée", "Combien de litres d'eau ont été utilisés."], ["Weather station Pressure", "pressure_mbar", "meteo", "Pression atmosphérique", "La pression de l'air, comme sur un baromètre. Si elle baisse vite, le mauvais temps arrive. Le boîtier Océano Vox apparaît deux fois dans la liste, avec et sans accent."], ["Yaw", "angle_radians", "navigation", "Mouvements du bateau", "Comment le bateau bouge sur les vagues : tangage (l'avant monte et descend), roulis (il penche à gauche et à droite), lacet (il tourne), et vitesse de rotation."]];
const MT={relative_percentage:'Pourcentage (%)',relative_humidity:'Humidité (%)',voltage_percentage:'Charge (%)',voltage_volts:'Tension (V)',current_ampere:'Courant (A)',watts:'Puissance (W)',watt_hours:'Énergie (Wh)',frequency_hz:'Fréquence (Hz)',temperature_celsius:'Température (°C)',temperature_kelvin:'Température (K, −273 pour des °C)',pressure_hpa:'Pression (hPa)',pressure_mbar:'Pression (mbar)',speed_mps:'Vitesse (m/s, ×2 ≈ nœuds)',angle_radians:'Angle (radians, ×57 ≈ degrés)',angle_latitude_degrees:'Latitude (°)',angle_longitude_degrees:'Longitude (°)',angular_velocity_rpm:'Régime (tr/min)',length_meters:'Distance (m)',time_hours:'Durée (h)',time_seconds:'Durée (s)',capacity_liters:'Volume (L)',rate_liters_per_hour:'Débit (L/h)',power_dbm:'Signal (dBm)',rssi_lookup:'Réseau mobile (barres)',gps_integer:'Nombre (satellites)',unknown:'Non précisé'};
const mt=t=>t.startsWith('boolean')?'Oui / Non':(MT[t]||t);

/* ======================= Graphiques (SVG, une seule échelle par graphique) ======================= */
const CH={};let chN=0;
function lineChart(o){
  const id='ch'+(chN++),W=640,H=o.h||230,L=50,R=16,T=18,B=30;
  const x=i=>L+(W-L-R)*i/NOWH, y=v=>T+(H-T-B)*(1-(v-o.min)/(o.max-o.min));
  const d=o.data.map((v,i)=>`${i?'L':'M'}${x(i).toFixed(1)},${y(v).toFixed(1)}`).join('');
  const n=o.data.length;
  const area=`${d}L${x(n-1).toFixed(1)},${H-B}L${x(0)},${H-B}Z`;
  CH[id]={o,x,y,W,L,R,n};
  const e=last(o.data);
  return `<div class="chart"><svg data-ch="${id}" viewBox="0 0 ${W} ${H}" tabindex="0" role="img" aria-label="${esc(o.label)}">
    ${o.ticks.map(t=>`<line class="gl" x1="${L}" x2="${W-R}" y1="${y(t)}" y2="${y(t)}"/><text class="ax" x="${L-8}" y="${y(t)+4}" text-anchor="end">${o.tf(t)}</text>`).join('')}
    ${DAYS.map((dd,i)=>`${i?`<line class="gd" x1="${x(i*24)}" x2="${x(i*24)}" y1="${T}" y2="${H-B}"/>`:''}<text class="ax" x="${Math.min(x(i*24+12),W-R-18)}" y="${H-9}" text-anchor="middle">${dd}</text>`).join('')}
    ${o.ev?`<line class="ev" x1="${x(o.ev.i)}" x2="${x(o.ev.i)}" y1="${T}" y2="${H-B}"/><text class="lbl" x="${x(o.ev.i)-6}" y="${T+12}" text-anchor="end">${esc(o.ev.l)}</text>`:''}
    ${o.thr!=null?`<line class="thr" x1="${L}" x2="${W-R}" y1="${y(o.thr)}" y2="${y(o.thr)}"/><text class="lbl" x="${L+8}" y="${y(o.thr)-6}">${esc(o.thrL)}</text>`:''}
    <path class="ar" d="${area}"/><path class="ln" d="${d}"/>
    <circle class="dt" cx="${x(n-1)}" cy="${y(e)}" r="4.5"/>
    <g class="hov" visibility="hidden"><line class="cross" y1="${T}" y2="${H-B}"/><circle class="dt" r="5"/></g>
    <rect x="${L}" y="${T}" width="${W-L-R}" height="${H-T-B}" fill="transparent"/>
  </svg></div>`;
}
function barChart(o){
  const W=640,H=o.h||220,L=44,R=12,T=22,B=30,n=o.items.length,band=(W-L-R)/n,bw=Math.min(band*.6,44);
  const y=v=>T+(H-T-B)*(1-v/o.max), y0=H-B;
  const bars=o.items.map((it,i)=>{
    const cx=L+band*i+band/2,x0=cx-bw/2,top=y(it.v),r=Math.min(4,(y0-top)/2);
    const p=it.v>0?`M${x0},${y0}V${top+r}Q${x0},${top} ${x0+r},${top}H${x0+bw-r}Q${x0+bw},${top} ${x0+bw},${top+r}V${y0}Z`:'';
    return `<g class="bar ${it.c||''}" tabindex="0" data-tip="${esc(o.fmt(it.v))}|${esc(it.tip||it.l)}">
      <rect x="${L+band*i}" y="${T}" width="${band}" height="${y0-T}" fill="transparent"/>${p?`<path d="${p}"/>`:''}
      ${it.show?`<text class="bv" x="${cx}" y="${top-6}" text-anchor="middle">${esc(o.fmt(it.v))}</text>`:''}
      <text class="ax" x="${cx}" y="${H-9}" text-anchor="middle">${esc(it.l)}</text></g>`}).join('');
  return `<div class="chart"><svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(o.label)}">
    ${o.ticks.map(t=>`<line class="gl" x1="${L}" x2="${W-R}" y1="${y(t)}" y2="${y(t)}"/><text class="ax" x="${L-8}" y="${y(t)+4}" text-anchor="end">${o.tf?o.tf(t):t}</text>`).join('')}
    ${bars}
    ${o.ref?`<line class="ref" x1="${L}" x2="${W-R}" y1="${y(o.ref.v)}" y2="${y(o.ref.v)}"/><text class="lbl" x="${W-R}" y="${y(o.ref.v)-6}" text-anchor="end">${esc(o.ref.l)}</text>`:''}
  </svg></div>`;
}
function hbars(items,max,fmt){
  return items.map(it=>`<div class="hrow" data-tip="${esc(fmt(it.v))}|${esc(it.tip||it.l)}"><span>${esc(it.l)}</span><span class="tr"><i style="width:${it.v/max*100}%"></i></span><span class="v">${esc(fmt(it.v))}</span></div>`).join('');
}
function spark(a,min,max){
  const W=240,H=34,x=i=>i/NOWH*W,y=v=>2+(H-6)*(1-(v-min)/(max-min));
  const d=a.map((v,i)=>`${i?'L':'M'}${x(i).toFixed(1)},${y(v).toFixed(1)}`).join('');
  return `<svg class="spark" viewBox="0 0 ${W} ${H}" preserveAspectRatio="none" aria-hidden="true"><path class="ar" d="${d}L${x(a.length-1)},${H}L0,${H}Z"/><path class="ln" d="${d}" vector-effect="non-scaling-stroke"/></svg>`;
}
const SPK={batt:[11,13.2],hum:[40,90],pres:[995,1025]};
function bindCharts(){
  document.querySelectorAll('svg[data-ch]').forEach(svg=>{
    const c=CH[svg.dataset.ch];if(!c)return;
    const g=svg.querySelector('.hov'),ln=g.querySelector('line'),dt=g.querySelector('circle');
    let cur=c.n-1;
    const show=(i,cx,cy)=>{
      i=Math.max(0,Math.min(c.n-1,i));cur=i;
      const X=c.x(i),Y=c.y(c.o.data[i]);
      ln.setAttribute('x1',X);ln.setAttribute('x2',X);dt.setAttribute('cx',X);dt.setAttribute('cy',Y);g.setAttribute('visibility','visible');
      if(cx==null){const r=svg.getBoundingClientRect();cx=r.left+X/c.W*r.width;cy=r.top+Y/c.W*r.width;}
      tip(c.o.tf(c.o.data[i],true),hourLabel(i),cx,cy);
    };
    svg.addEventListener('pointermove',e=>{const r=svg.getBoundingClientRect();const vx=(e.clientX-r.left)/r.width*c.W;show(Math.round((vx-c.L)/(c.W-c.L-c.R)*NOWH),e.clientX,e.clientY)});
    svg.addEventListener('pointerleave',()=>{g.setAttribute('visibility','hidden');hideTip()});
    svg.addEventListener('focus',()=>show(cur));
    svg.addEventListener('blur',()=>{g.setAttribute('visibility','hidden');hideTip()});
    svg.addEventListener('keydown',e=>{if(e.key==='ArrowLeft'){e.preventDefault();show(cur-1)}if(e.key==='ArrowRight'){e.preventDefault();show(cur+1)}});
  });
}
const TIP=()=>document.getElementById('tip');
function tip(v,l,x,y){const t=TIP();t.replaceChildren();const b=document.createElement('b');b.textContent=v;const s=document.createElement('span');s.textContent=l;t.append(b,s);t.hidden=false;
  const w=t.offsetWidth,h=t.offsetHeight;let left=x+14,top=y-h-12;if(left+w>innerWidth-8)left=x-w-14;if(top<8)top=y+16;t.style.left=Math.max(8,left)+'px';t.style.top=top+'px';}
function hideTip(){TIP().hidden=true}
document.addEventListener('pointerover',e=>{const el=e.target.closest('[data-tip]');if(!el)return;const [v,l]=el.dataset.tip.split('|');tip(v,l,e.clientX,e.clientY)});
document.addEventListener('pointermove',e=>{const el=e.target.closest('[data-tip]');if(!el)return;const [v,l]=el.dataset.tip.split('|');tip(v,l,e.clientX,e.clientY)});
document.addEventListener('pointerout',e=>{const el=e.target.closest('[data-tip]');if(el&&!el.contains(e.relatedTarget))hideTip()});
document.addEventListener('focusin',e=>{const el=e.target.closest('[data-tip]');if(!el)return;const r=el.getBoundingClientRect();const [v,l]=el.dataset.tip.split('|');tip(v,l,r.left+r.width/2,r.top)});
document.addEventListener('focusout',e=>{if(e.target.closest('[data-tip]'))hideTip()});

const battChart=(id,h)=>{const s=serOf(id).batt;return lineChart({data:s,min:11,max:13.5,ticks:[11,11.5,12,12.5,13,13.5],tf:(v,p)=>nf(v,p?2:1)+' V',thr:11.8,thrL:'Seuil d’alerte 11,8 V',ev:id==='b2'?{i:CUT,l:'Prise de quai débranchée'}:null,label:'Tension de la batterie de service sur 7 jours',h})};
const humChart=id=>lineChart({data:serOf(id).hum,min:40,max:90,ticks:[40,50,60,70,80,90],tf:(v,p)=>nf(v,p?1:0)+' %',thr:75,thrL:'Au-dessus de 75 % : moisissure',label:'Humidité de la cabine sur 7 jours'});
const presChart=id=>lineChart({data:serOf(id).pres,min:995,max:1025,ticks:[995,1005,1015,1025],tf:(v,p)=>nf(v,p?1:0)+' hPa',label:'Pression atmosphérique sur 7 jours'});

/* ======================= Calculs (prototype) ======================= */
function health(){
  const late=S.tasks.find(t=>t.id==='t1'&&!t.done);
  const stock=S.tasks.find(t=>t.id==='t2'&&!t.done);
  const box=!S.boats.find(b=>b.id==='b1').steps[3];
  const acts=[];
  const crit=alerts().filter(a=>a.sev==='crit');
  crit.forEach(a=>acts.push({t:`Alerte capteur : ${a.d.n.toLowerCase()}`,d:`${a.b.name} · ${a.val}`,go:'#capteurs',cap:a.b.id}));
  if(late) acts.push({t:'1 inspection en retard',d:'Contrôle à 1 an · Test Boat',go:'#bateaux',boat:'b3'});
  if(stock) acts.push({t:'8 bateaux à régulariser',d:'Déclaration de stock de novembre',go:'#stock'});
  if(box) acts.push({t:'1 boîtier à activer',d:'Princess 3 · mise en service',go:'#bateaux',boat:'b1'});
  const m={insp:late?92:97,stock:stock?96:100,box:box?80:90};
  return {ok:acts.length===0,acts,m};
}
function statusCrit(){
  const h=health().m;
  return [
    {k:'Inspections faites à temps',v:h.insp,seuil:95,why:'Inspections réalisées avant leur date limite, sur le trimestre.'},
    {k:'Stock déclaré chaque mois',v:h.stock,seuil:90,why:'Part des bateaux en stock déclarés à temps.'},
    {k:'Boîtiers activés à la livraison',v:h.box,seuil:85,why:'Bateaux livrés avec le boîtier activé et le client rattaché.'}
  ];
}
const connected=()=>Object.keys(V).filter(online).length+(S.boats.find(b=>b.id==='b1').steps[3]?1:0);
const offline=()=>Object.keys(V).filter(id=>!online(id));

/* ======================= Navigation ======================= */
const NAV=[
  {sec:'Activité'},
  {h:'dashboard',l:'Tableau de bord',i:'grid'},
  {h:'capteurs',l:'Capteurs',i:'pulse',cnt:()=>alerts().length,nw:true},
  {h:'bateaux',l:'Bateaux',i:'boat'},
  {h:'clients',l:'Clients',i:'users'},
  {h:'messages',l:'Messages',i:'msg',cnt:()=>S.convs.filter(c=>c.unread).length},
  {h:'fleet',l:'Fleet',i:'key',cnt:()=>1},
  {h:'notifications',l:'Notifications',i:'bell',cnt:()=>2},
  {sec:'Stock'},
  {h:'stock',l:'Déclaration…',i:'clip',cnt:()=>typeof regLeft==='function'?regLeft().length:0},
  {h:'historique',l:'Historique',i:'hist'},
  {h:'partage',l:'Stock partagé',i:'share'},
  {sec:'Compte'},
  {h:'concession',l:'Ma concession',i:'award'},
  {h:'services',l:'Services',i:'euro'},
  {h:'parametres',l:'Paramètres',i:'gear'}
];
function route(){return (location.hash||'#dashboard').slice(1)||'dashboard'}
function renderNav(){
  const r=route();
  document.getElementById('nav').innerHTML=NAV.map(n=>{
    if(n.sec) return `<div class="nav-sec">${n.sec}</div>`;
    const c=n.cnt?n.cnt():0;
    const on=r===n.h||(r==='bilan'&&n.h==='dashboard');
    return `<a href="#${n.h}" class="${on?'on':''}">${ic(n.i,22,1.6)}${n.l}${c?`<span class="cnt">${c}</span>`:''}${n.nw&&!c?`<span class="nw">${NEW}</span>`:''}</a>`;
  }).join('')+`<div class="nav-sec">Aide</div><a href="#" data-guide>${ic('book',22,1.6)}Guide et nouveautés${typeof tKey==='function'&&tKey('sp-news-seen')!==TOURS.nouveautes.ver?`<span class="nw">${NEW}</span>`:''}</a>`;
  const ro=roleOf(S.role);
  const P=PEOPLE[S.user];
  document.getElementById('me').innerHTML=`${ic('user',20)}<span style="min-width:0">${P.n}<span class="muted" style="display:block;font-size:12.5px;font-weight:400">${P.t}${S.user==='directeur'&&S.role!=='directeur'?` · voit la vue ${ro.l.toLowerCase()}`:''}</span></span>`;
}
const PEOPLE={directeur:{n:'Laurine G.',t:'Directrice de concession'},commercial:{n:'Hugo M.',t:'Commercial'},technicien:{n:'Sami B.',t:'Technicien'},atelier:{n:'Marc D.',t:'Chef d’atelier'}};
const roleTabs=()=>S.user!=='directeur'?'':`<div class="roles" role="group" aria-label="Voir comme"><span class="roles-l">Voir comme</span>${ROLES.map(r=>`<button data-role="${r.id}" aria-pressed="${S.role===r.id}">${ic(r.i,16,1.8)}${r.l}</button>`).join('')}</div>`;
function setUser(u){S.user=u;S.role=u;try{localStorage.setItem('sp-user',u);localStorage.setItem('sp-role',u)}catch(_){}if(typeof renderTop==='function')renderTop();render();}
const kpi=(l,v,s,st='')=>`<section class="card kpi ${st?'is-'+st:''}"><small>${l}</small><b>${v}</b><span class="s">${s}</span></section>`;
const stChip=s=>s==='crit'?`<span class="chip c-red">${ic('alert',13,2)} Alerte</span>`:s==='warn'?`<span class="chip c-orange">${ic('alert',13,2)} À surveiller</span>`:s==='off'?`<span class="chip c-grey">${ic('wifi',13,2)} Pas de données</span>`:`<span class="chip c-green">${ic('check',13,2.4)} OK</span>`;

/* ======================= Tableau de bord ======================= */

function myDay(){
  const open=S.tasks.filter(t=>!t.done), done=S.tasks.filter(t=>t.done);
  const pct=Math.round(done.length/S.tasks.length*100);
  const body=open.length?`<div>${open.map(t=>`
        <div class="task"><button class="tick" data-tick="${t.id}" aria-label="Marquer « ${t.title} » comme fait"></button>
          <div class="tt"><b>${t.title}</b><span class="${t.nudge?'nudge':''}">${t.late?'<span class="chip c-orange" style="margin-right:6px">En retard</span>':''}${t.ctx}</span></div>
          <a class="btn btn-out btn-sm" href="${t.go}" data-go-boat="${t.boat||''}">${t.kind==='msg'?'Répondre':'Ouvrir'}</a></div>`).join('')}</div>
      ${done.length?`<div class="done-list">Traité aujourd’hui : ${done.map(t=>t.title).join(' · ')}</div>`:''}`
    :`<div class="alldone"><div class="big">${ic('check',30,2.4)}</div><h4>Tout est traité</h4><div class="muted">Plus rien n’attend aujourd’hui.</div><button class="linkbtn" id="resetDay">Revoir la journée (démo)</button></div>`;
  return `<section class="card" aria-label="Ma journée"><div class="card-h" style="flex-direction:column;gap:10px">
      <div class="day-h" style="width:100%"><h3>Ma journée</h3><span class="muted" style="margin-left:auto">Mardi 10 novembre</span></div>
      <div style="width:100%;display:flex;align-items:center;gap:12px"><div class="prog" style="flex:1"><i style="width:${pct}%"></i></div><span class="muted" style="font-size:13px;font-variant-numeric:tabular-nums">${done.length} sur ${S.tasks.length} traitées</span></div>
    </div><div class="card-b" style="padding-top:6px">${body}</div></section>`;
}
function parc(){
  const h=health();
  return `<section class="card" aria-label="État du parc"><div class="card-h"><h3>État du parc</h3><span class="muted" style="margin-left:auto;font-size:13px">90 derniers jours</span></div>
    <div class="card-b" style="display:flex;flex-direction:column;gap:12px">
      <div class="health ${h.ok?'ok':'warn'}"><div class="ico">${ic(h.ok?'check':'pulse',20,2.2)}</div><div><b>${h.ok?'Parc en bonne santé':'À surveiller'}</b><span style="font-size:13px">${h.ok?'Aucune alerte en retard, stock à jour.':`${h.acts.length} point${h.acts.length>1?'s':''} pour revenir au vert`}</span></div></div>
      ${h.ok?'':`<div>${h.acts.map(a=>`<div class="act"><span class="b"></span><div style="flex:1;min-width:0"><b style="font-weight:500">${a.t}</b><div class="muted" style="font-size:12.5px">${a.d}</div></div><a class="linkbtn" href="${a.go}" data-go-boat="${a.boat||''}" data-capboat="${a.cap||''}">Régler</a></div>`).join('')}</div>`}
      <div>${[['Inspections à temps',h.m.insp,95],['Stock déclaré',h.m.stock,90],['Boîtiers activés à la livraison',h.m.box,85]].map(([k,v,s])=>`
        <div class="metric"><span>${k}</span><span class="v">${v} %</span><div class="mbar"><i style="width:${v}%;background:${v>=s?'var(--green)':'var(--orange)'}"></i><u style="left:${s}%" title="Objectif ${s} %"></u></div></div>`).join('')}
        <div class="muted" style="font-size:12px;margin-top:4px">Le trait marque l’objectif du réseau.</div></div>
    </div></section>`;
}
const WEEKS=['S35','S36','S37','S38','S39','S40','S41','S42','S43','S44','S45','S46'];
const ALW=[3,2,4,1,2,5,3,6,4,3,5,7];
function alertsCard(){
  const all=alerts(),lim=S.alAll?all.length:6,al=all.slice(0,lim);
  return `<section class="card"><div class="card-h"><div><h3>Alertes capteurs en cours</h3><div class="sub">Sur ${withData().length} bateaux qui envoient des données · les plus graves en premier</div></div><div class="total"><small>Ouvertes</small><b>${all.length}</b></div></div>
    <div class="card-b" style="padding-top:4px">${al.map(a=>`<div class="alrow"><span class="sv is-${a.sev}"></span>
      <div style="min-width:0"><div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap"><b style="font-weight:600">${esc(a.b.name)}</b>${stChip(a.sev)}<span class="muted" style="font-size:12.5px">${esc(a.b.owner)}</span></div>
        <div style="margin-top:3px"><b style="font-weight:500">${a.d.n} : ${a.val}</b> · <span class="muted">${a.txt}${a.since?` · ${a.since}`:''}</span></div></div>
      <div class="acts">${a.sev==='crit'?`<a class="btn btn-pri btn-sm" href="#messages">${ic('phone',15)} Prévenir le client</a>`:''}<a class="btn btn-out btn-sm" href="#capteurs" data-capboat="${a.b.id}">Ouvrir le bateau</a></div></div>`).join('')}
    ${all.length>6?`<button class="btn btn-ghost more" data-alall>${S.alAll?'Afficher moins':`Afficher les ${all.length-6} autres alertes`}</button>`:''}</div></section>`;
}
const OPP=[
  {b:'b3',sig:'Santé batterie 62 %',sv:'warn',p:'Batterie de service neuve, pose comprise',pr:'≈ 420 €'},
  {b:'b6',sig:'Humidité cabine 81 %',sv:'warn',p:'Déshumidificateur + hivernage surveillé',pr:'Sur devis'},
  {b:'b7',sig:'Révision 250 h dans 3 h',sv:'warn',p:'Contrat d’entretien annuel',pr:'Sur devis'},
  {b:'b4',k:'cale',sig:'Pas de capteur d’eau dans la cale',sv:'off',p:'Capteur de présence d’eau',pr:'178,80 €'},
  {b:'b2',sig:'Batterie vidée après une coupure du quai',sv:'crit',p:'Panneau solaire d’appoint',pr:'Sur devis'}
];
const SHOP0=[
  ['Capteur d’ouverture de porte magnétique','94,80 €','porte','Sécurité'],['Capteur d’ouverture de trappe mécanique','202,80 €','trappe','Sécurité'],['Détecteur de mouvement','178,80 €','mvt','Sécurité'],['Capteur de présence d’eau','178,80 €','cale','Sécurité'],
  ['Capteur antivol pour moteur hors-bord','94,80 €','antiM','Sécurité'],['Capteur antivol pour annexe','94,80 €','antiA','Sécurité'],['Capteur de tension de batterie','310,80 €','battS','Maintenance'],['Capteur de prise de quai','178,80 €','quai','Maintenance']
];
const shop=()=>SHOP0.map(s=>[s[0],s[1],eqCount(s[2]),s[3],s[2]]);


const PLAN=[
  {d:'Mer. 11',b:'b7',t:'Révision 250 h : vidange, filtres, courroie',o:'Capteur · heures moteur',st:'warn'},
  {d:'Jeu. 12',b:'b3',t:'Contrôle à 1 an + test de la batterie de service (santé 62 %)',o:'Inspection en retard',st:'crit'},
  {d:'Ven. 13',b:'b4',t:'Révision de rodage 100 h',o:'Capteur · heures moteur',st:'warn'},
  {d:'Lun. 16',b:'b6',t:'Hivernage : déshumidificateur, vidange eau douce',o:'Capteur · humidité',st:'warn'},
  {d:'Mar. 17',b:'b2',t:'Contrôle batterie après décharge profonde',o:'Capteur · batterie',st:'warn'}
];

/* ======================= Capteurs ======================= */

function devCard(d,v){
  const sv=d.s[0],why=d.why[S.role];
  const g=d.gauge?d.gauge(v):null;
  return `<article class="dev ${sv==='ok'?'':'is-'+sv}">
    <div class="dev-top"><b>${d.n}</b>${stChip(sv)}</div>
    <div><div class="dv">${d.main(v)}</div><div class="st">${d.s[1]}${(v.since||{})[d.k]?` · ${v.since[d.k]}`:''}</div></div>
    ${g!=null?`<div class="gauge"><i style="width:${g}%;${sv!=='ok'?'background:var(--orange)':''}"></i></div>`:''}
    ${d.ser?spark(serOf(S.cb)[d.ser],...SPK[d.ser]):''}
    <p class="what">${d.what}</p>
    ${d.subs(v).length?`<div class="subs">${d.subs(v).map(s=>`<div><span class="muted">${s[0]}</span><span>${s[1]}</span></div>`).join('')}</div>`:''}
    ${why?`<div class="why"><b>Pour le ${roleOf(S.role).l.toLowerCase()} :</b> ${why}</div>`:''}
    <div class="codes">${d.raw.map(r=>`<span class="code">${esc(r)}</span>`).join('')}</div>
  </article>`;
}
function listRows(){
  const q=S.q.trim().toLowerCase();
  const rows=SENSORS.filter(s=>(!S.fam||s[2]===S.fam)&&(!q||(s[0]+' '+s[3]+' '+s[4]+' '+mt(s[1])).toLowerCase().includes(q)));
  return {n:rows.length,html:rows.map(s=>`<tr><td><span class="code">${esc(s[0])}</span></td><td><b style="font-weight:500">${esc(s[3])}</b><div class="muted" style="font-size:12.5px">${esc(s[4])}</div></td><td>${esc(FAM[s[2]].t)}</td><td>${esc(mt(s[1]))}</td><td>${FAM[s[2]].roles.map(r=>`<span class="rtag ${r===S.role?'me':''}">${roleOf(r).l}</span>`).join(' ')}</td></tr>`).join('')||`<tr><td colspan="5" class="muted">Aucun capteur ne correspond. Essayez « batterie », « porte » ou « Bilge ».</td></tr>`};
}
function listSection(){
  const r=listRows();
  return `<div style="display:flex;flex-direction:column;gap:12px">
      <div class="filters"><label class="in">${ic('search',18)}<input id="sq" type="search" placeholder="Ex. batterie, porte, Bilge, AWS…" value="${esc(S.q)}" aria-label="Chercher un capteur" autocomplete="off"></label>
        <select id="sf" aria-label="Famille"><option value="">Toutes les familles</option>${Object.entries(FAM).map(([k,f])=>`<option value="${k}" ${S.fam===k?'selected':''}>${f.t} (${SENSORS.filter(s=>s[2]===k).length})</option>`).join('')}</select>
        <span class="muted"><b id="lcount" style="color:var(--ink)">${r.n}</b> affichés</span></div>
      <div class="tw"><table class="st"><thead><tr><th>Nom dans le fichier</th><th>En clair</th><th>Famille</th><th>Type de valeur</th><th>Utile pour</th></tr></thead><tbody id="lbody">${r.html}</tbody></table></div>
    </div>`;
}
/* ======================= Bateaux (prototype + bloc capteurs) ======================= */
const STEPS=[
  {t:'Réception du bateau',d:'Bateau reçu et contrôlé à l’arrivée.'},
  {t:'Déclaration en stock',d:'Déclaré dans le stock de la concession.'},
  {t:'Rattacher le propriétaire',d:'Fiche client créée et liée au bateau.'},
  {t:'Activer le boîtier',d:'Unité principale 3426100474 : lancer le diagnostic pour vérifier qu’elle remonte bien.',btn:'Lancer le diagnostic'},
  {t:'Préparer la mise en service',d:'Formulaire de livraison avec le client.',btn:'Préparer la mise en service',warn:true}
];


/* = fin */

/* ======================= Parc élargi : 41 bateaux d'exemple en plus, pour tester une grande flotte ======================= */
(function(){
  const NAMES=['Alizé','Bora','Dune','Écume','Fleur de Sel','Goéland','Héol','Iroise','Jade','Kalinda','Lagon','Marée Haute','Nausicaa','Orque','Perle','Quiétude','Ressac','Sillage','Tramontane','Ulysse','Vent d’Ouest','Wahoo','Xora','Yole','Zéphyr','Albatros','Brise','Cormoran','Dauphin','Embrun','Farniente','Gwenn','Hirondelle','Île Verte','Joséphine','Korrigan','Libeccio','Mouette','Noroît','Océane','Sirène'];
  const MODELS=['Oceanis 30.1','Antares 9','Flyer 8','Swift Trawler 41','First 27','Gran Turismo 36','Sun Odyssey 410','Merry Fisher 795','Cap Camarat 7.5','Prestige 520','Leader 33','NC 1095'];
  const LN=['Martin','Bernard','Dubois','Thomas','Robert','Richard','Petit','Durand','Moreau','Simon','Laurent','Lefebvre','Michel','Garcia','David','Bertrand','Roux','Vincent','Fournier','Girard'];
  const FN=['A.','C.','É.','F.','J.','L.','M.','N.','P.','S.'];
  NAMES.forEach((n,i)=>{
    const id='g'+String(i+1).padStart(2,'0');
    const st=i>=38?'En stock':i>=36?'Mise en service':'Vendu';
    S.boats.push({id,name:n,model:MODELS[i%MODELS.length],owner:st==='En stock'?'—':`${FN[i%FN.length]} ${LN[(i*7)%LN.length]}`,status:st,brand:n[0].toUpperCase(),hin:`FR-BEN${(31000+i*137)}`,steps:st==='Mise en service'?[true,true,i%2===0,false,false]:null});
    if(st!=='Vendu'){NOBOX[id]=st==='En stock'?'En stock : pas encore de boîtier.':'Boîtier pas encore installé.';return;}
    const r=rng(1000+i*31),R=(a,b)=>a+(b-a)*r();
    const next=[100,250,500,750,1000][i%5],eh=Math.round(next-R(30,90));
    const v={battS:0,soc:Math.round(R(70,97)),soh:Math.round(R(76,98)),battM:+R(12.5,12.9).toFixed(2),quai:true,eh:i===11?495:Math.max(12,eh),next:i===11?500:next,et:Math.round(R(76,85)),op:+R(3.2,3.9).toFixed(1),
      carb:Math.round(R(20,95)),cap:[180,250,300,400,500][i%5],eau:Math.round(R(15,90)),noires:i===26?86:Math.round(R(0,60)),hum:0,tc:Math.round(R(8,16)),pres:0,gsm:i===18?1:2+Math.round(R(0,3)),hubB:Math.round(R(60,100)),sat:Math.round(R(5,11)),
      lastSeen:i===18?'il y a 5 h':`il y a ${2+i%9} min`,since:{}};
    if(i===4)v.soh=64;
    if(i%2)v.porte=false; if(i%3!==0)v.cale=false; if(i%4===0)v.mvt=false; if(i%5===0)v.fumee=false; if(i%7===0)v.trappe=false;
    if(i%3===0){v.sol=Math.round(R(20,160));v.solE=Math.round(R(150,600))}
    if(i===18)v.since.gsm='depuis 9 h 10';
    V[id]=v;
    const s=serOf(id);v.battS=last(s.batt);v.hum=i===32?78:last(s.hum);v.pres=last(s.pres);
    if(i===32)v.since.hum='depuis 3 jours';
  });
  V.b3.trappe=false;
})();
function serOf(id){
  if(SER[id])return SER[id];
  let h=0;for(const c of id)h=(h*31+c.charCodeAt(0))%100000;
  const base=12.55+(h%30)/100;
  SER[id]={batt:series(h+7,(i,r)=>base+.13*sun(i)+(r-.5)*.05),hum:series(h+8,(i,r)=>56+(h%12)+2*Math.sin(i/24*2*Math.PI)+(r-.5)*1.4),pres:series(h+9,(i,r)=>1019-Math.max(0,i-96)*.19+(r-.5)*.5)};
  return SER[id];
}
const equipped=()=>S.boats.filter(b=>V[b.id]||b.id==='b1');
const withData=()=>S.boats.filter(b=>V[b.id]);
const RANK={crit:0,warn:1,off:2,ok:3};
function boatIssues(id){return devicesOf(id).filter(d=>d.s[0]!=='ok').length+(V[id]&&!online(id)?0:0)}
function oppList(){
  const L=[...OPP];
  withData().forEach(b=>{const v=V[b.id];if(OPP.some(o=>o.b===b.id))return;
    if(v.soh<70)L.push({b:b.id,sig:`Santé batterie ${v.soh} %`,sv:'warn',p:'Batterie de service neuve, pose comprise',pr:'≈ 420 €'});
    else if(v.next-v.eh<=10)L.push({b:b.id,sig:`Révision ${v.next} h dans ${v.next-v.eh} h`,sv:'warn',p:'Contrat d’entretien annuel',pr:'Sur devis'});
    else if(v.hum>75)L.push({b:b.id,sig:`Humidité cabine ${nf(v.hum)} %`,sv:'warn',p:'Déshumidificateur + hivernage surveillé',pr:'Sur devis'});
  });
  return L;
}
const SHOPK=['porte','trappe','mvt','cale','antiM','antiA','battS','quai'];
const eqCount=k=>withData().filter(b=>V[b.id][k]!==undefined).length;
const DEVDEF={directeur:'battS',commercial:'battS',technicien:'battS',atelier:'eh'};
const DIST={
  battS:[['< 11,8 V',v=>v.battS<11.8,1],['11,8 à 12,2',v=>v.battS>=11.8&&v.battS<12.2,1],['12,2 à 12,5',v=>v.battS>=12.2&&v.battS<12.5],['12,5 à 12,8',v=>v.battS>=12.5&&v.battS<12.8],['12,8 V et +',v=>v.battS>=12.8]],
  battM:[['< 12,2 V',v=>v.battM<12.2,1],['12,2 à 12,5',v=>v.battM>=12.2&&v.battM<12.5],['12,5 à 12,8',v=>v.battM>=12.5&&v.battM<12.8],['12,8 V et +',v=>v.battM>=12.8]],
  quai:[['Branché',v=>v.quai],['Débranché',v=>!v.quai,1]],
  sol:[['< 50 W',v=>v.sol<50],['50 à 150 W',v=>v.sol>=50&&v.sol<150],['150 W et +',v=>v.sol>=150]],
  eh:[['10 h ou moins',v=>v.next-v.eh<=10,1],['11 à 50 h',v=>v.next-v.eh>10&&v.next-v.eh<=50],['51 à 150 h',v=>v.next-v.eh>50&&v.next-v.eh<=150],['plus de 150 h',v=>v.next-v.eh>150]],
  carb:[['< 15 %',v=>v.carb<15,1],['15 à 50 %',v=>v.carb>=15&&v.carb<50],['50 à 100 %',v=>v.carb>=50]],
  eau:[['< 25 %',v=>v.eau<25],['25 à 50 %',v=>v.eau>=25&&v.eau<50],['50 à 75 %',v=>v.eau>=50&&v.eau<75],['75 % et +',v=>v.eau>=75]],
  noires:[['< 40 %',v=>v.noires<40],['40 à 80 %',v=>v.noires>=40&&v.noires<=80],['> 80 %',v=>v.noires>80,1]],
  cale:[['Sec',v=>!v.cale],['Eau détectée',v=>v.cale,1]],
  porte:[['Fermée',v=>!v.porte],['Ouverte',v=>v.porte,1]],
  mvt:[['Aucun mouvement',v=>!v.mvt],['Mouvement',v=>v.mvt,1]],
  fumee:[['Pas de fumée',v=>!v.fumee],['Fumée',v=>v.fumee,1]],
  hum:[['< 60 %',v=>v.hum<60],['60 à 75 %',v=>v.hum>=60&&v.hum<=75],['> 75 %',v=>v.hum>75,1]],
  pres:[['< 1 005',v=>v.pres<1005],['1 005 à 1 010',v=>v.pres>=1005&&v.pres<1010],['1 010 et +',v=>v.pres>=1010]],
  gsm:[['0 à 1 barre',v=>v.gsm<=1,1],['2 à 3 barres',v=>v.gsm>=2&&v.gsm<=3],['4 à 5 barres',v=>v.gsm>=4]]
};

/* ======================= Tableau de bord : des cases qui se déplient, différentes pour chaque métier ======================= */
S.dtab={directeur:'jour',commercial:'opp',technicien:'alertes',atelier:'rev'};
S.capAll=false; S.acc={};
const card=(h,sub,body,tot)=>`<section class="card"><div class="card-h"><div><h3>${h}</h3>${sub?`<div class="sub">${sub}</div>`:''}</div>${tot?`<div class="total"><small>${tot[0]}</small><b>${tot[1]}</b></div>`:''}</div><div class="card-b">${body}</div></section>`;
const TABS={
  directeur:()=>{const al=alerts(),crit=al.filter(a=>a.sev==='crit'),open=S.tasks.filter(t=>!t.done).length,h=health();return [
    {id:'jour',l:'Ma journée',v:`${open}`,s:open?`tâche${open>1?'s':''} à faire aujourd’hui`:'Tout est traité',st:open?'':'ok',body:()=>myDay()},
    {id:'parc',l:'État du parc',v:h.ok?'OK':`${h.acts.length}`,s:h.ok?'Parc en bonne santé':'points pour revenir au vert',st:h.ok?'ok':'warn',body:()=>`
      <div class="banner"><div class="ico">${ic('mail',20)}</div><div style="flex:1;min-width:200px"><b>Votre bilan du lundi est arrivé</b><div class="muted" style="font-size:13px">Semaine du 2 au 8 novembre : 11 tâches traitées, 3 à venir.</div></div><a class="btn btn-out btn-sm" href="#bilan">Voir le bilan</a></div>
      <div class="grid g2">${parc()}${card('Bateaux connectés','Boîtiers qui envoient leurs données',`<div class="muted">${offline().length} boîtier${offline().length>1?'s':''} hors ligne, ${S.boats.filter(b=>b.status!=='Vendu').length} bateaux en mise en service ou en stock. Le technicien suit le détail.</div>`,['Total',`${connected()} / ${equipped().length}`])}</div>`},
    {id:'alertes',l:'Alertes capteurs',v:`${al.length}`,s:`dont ${crit.length} critique${crit.length>1?'s':''}`,st:crit.length?'crit':'warn',body:()=>`
      ${crit.map(a=>`<div class="health warn"><div class="ico">${ic('alert',20,2.2)}</div><div style="flex:1;min-width:0"><b>${a.b.name} : ${a.d.n.toLowerCase()} ${a.val}</b><span style="font-size:13px">${a.txt}. Le technicien est prévenu.</span></div><a class="btn btn-out btn-sm" href="#capteurs" data-capboat="${a.b.id}">Voir</a></div>`).join('')}
      <div class="grid g2">
      ${card('Alertes par semaine','12 dernières semaines, tout le parc',barChart({items:WEEKS.map((w,i)=>({l:w,v:ALW[i],c:i===11?'cur':'',tip:`alertes · semaine ${w.slice(1)}${i===11?' (en cours)':''}`,show:i===11})),max:8,ticks:[0,2,4,6,8],fmt:v=>`${v}`,label:'Nombre d’alertes capteurs par semaine'})+'<div class="chart-note">Barre claire : semaine en cours.</div>',['Cette semaine',last(ALW)])}
      ${card('D’où viennent les alertes','90 derniers jours, par famille',hbars([{l:'Batteries',v:14},{l:'Boîtier et réseau',v:9},{l:'Moteur',v:6},{l:'Météo et humidité',v:5},{l:'Sécurité',v:3},{l:'Réservoirs',v:3}],14,v=>`${v}`)+'<div class="chart-note">Les batteries arrivent en tête : souvent le courant de quai coupé.</div>',['Total',40])}
      </div>`},
    {id:'perf',l:'Ventes et statut',v:`${statusCrit().filter(c=>c.v>=c.seuil).length} / 3`,s:'critères du statut atteints',st:'',body:()=>`<div class="grid g3">
      ${card('Mes ventes','À l’heure actuelle',barChart({items:[{l:'Livraison',v:1},{l:'Transféré',v:3},{l:'Reprises',v:6}].map(i=>({...i,show:true,tip:i.l})),max:6,ticks:[0,2,4,6],fmt:v=>`${v}`,label:'Mes ventes',h:200})+'<div class="chart-note">5 bateaux vendus en 2026.</div>',['Total',10])}
      ${card('Ma concession','Statut T4 2026',statusCrit().map(c=>`<div class="metric"><span>${c.k}</span><span class="v">${c.v} %</span><div class="mbar"><i style="width:${c.v}%;background:${c.v>=c.seuil?'var(--green)':'var(--orange)'}"></i><u style="left:${c.seuil}%"></u></div></div>`).join('')+'<a class="linkbtn" href="#concession">Voir le détail →</a>')}
      ${card('Délai de réponse','Messages clients, 30 jours','<div class="muted">Objectif réseau : moins de 4 h.</div>',['Moyen','2 h 10'])}</div>`}
  ]},
  commercial:()=>{const E=withData().length,SH=shop(),OP=oppList(),toEquip=SH.reduce((s,x)=>s+(E-x[2]),0);const SAL=[380,0,950,1420,2100,1680,760,310,540,890,180],M=['janv.','févr.','mars','avr.','mai','juin','juil.','août','sept.','oct.','nov.'];return [
    {id:'opp',l:'Ventes à proposer',v:`${OP.length}`,s:'repérées par les capteurs',st:'ok',body:()=>card('Ventes repérées par les capteurs','Le boîtier voit ce dont le bateau a besoin. Vous le proposez au bon moment.',OP.slice(0,S.oppAll?99:6).map(o=>{const b=boat(o.b);return `<div class="opp">
      <div style="min-width:0"><b style="font-weight:600">${b.name}</b> <span class="muted">· ${b.owner}</span><div style="margin-top:4px;display:flex;gap:6px;align-items:center;flex-wrap:wrap"><span class="sdot is-${o.sv}"></span><span style="font-size:13.5px">${o.sig}</span></div></div>
      <div style="min-width:0"><span class="muted" style="font-size:12.5px">À proposer</span><div style="font-weight:500">${o.p} · <span class="pr">${o.pr}</span></div></div>
      ${S.sent[sentKey(o.b,o.k||('opp:'+o.p))]?`<span class="chip c-green">${ic('check',13,2.4)} Proposé</span>`:`<button class="btn btn-out btn-sm" data-propose="${o.b}|opp|${encodeURIComponent(o.p)}">${ic('msg',15)} Proposer au client</button>`}</div>`}).join('')+(OP.length>6?`<button class="btn btn-ghost more" data-oppall>${S.oppAll?'Afficher moins':`Afficher les ${OP.length-6} autres`}</button>`:''))},
    {id:'ventes',l:'Capteurs et services vendus',v:'9 210 €',s:'en 2026, à fin octobre',st:'',body:()=>card('Capteurs et services vendus','Par mois, 2026',barChart({items:SAL.map((v,i)=>({l:M[i],v,c:i===10?'cur':'',tip:`${M[i]} 2026${i===10?' (en cours)':''}`})),max:2500,ticks:[0,500,1000,1500,2000,2500],tf:v=>v?nf(v/1000,1)+' k':'0',fmt:v=>nf(v)+' €',label:'Ventes de capteurs et services par mois'})+'<div class="chart-note">Le pic du printemps correspond aux remises à l’eau. Novembre est en cours.</div>',['Total','9 210 €'])},
    {id:'equip',l:'Capteurs à poser',v:`${toEquip}`,s:'sur les bateaux du parc',st:'warn',body:()=>card('Équipement du parc',`Bateaux équipés sur ${E}, par capteur vendu`,hbars(SH.map(s=>({l:s[0].replace('Capteur d’ouverture de ','').replace('Capteur de ','').replace('Capteur antivol pour ','Antivol ').replace(/^./,c=>c.toUpperCase()),v:s[2],tip:`bateaux équipés sur ${E} · ${s[0]}`})),E,v=>`${v} / ${E}`)+'<div class="chart-note">Plus la barre est courte, plus il reste de bateaux à équiper.</div>')},
    {id:'cat',l:'Catalogue',v:`${SH.length}`,s:'capteurs sans fil à vendre',st:'',body:()=>card('Catalogue des capteurs Seanapps','Sans fil (Bluetooth), pour un bateau déjà équipé du boîtier',`<div class="cat">${SH.map(s=>`<div class="it"><div class="row"><b style="font-weight:500">${s[0]}</b><span style="font-variant-numeric:tabular-nums;font-weight:600;white-space:nowrap">${s[1]}</span></div><div class="row"><span class="muted" style="font-size:12.5px">${s[3]} · à proposer à ${E-s[2]} bateau${E-s[2]>1?'x':''}</span>${E-s[2]>0?`<button class="btn btn-out btn-sm" data-propose="|${s[4]}">Proposer</button>`:''}</div></div>`).join('')}</div>`)}
  ]},
  technicien:()=>{const al=alerts(),crit=al.filter(a=>a.sev==='crit').length,off=Object.keys(V).filter(id=>!online(id)),todo=S.boats.filter(b=>b.status==='Mise en service');return [
    {id:'alertes',l:'Alertes ouvertes',v:`${al.length}`,s:`dont ${crit} critique${crit>1?'s':''}`,st:crit?'crit':'warn',body:()=>alertsCard()},
    {id:'diag',l:'Diagnostic batterie',v:`${nf(V.b2.battS,1)} V`,s:'Princess 2 · batterie de service',st:'crit',body:()=>card('Batterie de service · Princess 2','Tension sur 7 jours, une mesure par heure',battChart('b2')+'<div class="chart-note">Diagnostic : la prise de quai est débranchée depuis lundi 18 h. La batterie perd environ 0,06 V par heure. Survolez la courbe pour lire chaque heure.</div>',['Maintenant',`${nf(V.b2.battS,1)} V`])},
    {id:'boitiers',l:'Boîtiers hors ligne',v:`${off.length}`,s:off.map(id=>boat(id).name).join(', ')||'Aucun',st:off.length?'warn':'ok',body:()=>card('Boîtiers à vérifier',`Seulement ceux qui posent problème · les ${withData().filter(b=>online(b.id)&&V[b.id].hubB>=65).length} autres envoient bien leurs données`,`<div style="overflow-x:auto"><table class="st"><thead><tr><th>Bateau</th><th>Réseau</th><th class="num">Batt. boîtier</th><th>Dernier envoi</th></tr></thead><tbody>
      ${S.boats.filter(b=>V[b.id]?(!online(b.id)||V[b.id].hubB<65):b.status==='Vendu'||b.id==='b1').map(b=>{const v=V[b.id];return v?`<tr><td><span class="sdot ${online(b.id)?'is-ok':'is-warn'}"></span> ${esc(b.name)}</td><td>${v.gsm} / 5</td><td class="num">${v.hubB} %</td><td>${v.lastSeen}</td></tr>`:`<tr><td><span class="sdot is-off"></span> ${b.name}</td><td colspan="3" class="muted">${NOBOX[b.id]}</td></tr>`}).join('')}</tbody></table></div>`)},
    {id:'mes',l:'Mises en service',v:`${todo.length}`,s:'boîtiers à activer ou installer',st:'',body:()=>card('Mises en service en cours','Le boîtier doit être activé avant la livraison',todo.map(b=>`<div class="act"><span class="b" style="background:var(--blue)"></span><div style="flex:1;min-width:0"><b style="font-weight:500">${b.name}</b><div class="muted" style="font-size:12.5px">${b.steps.filter(Boolean).length} étapes sur 5 · ${NOBOX[b.id]||'Boîtier activé'}</div></div><a class="btn btn-out btn-sm" href="#bateaux" data-go-boat="${b.id}">Ouvrir</a></div>`).join(''))}
  ]},
  atelier:()=>{const LOAD=[58,66,77,52,40,30],WK=['S46','S47','S48','S49','S50','S51'];const eng=Object.keys(V).map(id=>({b:boat(id),v:V[id]})).sort((a,b)=>(a.v.next-a.v.eh)-(b.v.next-b.v.eh));const soon=eng.filter(e=>e.v.next-e.v.eh<=10);return [
    {id:'rev',l:'Révisions bientôt',v:`${soon.length}`,s:soon.length<=2?soon.map(e=>e.b.name.split(' (')[0]).join(' et ')+' · moins de 10 h':'bateaux à moins de 10 h de la révision',st:'warn',body:()=>card('Heures moteur avant révision',`Les 8 révisions les plus proches sur ${eng.length} bateaux`,eng.slice(0,8).map(e=>{const p=Math.min(100,e.v.eh/e.v.next*100),r=e.v.next-e.v.eh;return `<div class="metric" data-tip="${r} h restantes|${esc(e.b.name)} · ${e.v.eh} h sur ${e.v.next} h"><span>${e.b.name} <span class="muted" style="font-size:12.5px">· révision à ${e.v.next} h</span></span><span class="v">${nf(e.v.eh)} h</span><div class="mbar"><i style="width:${p}%;background:${r<=10?'var(--orange)':'var(--bar-2)'}"></i></div></div>`}).join('')+'<div class="chart-note">Orange : moins de 10 heures avant la révision. Il faut planifier un créneau.</div><a class="linkbtn" href="#capteurs" data-dev="eh">Voir tous les bateaux →</a>')},
    {id:'charge',l:'Charge semaine 48',v:'110 %',s:'77 h prévues pour 70 h',st:'crit',body:()=>card('Charge de l’atelier','Heures de travail prévues par semaine',barChart({items:LOAD.map((v,i)=>({l:WK[i],v,c:v>70?'over':'',tip:`prévues · semaine ${WK[i].slice(1)}${v>70?' · au-dessus de la capacité':''}`,show:true})),max:90,ticks:[0,30,60,90],fmt:v=>v+' h',ref:{v:70,l:'Capacité 70 h'},label:'Charge de l’atelier par semaine'})+`<div class="legend"><span><i style="background:var(--bar-2)"></i>Heures prévues</span><span><i style="background:var(--orange)"></i>Au-dessus de la capacité</span></div>`,['Capacité','70 h'])},
    {id:'plan',l:'Planning',v:`${PLAN.length}`,s:'interventions sur 2 semaines',st:'',body:()=>card('Planning des interventions','Créées à partir des capteurs et des inspections',PLAN.map(p=>{const b=boat(p.b);return `<div class="plan"><span class="d">${p.d}</span><div style="min-width:0"><b style="font-weight:600">${b.name}</b> <span class="muted">· ${b.owner}</span><div style="font-size:13.5px">${p.t}</div></div><span class="chip ${p.st==='crit'?'c-red':'c-yellow'}">${p.o}</span></div>`}).join(''))},
    {id:'pieces',l:'Pièces à prévoir',v:'3',s:'à commander cette semaine',st:'',body:()=>card('Pièces à prévoir','D’après le planning',[['Kit vidange + filtres','Mate (Simulation 22), Fastkiti','2 kits'],['Batterie de service 12 V AGM','Test Boat (santé 62 %)','1'],['Déshumidificateur 12 V','Princess 1','1']].map(r=>`<div class="act"><span class="b" style="background:var(--blue)"></span><div style="flex:1;min-width:0"><b style="font-weight:500">${r[0]}</b><div class="muted" style="font-size:12.5px">${r[1]}</div></div><span style="font-variant-numeric:tabular-nums;font-weight:600">${r[2]}</span></div>`).join(''))}
  ]}
};
function vDashboard(){
  const ro=roleOf(S.role),T=TABS[S.role](),cur=S.dtab[S.role],t=T.find(x=>x.id===cur);
  return `<div class="top"><div class="h1">Tableau de bord</div>${roleTabs()}</div>
  <div class="wrap"><p class="role-intro"><b>Vue ${ro.l}.</b> ${ro.d} Tapez sur une case pour l’ouvrir.</p>
    <div class="grid g4" role="tablist" aria-label="Sections du tableau de bord">${T.map(x=>`<button class="card kpi tabk ${x.st?'is-'+x.st:''}" data-dtab="${x.id}" role="tab" aria-selected="${x.id===cur}" aria-expanded="${x.id===cur}">
      <small>${x.l}</small><b>${x.v}</b><span class="s">${x.s}</span><span class="chev">${ic('chev',18,2)}</span></button>`).join('')}</div>
    ${t?`<div class="panel" role="tabpanel">${t.body()}</div>`:`<div class="hint">${ic('grid',18)} Tapez sur une case pour voir le détail.</div>`}
    <div class="proto-note">Prototype · données d’exemple (compte de test)</div></div>`;
}

/* ======================= Capteurs : familles repliables, filtrées par métier ======================= */
const CHARTS_FOR={technicien:['batt','hum','pres','res'],atelier:['batt','res'],commercial:['batt','hum'],directeur:['batt','pres']};
function acc(key,title,meta,body,defOpen){
  const open=S.acc[key]!==undefined?S.acc[key]:defOpen;
  return `<section class="acc ${open?'open':''}"><button class="acc-h" data-acc="${key}" data-def="${defOpen?1:0}" aria-expanded="${open}"><span class="acc-t"><b>${title}</b>${meta?`<span>${meta}</span>`:''}</span><span class="chev">${ic('chev',18,2)}</span></button>${open?`<div class="acc-b">${body()}</div>`:''}</section>`;
}

/* = fin */

/* ======================= Bateaux : liste qui tient la charge + fiche à onglets ======================= */
Object.assign(S,{bq:'',bf:'all',bsort:'grav',blim:20,bpage:0,bfOpen:false,capBoat:null,ficheOpen:true,ftab:null,dev:null,cf:'all',clim:15,alAll:false,oppAll:false});
const BF=[
  {id:'all',l:'Tous',t:()=>true},
  {id:'crit',l:'Alerte',t:b=>boatState(b.id)==='crit'},
  {id:'warn',l:'À surveiller',t:b=>boatState(b.id)==='warn'},
  {id:'off',l:'Sans données',t:b=>!V[b.id]||!online(b.id)},
  {id:'mes',l:'Mise en service / stock',t:b=>b.status!=='Vendu'}
];
function boatList(){
  const q=norm(S.bq.trim()),f=BF.find(x=>x.id===S.bf);
  let L=S.boats.filter(b=>f.t(b)&&(!q||norm(b.name+' '+b.owner+' '+(b.model||'')+' '+(b.hin||'')).includes(q)));
  const st=b=>{const s=boatState(b.id);return V[b.id]&&!online(b.id)&&s==='ok'?'warn':s};
  if(S.bsort==='grav')L.sort((a,b)=>RANK[st(a)]-RANK[st(b)]||a.name.localeCompare(b.name,'fr'));
  else if(S.bsort==='nom')L.sort((a,b)=>a.name.localeCompare(b.name,'fr'));
  else if(S.bsort==='rev')L.sort((a,b)=>(V[a.id]?V[a.id].next-V[a.id].eh:1e6)-(V[b.id]?V[b.id].next-V[b.id].eh:1e6));
  return L;
}

function updateBoats(){const el=document.getElementById('blist');if(el)el.innerHTML=boatRowsHTML();const c=document.getElementById('bfil');if(c)c.innerHTML=bfChips();}
const bfChips=()=>BF.map(f=>`<button class="fchip" data-bf="${f.id}" aria-pressed="${S.bf===f.id}">${f.l} <span>${S.boats.filter(f.t).length}</span></button>`).join('');




/* ======================= Capteurs : un capteur, tous les bateaux ======================= */
function capRows(d){
  return withData().map(b=>{const v=V[b.id];if(v[d.k]===undefined)return null;return {b,v,s:d.st(v)}}).filter(Boolean)
    .sort((a,c)=>RANK[a.s[0]]-RANK[c.s[0]]||a.b.name.localeCompare(c.b.name,'fr'));
}


/* = fin */

/* ======================= Fiche bateau › Capteurs : le bateau en plan + son journal ======================= */
S.zone={};
const ZONES=[
  {id:'elec',l:'Électricité',i:'zap',devs:['battS','quai','sol'],p:[118,130]},
  {id:'moteur',l:'Salle moteur',i:'cog',devs:['eh','battM','carb'],p:[190,92]},
  {id:'reserv',l:'Réservoirs',i:'droplet',devs:['eau','noires'],p:[190,168]},
  {id:'pont',l:'Poste de pilotage',i:'compass',devs:['gsm','pres'],p:[300,130]},
  {id:'cale',l:'Cale',i:'waves',devs:['cale'],p:[395,182]},
  {id:'cabine',l:'Cabine',i:'bed',devs:['hum','porte','mvt','fumee'],p:[430,104]}
];
const HULL='M58,130 C58,74 84,50 160,46 L392,42 C470,42 536,82 568,130 C536,178 470,218 392,218 L160,214 C84,210 58,186 58,130 Z';
const DECK='M76,130 C76,84 98,64 162,61 L388,58 C454,58 508,90 536,130 C508,170 454,202 388,202 L162,199 C98,196 76,176 76,130 Z';
function zoneInfo(id,z){
  const v=V[id],ds=DEV.filter(d=>z.devs.includes(d.k)&&v[d.k]!==undefined).map(d=>({...d,s:d.st(v)}));
  const st=!ds.length?'none':ds.some(d=>d.s[0]==='crit')?'crit':ds.some(d=>d.s[0]==='warn')?'warn':'ok';
  const key=ds.find(d=>d.s[0]===st)||ds[0];
  return {ds,st,key,missing:z.devs.filter(k=>v[k]===undefined)};
}
const STC={crit:'var(--red)',warn:'var(--orange)',ok:'var(--green)',none:'var(--ink-3)'};
const STL={crit:'Alerte',warn:'À surveiller',ok:'OK',none:'Pas de capteur'};
function boatPlan(b){
  const v=V[b.id],info=ZONES.map(z=>({z,...zoneInfo(b.id,z)}));
  const cur=S.zone[b.id]||(info.find(i=>i.st==='crit')||info.find(i=>i.st==='warn')||info[0]).z.id;
  const pins=info.map(i=>{const [x,y]=i.z.p,on=i.z.id===cur,val=i.key?i.key.main(v):'Pas de capteur';
    return `<g class="pin ${on?'on':''} st-${i.st}" data-zone="${i.z.id}" tabindex="0" role="button" aria-pressed="${on}" aria-label="${esc(i.z.l)} : ${esc(val)}, ${STL[i.st]}" data-tip="${esc(val)}|${esc(i.z.l)} · ${STL[i.st]}" transform="translate(${x} ${y})">
      ${i.st==='crit'||i.st==='warn'?`<circle class="halo" r="27" style="fill:${STC[i.st]}"/>`:''}
      <circle class="ring" r="19" style="stroke:${STC[i.st]}"/>
      <svg x="-10" y="-10" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${I[i.z.i]}</svg>
    </g>`}).join('');
  const svg=`<svg class="hull-svg" viewBox="30 20 570 220" role="group" aria-label="Le bateau ${esc(b.name)} vu de dessus">
    <path d="${HULL}" class="hull"/>
    <path d="${DECK}" class="deck"/>
    <line x1="70" y1="130" x2="552" y2="130" class="keel"/>
    <rect x="86" y="84" width="150" height="92" rx="16" class="cockpit"/>
    <path d="M300,72 L452,72 C478,72 492,96 492,130 C492,164 478,188 452,188 L300,188 Z" class="cabin"/>
    <path d="M286,86 C276,104 276,156 286,174" class="glass"/>
    ${pins}
  </svg>`;
  const list=info.map(i=>{const on=i.z.id===cur,val=i.key?i.key.main(v):'—';
    return `<button class="zrow ${on?'on':''}" data-zone="${i.z.id}" aria-pressed="${on}">
      <span class="zi st-${i.st}" style="--zc:${STC[i.st]}">${ic(i.z.i,18)}</span>
      <span class="zt"><b>${esc(i.z.l)}</b><span class="muted">${i.key?esc(i.key.n):'Aucun capteur installé'}</span></span>
      <span class="zv"><b>${esc(val)}</b><span class="zst st-${i.st}"><i style="background:${STC[i.st]}"></i>${STL[i.st]}</span></span>
    </button>`}).join('');
  const zi=info.find(i=>i.z.id===cur);
  return {svg,list,zi};
}
function journal(b){
  const v=V[b.id];
  if(b.id==='b2')return [['mar. 10 · 11 h','Batterie de service sous 11,8 V','crit'],['mar. 10 · 10 h 12','Message du client : « une alerte batterie s’affiche »','info'],['mar. 10 · 6 h','Batterie de service sous 12,2 V','warn'],['lun. 9 · 18 h','Prise de quai débranchée','warn'],['dim. 8 · 16 h 40','Retour au port après 2 h 10 de moteur','ok']];
  const E=devicesOf(b.id).filter(d=>d.s[0]!=='ok').map(d=>[v.since&&v.since[d.k]?v.since[d.k]:'récemment',`${d.n} : ${d.s[1].toLowerCase()}`,d.s[0]]);
  let h=0;for(const c of b.id)h+=c.charCodeAt(0);
  E.push([`dernier envoi`,`Le boîtier a envoyé ses valeurs ${v.lastSeen}`,online(b.id)?'ok':'warn']);
  if(v.porte!==undefined)E.push([`sam. 7 · ${9+h%4} h ${10+h%40}`,'Porte ouverte puis fermée : propriétaire à bord','info']);
  E.push([`dim. 8 · ${14+h%3} h`,`Sortie en mer · ${1+h%3} h ${10+h%45} de moteur`,'ok']);
  E.push(['ven. 6 · 13 h','Batterie de service chargée à 100 %','ok']);
  return E;
}
function tabCapteurs(b){
  const v=V[b.id],ro=roleOf(S.role);S.cb=b.id;
  if(!v)return `<div class="blk offline"><div class="medal">${ic('wifi',28,1.6)}</div><div style="flex:1;min-width:200px"><b>${esc(b.name)} n’envoie pas encore de données</b><div class="muted">${NOBOX[b.id]}</div></div>${b.steps?`<button class="btn btn-out" data-ftab="suivi">Voir la mise en service</button>`:''}</div>`;
  const {svg,list,zi}=boatPlan(b);
  const J=journal(b);
  const CH4={
    batt:()=>card('Batterie de service','Tension, une mesure par heure',battChart(b.id),['Maintenant',`${nf(v.battS,1)} V`]),
    hum:()=>card('Humidité de la cabine','En %, une mesure par heure',humChart(b.id),['Maintenant',`${nf(v.hum)} %`]),
    res:()=>card('Réservoirs','Niveau actuel',barChart({items:[['Carburant','carb'],['Eau douce','eau'],['Eaux noires','noires']].filter(r=>v[r[1]]!=null).map(r=>({l:r[0],v:v[r[1]],show:true,tip:r[0]})),max:100,ticks:[0,25,50,75,100],tf:t=>t+' %',fmt:t=>t+' %',label:'Niveau des réservoirs',h:210})),
    pres:()=>card('Pression atmosphérique','En hPa',presChart(b.id),['Maintenant',`${nf(v.pres)} hPa`])
  };
  return `<div class="bview">
    <div class="blk plan-blk"><div class="row"><h4>Le bateau, zone par zone</h4><span class="muted" style="font-size:12.5px">Tapez sur une pastille ou une ligne</span></div>
      <div class="bplan"><div class="hullwrap">${svg}<div class="hlegend">${['ok','warn','crit','none'].map(s=>`<span><i style="background:${STC[s]}"></i>${STL[s]}</span>`).join('')}</div></div><div class="zlist">${list}</div></div></div>
  </div>
  <div class="bview2"><div class="blk"><div class="row"><h4>${esc(zi.z.l)}</h4>${stChip(zi.st==='none'?'off':zi.st)}</div>
    ${zi.ds.length?`<div class="dev-grid" style="margin-top:12px;grid-template-columns:repeat(auto-fill,minmax(230px,1fr))">${zi.ds.map(d=>devCard(d,v)).join('')}</div>`:''}
    ${zi.missing.length?`<div class="${S.role==='commercial'?'warn-note':'muted'}" style="font-size:13px;margin-top:10px">${S.role==='commercial'?ic('euro',16):''}<span>Pas de capteur ici pour : ${zi.missing.map(k=>DEV.find(d=>d.k===k).n.toLowerCase()).join(', ')}.${S.role==='commercial'?' C’est une vente possible.':''}</span></div>`:''}
  </div>
  <div class="blk"><h4>Journal du bateau</h4><ol class="jrnl">${J.map(e=>`<li class="is-${e[2]}"><span class="jd">${esc(e[0])}</span><span>${esc(e[1])}</span></li>`).join('')}</ol></div></div>
  <div class="accs">${acc('courbes','Courbes et historique','<span>7 jours, mois ou tout l’historique · graphiques ou vue d’ensemble</span>',()=>`<div id="explorer" data-boat="${b.id}">${explorerHTML(b.id)}</div>${CHARTS_FOR[S.role].includes('res')?`<div class="grid g2">${CH4.res()}</div>`:''}`,false)}</div>`;
}

/* ======================= Capteurs : la grille du parc (bateaux × capteurs) ======================= */
const COLS={
  technicien:['battS','quai','gsm','cale','battM','hum','porte','eh','carb','noires'],
  atelier:['eh','battM','battS','carb','noires','cale','hum','quai','gsm','porte'],
  commercial:['cale','porte','mvt','battS','hum','eh','quai','gsm','carb','noires'],
  directeur:['battS','quai','cale','gsm','eh','hum','porte','battM','carb','noires']
};
const SHORT={battS:['Batt. service','V'],battM:['Batt. moteur','V'],quai:['Prise de quai',''],eh:['Révision dans',''],cale:['Cale',''],porte:['Porte',''],mvt:['Mouvement',''],hum:['Humidité',''],carb:['Carburant',''],noires:['Eaux noires',''],gsm:['Réseau',''],eau:['Eau douce',''],pres:['Pression','hPa'],fumee:['Fumée',''],sol:['Solaire','']};
function cellVal(k,v){
  switch(k){case'battS':return nf(v.battS,1);case'battM':return nf(v.battM,1);case'quai':return v.quai?'Branché':'Coupé';case'eh':return (v.next-v.eh)+' h';case'cale':return v.cale?'Eau':'Sec';
  case'porte':return v.porte?'Ouverte':'Fermée';case'mvt':return v.mvt?'Oui':'Non';case'hum':return nf(v.hum)+' %';case'carb':return v.carb+' %';case'noires':return v.noires+' %';case'gsm':return v.gsm+'/5';default:return DEV.find(d=>d.k===k).main(v)}
}
function vCapteursGrid(){
  const ro=roleOf(S.role),cols=COLS[S.role],k=S.dev||null;
  const B=withData();
  const worst=b=>{const s=cols.map(c=>V[b.id][c]===undefined?'ok':DEV.find(d=>d.k===c).st(V[b.id])[0]);return s.includes('crit')?'crit':s.includes('warn')?'warn':'ok'};
  let rows=B.map(b=>({b,w:worst(b)})).filter(r=>S.cf==='all'||r.w===S.cf).sort((a,c)=>RANK[a.w]-RANK[c.w]||a.b.name.localeCompare(c.b.name,'fr'));
  const tot=rows.length,shown=rows.slice(0,S.clim+5);
  const colBad=c=>B.filter(b=>V[b.id][c]!==undefined&&DEV.find(d=>d.k===c).st(V[b.id])[0]!=='ok').length;
  const colMiss=c=>B.filter(b=>V[b.id][c]===undefined).length;
  const cnt=s=>B.filter(b=>worst(b)===s).length;
  const isCom=S.role==='commercial';
  const mx=`<div class="mxw"><table class="mx"><thead><tr><th class="bc">Bateau</th>${cols.map(c=>{const d=DEV.find(x=>x.k===c),bad=colBad(c),miss=colMiss(c);return `<th><button class="mxh ${c===k?'on':''}" data-dev="${c}" aria-pressed="${c===k}" data-tip="${bad} hors seuil · ${miss} sans capteur|${esc(d.n)} · tapez pour le détail">${esc(SHORT[c][0])}${SHORT[c][1]?` <span>${SHORT[c][1]}</span>`:''}${bad?`<i class="${bad&&B.some(b=>V[b.id][c]!==undefined&&d.st(V[b.id])[0]==='crit')?'is-crit':''}">${bad}</i>`:''}</button></th>`}).join('')}</tr></thead>
    <tbody>${shown.map(({b})=>{const v=V[b.id];return `<tr><th class="bc"><a href="#capteurs" data-capboat="${b.id}">${esc(b.name)}</a><span>${esc(b.owner)}</span></th>${cols.map(c=>{
      if(v[c]===undefined&&isCom&&PROD[c])return `<td class="${c===k?'sel':''}">${S.sent[sentKey(b.id,c)]?`<span class="cell is-ok" data-tip="Proposition envoyée|${esc(b.name)} · ${esc(cap1(PROD[c].n))}">Proposé ✓</span>`:`<button class="cell is-none sell" data-propose="${b.id}|${c}" data-tip="${esc(PROD[c].pr)} · tapez pour préparer le message|${esc(b.name)} · ${esc(cap1(PROD[c].n))}">+ proposer</button>`}</td>`;
      if(v[c]===undefined)return `<td class="${c===k?'sel':''}"><span class="cell is-none ${isCom?'sell':''}" data-tip="${isCom?'À proposer':'Pas de capteur'}|${esc(b.name)} · ${esc(DEV.find(d=>d.k===c).n)}">${isCom?'+ proposer':'—'}</span></td>`;
      const d=DEV.find(x=>x.k===c),s=d.st(v);return `<td class="${c===k?'sel':''}"><span class="cell is-${s[0]}" data-tip="${esc(d.main(v))} · ${esc(s[1])}|${esc(b.name)} · ${esc(d.n)}">${esc(cellVal(c,v))}</span></td>`}).join('')}</tr>`}).join('')}</tbody></table></div>
    ${tot>shown.length?`<button class="btn btn-ghost more" data-cmore>Afficher 15 bateaux de plus · ${tot-shown.length} restants</button>`:''}`;
  let zoom='';
  if(k){
    const d=DEV.find(x=>x.k===k),R=capRows(d),E=B.length,c=s=>R.filter(r=>r.s[0]===s).length;
    const dist=(DIST[d.k]||[]).map(([l,f,bad])=>({l,v:R.filter(r=>f(r.v)).length,c:bad?'over':'',show:true,tip:`bateau(x) · ${l}`}));
    const top=Math.ceil(Math.max(4,...dist.map(x=>x.v))/4)*4;
    zoom=`<section class="card zoom"><div class="card-h"><div><h3>${esc(d.n)} sur tout le parc</h3><div class="sub">${esc(d.what)}</div></div><button class="btn btn-ghost btn-sm" data-dev="" style="margin-left:auto">${ic('x',14)} Fermer</button></div>
      <div class="card-b zoom-b">
        <div class="zstats">${[['Équipés',`${R.length} / ${E}`,''],['En alerte',c('crit'),c('crit')?'crit':''],['À surveiller',c('warn'),c('warn')?'warn':''],['Sans capteur',E-R.length,isCom&&E-R.length?'sell':'']].map(x=>`<div class="zs ${x[2]?'is-'+x[2]:''}"><small>${x[0]}</small><b>${x[1]}</b></div>`).join('')}
          ${d.why[S.role]?`<div class="why2"><b>Pour le ${ro.l.toLowerCase()} :</b> ${esc(d.why[S.role])}</div>`:''}
          <div class="codes">${d.raw.map(r=>`<span class="code">${esc(r)}</span>`).join('')}</div></div>
        <div style="min-width:0">${barChart({items:dist,max:top,ticks:[0,top/4,top/2,top*3/4,top],fmt:v=>`${v}`,label:'Répartition des bateaux',h:200})}<div class="legend"><span><i style="background:var(--bar-2)"></i>Normal</span><span><i style="background:var(--orange)"></i>Hors seuil</span></div></div>
      </div></section>`;
  }
  return `<div class="top"><div class="h1">Capteurs</div>${infoBtn()}${roleTabs()}</div>
  <div class="wrap">
    <p class="role-intro"><b>La grille du parc.</b> Une ligne par bateau, une colonne par capteur. Seuls les problèmes ressortent en couleur. Tapez sur un nom de colonne pour comparer ce capteur sur tout le parc, ou sur un bateau pour ouvrir sa fiche.</p>
    ${zoom}
    <section class="card"><div class="card-b" style="display:flex;flex-direction:column;gap:12px">
      <div style="display:flex;gap:12px;align-items:center;flex-wrap:wrap;justify-content:space-between">
        <div class="fchips">${[['all','Tous',B.length],['crit','Alerte',cnt('crit')],['warn','À surveiller',cnt('warn')],['ok','OK',cnt('ok')]].map(([id,l,n])=>`<button class="fchip" data-cf="${id}" aria-pressed="${S.cf===id}">${l} <span>${n}</span></button>`).join('')}</div>
        <div class="mxleg"><span><span class="cell is-crit">11,4</span> Alerte</span><span><span class="cell is-warn">79 %</span> À surveiller</span><span><span class="cell is-ok">12,6</span> OK</span><span><span class="cell is-none ${isCom?'sell':''}">${isCom?'+ proposer':'—'}</span> Pas de capteur</span></div>
      </div>
      ${mx}
      <div class="muted" style="font-size:12.5px">${S.boats.length-B.length} bateaux n’envoient pas de données (stock, mise en service) et ne sont pas dans la grille. Colonnes choisies pour le ${ro.l.toLowerCase()}.</div>
    </div></section>
    <div class="proto-note">Prototype · ${S.boats.length} bateaux d’exemple. Le guide des 169 capteurs est dans le bouton ⓘ, en haut de la page.</div>
  </div>`;
}

/* ======================= Bateaux : même mise en page que Seanapps Pro, optimisée pour une grande flotte ======================= */
S.fx={hist:false,docs:false};
const PER=10;
function boatRowsHTML(){
  const L=boatList(),pages=Math.max(1,Math.ceil(L.length/PER));
  if(S.bpage>=pages)S.bpage=pages-1;
  const shown=L.slice(S.bpage*PER,S.bpage*PER+PER);
  if(!L.length)return `<div class="muted" style="padding:16px 6px">Aucun bateau ne correspond. Effacez la recherche ou choisissez « Tous ».</div>`;
  const rows=shown.map(x=>{const n=boatIssues(x.id),st=boatState(x.id);
    const steps=x.steps,k=steps?steps.filter(Boolean).length:0;
    const next=steps&&x.status==='Mise en service'?['warn',`Mise en service ${k}/5`]:x.insp?['crit','Inspection en retard']:n?[st==='crit'?'crit':'warn',`${n} alerte${n>1?'s':''} capteur${n>1?'s':''}`]:!V[x.id]&&x.status==='Vendu'?['off','Pas de données']:x.status==='En stock'?['off','En stock']:['ok','Rien à faire'];
    return `<button class="boat brow2 ${x.id===S.sel?'on':''}" data-boat="${x.id}">
      <span class="av">${esc(x.brand)}</span>
      <span class="nm"><b>${esc(x.name)}</b><span class="muted">${esc(x.owner)}${x.model?` · ${esc(x.model)}`:''}</span></span>
      <span class="nx st-${next[0]}"><i></i>${next[1]}</span>
      <span class="chip ${x.status==='Vendu'?'c-green':'c-yellow'}">${x.status}</span>
      <span class="go">${ic('chev',18)}</span>
    </button>`}).join('');
  const win=[];for(let i=Math.max(0,S.bpage-2);i<Math.min(pages,S.bpage+3);i++)win.push(i);
  const pager=`<nav class="pager" aria-label="Pages"><button data-bpage="${S.bpage-1}" ${S.bpage===0?'disabled':''} aria-label="Page précédente">${ic('back',18)}</button>${win.map(i=>`<button data-bpage="${i}" class="${i===S.bpage?'on':''}" aria-current="${i===S.bpage?'page':'false'}">${i+1}</button>`).join('')}<button data-bpage="${S.bpage+1}" ${S.bpage>=pages-1?'disabled':''} aria-label="Page suivante">${ic('chev',18)}</button></nav>
    <div class="muted lcnt">${S.bpage*PER+1}–${Math.min(L.length,S.bpage*PER+PER)} sur ${L.length} bateaux</div>`;
  return `<div class="boats-in">${rows}</div>${pager}`;
}
S.listOpen=true;S.fsec={};S.loc={b3:true};
const INSP={b3:[{t:'Contrôle à 1 an',due:'27/08/2026',st:'late'}],b7:[{t:'Contrôle après 1ère saison',due:'01/12/2026',st:'todo'}],b6:[{t:'Contrôle après 1ère saison',due:'06/12/2026',st:'todo'}]};
function vBateaux(){
  const b=sel(),nf_=BF.find(f=>f.id===S.bf);
  if(!S.listOpen&&!b)S.listOpen=true;
  return `<div class="split one ${S.listOpen?'listonly':'nolist'}">
    ${S.listOpen?`<div class="listcol"><div class="lh">
        <div class="blhead"><span class="blt">Mes bateaux <span class="muted">${S.boats.length}</span></span>${S.bq?`<span class="chip c-grey">« ${esc(S.bq)} » <button class="linkbtn" data-bclear aria-label="Effacer la recherche">${ic('x',12,2)}</button></span>`:''}<button class="btn btn-out btn-sm ${S.bfOpen||S.bf!=='all'?'on':''}" data-bfopen aria-expanded="${S.bfOpen}">${ic('filter',16)} Filtres</button><button class="sq sq-blue" aria-label="Ajouter un bateau">${ic('boat',20)}</button></div>
        
        ${S.bfOpen?`<div class="fpanel"><div class="fchips" id="bfil" role="group" aria-label="Filtrer">${bfChips()}</div>
          <label class="muted" style="display:flex;gap:8px;align-items:center;font-size:13px">Trier par <select id="bsort" class="bsel"><option value="grav" ${S.bsort==='grav'?'selected':''}>Les plus urgents</option><option value="nom" ${S.bsort==='nom'?'selected':''}>Nom A → Z</option><option value="rev" ${S.bsort==='rev'?'selected':''}>Révision la plus proche</option></select></label></div>`
          :(S.bf!=='all'?`<div class="muted" style="font-size:12.5px">Filtre : <b>${nf_.l}</b> · <button class="linkbtn" data-bf="all">Effacer</button></div>`:'')}
      </div><div class="boats" id="blist">${boatRowsHTML()}</div></div>`:''}
    ${S.listOpen?'':`<div class="fiche fiche2">${fiche(b)}</div>`}</div>`;
}
function fsec(k,title,summary,body,warn){const open=!!S.fsec[k];
  return `<section class="fsec ${open?'open':''}"><button class="fsec-h" data-fsec="${k}" aria-expanded="${open}"><b>${title}</b><span class="fsum ${warn?'warn':''}">${summary}</span><span class="xch ${open?'open':''}">${ic('chev',18)}</span></button>${open?`<div class="fsec-b">${body}</div>`:''}</section>`;}
function fiche(b){
  const steps=b.steps,n=steps?steps.filter(Boolean).length:0,cur=steps?steps.findIndex(s=>!s):-1;
  const al=boatIssues(b.id),has=!!V[b.id],cta=steps&&b.status==='Mise en service';
  const todo=[];
  if(steps&&cur>=0){const s=STEPS[cur];todo.push(`<div class="todo-i"><span class="ti">${ic('clip',18)}</span><div class="tb"><b>Mise en service · étape ${cur+1} sur 5 : ${s.t}</b><div class="muted">${s.d}</div>
      <div class="prog" style="margin-top:8px"><i style="width:${n*20}%"></i></div>
      ${S.fsec.steps?`<div class="tsteps">${STEPS.map((x,i)=>`<div class="step ${steps[i]?'ok':i===cur?'cur':''}"><span class="n">${steps[i]?ic('check',14,3):i+1}</span><div class="sb"><b>${x.t}</b></div></div>`).join('')}</div>`:''}
      <button class="linkbtn" data-fsec="steps">${S.fsec.steps?'Masquer les étapes':'Voir les 5 étapes'}</button></div>
      ${s.btn&&cur!==4?`<button class="btn btn-out btn-sm" data-step="${cur}">${s.btn}</button>`:''}</div>`);}
  const insps=INSP[b.id]||[],late=insps.filter(x=>x.st==='late'&&!(b.id==='b3'&&S.tasks.find(t=>t.id==='t1').done));
  late.forEach(x=>todo.push(`<div class="todo-i crit"><span class="ti">${ic('clip',18)}</span><div class="tb"><b>Inspection en retard : ${x.t}</b><div class="muted">Prévue avant le ${x.due}</div></div><button class="btn btn-pri btn-sm" data-insp="t1">Commencer l’inspection</button></div>`));
  if(al)todo.push(`<div class="todo-i ${boatState(b.id)==='crit'?'crit':'warn'}"><span class="ti">${ic('pulse',18)}</span><div class="tb"><b>${al} alerte${al>1?'s':''} capteur${al>1?'s':''}</b><div class="muted">${devicesOf(b.id).filter(d=>d.s[0]!=='ok').map(d=>`${d.n} : ${d.main(V[b.id])}`).join(' · ')}</div></div><a class="btn btn-out btn-sm" href="#capteurs" data-capboat="${b.id}">Voir dans Capteurs</a></div>`);
  const hist=b.status==='Vendu'?[['12/09/2026','Contrôle après 1ère saison'],['03/05/2026','Livraison au client'],['28/04/2026','Mise en service']]:[['02/11/2026','Réception du bateau']];
  const docs=['Bon de livraison.pdf','Facture.pdf','Manuel du propriétaire.pdf'];
  const loc=!!S.loc[b.id];
  const aboFleet=has?(loc?['Actif','Le bateau est loué via Fleet.','c-green']:['Disponible','Activez la gestion locative pour en profiter.','c-grey']):['Indisponible','Ce bateau n’est pas équipé d’un boîtier Seanapps.','c-red'];
  const aboIns=has?['Indisponible','Pas de consentement du propriétaire.','c-red']:['Indisponible','Ce bateau n’est pas équipé d’un boîtier Seanapps.','c-red'];
  const acts=has?journal(b).slice(0,4).map(e=>[e[0],e[1]]):[];
  return `
    <div class="fh2">
      <div class="fh2-back"><button class="btn btn-ghost btn-sm" data-blist>${ic('back',16)} Mes bateaux</button></div><div class="fh2-top"><span class="fh2-ic">${ic('boat',24)}</span><h2>${esc(b.name)}</h2><span class="chip ${b.status==='Vendu'?'c-green':'c-yellow'}">${b.status}</span><a href="#bateaux" class="linkbtn" style="margin-left:auto">Transférer</a></div>
      <div class="meta"><span>HIN : ${b.hin||'—'}</span><span>N° commande : ${b.order||'—'}</span>${b.model?`<span>Modèle : ${esc(b.model)}</span>`:''}</div>
      <div class="fh2-own"><span class="own">${ic('user',18)}<b>${esc(b.owner)}</b></span><span class="ib">${ic('mail',18)}</span><span class="ib">${ic('phone',18)}</span>
        ${cta?`<button class="btn btn-pri" id="mes" ${cur!==4?'disabled title="Terminez les étapes précédentes"':''}>Préparer la mise en service</button>`:`<button class="btn btn-out">Voir la fiche client</button>`}</div>
    </div>
    <section class="todo"><div class="todo-h"><b>À faire</b>${todo.length?`<span class="scount">${todo.length}</span>`:''}</div>
      ${todo.length?todo.join(''):`<div class="todo-ok">${ic('check',18,2.4)} Rien à faire sur ce bateau pour le moment.</div>`}</section>
    <div class="fsecs">
      ${fsec('insp',`Inspections${insps.length?` <span class="scount">${insps.length}</span>`:''}`,insps.length?insps.map(x=>`${x.t} · ${x.st==='late'?'en retard':'à faire'} avant le ${x.due}`).join(' · '):'Aucune inspection à faire',
        (insps.length?insps.map(x=>`<div class="insp"><div style="flex:1"><div class="t">${x.t} <span class="chip ${x.st==='late'?'c-orange':'c-yellow'}">${x.st==='late'?'En retard':'À faire'}</span></div><div class="d">À faire avant le ${x.due}</div></div>${ic('clip',22,1.6)}</div>`).join(''):'<div class="muted">Aucune inspection prévue.</div>')+`<button class="btn btn-out btn-sm" style="margin-top:10px">Voir tout ${ic('chev',14)}</button>`,insps.some(x=>x.st==='late'))}
      ${fsec('equip','Équipement',has||b.id==='b1'?'Unité principale 3426100474':'Aucun boîtier : à scanner',(has||b.id==='b1'?`<div class="field"><span>Unité principale</span><span style="display:flex;gap:8px;align-items:center">3426100474 ${ic('edit',16)}</span></div><button class="btn btn-out btn-sm" data-step="3" style="margin-top:10px">Diagnostics</button>`:`<button class="big-btn" style="padding:12px">Scanner le boîtier principal</button>`)+`<button class="btn btn-out" style="width:100%;justify-content:center;margin-top:10px">Découvrez nos packs retrofit</button>`,!(has||b.id==='b1'))}
      ${fsec('loc','Gestion locative',loc?'Activée · disponible depuis Fleet':'Désactivée',`<div class="act"><span style="flex:1">${loc?'Ce bateau est disponible depuis Fleet.':'Activez la gestion locative pour gérer ce bateau depuis Fleet.'}</span><span class="toggle" role="switch" tabindex="0" data-loctog="${b.id}" aria-checked="${loc}" aria-label="Gestion locative"></span></div>`)}
      ${fsec('abo','Abonnements',`Fleet : ${aboFleet[0]} · Insight : ${aboIns[0]}`,`<div class="act"><span style="flex:1"><b style="font-weight:500">Abonnement Fleet</b><div class="muted" style="font-size:12.5px">${aboFleet[1]}</div></span><span class="chip ${aboFleet[2]}">${aboFleet[2]==='c-red'?ic('x',12,2):''} ${aboFleet[0]}</span></div>
        <div class="act"><span style="flex:1"><b style="font-weight:500">Abonnement Insight</b><div class="muted" style="font-size:12.5px">${aboIns[1]}</div></span><span class="chip ${aboIns[2]}">${aboIns[2]==='c-red'?ic('x',12,2):''} ${aboIns[0]}</span></div>
        <div class="act"><span style="flex:1"><b style="font-weight:500">Abonnement propriétaire</b></span><span class="chip c-grey">Aucun</span></div>`,aboFleet[2]==='c-red'||aboIns[2]==='c-red')}
      ${fsec('notif','Notifications',al?`${al} alerte${al>1?'s':''} capteur${al>1?'s':''}`:'Aucune',(al?devicesOf(b.id).filter(d=>d.s[0]!=='ok').map(d=>`<div class="act"><span class="b" style="background:${d.s[0]==='crit'?'var(--red)':'var(--orange)'}"></span><span style="flex:1">${d.n} : ${d.main(V[b.id])}</span><span class="muted">${esc(d.s[1])}</span></div>`).join(''):'<div class="field" style="justify-content:center;margin-top:0">(Aucune)</div>')+(has?`<a class="btn btn-out" href="#capteurs" data-capboat="${b.id}" style="width:100%;justify-content:center;margin-top:10px">Voir plus</a>`:''),al>0)}
      ${fsec('acts','Activités',has?`${acts.length} dernières activités`:'Aucune activité',(acts.length?acts.map(x=>`<div class="act"><span class="b" style="background:var(--blue)"></span><span style="flex:1">${esc(x[1])}</span><span class="muted">${esc(x[0])}</span></div>`).join(''):'<div class="muted">Aucune activité enregistrée.</div>')+`<button class="btn btn-out" style="width:100%;justify-content:center;margin-top:10px">Voir toutes les activités</button>`)}
      ${fsec('hist','Historique',`${hist.length} événement${hist.length>1?'s':''} · dernier le ${hist[0][0]}`,hist.map(h=>`<div class="act"><span class="b" style="background:var(--blue)"></span><span style="flex:1">${h[1]}</span><span class="muted" style="font-variant-numeric:tabular-nums">${h[0]}</span></div>`).join(''))}
      ${fsec('docs','Documents',`${docs.length} documents`,docs.map(d=>`<div class="act"><span class="b" style="background:var(--ink-3)"></span><span style="flex:1">${d}</span></div>`).join(''))}
    </div>`;
}

/* ======================= Capteurs : la grille du parc, ou un bateau en plan ======================= */
function vCapteurs(){
  if(S.capBoat&&V[S.capBoat])return capBoatPage(boat(S.capBoat));
  S.capBoat=null;return vCapteursGrid();
}
function capBoatPage(b){
  const v=V[b.id];
  return `<div class="top"><div class="h1">Capteurs</div>${infoBtn()}${roleTabs()}</div>
  <div class="wrap">
    <div><button class="btn btn-ghost btn-sm" data-capback>${ic('back',16)} Retour à la grille du parc</button></div>
    <section class="card"><div class="card-b" style="display:flex;gap:14px;align-items:center;flex-wrap:wrap">
      <div style="flex:1;min-width:220px"><div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap"><h2 style="margin:0;font-size:20px">${esc(b.name)}</h2>${stChip(boatState(b.id))}</div>
        <div class="muted">${esc(b.owner)}${b.model?` · ${esc(b.model)}`:''} · dernier envoi ${v.lastSeen}</div></div>
      <a class="btn btn-out btn-sm" href="#bateaux" data-go-boat="${b.id}">${ic('boat',16)} Ouvrir la fiche bateau</a>
    </div></section>
    ${tabCapteurs(b)}
  </div>`;
}

/* ======================= Recherche universelle ======================= */
const norm=s=>Array.from(String(s)).map(c=>c.normalize('NFD')[0]||c).join('').toLowerCase();
const SUGG={
  directeur:['Alertes','Batterie','Prise de quai','Princess 2','Statut concession','Ventes'],
  commercial:['Batterie usée','Porte','Eau dans la cale','Antivol','Humidité','Catalogue'],
  technicien:['Bilge','GSM','Prise de quai','Bluetooth','Kelvin','À vérifier'],
  atelier:['Heures moteur','Vidange','Huile','Carburant','Eaux noires','Groupe électrogène']
};
const GS={q:'',open:false,sel:0,items:[]};
function recent(){try{return JSON.parse(localStorage.getItem('sp-recent')||'[]')}catch(e){return[]}}
function pushRecent(q){q=q.trim();if(!q)return;try{const r=[q,...recent().filter(x=>norm(x)!==norm(q))].slice(0,5);localStorage.setItem('sp-recent',JSON.stringify(r))}catch(e){}}
function pages(){
  const P=[
    {l:'Tableau de bord',k:'accueil dashboard',go:()=>{location.hash='#dashboard'}},
    {l:'Capteurs',k:'sondes boitier valeurs',go:()=>{location.hash='#capteurs'}},
    {l:'Bateaux',k:'fiche bateau mise en service',go:()=>{location.hash='#bateaux'}},
    {l:'Messages',k:'clients repondre conversation',go:()=>{location.hash='#messages'}},
    {l:'Ma concession',k:'statut concession criteres trimestre',go:()=>{location.hash='#concession'}},
    {l:'Bilan du lundi',k:'email semaine resume',go:()=>{location.hash='#bilan'}},
    {l:'Déclaration de stock',k:'stock declarer',go:()=>{location.hash='#stock'}}
  ];
  ROLES.filter(r=>S.user==='directeur'||r.id===S.user).forEach(r=>TABS[r.id]().forEach(t=>P.push({l:`${r.l} › ${t.l}`,k:`${r.l} ${t.s}`,go:()=>{S.role=r.id;try{localStorage.setItem('sp-role',r.id)}catch(e){}S.dtab[r.id]=t.id;location.hash==='#dashboard'?render():location.hash='#dashboard'}})));
  return P;
}
function score(q,...fields){let best=0;fields.forEach((f,i)=>{const n=norm(f);const w=i===0?3:i===1?2:1;if(n.startsWith(q))best=Math.max(best,10*w);else if(n.includes(' '+q))best=Math.max(best,6*w);else if(n.includes(q))best=Math.max(best,3*w)});return best}
function hl(text,q){
  const t=String(text),n=norm(t),i=q?n.indexOf(q):-1;
  return i<0?esc(t):esc(t.slice(0,i))+'<mark>'+esc(t.slice(i,i+q.length))+'</mark>'+esc(t.slice(i+q.length));
}
function openSensor(raw){S.q=raw;S.fam='';openInfo()}
function goList(){const done=()=>{const el=document.querySelector('[data-acc="liste"]');if(el)el.scrollIntoView({block:'start',behavior:'smooth'})};if(route()==='capteurs'){render();done()}else{location.hash='#capteurs';setTimeout(done,30)}}
function searchAll(qRaw){
  const q=norm(qRaw.trim());const G=[];if(!q)return G;
  const pg=pages().map(p=>({p,s:score(q,p.l,p.k)})).filter(x=>x.s).sort((a,b)=>b.s-a.s).slice(0,4);
  if(pg.length)G.push({t:'Écrans',items:pg.map(({p})=>({i:'grid',h:hl(p.l,q),sub:'Aller à l’écran',go:p.go}))});
  const bt=S.boats.map(b=>({b,s:score(q,b.name,b.owner)})).filter(x=>x.s).slice(0,4);
  if(bt.length)G.push({t:'Bateaux et clients',items:bt.map(({b})=>({i:'boat',h:hl(b.name,q),sub:`${hl(b.owner,q)} · ${b.status}`,st:boatState(b.id),go:()=>{S.sel=b.id;S.ftab=null;location.hash==='#bateaux'?render():location.hash='#bateaux'}}))});
  const al=alerts().map(a=>({a,s:score(q,a.d.n,a.b.name+' '+a.txt,a.d.raw.join(' '))})).filter(x=>x.s).slice(0,4);
  if(al.length)G.push({t:'Alertes en cours',items:al.map(({a})=>({i:'alert',h:`${esc(a.b.name)} · ${hl(a.d.n,q)} ${esc(a.val)}`,sub:esc(a.txt),st:a.sev,go:()=>{S.capBoat=a.b.id;location.hash==='#capteurs'?render():location.hash='#capteurs'}}))});
  const dv=DEV.map(d=>({d,s:score(q,d.n,d.raw.join(' '),d.what)})).filter(x=>x.s).sort((a,b)=>b.s-a.s).slice(0,3);
  if(dv.length)G.push({t:'Comparer sur tout le parc',items:dv.map(({d})=>{const R=capRows(d),bad=R.filter(r=>r.s[0]!=='ok').length;return {i:'pulse',h:hl(d.n,q),sub:`${R.length} bateaux équipés${bad?` · ${bad} hors seuil`:''}`,go:()=>{S.dev=d.k;S.cf='all';S.clim=15;location.hash==='#capteurs'?render():location.hash='#capteurs'}}})});
  const sn=SENSORS.map(s=>({s,sc:score(q,s[3],s[0],s[4]+' '+FAM[s[2]].t+' '+mt(s[1])+' '+s[1])})).filter(x=>x.sc).sort((a,b)=>b.sc-a.sc);
  if(sn.length)G.push({t:`Capteurs de la liste · ${sn.length} sur ${SENSORS.length}`,items:sn.slice(0,6).map(({s})=>({i:'pulse',h:`${hl(s[3],q)} <span class="code">${hl(s[0],q)}</span>`,sub:`${esc(FAM[s[2]].t)} · ${esc(mt(s[1]))}`,go:()=>openSensor(s[0])})).concat(sn.length>6?[{i:'search',h:`<b>Voir les ${sn.length} capteurs pour « ${esc(qRaw.trim())} »</b>`,sub:'Ouvre le guide des capteurs, filtré',go:()=>{S.q=qRaw.trim();S.fam='';openInfo()}}]:[])});
  const sh=shop().map(x=>({x,s:score(q,x[0],x[3])})).filter(y=>y.s).slice(0,3);
  if(sh.length)G.push({t:'Catalogue Seanapps',items:sh.map(({x})=>({i:'euro',h:hl(x[0],q),sub:`${x[1]} · à proposer à ${withData().length-x[2]} bateaux`,go:()=>{S.role='commercial';S.dtab.commercial='cat';location.hash==='#dashboard'?render():location.hash='#dashboard'}}))});
  return G;
}
function chips(list,cls){return list.map(s=>`<button class="gchip ${cls||''}" data-gs="${esc(s)}">${cls==='rec'?ic('hist',14):ic('search',14)}${esc(s)}</button>`).join('')}
function renderResults(){
  const box=document.getElementById('gres');if(!box)return;
  if(!GS.open){box.hidden=true;return}
  const ro=roleOf(S.role),q=GS.q.trim();
  let html='';GS.items=[];
  if(route()==='bateaux'&&!GS.global){
    if(!q){box.hidden=true;return}
    const n=boatList().length;
    GS.items=[{go:()=>{GS.global=true;GS.open=true;renderResults();document.getElementById('gq').focus()}}];
    box.innerHTML=`<div class="gsec"><div class="gt">${n} bateau${n>1?'x':''} dans la liste pour « ${esc(q)} »</div><button class="gitem on" data-gi="0"><span class="gi">${ic('search',18)}</span><span class="gx"><span class="gh">Chercher « ${esc(q)} » partout</span><span class="gs">Capteurs, alertes, clients, écrans…</span></span></button></div>`;
    box.hidden=false;return;
  }
  if(!q){
    const rc=recent();
    html=`<div class="gsec"><div class="gt">Recherches conseillées pour le ${ro.l.toLowerCase()}</div><div class="gchips">${chips(SUGG[S.role])}</div></div>
      ${rc.length?`<div class="gsec"><div class="gt">Vos dernières recherches</div><div class="gchips">${chips(rc,'rec')}</div></div>`:''}
      <div class="gsec gtip">${ic('book',16)}<span>Cherchez en français ou avec le nom du fichier : « cale » ou « Bilge », « batterie » ou « SOC ». ${SENSORS.length} capteurs, ${S.boats.length} bateaux et tous les écrans.</span></div>`;
  }else{
    const G=searchAll(q);
    if(!G.length){
      html=`<div class="gsec"><div class="gempty">Aucun résultat pour « ${esc(q)} ».</div><div class="gt">Essayez plutôt</div><div class="gchips">${chips(SUGG[S.role])}</div></div>`;
    }else{
      let n=0;
      html=G.map(g=>`<div class="gsec"><div class="gt">${esc(g.t)}</div>${g.items.map(it=>{GS.items.push(it);const k=n++;return `<button class="gitem ${k===GS.sel?'on':''}" data-gi="${k}" role="option" aria-selected="${k===GS.sel}"><span class="gi">${ic(it.i,18)}</span><span class="gx"><span class="gh">${it.h}</span><span class="gs">${it.sub}</span></span>${it.st?`<span class="sdot is-${it.st}"></span>`:''}</button>`}).join('')}</div>`).join('');
    }
  }
  box.innerHTML=html;box.hidden=false;
  const on=box.querySelector('.gitem.on');if(on)on.scrollIntoView({block:'nearest'});
}
function choose(k){const it=GS.items[k];if(!it)return;if(route()==='bateaux'&&!GS.global){it.go();return;}pushRecent(GS.q);closeSearch();it.go();}
function closeSearch(){GS.open=false;renderResults();}
function gbar(){
  return `<div class="gbar"><div class="gwrap"><label class="gin" for="gq">${ic('search',20)}<input id="gq" type="search" placeholder="Rechercher un capteur, un bateau, un client, un écran…" autocomplete="off" aria-label="Rechercher partout" role="combobox" aria-expanded="false" aria-controls="gres"><kbd>/</kbd></label>
    <div class="gres" id="gres" role="listbox" hidden></div></div></div>`;
}
document.addEventListener('focusin',e=>{if(e.target.id==='gq'){GS.open=true;GS.sel=0;renderResults();e.target.setAttribute('aria-expanded','true')}});
document.addEventListener('input',e=>{if(e.target.id==='gq'){GS.q=e.target.value;GS.sel=0;GS.open=true;if(route()==='bateaux'&&!GS.global){S.bq=GS.q;S.bpage=0;updateBoats();}renderResults()}});
function syncSearchBar(){const q=document.getElementById('gq');if(!q)return;const onB=route()==='bateaux';GS.global=false;q.placeholder=onB?'Rechercher un bateau, un client, un HIN…':'Rechercher un capteur, un bateau, un client, un écran…';if(document.activeElement!==q)q.value=onB?S.bq:'';GS.q=q.value;}
document.addEventListener('keydown',e=>{
  const gq=document.getElementById('gq');
  if(e.key==='/'&&!/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName)){e.preventDefault();gq.focus();return}
  if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();gq.focus();return}
  if(e.target!==gq)return;
  if(e.key==='ArrowDown'){e.preventDefault();GS.sel=Math.min(GS.items.length-1,GS.sel+1);renderResults()}
  else if(e.key==='ArrowUp'){e.preventDefault();GS.sel=Math.max(0,GS.sel-1);renderResults()}
  else if(e.key==='Enter'){e.preventDefault();if(GS.items.length)choose(GS.sel);gq.blur()}
  else if(e.key==='Escape'){closeSearch();gq.blur()}
});
document.addEventListener('pointerdown',e=>{
  const gi=e.target.closest('[data-gi]');if(gi){e.preventDefault();choose(+gi.dataset.gi);document.getElementById('gq').blur();return}
  const gc=e.target.closest('[data-gs]');if(gc){e.preventDefault();const gq=document.getElementById('gq');gq.value=gc.dataset.gs;GS.q=gq.value;GS.sel=0;renderResults();gq.focus();return}
  if(!e.target.closest('.gwrap'))closeSearch();
});

/* ======================= Proposer un produit : message prêt à envoyer, avec le lien du produit ======================= */
/* Adresse de la boutique : à remplacer par les vraies pages produit Seanapps. */
const SHOP_BASE='https://www.seanapps.app/boutique/';
const PROD={
  cale:{n:'capteur de présence d’eau',pr:'178,80 €',slug:'capteur-presence-eau',why:'n’a pas encore de capteur de présence d’eau dans la cale',gain:'Vous seriez prévenu sur votre téléphone dès que de l’eau entre dans la cale, même quand vous n’êtes pas à bord.'},
  porte:{n:'capteur d’ouverture de porte magnétique',pr:'94,80 €',slug:'capteur-ouverture-porte',why:'n’a pas encore de capteur d’ouverture sur la porte de la cabine',gain:'Vous sauriez tout de suite si quelqu’un ouvre la porte de la cabine en votre absence.'},
  trappe:{n:'capteur d’ouverture de trappe mécanique',pr:'202,80 €',slug:'capteur-ouverture-trappe',why:'n’a pas de capteur sur ses trappes et coffres',gain:'Vous seriez alerté dès qu’une trappe ou un coffre est ouvert.'},
  mvt:{n:'détecteur de mouvement',pr:'178,80 €',slug:'detecteur-mouvement',why:'n’a pas encore de détecteur de mouvement dans la cabine',gain:'Vous seriez alerté de toute présence à bord quand le bateau est vide.'},
  antiM:{n:'capteur antivol pour moteur hors-bord',pr:'94,80 €',slug:'capteur-antivol-moteur',why:'n’a pas d’antivol sur son moteur hors-bord',gain:'Vous seriez prévenu si quelqu’un déplace ou démonte votre moteur.'},
  antiA:{n:'capteur antivol pour annexe',pr:'94,80 €',slug:'capteur-antivol-annexe',why:'n’a pas d’antivol sur son annexe',gain:'Vous seriez prévenu si quelqu’un emporte votre annexe.'},
  battS:{n:'capteur de tension de batterie',pr:'310,80 €',slug:'capteur-tension-batterie',why:'ne suit pas encore la tension de toutes ses batteries',gain:'Vous suivriez la charge de vos batteries à distance et seriez prévenu avant qu’elles ne soient vides.'},
  quai:{n:'capteur de prise de quai',pr:'178,80 €',slug:'capteur-prise-de-quai',why:'n’est pas équipé de capteur de prise de quai',gain:'Vous seriez prévenu dès que le courant du ponton est coupé, avant que les batteries ne se vident.'}
};
const prodLink=k=>SHOP_BASE+PROD[k].slug;
const cap1=s=>s.replace(/^./,c=>c.toUpperCase());
S.sent={};S.prop=null;
const sentKey=(b,k)=>b+'|'+k;
function clientName(b){return b.owner==='—'?'':b.owner.split(' ').map(w=>w?w[0].toUpperCase()+w.slice(1):w).join(' ')}
function buildMsg(p){
  const b=boat(p.b),nm=clientName(b),hello=nm?`Bonjour ${nm},`:'Bonjour,';
  const sig='\n\nBien cordialement,\nLaurine G.\nVotre concession Seanapps';
  if(p.k&&PROD[p.k]){const P=PROD[p.k];
    return `${hello}\n\nEn suivant les données de ${b.name} dans l’app Seanapps, j’ai remarqué que votre bateau ${P.why}.\n\n${P.gain}\n\nJe vous propose le ${P.n}, à ${P.pr}. Il se connecte sans fil au boîtier Seanapps déjà installé à bord.\nVoir le produit : ${prodLink(p.k)}\n\nNous pouvons l’installer lors de votre prochain passage. Souhaitez-vous que je vous réserve un créneau ?${sig}`;}
  const o=p.opp;
  return `${hello}\n\nEn suivant les données de ${b.name} dans l’app Seanapps, j’ai remarqué un point à surveiller : ${o.sig.charAt(0).toLowerCase()+o.sig.slice(1)}.\n\nPour éviter une panne ou une mauvaise surprise, je vous propose : ${o.p.charAt(0).toLowerCase()+o.p.slice(1)} (${o.pr.toLowerCase()}).\n\nJe peux vous envoyer un devis détaillé et vous proposer un rendez-vous à l’atelier. Qu’en dites-vous ?${sig}`;
}
function missingFor(k){return withData().filter(b=>V[b.id][k]===undefined)}
function openProp(spec){
  // spec: "boatId|key"  |  "|key" (catalogue)  |  "boatId|opp|texte"
  const [bid,k,txt]=spec.split('|');
  let p;
  if(k==='opp'){const o=oppList().find(x=>x.b===bid&&x.p===decodeURIComponent(txt));p={b:bid,k:o&&o.k||null,opp:o};}
  else{const cands=missingFor(k);p={b:bid||(cands[0]&&cands[0].id)||withData()[0].id,k,opp:null};}
  p.msg=buildMsg(p);S.prop=p;renderProp();
  setTimeout(()=>{const t=document.getElementById('pmsg');if(t)t.focus({preventScroll:true})},30);
}
function renderProp(){
  const el=document.getElementById('pmodal');const p=S.prop;
  if(!p){el.hidden=true;el.innerHTML='';document.body.style.overflow='';return;}
  const b=boat(p.b),isProd=p.k&&PROD[p.k];
  const boats=isProd?[...new Set([b,...missingFor(p.k)])]:[b];
  el.hidden=false;document.body.style.overflow='hidden';
  el.innerHTML=`<div class="pm-scrim" data-pclose></div>
  <div class="pm" role="dialog" aria-modal="true" aria-labelledby="pmt">
    <div class="pm-h"><div><h3 id="pmt">Proposer à ${esc(clientName(b)||'ce client')}</h3><div class="muted" style="font-size:13px">${esc(b.name)}${b.model?` · ${esc(b.model)}`:''}</div></div><button class="btn btn-ghost btn-sm" data-pclose aria-label="Fermer">${ic('x',16)}</button></div>
    <div class="pm-b">
      <div class="pm-row">
        <label class="pm-f"><span>Bateau</span><select id="pboat">${boats.map(x=>`<option value="${x.id}" ${x.id===p.b?'selected':''}>${esc(x.name)} · ${esc(clientName(x)||'sans client')}</option>`).join('')}</select></label>
        <label class="pm-f"><span>Produit</span><select id="pprod">${p.opp&&!isProd?`<option value="">${esc(p.opp.p)} · ${esc(p.opp.pr)}</option>`:''}${Object.entries(PROD).map(([k,P])=>`<option value="${k}" ${k===p.k?'selected':''}>${esc(cap1(P.n))} · ${P.pr}</option>`).join('')}</select></label>
      </div>
      ${isProd?`<div class="pm-link">${ic('share',16)}<span class="muted">Lien du produit</span><a href="${prodLink(p.k)}" target="_blank" rel="noopener">${prodLink(p.k)}</a></div>`:`<div class="pm-link muted">${ic('clip',16)}<span>Service sur devis : pas de page produit, le message propose un devis.</span></div>`}
      <label class="pm-f"><span>Message (vous pouvez le modifier)</span><textarea id="pmsg" rows="14">${esc(p.msg)}</textarea></label>
    </div>
    <div class="pm-foot"><button class="btn btn-ghost" data-pcopy>${ic('clip',16)} Copier le message</button><button class="btn btn-pri" data-psend>${ic('send',16)} Envoyer dans Messages</button></div>
  </div>`;
}
function sendProp(){
  const p=S.prop,b=boat(p.b),t=document.getElementById('pmsg').value.trim();if(!t)return;
  const nm=clientName(b)||b.name;
  let c=S.convs.find(x=>x.boat===b.name)||S.convs.find(x=>x.name===nm);
  if(!c){c={id:'c'+(S.convs.length+1)+'_'+b.id,name:nm,boat:b.name,msgs:[]};S.convs.unshift(c);}
  c.msgs.push({me:true,t,h:'À l’instant'});c.last='Vous : '+t.split('\n').find(l=>l.trim()&&!/^Bonjour/.test(l))?.slice(0,80);c.ago='à l’instant';
  S.sent[sentKey(p.b,p.k||('opp:'+(p.opp&&p.opp.p)))]=true;
  S.prop=null;renderProp();render();toast(`Proposition envoyée à ${nm}`);
}
function linkify(s){return esc(s).replace(/https?:\/\/[^\s<]+/g,u=>`<a href="${u}" target="_blank" rel="noopener">${u}</a>`)}
document.addEventListener('click',e=>{
  const pr=e.target.closest('[data-propose]');
  if(pr){e.preventDefault();e.stopPropagation();openProp(pr.dataset.propose);return;}
  if(!S.prop)return;
  if(e.target.closest('[data-pclose]')){S.prop=null;renderProp();return;}
  if(e.target.closest('[data-psend]')){sendProp();return;}
  if(e.target.closest('[data-pcopy]')){const t=document.getElementById('pmsg');const done=()=>toast('Message copié');
    try{navigator.clipboard.writeText(t.value).then(done,()=>{t.select();toast('Sélectionné : faites Ctrl+C')})}catch(_){t.select();toast('Sélectionné : faites Ctrl+C')}return;}
},true);
document.addEventListener('change',e=>{
  if(!S.prop)return;
  if(e.target.id==='pboat'){S.prop.b=e.target.value;S.prop.msg=buildMsg(S.prop);renderProp();}
  if(e.target.id==='pprod'){const k=e.target.value;if(k){S.prop.k=k;S.prop.opp=S.prop.opp&&S.prop.opp.k===k?S.prop.opp:null;}else{S.prop.k=null;}S.prop.msg=buildMsg(S.prop);renderProp();}
});
document.addEventListener('input',e=>{if(e.target.id==='pmsg'&&S.prop)S.prop.msg=e.target.value;});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&S.prop){S.prop=null;renderProp();}});

/* ======================= Courbes : cartes comme avant, 7 jours / mois / tout l'historique, vue d'ensemble qui croise les données ======================= */
const XS={
  batt:{l:'Batterie de service',sub:'Tension',u:'V',d:1,thr:11.8,thrL:'Seuil d’alerte 11,8 V',c:'--s1'},
  hum:{l:'Humidité de la cabine',sub:'Humidité relative',u:'%',d:0,thr:75,thrL:'Au-dessus de 75 % : moisissure',c:'--s2'},
  pres:{l:'Pression atmosphérique',sub:'Comme un baromètre',u:'hPa',d:0,c:'--s3'},
  temp:{l:'Température cabine',sub:'Air intérieur',u:'°C',d:1,c:'--s4'}
};
const H0=Date.UTC(2026,10,4)/36e5, HNOW=H0+NOWH, HSTART=Date.UTC(2026,7,1)/36e5;
const WD=['dim.','lun.','mar.','mer.','jeu.','ven.','sam.'],MO=['janv.','févr.','mars','avr.','mai','juin','juil.','août','sept.','oct.','nov.','déc.'],MOL=['janvier','février','mars','avril','mai','juin','juillet','août','septembre','octobre','novembre','décembre'];
const dOf=t=>new Date(t*36e5);
const lblT=t=>{const d=dOf(t);return `${WD[d.getUTCDay()]} ${d.getUTCDate()} ${MO[d.getUTCMonth()]} · ${d.getUTCHours()} h`};
const lblD=t=>{const d=dOf(t);return `${WD[d.getUTCDay()]} ${d.getUTCDate()}`};
const lblDM=t=>{const d=dOf(t);return `${d.getUTCDate()} ${MO[d.getUTCMonth()]}`};
const hsh=(i,s)=>{const x=Math.sin(i*12.9898+s*78.233)*43758.5453;return x-Math.floor(x)};
function seedOf(id){let h=0;for(const c of id)h=(h*31+c.charCodeAt(0))%9973;return h}
function genVal(id,k,t){
  const s=seedOf(id),ph=s%17,day=2*Math.PI*t/24,sun=Math.max(0,Math.sin(((t%24+24)%24-7)/12*Math.PI)),n=hsh(Math.floor(t),s+k.length)-.5;
  if(k==='batt')return 12.62+(s%20)/200+.13*sun+.05*Math.sin(2*Math.PI*t/97+ph)+n*.04-(hsh(Math.floor(t/24),s)>.88?.35*Math.exp(-Math.pow((t%24)-21,2)/10):0);
  if(k==='hum'){const base=56+(s%10)+(id==='b6'?Math.max(0,(t-(H0-20*24))/(24*26))*8:0);return base+6*Math.sin(2*Math.PI*t/(24*9)+ph)+2*Math.sin(day)+n*1.4;}
  return 1013+8*Math.sin(2*Math.PI*t/(24*6.3)+ph)+4*Math.sin(2*Math.PI*t/(24*2.1)+ph*2)+n*.5;
}
function xval(id,k,t){
  t=Math.round(t);if(t>HNOW||t<HSTART)return null;
  if(k==='temp'){const h=xval(id,'hum',t);if(h==null)return null;const s=seedOf(id);const seas=-4*Math.max(0,(t-HSTART)/(HNOW-HSTART));return 19+seas+2.2*Math.sin(2*Math.PI*((t%24)-9)/24)-(h-62)*.32+(hsh(t,s+9)-.5)*.3;}
  const i=t-H0,ser=serOf(id)[k];
  if(i>=0&&i<ser.length)return ser[i];
  if(i>=ser.length)return null;
  const g=genVal(id,k,t);
  if(i>-24){const w=(i+24)/24;return g*(1-w)+ser[0]*w;}
  return g;
}
S.ex={per:'7j',y:2026,m:10,mode:'cartes',show:null,mix:null,z:null,boat:null};
const MONTHS=[[2026,7],[2026,8],[2026,9],[2026,10]];
function exRange(){if(S.ex.per==='7j')return [H0,HNOW];if(S.ex.per==='tout')return [HSTART,HNOW];return [Date.UTC(S.ex.y,S.ex.m,1)/36e5,Date.UTC(S.ex.y,S.ex.m+1,1)/36e5];}
function exWin(){const [a,b]=exRange();if(!S.ex.z)return [a,b];let [z0,z1]=S.ex.z;z0=Math.max(a,z0);z1=Math.min(b,z1);return z1-z0<3?[a,b]:[z0,z1];}
function exDefaults(){const def=CHARTS_FOR[S.role].filter(k=>XS[k]);if(!S.ex.show)S.ex.show=def.length?def:['batt'];if(!S.ex.mix)S.ex.mix=['batt','pres'];}
function niceTicks(lo,hi){const span=hi-lo||1,raw=span/4,p=Math.pow(10,Math.floor(Math.log10(raw))),m=raw/p,st=(m<=1?1:m<=2?2:m<=2.5?2.5:m<=5?5:10)*p;const t0=Math.floor(lo/st)*st,t1=Math.ceil(hi/st)*st,out=[];for(let v=t0;v<=t1+st*.001;v+=st)out.push(+v.toFixed(6));return {ticks:out,lo:out[0],hi:out[out.length-1]}}
let XW=640,XL=50;
function timeTicks(a,b){const span=b-a,steps=[1,2,3,6,12,24,48,72,96,120,168,336,720];const mx=XW<500?4:7;const st=steps.find(s=>span/s<=mx)||720;const out=[];
  const base=st>=24?(S.ex.per==='mois'?exRange()[0]:Math.ceil(a/24)*24):0;for(let t=st>=24?base+Math.ceil((a-base)/st)*st:Math.ceil(a/st)*st;t<=b;t+=st)out.push(t);return {ticks:out,st}}
function tickLbl(t,st,first){if(st<24)return dOf(t).getUTCHours()===0?lblD(t):dOf(t).getUTCHours()+' h';if(S.ex.per==='mois')return dOf(t).getUTCDate()+(first?' '+MO[dOf(t).getUTCMonth()]:'');if(S.ex.per==='tout'||st>=168)return lblDM(t);return lblD(t);}
const XEX={};let xexN=0;
function samples(id,k,a,b){const n=Math.ceil(b-a),step=Math.max(1,Math.floor(n/600)),pts=[];for(let t=Math.ceil(a);t<=b;t+=step)pts.push([t,xval(id,k,t)]);return pts}
function pathOf(pts,x,y,base){let d='',area='',seg=[];const segs=[];pts.forEach(([t,v])=>{if(v==null){if(seg.length)segs.push(seg);seg=[];}else seg.push([t,v])});if(seg.length)segs.push(seg);
  segs.forEach(sg=>{const p=sg.map(([t,v],i)=>`${i?'L':'M'}${x(t).toFixed(1)},${y(v).toFixed(1)}`).join('');d+=p;area+=`${p}L${x(sg[sg.length-1][0]).toFixed(1)},${base}L${x(sg[0][0]).toFixed(1)},${base}Z`;});return {d,area}}
function frame(a,b,h,T,B,W,L,R,x){const tt=timeTicks(a,b);return {grid:tt.ticks.map((t,i)=>`<line class="gd" x1="${x(t)}" x2="${x(t)}" y1="${T}" y2="${h-B}"/><text class="ax" x="${Math.min(Math.max(x(t),L+20),W-R-20)}" y="${h-8}" text-anchor="middle">${tickLbl(t,tt.st,i===0)}</text>`).join(''),
  fut:HNOW<b?`<rect x="${x(Math.max(a,HNOW))}" y="${T}" width="${x(b)-x(Math.max(a,HNOW))}" height="${h-T-B}" class="fut"/>${b-Math.max(a,HNOW)>(b-a)*.12?`<text class="ax" x="${(x(Math.max(a,HNOW))+x(b))/2}" y="${T+16}" text-anchor="middle">À venir</text>`:''}`:''}}
function panelSVG(id,k,a,b,h){
  const pid='xp'+(xexN++),W=XW,L=XL,R=14,T=14,B=28,cfg=XS[k];
  const pts=samples(id,k,a,b),vs=pts.map(p=>p[1]).filter(v=>v!=null);
  let lo=vs.length?Math.min(...vs):0,hi=vs.length?Math.max(...vs):1;if(cfg.thr!=null){lo=Math.min(lo,cfg.thr);hi=Math.max(hi,cfg.thr)}
  const pad=(hi-lo)*.12||1,nt=niceTicks(lo-pad,hi+pad);
  const x=t=>L+(W-L-R)*(t-a)/(b-a),y=v=>T+(h-T-B)*(1-(v-nt.lo)/(nt.hi-nt.lo));
  const {d,area}=pathOf(pts,x,y,h-B),fr=frame(a,b,h,T,B,W,L,R,x);
  const ev=(id==='b2'&&H0+CUT>a&&H0+CUT<b&&k==='batt')?`<line class="ev" x1="${x(H0+CUT)}" x2="${x(H0+CUT)}" y1="${T}" y2="${h-B}"/><text class="lbl" x="${x(H0+CUT)-6}" y="${T+12}" text-anchor="end">Prise de quai débranchée</text>`:'';
  const nowv=HNOW>=a&&HNOW<=b?xval(id,k,HNOW):null;
  XEX[pid]={id,keys:[k],a,b,L,R,W,h,T,B,x,ys:{[k]:y},norm:false};
  return `<svg class="xp" data-xp="${pid}" viewBox="0 0 ${W} ${h}" tabindex="0" role="img" aria-label="${esc(cfg.l)} du ${esc(lblT(a))} au ${esc(lblT(b))}">
    ${nt.ticks.map(v=>`<line class="gl" x1="${L}" x2="${W-R}" y1="${y(v)}" y2="${y(v)}"/><text class="ax" x="${L-8}" y="${y(v)+4}" text-anchor="end">${nf(v,cfg.d&&nt.hi-nt.lo<5?1:0)}</text>`).join('')}
    ${fr.grid}${fr.fut}${ev}
    ${cfg.thr!=null?`<line class="thr" x1="${L}" x2="${W-R}" y1="${y(cfg.thr)}" y2="${y(cfg.thr)}"/><text class="lbl" x="${L+8}" y="${y(cfg.thr)-6}">${esc(cfg.thrL)}</text>`:''}
    <path class="ar" d="${area}"/><path class="ln" d="${d}"/>${nowv!=null?`<circle class="dt" cx="${x(HNOW)}" cy="${y(nowv)}" r="4.5"/>`:''}
    <g class="hov" visibility="hidden"><line class="cross" y1="${T}" y2="${h-B}"/><circle class="dt" data-k="${k}" r="5"/></g>
    <rect class="brush" y="${T}" height="${h-T-B}" width="0" visibility="hidden"/>
    <rect x="${L}" y="${T}" width="${W-L-R}" height="${h-T-B}" fill="transparent"/>
  </svg>`;
}
function overlaySVG(id,keys,a,b,h){
  const pid='xp'+(xexN++),W=XW,L=XL,R=XW<500?92:Math.min(150,XW*.24),T=16,B=28;
  const x=t=>L+(W-L-R)*(t-a)/(b-a);const ys={},lines=[];
  keys.forEach(k=>{const pts=samples(id,k,a,b),vs=pts.map(p=>p[1]).filter(v=>v!=null);const lo=Math.min(...vs),hi=Math.max(...vs),sp=(hi-lo)||1;
    const y=v=>T+(h-T-B)*(1-(v-lo)/sp);ys[k]=y;const {d}=pathOf(pts,x,y,h-B);const last=[...pts].reverse().find(p=>p[1]!=null);lines.push({k,d,last,y});});
  const fr=frame(a,b,h,T,B,W,L,R,x);
  // étiquettes directes en bout de courbe, écartées pour ne pas se chevaucher
  const lab=lines.filter(l=>l.last).map(l=>({k:l.k,y:l.y(l.last[1]),x:x(l.last[0])})).sort((p,q)=>p.y-q.y);
  for(let i=1;i<lab.length;i++)if(lab[i].y-lab[i-1].y<16)lab[i].y=lab[i-1].y+16;
  XEX[pid]={id,keys,a,b,L,R,W,h,T,B,x,ys,norm:true};
  return `<svg class="xp" data-xp="${pid}" viewBox="0 0 ${W} ${h}" tabindex="0" role="img" aria-label="Croisement de ${keys.map(k=>XS[k].l).join(', ')}">
    ${[0,.25,.5,.75,1].map(f=>{const yy=T+(h-T-B)*(1-f);return `<line class="gl" x1="${L}" x2="${W-R}" y1="${yy}" y2="${yy}"/><text class="ax" x="${L-8}" y="${yy+4}" text-anchor="end">${f===1?'max':f===0?'min':''}</text>`}).join('')}
    ${fr.grid}${fr.fut}
    ${lines.map(l=>`<path class="ln mix" d="${l.d}" style="stroke:var(${XS[l.k].c})"/>`).join('')}
    ${lab.map(p=>`<circle cx="${p.x}" cy="${p.y}" r="4" style="fill:var(${XS[p.k].c})"/><text class="dl" x="${p.x+8}" y="${p.y+4}">${esc(XS[p.k].l.split(' ')[0])}</text>`).join('')}
    <g class="hov" visibility="hidden"><line class="cross" y1="${T}" y2="${h-B}"/>${keys.map(k=>`<circle class="dt" data-k="${k}" r="5" style="fill:var(${XS[k].c})"/>`).join('')}</g>
    <rect class="brush" y="${T}" height="${h-T-B}" width="0" visibility="hidden"/>
    <rect x="${L}" y="${T}" width="${W-L-R}" height="${h-T-B}" fill="transparent"/>
  </svg>`;
}
function stats(id,k,a,b){const vs=[];for(let t=Math.ceil(a);t<=b;t++){const v=xval(id,k,t);if(v!=null)vs.push([t,v])}if(!vs.length)return null;const c=XS[k],f=v=>nf(v,c.d)+' '+c.u;let mi=vs[0],ma=vs[0],s=0;vs.forEach(p=>{if(p[1]<mi[1])mi=p;if(p[1]>ma[1])ma=p;s+=p[1]});return {min:f(mi[1]),max:f(ma[1]),avg:f(s/vs.length),tmin:mi[0],tmax:ma[0],vs}}
function corr(id,k1,k2,a,b){let n=0,s1=0,s2=0,s11=0,s22=0,s12=0;for(let t=Math.ceil(a);t<=b;t++){const u=xval(id,k1,t),v=xval(id,k2,t);if(u==null||v==null)continue;n++;s1+=u;s2+=v;s11+=u*u;s22+=v*v;s12+=u*v}if(n<6)return null;const cv=s12/n-s1*s2/n/n,v1=s11/n-s1*s1/n/n,v2=s22/n-s2*s2/n/n;return v1<=0||v2<=0?null:cv/Math.sqrt(v1*v2)}
function facts(id,k,a,b){const st=stats(id,k,a,b);if(!st)return null;const c=XS[k];
  if(c.thr!=null){const above=k==='hum';const hrs=st.vs.filter(p=>above?p[1]>c.thr:p[1]<c.thr).length;
    if(hrs){const first=st.vs.find(p=>above?p[1]>c.thr:p[1]<c.thr);return `${c.l} : ${above?'au-dessus de':'sous'} ${nf(c.thr,c.d)} ${c.u} pendant ${hrs} h, à partir du ${lblT(first[0])}.`}
    return `${c.l} : toujours ${above?'sous':'au-dessus de'} ${nf(c.thr,c.d)} ${c.u} sur la période.`}
  if(k==='pres'){let best=0,bt=null;for(let i=24;i<st.vs.length;i++){const dlt=st.vs[i][1]-st.vs[i-24][1];if(dlt<best){best=dlt;bt=st.vs[i][0]}}return best<-3?`Pression : plus forte baisse en 24 h, ${nf(best,0)} hPa jusqu’au ${lblT(bt)} (vent probable).`:'Pression : stable, pas de baisse rapide.'}
  return `${c.l} : de ${st.min} (${lblT(st.tmin)}) à ${st.max} (${lblT(st.tmax)}).`}
function pairText(k1,k2,r){const a=XS[k1].l.toLowerCase(),b=XS[k2].l.toLowerCase(),ar=Math.abs(r);
  const force=ar>=.7?'lien fort':ar>=.4?'lien moyen':'pas de lien net';
  if(ar<.4)return {cls:'none',t:`${cap1(a)} et ${b} : ${force}. Elles évoluent chacune de leur côté.`,r};
  return {cls:r>0?'pos':'neg',t:`${cap1(a)} et ${b} : ${force}. ${r>0?'Quand l’une monte, l’autre monte aussi.':'Quand l’une monte, l’autre baisse.'}`,r};}
function exMeasure(cards){const el=document.getElementById('explorer');let w=el&&el.clientWidth?el.clientWidth:(innerWidth<760?innerWidth-60:900);if(cards&&w>=760)w=(w-14)/2;w-=36;XW=Math.max(300,Math.min(900,Math.round(w)));XL=XW<480?40:50;}
function cardHTML(id,k,z0,z1){const c=XS[k],st=stats(id,k,z0,z1),now=HNOW>=z0&&HNOW<=z1?xval(id,k,HNOW):null;
  return `<section class="card"><div class="card-h"><div><h3>${esc(c.l)}</h3><div class="sub">${esc(c.sub)}, en ${c.u}</div></div><div class="total"><small>${now!=null?'Maintenant':'Moyenne'}</small><b>${now!=null?nf(now,c.d)+' '+c.u:(st?st.avg:'—')}</b></div></div>
    <div class="card-b">${panelSVG(id,k,z0,z1,230)}${st?`<div class="chart-note">Sur la période : min <b>${st.min}</b> · moyenne <b>${st.avg}</b> · max <b>${st.max}</b></div>`:''}</div></section>`;}
function explorerHTML(id){
  for(const k in XEX)delete XEX[k];
  if(S.ex.boat!==id){S.ex.boat=id;S.ex.z=null}
  exDefaults();const cards=S.ex.mode==='cartes';exMeasure(cards);
  const [a,b]=exRange(),[z0,z1]=exWin(),zoomed=z0>a||z1<b,mi=MONTHS.findIndex(([y,m])=>y===S.ex.y&&m===S.ex.m);
  const dim=new Date(Date.UTC(S.ex.y,S.ex.m+1,0)).getUTCDate();
  const per=S.ex.per==='7j'?'Du mer. 4 au mar. 10 novembre':S.ex.per==='tout'?`Tout l’historique : du 1 août au 10 novembre 2026`:`Du 1 au ${dim} ${MOL[S.ex.m]} ${S.ex.y}`;
  const bar=`<div class="xbar">
      <div class="seg" role="group" aria-label="Période"><button data-ex-per="7j" aria-pressed="${S.ex.per==='7j'}">7 jours</button><button data-ex-per="mois" aria-pressed="${S.ex.per==='mois'}">Mois</button><button data-ex-per="tout" aria-pressed="${S.ex.per==='tout'}">Tout l’historique</button></div>
      ${S.ex.per==='mois'?`<div class="mnav"><button data-ex-m="-1" ${mi<=0?'disabled':''} aria-label="Mois précédent">${ic('back',16)}</button><b>${cap1(MOL[S.ex.m])} ${S.ex.y}</b><button data-ex-m="1" ${mi>=MONTHS.length-1?'disabled':''} aria-label="Mois suivant">${ic('chev',16)}</button></div>`:''}
      <div class="seg" role="group" aria-label="Affichage" style="margin-left:auto"><button data-ex-mode="cartes" aria-pressed="${cards}">${ic('grid',14)} Graphiques</button><button data-ex-mode="ensemble" aria-pressed="${!cards}">${ic('share',14)} Vue d’ensemble</button></div>
    </div>
    <div class="xsub"><span class="muted">${per}${zoomed?` · zoom : ${lblT(z0)} → ${lblT(z1)}`:''}</span>
      <span class="muted zl">${zoomed?`<button class="btn btn-ghost btn-sm" data-ex-z="reset">Tout voir</button>`:'Glissez sur une courbe pour zoomer · double-clic pour revenir'}</span></div>`;
  const pick=(sel,attr,label)=>`<div class="xpick"><span class="muted">${label}</span>${Object.entries(XS).map(([k,c])=>{const on=sel.includes(k);return `<button class="fchip xchip" ${attr}="${k}" aria-pressed="${on}"><i style="background:var(${c.c})"></i>${esc(c.l)}</button>`}).join('')}</div>`;
  if(cards){
    return bar+pick(S.ex.show,'data-ex-show','Afficher :')+`<div class="grid g2 xcards">${Object.keys(XS).filter(k=>S.ex.show.includes(k)).map(k=>cardHTML(id,k,z0,z1)).join('')}</div>`;
  }
  const keys=Object.keys(XS).filter(k=>S.ex.mix.includes(k));
  const pairs=[];for(let i=0;i<keys.length;i++)for(let j=i+1;j<keys.length;j++){const r=corr(id,keys[i],keys[j],z0,z1);if(r!=null)pairs.push(pairText(keys[i],keys[j],r))}
  pairs.sort((p,q)=>Math.abs(q.r)-Math.abs(p.r));
  const fx=keys.map(k=>facts(id,k,z0,z1)).filter(Boolean);
  const evt=id==='b2'&&H0+CUT>z0&&H0+CUT<z1?`<li><b>Événement :</b> prise de quai débranchée le lun. 9 nov. à 18 h. ${keys.includes('batt')?'La batterie commence à baisser juste après.':''}</li>`:'';
  return bar+pick(S.ex.mix,'data-ex-mix','Croiser (2 ou plus) :')+`
    <section class="card"><div class="card-h"><div><h3>Vue d’ensemble</h3><div class="sub">${keys.length} courbes superposées, chacune ramenée entre son minimum et son maximum pour comparer leurs variations</div></div></div>
      <div class="card-b">${overlaySVG(id,keys,z0,z1,300)}
        <div class="legend">${keys.map(k=>`<span><i style="background:var(${XS[k].c})"></i>${esc(XS[k].l)}</span>`).join('')}</div></div></section>
    <section class="card xres"><div class="card-h"><div><h3>Résultat du croisement</h3><div class="sub">Calculé sur la période affichée${zoomed?' (zoom)':''}</div></div></div>
      <div class="card-b">
        ${pairs.map(p=>`<div class="xpair ${p.cls}"><span class="xr">${p.r>0?'+':'−'}${nf(Math.abs(p.r),2)}</span><span>${esc(p.t)}</span></div>`).join('')}
        <ul class="xfacts">${evt}${fx.map(f=>`<li>${esc(f)}</li>`).join('')}</ul>
        <div class="chart-note">Le chiffre va de −1 à +1 : proche de +1, les deux courbes montent et descendent ensemble ; proche de −1, l’une monte quand l’autre baisse ; proche de 0, pas de lien.</div>
      </div></section>`;
}
function renderExplorer(){const el=document.getElementById('explorer');if(!el)return;el.innerHTML=explorerHTML(el.dataset.boat);bindExplorer();}
function setZoom(z0,z1){const [a,b]=exRange();let w=z1-z0;if(w>=b-a-0.5){S.ex.z=null;return}w=Math.max(w,4);if(z0<a){z0=a;z1=a+w}if(z1>b){z1=b;z0=b-w}S.ex.z=[z0,z1]}
function tipRows(title,rows,cx,cy){const t=TIP();t.replaceChildren();const h=document.createElement('span');h.textContent=title;t.append(h);rows.forEach(([l,v,c])=>{const r=document.createElement('div');r.className='trow';const k=document.createElement('i');if(c)k.style.background=`var(${c})`;const b=document.createElement('b');b.textContent=v;const s=document.createElement('span');s.textContent=l;r.append(k,b,s);t.append(r)});t.hidden=false;
  const w=t.offsetWidth,hh=t.offsetHeight;let left=cx+16,top=cy-hh-12;if(left+w>innerWidth-8)left=cx-w-16;if(top<8)top=cy+16;t.style.left=Math.max(8,left)+'px';t.style.top=top+'px';}
function bindExplorer(){
  const root=document.getElementById('explorer');if(!root)return;
  const svgs=[...root.querySelectorAll('svg.xp')];
  const tOf=(svg,cx)=>{const m=XEX[svg.dataset.xp],r=svg.getBoundingClientRect(),vx=(cx-r.left)/r.width*m.W;return m.a+(vx-m.L)/(m.W-m.L-m.R)*(m.b-m.a)};
  const showAt=(t,cx,cy)=>{const rows=[];svgs.forEach(s=>{const m=XEX[s.dataset.xp],tt=Math.round(Math.min(m.b,Math.max(m.a,t))),g=s.querySelector('.hov');let any=false;
      m.keys.forEach(k=>{const v=xval(m.id,k,tt),c=g.querySelector(`circle[data-k="${k}"]`);if(v==null){c.setAttribute('visibility','hidden');rows.push([XS[k].l,'—',XS[k].c]);return}any=true;c.setAttribute('visibility','visible');c.setAttribute('cx',m.x(tt));
        let yy;if(m.norm){const y=m.ys[k];yy=y(v)}else yy=m.ys[k](v);c.setAttribute('cy',yy);rows.push([XS[k].l,nf(v,XS[k].d===1?2:1)+' '+XS[k].u,XS[k].c])});
      g.setAttribute('visibility',any?'visible':'hidden');const ln=g.querySelector('line');ln.setAttribute('x1',m.x(tt));ln.setAttribute('x2',m.x(tt));});
    const uniq=[];rows.forEach(r=>{if(!uniq.some(u=>u[0]===r[0]))uniq.push(r)});tipRows(lblT(Math.round(t)),uniq,cx,cy);};
  const hideAll=()=>{svgs.forEach(s=>s.querySelector('.hov').setAttribute('visibility','hidden'));hideTip();};
  let drag=null;
  svgs.forEach(svg=>{
    const m=XEX[svg.dataset.xp];
    svg.addEventListener('pointerdown',e=>{if(e.button)return;drag={t0:tOf(svg,e.clientX),svg};try{svg.setPointerCapture(e.pointerId)}catch(_){}});
    svg.addEventListener('pointermove',e=>{const t=tOf(svg,e.clientX);showAt(t,e.clientX,e.clientY);
      if(drag&&drag.svg===svg){const t0=Math.max(m.a,Math.min(drag.t0,t)),t1=Math.min(m.b,Math.max(drag.t0,t));svgs.forEach(s=>{const mm=XEX[s.dataset.xp],b2=s.querySelector('.brush');b2.setAttribute('x',mm.x(t0));b2.setAttribute('width',Math.max(0,mm.x(t1)-mm.x(t0)));b2.setAttribute('visibility','visible')});}});
    svg.addEventListener('pointerup',e=>{if(!drag)return;const t=tOf(svg,e.clientX),t0=Math.min(drag.t0,t),t1=Math.max(drag.t0,t);drag=null;
      if(t1-t0>=2&&Math.abs(m.x(t1)-m.x(t0))>8){setZoom(t0,t1);hideTip();renderExplorer();}else svgs.forEach(s=>s.querySelector('.brush').setAttribute('visibility','hidden'));});
    svg.addEventListener('pointerleave',()=>{if(!drag)hideAll();});
    svg.addEventListener('dblclick',()=>{S.ex.z=null;hideTip();renderExplorer();});
    svg.addEventListener('focus',()=>{const r=svg.getBoundingClientRect();showAt(Math.min(m.b,HNOW),r.right-40,r.top+20)});
    svg.addEventListener('blur',hideAll);
    svg.addEventListener('keydown',e=>{if(e.key==='Escape'){S.ex.z=null;renderExplorer();}});
  });
}
document.addEventListener('click',e=>{
  const el=e.target.closest('[data-ex-per],[data-ex-m],[data-ex-mode],[data-ex-show],[data-ex-mix],[data-ex-z]');if(!el||!el.closest('#explorer'))return;
  e.stopPropagation();
  const d=el.dataset;
  if(d.exPer){S.ex.per=d.exPer;S.ex.z=null;if(d.exPer==='mois'){S.ex.y=2026;S.ex.m=10}}
  else if(d.exM){const i=MONTHS.findIndex(([y,m])=>y===S.ex.y&&m===S.ex.m)+(+d.exM);if(MONTHS[i]){[S.ex.y,S.ex.m]=MONTHS[i];S.ex.z=null}}
  else if(d.exMode){S.ex.mode=d.exMode}
  else if(d.exShow){const k=d.exShow,s=S.ex.show;S.ex.show=s.includes(k)?(s.length>1?s.filter(x=>x!==k):s):[...s,k]}
  else if(d.exMix){const k=d.exMix,s=S.ex.mix;if(s.includes(k)){if(s.length>2)S.ex.mix=s.filter(x=>x!==k);else toast('Choisissez au moins 2 courbes à croiser')}else S.ex.mix=[...s,k]}
  else if(d.exZ){S.ex.z=null}
  hideTip();renderExplorer();
},true);

/* ======================= Guide des capteurs : bouton ⓘ en haut de la page Capteurs ======================= */
S.info=false;
const infoBtn=()=>`<button class="ibtn" data-info aria-label="Guide des capteurs : les 169 capteurs et comment lire les valeurs" title="Guide des capteurs">${ic('info',22)}</button>`;
function openInfo(){S.info=true;renderInfo();setTimeout(()=>{const q=document.getElementById('sq');if(q)q.focus({preventScroll:true})},40);}
function closeInfo(){S.info=false;renderInfo();const b=document.querySelector('[data-info]');if(b)b.focus({preventScroll:true});}
function renderInfo(){
  const el=document.getElementById('infod');if(!el)return;
  if(!S.info){el.hidden=true;el.innerHTML='';return;}
  el.hidden=false;
  el.innerHTML=`<div class="id-scrim" data-iclose></div>
  <aside class="id" role="dialog" aria-modal="true" aria-labelledby="idt">
    <div class="id-h"><div><h3 id="idt">Guide des capteurs</h3><div class="muted" style="font-size:13px">Les ${SENSORS.length} capteurs du fichier, expliqués simplement</div></div><button class="btn btn-ghost btn-sm" data-iclose aria-label="Fermer">${ic('x',16)}</button></div>
    <div class="id-b">
      <div class="id-sec"><div class="tdl">Comment lire les valeurs</div>
        <div class="types3 id-types">
        <div class="vt"><span class="gz">OUI/NON</span><p><b>Oui / Non</b> : la porte est ouverte ou fermée, il y a de l’eau ou pas. Dans le fichier : 0 = non, 1 = oui.</p></div>
        <div class="vt"><span class="gz">68 %</span><p><b>Pourcentage</b> : une jauge, comme la batterie d’un téléphone ou le niveau d’un réservoir.</p></div>
        <div class="vt"><span class="gz">12,6 V</span><p><b>Mesure</b> : un chiffre avec une unité (volts, °C, heures, hPa…).</p></div></div></div>
      <div class="id-sec"><div class="tdl">Les ${SENSORS.length} capteurs</div>${listSection()}</div>
    </div>
  </aside>`;
}
document.addEventListener('click',e=>{
  if(e.target.closest('[data-info]')){e.preventDefault();openInfo();return;}
  if(S.info&&e.target.closest('[data-iclose]')){closeInfo();}
});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&S.info)closeInfo();});

/* ======================= Déclaration de stock : écran Seanapps Pro + « À régulariser » ======================= */
const REG=[
  {id:'s1',name:'Oceanis 30.1',hin:'FR-BEN30E112',months:42,prio:'crit',reasons:['Boîtier activé le 14/06/2024','En stock depuis 42 mois'],guess:{date:'2024-06-14',client:'P. Garnier',why:'boîtier activé et app client connectée'}},
  {id:'s4',name:'Gran Turismo 36',hin:'FR-BEN36G771',months:33,prio:'crit',reasons:['Boîtier activé le 02/09/2025','64 h moteur depuis'],guess:{date:'2025-09-02',client:'',why:'boîtier activé, 64 h moteur enregistrées'}},
  {id:'s7',name:'Merry Fisher 795',hin:'FR-JEA79M305',months:29,prio:'crit',reasons:['Boîtier activé le 21/03/2026','App client connectée'],guess:{date:'2026-03-21',client:'L. Martin',why:'le client a appairé son bateau dans l’app'}},
  {id:'s2',name:'Antares 9',hin:'FR-BEN9A2208',months:20,prio:'crit',reasons:['« En livraison », date prévue dépassée (03/2025)']},
  {id:'s3',name:'Flyer 8 SUNdeck',hin:'FR-BEN8F0937',months:38,prio:'crit',reasons:['En stock depuis 38 mois']},
  {id:'s5',name:'First 27',hin:'FR-BEN27F114',months:14,prio:'warn',reasons:['« En commande », production terminée']},
  {id:'s6',name:'Cap Camarat 7.5',hin:'FR-JEA75C442',months:27,prio:'warn',reasons:['En stock depuis 27 mois']},
  {id:'s8',name:'Sun Odyssey 410',hin:'FR-JEA41S208',months:25,prio:'warn',reasons:['En stock depuis 25 mois']}
];
const STK=[
  {id:'k1',name:'Oceanis 34.1',hin:'FR-BEN34O551',months:3},
  {id:'k2',name:'Antares 7',hin:'FR-BEN7A1093',months:5},
  {id:'k3',name:'Leader 33',hin:'FR-JEA33L770',months:1},
  {id:'k4',name:'Noroît · Flyer 8',hin:'FR-BEN31000',months:2}
];
const ANS={livre:'Livré au client',stock:'Toujours en stock',ailleurs:'Vendu ou transféré ailleurs',verif:'À vérifier'};
Object.assign(S,{reg:{},regSel:new Set(),stkSel:new Set(),stkDone:new Set(),regDone:new Set(),stkF:'all',stkFOpen:false,stkOpen:{reg:true,todo:true,done:false},regEdit:null});
const frD=d=>d?d.split('-').reverse().join('/'):'';
function stockPct(){const tot=REG.length+STK.length;const done=S.regDone.size+S.stkDone.size;return Math.round(done/tot*100)}
function regLeft(){return REG.filter(r=>!S.regDone.has(r.id))}
function regRow(r){
  const a=S.reg[r.id],sel=S.regSel.has(r.id),editing=S.regEdit===r.id||(a&&a.a==='livre'&&a.editing);
  return `<div class="srow ${a?'answered':''}">
    <input type="checkbox" class="scb" data-rsel="${r.id}" ${sel?'checked':''} aria-label="Sélectionner ${esc(r.name)}">
    <div class="sbody">
      <div class="shead"><b>${esc(r.name)}</b><span class="muted">HIN : ${r.hin}</span><span class="chip ${r.prio==='crit'?'c-red':'c-orange'}">${r.prio==='crit'?'Priorité forte':'À vérifier'}</span></div>
      <div class="sreasons">${r.reasons.map(x=>`<span class="sreason">${ic(/Boîtier|App|moteur/.test(x)?'wifi':/livraison|commande/.test(x)?'alert':'clock',14)}${esc(x)}</span>`).join('')}</div>
      ${a&&!editing?`<div class="sdone">${ic('check',16,2.4)}<span><b>${ANS[a.a]}</b>${a.a==='livre'?` le ${frD(a.date)}${a.client?` · ${esc(a.client)}`:''}`:''}</span><button class="linkbtn" data-redit="${r.id}">Modifier</button></div>`
      : r.guess&&!editing?`<div class="sguess"><div><b>Mise en service probable le ${frD(r.guess.date)}</b>${r.guess.client?` · client ${esc(r.guess.client)}`:''}<div class="muted" style="font-size:12.5px">Déduit des données : ${esc(r.guess.why)}.</div></div>
          <div class="sgact"><button class="btn btn-pri btn-sm" data-rconf="${r.id}">${ic('check',15,2.4)} Confirmer</button><button class="btn btn-ghost btn-sm" data-redit="${r.id}">Autre réponse</button></div></div>`
      : `<div class="squest">Que devient ce bateau ?</div><div class="sans">${Object.entries(ANS).map(([k,l])=>`<button class="fchip" data-rans="${r.id}|${k}" aria-pressed="${a&&a.a===k}">${l}</button>`).join('')}</div>
        ${a&&a.a==='livre'?`<div class="sfields"><label>Date de mise en service<input type="date" id="rd-${r.id}" value="${a.date||''}"></label><label>Client<input type="text" id="rc-${r.id}" value="${esc(a.client||'')}" placeholder="Nom du propriétaire"></label><button class="btn btn-pri btn-sm" data-rsave="${r.id}">Enregistrer</button></div>`:''}`}
    </div></div>`;
}
function stkRow(s){const sel=S.stkSel.has(s.id);return `<label class="srow simple"><input type="checkbox" class="scb" data-ssel="${s.id}" ${sel?'checked':''}><div class="sbody"><div class="shead"><b>${esc(s.name)}</b><span class="muted">HIN : ${s.hin}</span><span class="muted">En stock depuis ${s.months} mois</span></div></div></label>`}
function vStock(){
  const left=regLeft(),f=S.stkF;
  const regList=left.filter(r=>f==='all'||(f==='boitier'&&r.guess)||(f==='crit'&&r.prio==='crit')||(f==='warn'&&r.prio==='warn'));
  const todo=STK.filter(s=>!S.stkDone.has(s.id)),done=[...REG.filter(r=>S.regDone.has(r.id)).map(r=>({n:r.name,t:ANS[S.reg[r.id].a]+(S.reg[r.id].a==='livre'?` le ${frD(S.reg[r.id].date)}`:'')})),...STK.filter(s=>S.stkDone.has(s.id)).map(s=>({n:s.name,t:'Confirmé en stock'}))];
  const pct=stockPct(),ok=pct===100,ready=REG.filter(r=>S.reg[r.id]&&!S.reg[r.id].editing&&!S.regDone.has(r.id)).length+S.stkSel.size;
  const nsel=S.regSel.size;
  const sec=(k,title,count,body,extra='')=>`<section class="sacc"><button class="sacc-h" data-sacc="${k}" aria-expanded="${S.stkOpen[k]}"><span>${title}${count!=null?` <span class="scount">${count}</span>`:''}</span>${extra}<span class="xch ${S.stkOpen[k]?'open':''}">${ic('chev',18)}</span></button>${S.stkOpen[k]?`<div class="sacc-b">${body}</div>`:''}</section>`;
  return `<div class="top"><div class="h1">Déclaration de stock</div><span class="muted">Novembre 2026</span></div>
  <div class="wrap stockwrap">
    <div class="sbar"><button class="btn btn-out" data-sfopen aria-expanded="${S.stkFOpen}">Filtres ${ic('filter',18)}</button>
      ${S.stkFOpen?`<div class="fchips">${[['all','Tous'],['boitier','Boîtier déjà activé'],['crit','Priorité forte'],['warn','À vérifier']].map(([k,l])=>`<button class="fchip" data-sf="${k}" aria-pressed="${f===k}">${l}</button>`).join('')}</div>`:''}</div>
    ${left.length?sec('reg',`À régulariser ${NEW}`,left.length,`
      <p class="muted" style="margin:0 0 10px">Ces bateaux sont en stock depuis plus de 23 mois ou ont un statut qui se contredit. Dites-nous ce qu’ils sont devenus : quand les données le permettent, la réponse est déjà préparée.</p>
      ${nsel?`<div class="sbulk"><b>${nsel} sélectionné${nsel>1?'s':''}</b><span class="muted">Appliquer :</span>${['stock','ailleurs','verif'].map(k=>`<button class="btn btn-out btn-sm" data-rbulk="${k}">${ANS[k]}</button>`).join('')}<button class="linkbtn" data-rbulk="none">Désélectionner</button></div>`:''}
      ${regList.map(regRow).join('')||'<div class="muted">Aucun bateau pour ce filtre.</div>'}`):''}
    ${sec('todo','État de stock à confirmer',null,todo.length?`<div class="sall"><label><input type="checkbox" data-sselall ${todo.every(s=>S.stkSel.has(s.id))?'checked':''}> Tout sélectionner</label></div>${todo.map(stkRow).join('')}`:'<div class="muted">Aucun bateau</div>')}
    ${sec('done','État de stock confirmé',done.length||null,done.length?done.map(d=>`<div class="act"><span class="b" style="background:var(--green)"></span><span style="flex:1"><b style="font-weight:500">${esc(d.n)}</b></span><span class="muted">${esc(d.t)}</span></div>`).join(''):'<div class="muted">Aucun bateau</div>')}
  </div>
  <div class="sfoot"><b class="${ok?'okc':''}">${ok?'Déclaration effectuée':'Déclaration non effectuée'}</b><span class="sfi" data-tip="Part des bateaux confirmés ou régularisés ce mois-ci|Les bateaux à régulariser comptent dans ce pourcentage">${ic('info',16)}</span>
    <span class="muted">Pourcentage de déclaration : ${pct} %</span><span class="sprog"><i style="width:${pct}%;background:${ok?'var(--green)':'var(--red)'}"></i></span>
    <button class="btn btn-pri" data-svalid ${ready?'':'disabled'}>Validez la sélection${ready?` (${ready})`:''}</button></div>`;
}
function stockValidate(){
  let n=0;REG.forEach(r=>{const a=S.reg[r.id];if(a&&!a.editing&&!S.regDone.has(r.id)){S.regDone.add(r.id);n++}});
  S.stkSel.forEach(id=>{S.stkDone.add(id);n++});S.stkSel.clear();S.regSel.clear();
  if(stockPct()===100){doneTask('t2');S.stkOpen.done=true;}
  render();toast(`Déclaration envoyée : ${n} bateau${n>1?'x':''}`);checkAllDone();
}
document.addEventListener('click',e=>{
  if(route()!=='stock'&&!e.target.closest('[data-rmail]'))return;
  const t=e.target,c=s=>t.closest(s);let el;
  if(el=c('[data-rmail]')){e.preventDefault();const [id,k]=el.dataset.rmail.split('|');const r=REG.find(x=>x.id===id);S.reg[id]=k==='livre'&&r.guess?{a:'livre',date:r.guess.date,client:r.guess.client}:{a:k};S.stkOpen.reg=true;location.hash='#stock';setTimeout(()=>toast('Réponse préparée : il reste à valider'),80);return;}
  if(c('[data-sfopen]')){S.stkFOpen=!S.stkFOpen;render();return;}
  if(el=c('[data-sf]')){S.stkF=el.dataset.sf;render();return;}
  if(el=c('[data-sacc]')){const k=el.dataset.sacc;S.stkOpen[k]=!S.stkOpen[k];render();return;}
  if(el=c('[data-rconf]')){const r=REG.find(x=>x.id===el.dataset.rconf);S.reg[r.id]={a:'livre',date:r.guess.date,client:r.guess.client};render();toast(`${r.name} : mise en service confirmée`);return;}
  if(el=c('[data-redit]')){const id=el.dataset.redit;S.regEdit=id;if(S.reg[id])S.reg[id].editing=S.reg[id].a==='livre';else S.reg[id]=undefined;render();return;}
  if(el=c('[data-rans]')){const [id,k]=el.dataset.rans.split('|');const r=REG.find(x=>x.id===id);S.reg[id]={a:k,editing:k==='livre',date:k==='livre'&&r.guess?r.guess.date:'',client:k==='livre'&&r.guess?r.guess.client:''};if(k!=='livre')S.regEdit=null;else S.regEdit=id;render();return;}
  if(el=c('[data-rsave]')){const id=el.dataset.rsave,d=document.getElementById('rd-'+id).value,cl=document.getElementById('rc-'+id).value.trim();if(!d){toast('Indiquez la date de mise en service');return;}S.reg[id]={a:'livre',date:d,client:cl};S.regEdit=null;render();return;}
  if(el=c('[data-rbulk]')){const k=el.dataset.rbulk;if(k!=='none')S.regSel.forEach(id=>{S.reg[id]={a:k}});S.regSel.clear();render();if(k!=='none')toast(`Réponse appliquée : ${ANS[k]}`);return;}
  if(c('[data-svalid]')){stockValidate();return;}
},true);
document.addEventListener('change',e=>{
  const t=e.target;
  if(t.dataset.rsel){t.checked?S.regSel.add(t.dataset.rsel):S.regSel.delete(t.dataset.rsel);render();}
  else if(t.dataset.ssel){t.checked?S.stkSel.add(t.dataset.ssel):S.stkSel.delete(t.dataset.ssel);render();}
  else if('sselall' in t.dataset){STK.filter(s=>!S.stkDone.has(s.id)).forEach(s=>t.checked?S.stkSel.add(s.id):S.stkSel.delete(s.id));render();}
});

/* ======================= Guides : visite de bienvenue et nouveautés (écran assombri + bulle) ======================= */
const TOURS={
  bienvenue:{t:'Visite de l’app',steps:[
    {title:'Bienvenue dans Seanapps Pro',text:'En une minute, voici où trouver l’essentiel. Vous pouvez passer la visite à tout moment et la revoir depuis « Guide et nouveautés », dans le menu.',center:true,cta:'Commencer'},
    {go:{hash:'dashboard'},sel:['.roles'],only:'directeur',title:'Voyez le parc comme chaque métier',text:'Vous êtes directeur : vous pouvez afficher la vue du commercial, du technicien ou de l’atelier. Tapez sur un métier pour essayer.',click:true},
    {go:{hash:'dashboard'},sel:['.tabk'],title:'Une case, un sujet',text:'Chaque case donne un chiffre clé. Tapez dessus pour déplier le détail en dessous.',click:true},
    {sel:['.gbar .gin'],title:'Cherchez tout ici',text:'Un capteur, un bateau, un client ou un écran. Des recherches sont conseillées selon votre métier. Raccourci clavier : la touche « / ».'},
    {go:{hash:'capteurs',capBoat:null,dev:null},sel:['.nav a[href="#capteurs"]','#menuBtn'],title:'Les capteurs de tout le parc',text:'Une ligne par bateau, une colonne par capteur : seuls les problèmes ressortent en couleur.'},
    {go:{hash:'capteurs',capBoat:null,dev:null},sel:['.mx tbody tr:first-child .bc'],title:'Tapez sur un bateau',text:'Vous le voyez zone par zone, avec son journal et ses courbes. Tapez sur le nom d’une colonne pour comparer un capteur sur tout le parc.'},
    {go:{hash:'capteurs',capBoat:null},sel:['[data-info]'],title:'Le guide des 169 capteurs',text:'Ce bouton explique chaque capteur et comment lire ses valeurs.'},
    {go:{hash:'stock'},sel:['.nav a[href="#stock"]','#menuBtn'],title:'Déclaration de stock',text:'Chaque mois, vous confirmez votre stock. Les bateaux à régulariser arrivent en premier, avec la réponse déjà préparée quand c’est possible.'},
    {sel:['.nav a[data-guide]','#menuBtn'],title:'Revoir ce guide',text:'« Guide et nouveautés », dans le menu, relance cette visite ou montre ce qui est nouveau.'},
    {title:'C’est parti',text:'Votre tableau de bord est réglé sur votre métier. Bonne navigation !',center:true,cta:'Terminer'}
  ]},
  nouveautes:{t:'Nouveautés de la version',ver:'v11',intro:'Bateaux à régulariser dans la déclaration de stock, nouvelle vue du bateau, et ce guide.',steps:[
    {go:{hash:'stock'},sel:['.sacc-h'],title:'Nouveau : À régulariser',text:'Les bateaux en stock depuis plus de 23 mois, ou dont le statut se contredit, arrivent en tête de la déclaration.',badge:true},
    {go:{hash:'stock'},sel:['.sguess'],title:'La réponse est déjà préparée',text:'Quand le boîtier est activé, la date de mise en service est déduite. Tapez « Confirmer » pour essayer.',badge:true,click:'[data-rconf]'},
    {go:{hash:'stock'},sel:['.sfoot'],title:'Validez, le pourcentage monte',text:'Les réponses sont envoyées avec « Validez la sélection ». À 100 %, la déclaration est faite.',badge:true},
    {go:{hash:'bilan'},sel:['.mreg'],title:'Ou répondez depuis le mail du lundi',text:'Deux boutons par bateau : la réponse arrive préparée dans la déclaration.',badge:true},
    {go:{hash:'capteurs',capBoat:'b2'},sel:['.plan-blk'],title:'Nouveau : le bateau zone par zone',text:'Une pastille par équipement, colorée selon son état, et la liste des zones à droite. Tapez sur une pastille ou une ligne.',badge:true}
  ]}
};
let TOUR=null;
function tKey(k){try{return localStorage.getItem(k)}catch(_){return null}}
function tSet(k,v){try{localStorage.setItem(k,v)}catch(_){}}
function visibleEl(sels){for(const s of sels||[]){const el=[...document.querySelectorAll(s)].find(e=>{const r=e.getBoundingClientRect();return r.width>2&&r.height>2&&r.right>0&&r.left<innerWidth&&getComputedStyle(e).visibility!=='hidden'});if(el)return el}return null}
function startTour(name){closeNewsCard();TOUR={name,i:0,last:0};document.getElementById('tour').hidden=false;stepTour(0);}
function endTour(done){const n=TOUR&&TOUR.name;TOUR=null;const el=document.getElementById('tour');el.hidden=true;el.innerHTML='';
  if(n==='bienvenue'){tSet('sp-tour-done','1');}if(n==='nouveautes'||n==='bienvenue')tSet('sp-news-seen',TOURS.nouveautes.ver);
  if(n==='bienvenue'&&done)toast('Visite terminée');}
function stepTour(i){
  const steps=TOURS[TOUR.name].steps;if(i<0)i=0;if(i>=steps.length){endTour(true);return}
  TOUR.i=i;const s=steps[i];
  if(s.only&&S.user!==s.only){const d=i>=TOUR.last?1:-1;TOUR.last=i;return stepTour(i+d);}TOUR.last=i;
  if(s.go)goNode(s.go);
  setTimeout(()=>{const el=s.center?null:visibleEl(s.sel);if(el)el.scrollIntoView({block:'center',inline:'nearest',behavior:'instant'});setTimeout(()=>drawTour(el),40)},s.go?140:20);
}
function drawTour(el){
  if(!TOUR)return;const steps=TOURS[TOUR.name].steps,s=steps[TOUR.i],root=document.getElementById('tour');
  const W=innerWidth,H=innerHeight,pad=8;let hole='',r=null;
  if(el){const b=el.getBoundingClientRect();r={x:Math.max(4,b.left-pad),y:Math.max(4,b.top-pad),w:Math.min(W-8,b.width+pad*2),h:Math.min(H-8,b.height+pad*2)};
    const rr=10;hole=`M${r.x+rr},${r.y}H${r.x+r.w-rr}Q${r.x+r.w},${r.y} ${r.x+r.w},${r.y+rr}V${r.y+r.h-rr}Q${r.x+r.w},${r.y+r.h} ${r.x+r.w-rr},${r.y+r.h}H${r.x+rr}Q${r.x},${r.y+r.h} ${r.x},${r.y+r.h-rr}V${r.y+rr}Q${r.x},${r.y} ${r.x+rr},${r.y}Z`;}
  const vis=steps.map((x,k)=>k).filter(k=>!steps[k].only||steps[k].only===S.user),pos=vis.indexOf(TOUR.i),n=vis.length,last=pos===n-1,first=pos===0;
  root.innerHTML=`<svg class="tour-mask" width="${W}" height="${H}" aria-hidden="true"><path d="M0,0H${W}V${H}H0Z${hole}" fill-rule="evenodd"/></svg>
    ${r?`<div class="tour-ring" style="left:${r.x}px;top:${r.y}px;width:${r.w}px;height:${r.h}px"></div>`:''}
    <div class="tour-pop ${r?'':'center'}" role="dialog" aria-modal="true" aria-labelledby="tourt">
      <div class="tour-top">${s.badge?`<span class="chip c-new">Nouveau</span>`:`<span class="muted">${TOURS[TOUR.name].t}</span>`}<span class="muted">${pos+1} / ${n}</span></div>
      <h3 id="tourt">${esc(s.title)}</h3><p>${esc(s.text)}</p>
      ${s.click&&r?`<div class="tour-hint">${ic('sparkle',15)} Vous pouvez taper sur la zone éclairée.</div>`:''}
      <div class="tour-dots">${vis.map(k=>`<i class="${k===TOUR.i?'on':''}"></i>`).join('')}</div>
      <div class="tour-act">${last?'':`<button class="btn btn-ghost btn-sm" data-tour="skip">Passer</button>`}<span style="flex:1"></span>${first?'':`<button class="btn btn-out btn-sm" data-tour="prev">Précédent</button>`}<button class="btn btn-pri btn-sm" data-tour="next">${s.cta||(last?'Terminer':'Suivant')}</button></div>
    </div>`;
  const pop=root.querySelector('.tour-pop');
  if(r){const pw=pop.offsetWidth,ph=pop.offsetHeight,m=12;let top=r.y+r.h+m,left=r.x;
    if(top+ph>H-8){top=r.y-ph-m}if(top<8){top=Math.min(H-ph-8,Math.max(8,r.y+r.h/2-ph/2));left=r.x+r.w+m;if(left+pw>W-8)left=r.x-pw-m}
    left=Math.max(8,Math.min(W-pw-8,left));top=Math.max(8,Math.min(H-ph-8,top));pop.style.left=left+'px';pop.style.top=top+'px';}
  const nb=pop.querySelector('[data-tour="next"]');if(nb)nb.focus({preventScroll:true});
  if(el&&s.click){const tgt=typeof s.click==='string'?el.querySelector(s.click)||el:el;const h=()=>{tgt.removeEventListener('click',h,true);if(TOUR)setTimeout(()=>stepTour(TOUR.i+1),300)};tgt.addEventListener('click',h,true);}
}
document.addEventListener('click',e=>{const b=e.target.closest('[data-tour]');if(!b||!TOUR)return;e.stopPropagation();const a=b.dataset.tour;if(a==='next')stepTour(TOUR.i+1);else if(a==='prev')stepTour(TOUR.i-1);else endTour(false);},true);
document.addEventListener('keydown',e=>{if(!TOUR)return;if(e.key==='Escape'){e.preventDefault();endTour(false)}else if(e.key==='ArrowRight'&&!/INPUT|TEXTAREA/.test(document.activeElement.tagName))stepTour(TOUR.i+1);else if(e.key==='ArrowLeft'&&!/INPUT|TEXTAREA/.test(document.activeElement.tagName))stepTour(TOUR.i-1);});
let tRaf=0;const tRedraw=()=>{if(!TOUR)return;cancelAnimationFrame(tRaf);tRaf=requestAnimationFrame(()=>{const s=TOURS[TOUR.name].steps[TOUR.i];drawTour(s.center?null:visibleEl(s.sel))})};
addEventListener('resize',tRedraw);document.addEventListener('scroll',tRedraw,true);
/* Carte « Nouveau dans cette version » */
function showNewsCard(){const el=document.getElementById('newscard');if(!el)return;const N=TOURS.nouveautes;el.hidden=false;
  el.innerHTML=`<div class="nc-h"><span class="chip c-new">Nouveau</span><b>Dans la version ${N.ver}</b><button class="btn btn-ghost btn-sm" data-nc="close" aria-label="Fermer">${ic('x',14)}</button></div><p>${esc(N.intro)}</p><div class="nc-act"><button class="btn btn-ghost btn-sm" data-nc="later">Plus tard</button><button class="btn btn-pri btn-sm" data-nc="go">Voir en ${N.steps.length} étapes</button></div>`;}
function closeNewsCard(){const el=document.getElementById('newscard');if(el){el.hidden=true;el.innerHTML='';}}
document.addEventListener('click',e=>{const b=e.target.closest('[data-nc]');if(!b)return;const a=b.dataset.nc;if(a==='go')startTour('nouveautes');else{closeNewsCard();if(a==='close')tSet('sp-news-seen',TOURS.nouveautes.ver);}});
/* « Guide et nouveautés » dans le menu de l'app */
function showGuideCard(){const el=document.getElementById('newscard');if(!el)return;el.hidden=false;
  el.innerHTML=`<div class="nc-h">${ic('book',18)}<b>Guide et nouveautés</b><button class="btn btn-ghost btn-sm" data-nc="close" aria-label="Fermer">${ic('x',14)}</button></div>
  <button class="vitem gitem2" data-gstart="bienvenue"><span class="vv">${ic('sparkle',18)}</span><span class="vt"><b>Visite de l’app</b><span class="muted">Environ une minute</span></span></button>
  <button class="vitem gitem2" data-gstart="nouveautes"><span class="vv">${ic('star',18)}</span><span class="vt"><b>Ce qui est nouveau</b><span class="muted">${esc(TOURS.nouveautes.intro)}</span></span></button>`;}
document.addEventListener('click',e=>{
  if(e.target.closest('[data-guide]')){e.preventDefault();showGuideCard();document.getElementById('side').classList.remove('open');return;}
  const g=e.target.closest('[data-gstart]');if(g){startTour(g.dataset.gstart);return;}
});
function tourBoot(){
  if(new URLSearchParams(location.search).has('noguide'))return;
  setTimeout(()=>{if(!tKey('sp-tour-done'))startTour('bienvenue');else if(tKey('sp-news-seen')!==TOURS.nouveautes.ver)showNewsCard();},700);
}


/* ======================= Double vue : arborescence Seanapps Pro avant / après, reliée à l'app ======================= */
const APP_VERSION='v13';
const VERSIONS_FALLBACK=[
  {v:'v13',date:'2026-11-12',t:'Page Bateaux allégée : la liste ou la fiche, une seule à la fois, avec « À faire » en tête'},
  {v:'v12',date:'2026-11-12',t:'Profil fixé à la connexion (choix hors application), le directeur voit toutes les vues'},
  {v:'v11',date:'2026-11-12',t:'Guides : visite de bienvenue et nouveautés, écran assombri sauf la fonctionnalité montrée'},
  {v:'v10',date:'2026-11-12',t:'Déclaration de stock : bateaux à régulariser, mise en service en un clic'},
  {v:'v9',date:'2026-11-12',t:'Nouvelle vue du bateau : silhouette avec pastilles et liste des zones'},
  {v:'v8',date:'2026-11-12',t:'Toutes les icônes reprises de la bibliothèque Seanapps (bouton ⓘ compris)'},
  {v:'v7',date:'2026-11-12',t:'Guide des capteurs dans un bouton ⓘ, en haut de la page Capteurs'},
  {v:'v6',date:'2026-11-12',t:'Courbes : cartes comme avant, mois ou tout l’historique, vue d’ensemble qui croise les données'},
  {v:'v5',date:'2026-11-12',t:'Double vue : app + arborescence avant / après, versions'},
  {v:'v4',date:'2026-11-12',t:'Courbes : historique au mois, vues ensemble / individuelle, zoom'},
  {v:'v3',date:'2026-11-10',t:'Commercial : proposition en un clic avec message et lien produit'},
  {v:'v2',date:'2026-11-10',t:'Page Bateaux alignée sur Seanapps Pro, capteurs regroupés'},
  {v:'v1',date:'2026-11-10',t:'Premier prototype : tableau de bord par métier et capteurs'}
];
const ST={new:['Nouveau','c-new'],mod:['Modifié','c-yellow'],same:['Inchangé','c-grey'],gone:['N’existait pas','c-grey'],chg:['Change','c-yellow']};
const APRES=[
  {id:'search',n:1,t:'Recherche universelle',st:'new',k:['*search'],go:{focus:true},why:'169 capteurs aux noms techniques, en plusieurs langues, et une flotte qui grandit : sans recherche, on ne retrouve rien.',gain:'Un capteur, un bateau, un client ou un écran en 2 secondes, avec des recherches conseillées par métier.',bm:'Hors benchmark : besoin d’usage'},
  {id:'dash',n:2,t:'Tableau de bord',st:'mod',k:['dashboard'],go:{hash:'dashboard'},why:'Avant, un seul tableau pour tout le monde, avec des chiffres sans action à faire.',gain:'Chaque métier ouvre l’app sur ses 4 sujets du jour. Moins de bruit, plus de tâches traitées à temps.',bm:'N° 4 Ma journée · n° 11 Santé du compte',
    kids:[{dec:'Quel métier ?'},
      {id:'v-dir',t:'Vue Directeur',e:'directeur',st:'new',k:['dashboard:directeur'],go:{hash:'dashboard',role:'directeur'},why:'Le directeur veut l’état de la concession, pas le détail de chaque alerte.',gain:'Une vue d’ensemble en 4 cases : journée, parc, alertes, ventes et statut.',bm:'N° 1 Statut · n° 7 Tout est traité · n° 11 Santé du compte',chips:[['jour','Ma journée'],['parc','État du parc'],['alertes','Alertes capteurs'],['perf','Ventes et statut']]},
      {id:'v-com',t:'Vue Commercial',e:'commercial',st:'new',k:['dashboard:commercial'],go:{hash:'dashboard',role:'commercial'},why:'Les capteurs repèrent des besoins (batterie usée, capteur manquant) que personne ne transformait en vente.',gain:'Des ventes de capteurs et de services repérées automatiquement, avec le client à contacter.',bm:'Hors benchmark : levier de chiffre d’affaires',chips:[['opp','Ventes à proposer'],['ventes','Capteurs vendus'],['equip','Capteurs à poser'],['cat','Catalogue']]},
      {id:'v-tec',t:'Vue Technicien',e:'technicien',st:'new',k:['dashboard:technicien'],go:{hash:'dashboard',role:'technicien'},why:'Les alertes arrivaient dans les notifications, sans priorité ni diagnostic.',gain:'Les alertes classées par gravité, le diagnostic à distance et les boîtiers à vérifier : moins de déplacements inutiles.',bm:'N° 4 Ma journée · n° 11 Santé du compte',chips:[['alertes','Alertes ouvertes'],['diag','Diagnostic batterie'],['boitiers','Boîtiers hors ligne'],['mes','Mises en service']]},
      {id:'v-ate',t:'Vue Atelier',e:'atelier',st:'new',k:['dashboard:atelier'],go:{hash:'dashboard',role:'atelier'},why:'Les révisions se planifiaient de mémoire, sans les heures moteur réelles.',gain:'Les révisions prévues à partir des heures moteur, la charge de l’atelier par semaine et les pièces à commander.',bm:'Suit la saison nautique',chips:[['rev','Révisions'],['charge','Charge atelier'],['plan','Planning'],['pieces','Pièces']]},
      {id:'bilan',t:'Bilan du lundi',e:'chaque lundi, par e-mail',st:'new',k:['bilan'],go:{hash:'bilan'},why:'Les concessions qui n’ouvrent pas l’app tous les jours ratent les échéances.',gain:'Un e-mail court avec un lien direct vers chaque tâche : la concession revient agir.',bm:'N° 8 Bilan hebdomadaire'}]},
  {id:'cap',n:3,t:'Capteurs',st:'new',k:['capteurs'],go:{hash:'capteurs',capBoat:null,dev:null},why:'L’app Pro n’avait pas d’écran pour les capteurs : les 169 valeurs étaient illisibles pour la plupart des métiers.',gain:'Tout le parc d’un coup d’œil. Les problèmes ressortent en couleur, avec l’action à faire pour chaque métier.',bm:'N° 11 Santé du compte, à l’échelle de la flotte',
    kids:[
      {id:'grid',t:'Grille du parc',e:'ouverture',st:'new',k:['capteurs:grid'],go:{hash:'capteurs',capBoat:null,dev:null},why:'Comparer 41 bateaux capteur par capteur était impossible.',gain:'Une ligne par bateau, une colonne par capteur : seules les alertes ressortent.',bm:'N° 11 Santé du compte'},
      {id:'zoomcap',t:'Zoom sur un capteur',e:'tap sur une colonne',st:'new',k:['capteurs:dev'],go:{hash:'capteurs',capBoat:null,dev:'battS'},why:'Savoir combien de bateaux sont concernés par un même problème.',gain:'Équipés, en alerte, sans capteur, et la répartition du parc.',bm:'N° 2 Score avec actions (sans note)'},
      {dec:'Tap sur un bateau'},
      {id:'plan',t:'Le bateau zone par zone + journal',e:'oui',st:'new',k:['capteurs:boat'],go:{hash:'capteurs',capBoat:'b2'},why:'Les noms techniques du fichier ne parlent qu’aux techniciens.',gain:'Le bateau vu de dessus, zone par zone, avec l’histoire des derniers jours : compréhensible par tous.',bm:'Hors benchmark : lisibilité'},
      {id:'courbes',t:'Courbes et historique',e:'déplier',st:'new',k:['capteurs:boat:courbes'],go:{hash:'capteurs',capBoat:'b2',acc:{courbes:true}},why:'Sept jours ne suffisent pas pour comprendre une panne ou préparer un hivernage.',gain:'7 jours, un mois ou tout l’historique. La vue d’ensemble croise 2 courbes ou plus et dit en clair si elles sont liées.',bm:'Suit la saison nautique'},
      {id:'prop',t:'Proposer un produit',e:'commercial',st:'new',k:['*prop'],go:{hash:'capteurs',role:'commercial',capBoat:null,dev:null,prop:'b4|cale'},why:'Le commercial devait rédiger chaque proposition à la main.',gain:'Un message personnalisé avec le lien du produit, prêt à envoyer en un clic.',bm:'Récompenser le travail bien fait'},
      {id:'liste',t:'Guide des 169 capteurs (bouton ⓘ)',e:'référence',st:'new',k:['*liste'],go:{hash:'capteurs',capBoat:null,dev:null,info:true},why:'Le fichier mélange langues, unités et doublons.',gain:'Chaque capteur traduit en clair, avec sa famille et les métiers qui s’en servent.',bm:'Hors benchmark'}]},
  {id:'bat',n:4,t:'Bateaux',st:'mod',k:['bateaux'],go:{hash:'bateaux'},why:'La liste ne tenait pas avec une grande flotte et la mise en service était éclatée entre plusieurs écrans.',gain:'Même mise en page qu’aujourd’hui, mais des filtres, des pages et une checklist qui évite les oublis.',bm:'N° 3 Checklist de démarrage',
    kids:[
      {id:'blist',t:'La liste ou la fiche, une à la fois',e:'optimisé',st:'mod',k:['bateaux:fiche'],go:{hash:'bateaux',sel:'b2',bfOpen:true},why:'Liste et fiche en deux colonnes de blocs : trois panneaux côte à côte, trop d’informations d’un coup.',gain:'À l’ouverture, seulement la liste, avec ce qui est à faire sur chaque bateau. Un bateau ouvert prend tout l’écran : « À faire » d’abord, le reste se déplie à la demande.',bm:'Hors benchmark'},
      {id:'check',t:'Checklist de mise en service',e:'bateau en mise en service',st:'new',k:['bateaux:mes'],go:{hash:'bateaux',sel:'b1'},why:'Réception, stock, client, boîtier, livraison : des étapes oubliées.',gain:'« 3 étapes sur 5 » sur la fiche : chaque bateau livré remonte ses données.',bm:'N° 3 Checklist de démarrage'},
      {id:'bnotif',t:'Notifications → Capteurs',e:'fiche',st:'mod',k:['*bnotif'],go:{hash:'bateaux',sel:'b2'},why:'Les alertes n’étaient pas reliées au détail du bateau.',gain:'Le nombre d’alertes sur la fiche et un lien vers les capteurs, sans doublon.',bm:'N° 11 Santé du compte'}]},
  {id:'msg',n:5,t:'Messages',st:'mod',k:['messages'],go:{hash:'messages'},why:'Une alerte capteur entraîne souvent un message du client, traité sans délai visible.',gain:'Le délai de réponse affiché, et les propositions commerciales arrivent dans la conversation du client.',bm:'N° 10 Délai de réponse'},
  {id:'conc',n:6,t:'Ma concession',st:'new',k:['concession'],go:{hash:'concession'},why:'Rien ne valorisait la concession qui fait tout à temps.',gain:'Un statut trimestriel sur 3 critères, sans classement entre concessions.',bm:'N° 1 Statut à critères'},
  {id:'stockd',n:7,t:'Déclaration de stock',st:'mod',k:['stock'],go:{hash:'stock'},why:'Des bateaux restent « en stock » ou « en commande » des années après leur livraison : l’indicateur de mise en service est faussé.',gain:'Le stock reflète la réalité, et chaque mise en service oubliée est rattrapée en un clic.',bm:'N° 1 Statut à critères (stock déclaré) · n° 3 Checklist',
    kids:[
      {id:'reg',t:'À régulariser',e:'plus de 23 mois ou statut incohérent',st:'new',k:['*reg'],go:{hash:'stock'},why:'Le concessionnaire ne pense pas à mettre à jour un bateau livré il y a longtemps.',gain:'Une liste courte, 4 réponses possibles, et une réponse groupée pour plusieurs bateaux.',bm:'N° 4 Ma journée · n° 7 Tout est traité'},
      {id:'guess',t:'Mise en service déduite des données',e:'boîtier déjà activé',st:'new',k:['*guess'],go:{hash:'stock'},why:'Un boîtier activé ou une app client connectée prouvent que le bateau navigue.',gain:'La date est préparée : le concessionnaire n’a qu’à confirmer.',bm:'Hors benchmark : donnée existante'},
      {id:'mailreg',t:'Réponse depuis le Bilan du lundi',e:'sans ouvrir l’app',st:'new',k:['*mailreg'],go:{hash:'bilan'},why:'Certaines concessions n’ouvrent pas l’app chaque semaine.',gain:'Deux boutons par bateau dans le mail : la réponse arrive préparée dans la déclaration.',bm:'N° 8 Bilan hebdomadaire'}]},
  {id:'guides',n:8,t:'Guides',st:'new',k:['*guides'],go:{hash:'dashboard',tour:'bienvenue'},why:'Une concession qui découvre l’app ou une nouveauté ne sait pas où taper.',gain:'Une visite de bienvenue à la première ouverture, puis une carte « Nouveau » à chaque version : l’écran s’assombrit sauf ce qu’on montre.',bm:'N° 3 Checklist de démarrage (premiers pas)',
    kids:[
      {id:'g-bienv',t:'Visite de bienvenue',e:'première ouverture',st:'new',k:['*g1'],go:{tour:'bienvenue'},why:'Les nouveaux utilisateurs passent à côté des fonctions utiles.',gain:'10 étapes, environ une minute, et on peut taper sur la zone éclairée pour essayer.',bm:'Hors benchmark : prise en main'},
      {id:'g-news',t:'Nouveautés de la version',e:'à chaque version',st:'new',k:['*g2'],go:{tour:'nouveautes'},why:'Les nouveautés passent inaperçues si personne ne les montre.',gain:'Une carte discrète « Nouveau dans cette version », puis un guide en quelques étapes.',bm:'Hors benchmark : adoption'}]},
  {id:'same',n:9,t:'Écrans inchangés',st:'same',k:['clients','fleet','notifications','historique','partage','services','parametres'],go:{hash:'clients'},why:'Ces écrans fonctionnent : le prototype se concentre sur ce qui manque.',gain:'Aucun changement d’habitude pour les équipes.',bm:'—',
    chipsH:[['clients','Clients'],['fleet','Fleet'],['notifications','Notifications'],['historique','Historique'],['partage','Stock partagé'],['services','Services'],['parametres','Paramètres']]}
];
const AVANT=[
  {id:'a-dash',n:1,t:'Tableau de bord',st:'chg',k:['dashboard'],go:{hash:'dashboard',role:'directeur'},why:'Un seul tableau pour tous les métiers : ventes, stock, inspections, clientèle, connectivité.',gain:'Devient 4 vues par métier, avec des cases qui se déplient.',chipsS:['Mes ventes','État des stocks','Inspections à effectuer','Clientèle','Connectivité']},
  {id:'a-bat',n:2,t:'Bateaux',st:'chg',k:['bateaux'],go:{hash:'bateaux'},why:'Liste simple et fiche : équipement, abonnements, notifications, historique, documents.',gain:'Garde sa mise en page ; gagne filtres, pages, checklist et lien vers les capteurs.',chipsS:['Liste + recherche','Équipement et diagnostics','Gestion locative','Abonnements','Notifications','Historique','Documents','Préparer la mise en service']},
  {id:'a-cli',n:3,t:'Clients',st:'same',k:['clients'],go:{hash:'clients'},why:'Liste des propriétaires rattachés.',gain:'Inchangé.'},
  {id:'a-msg',n:4,t:'Messages',st:'chg',k:['messages'],go:{hash:'messages'},why:'Conversations avec les propriétaires.',gain:'Ajoute le délai de réponse et les propositions avec lien produit.'},
  {id:'a-fleet',n:5,t:'Fleet · Notifications',st:'same',k:['fleet','notifications'],go:{hash:'notifications'},why:'Gestion locative et alertes reçues.',gain:'Inchangé. Les alertes capteurs ont en plus leur propre écran.'},
  {id:'a-stock',n:6,t:'Stock',st:'chg',k:['stock','historique','partage'],go:{hash:'stock'},why:'Déclaration mensuelle : bateaux à confirmer et confirmés. Les bateaux livrés depuis longtemps restent « en stock ».',gain:'La déclaration gagne « À régulariser », avec la mise en service déduite des données.',chipsS:['Déclaration','Historique','Stock partagé']},
  {id:'a-cpt',n:7,t:'Compte',st:'chg',k:['services','parametres','concession'],go:{hash:'services'},why:'Services et paramètres.',gain:'Ajoute « Ma concession » et son statut.',chipsS:['Services','Paramètres']},
  {id:'a-none',t:'Ce qui n’existait pas',st:'gone',ghost:true,k:['capteurs','*search'],go:{hash:'capteurs',capBoat:null,dev:null},why:'Pas d’écran capteurs, pas de recherche globale, pas de statut concession ni de bilan.',gain:'Tout cela arrive dans la version « Après ».',chipsS:['Écran Capteurs','Recherche universelle','Statut concession','Bilan du lundi']}
];
S.tree={mode:'apres',sel:'dash'};
S.layout=(()=>{try{return localStorage.getItem('sp-layout')||(innerWidth<900?'app':'both')}catch(e){return innerWidth<900?'app':'both'}})();
function curKey(){const r=route();
  if(r==='dashboard')return `dashboard:${S.role}:${S.dtab[S.role]||''}`;
  if(r==='capteurs')return S.capBoat?('capteurs:boat'+(S.acc.courbes?':courbes':'')):(S.dev?'capteurs:dev':'capteurs:grid');
  if(r==='bateaux')return 'bateaux:'+(sel().steps?'mes':'fiche');
  return r;}
const isOn=n=>{const c=curKey();return (n.k||[]).some(k=>!k.startsWith('*')&&(c===k||c.startsWith(k+':')))};
function allNodes(L){const o=[];L.forEach(n=>{if(n.id)o.push(n);(n.kids||[]).forEach(k=>{if(k.id)o.push(k)})});return o}
function nodeHTML(n,main){
  if(n.dec)return `<div class="tdec"><span>${esc(n.dec)}</span></div>`;
  const on=isOn(n),s=ST[n.st];
  return `<div class="tnode ${main?'main':''} ${n.ghost?'ghost':''} ${on?'on':''} ${S.tree.sel===n.id?'picked':''}" data-tn="${n.id}" role="button" tabindex="0" aria-pressed="${S.tree.sel===n.id}">
    ${n.n?`<span class="tn">${n.n}</span>`:''}<div class="tt"><b>${esc(n.t)}</b><span class="chip ${s[1]}">${s[0]}</span></div>
    ${n.chips?`<div class="tchips">${n.chips.map(([d,l])=>`<button class="tchip ${S.role===n.go.role&&S.dtab[n.go.role]===d&&route()==='dashboard'?'on':''}" data-tc="${n.id}|${d}">${esc(l)}</button>`).join('')}</div>`:''}
    ${n.chipsH?`<div class="tchips">${n.chipsH.map(([h,l])=>`<button class="tchip ${route()===h?'on':''}" data-th="${h}">${esc(l)}</button>`).join('')}</div>`:''}
    ${n.chipsS?`<div class="tchips">${n.chipsS.map(l=>`<span class="tchip static">${esc(l)}</span>`).join('')}</div>`:''}
  </div>`;
}
function treeHTML(L){
  return `<div class="tflow">${L.map(n=>`<div class="tsec">
    ${nodeHTML(n,true)}
    ${n.kids?`<div class="tkids">${n.kids.map(k=>`<div class="tk">${k.e?`<span class="te">${esc(k.e)}</span>`:''}${nodeHTML(k,false)}</div>`).join('')}</div>`:''}
  </div>`).join('')}</div>`;
}
function detailHTML(){
  const n=allNodes(APRES).concat(allNodes(AVANT)).find(x=>x.id===S.tree.sel);
  if(!n)return `<div class="tdetail muted">Tapez sur une section : l’app à gauche s’y rend et le détail s’affiche ici.</div>`;
  const av=AVANT.includes(n);
  return `<div class="tdetail"><div class="tdh"><b>${esc(n.t)}</b><span class="chip ${ST[n.st][1]}">${ST[n.st][0]}</span></div>
    <div class="tdl">${av?'Avant':'Pourquoi'}</div><p>${esc(n.why)}</p>
    <div class="tdl">${av?'Ce qui change':'Ce que ça rapporte'}</div><p class="gain">${esc(n.gain)}</p>
    ${n.bm?`<div class="tdl">Benchmark</div><p class="muted">${esc(n.bm)}</p>`:''}</div>`;
}
function renderTree(){
  const el=document.getElementById('tree');if(!el)return;
  const m=S.tree.mode;
  el.innerHTML=`<div class="th">
      <div><b>Arborescence Seanapps Pro</b><div class="muted" style="font-size:12.5px">Tapez sur une section : l’app s’y rend.</div></div>
      <div class="seg" role="group" aria-label="Version de l’arborescence">${[['avant','Avant'],['apres','Après'],['comparer','Comparer']].map(([k,l])=>`<button data-tm="${k}" aria-pressed="${m===k}">${l}</button>`).join('')}</div>
    </div>
    <div class="tlegend"><span><span class="chip c-new">Nouveau</span></span><span><span class="chip c-yellow">Modifié</span></span><span><span class="chip c-grey">Inchangé</span></span><span class="muted">Contour bleu : écran affiché dans l’app</span></div>
    ${detailHTML()}
    <div class="tbody ${m==='comparer'?'cmp':''}">${m==='comparer'?`<div><div class="tcol">Avant</div>${treeHTML(AVANT)}</div><div><div class="tcol">Après</div>${treeHTML(APRES)}</div>`:treeHTML(m==='avant'?AVANT:APRES)}</div>`;
}
function goNode(g){
  if(!g)return;
  if(g.role){if(S.user!=='directeur'&&S.user!==g.role){S.user=g.role;try{localStorage.setItem('sp-user',g.role)}catch(_){}}S.role=g.role;try{localStorage.setItem('sp-role',g.role)}catch(_){}renderTop();}
  if(g.dtab&&g.role)S.dtab[g.role]=g.dtab;
  if('capBoat' in g)S.capBoat=g.capBoat;
  if('dev' in g)S.dev=g.dev;
  if(g.acc)Object.assign(S.acc,g.acc);
  if(g.sel){S.sel=g.sel;S.listOpen=false;}
  if(g.bfOpen!=null)S.bfOpen=g.bfOpen;
  if(S.layout==='tree')setLayout(innerWidth<900?'app':'both');
  if(g.hash){if(location.hash!=='#'+g.hash)location.hash='#'+g.hash;else render();}
  setTimeout(()=>{
    if(g.focus){const q=document.getElementById('gq');if(q)q.focus();}
    if(g.prop&&typeof openProp==='function')openProp(g.prop);
    if(g.info&&typeof openInfo==='function')openInfo();
    if(g.tour&&typeof startTour==='function')startTour(g.tour);
    if(g.scroll){const a=document.querySelector(`[data-acc="${g.scroll}"]`);if(a)a.scrollIntoView({block:'start',behavior:'smooth'});}
  },60);
}
function setLayout(l){S.layout=l;try{localStorage.setItem('sp-layout',l)}catch(_){}document.body.dataset.layout=l;renderTop();if(document.getElementById('explorer'))renderExplorer();}
function verBase(){const p=location.pathname;const i=p.indexOf('/versions/v');return i>=0?'../../':''}
let VERS=VERSIONS_FALLBACK,verOpen=false;
fetch(verBase()+'versions.json',{cache:'no-store'}).then(r=>r.ok?r.json():null).then(j=>{if(Array.isArray(j)&&j.length){VERS=j;renderTop();}}).catch(()=>{});
function renderTop(){
  const el=document.getElementById('topbar');if(!el)return;const b=verBase();
  el.innerHTML=`<div class="tb-l"><b>Prototype</b><span class="muted">hors application · données d’exemple${typeof BUILD!=='undefined'?` · mis à jour le ${BUILD}`:''}</span></div>
    <label class="tb-user"><span class="muted">Connecté en tant que</span><select id="tbuser" aria-label="Profil connecté">${ROLES.map(r=>`<option value="${r.id}" ${S.user===r.id?'selected':''}>${PEOPLE[r.id].n} · ${r.l}</option>`).join('')}</select></label>
    <div class="seg" role="group" aria-label="Affichage">${[['app','App'],['both','Les deux'],['tree','Arborescence']].map(([k,l])=>`<button data-lay="${k}" aria-pressed="${S.layout===k}">${l}</button>`).join('')}</div>
    <div class="vwrap"><button class="btn btn-out btn-sm" data-vers aria-expanded="${verOpen}">${ic('hist',16)} Versions · ${APP_VERSION}</button>
      ${verOpen?`<div class="vmenu" role="menu"><div class="muted" style="font-size:12px;padding:4px 8px 8px">Chaque version publiée reste disponible.</div>${VERS.map(v=>{const cur=v.v===APP_VERSION;const href=v.v===VERS[0].v?b+'index.html':b+'versions/'+v.v+'/index.html';
        return `<a class="vitem ${cur?'on':''}" href="${href}" role="menuitem"><span class="vv">${v.v}</span><span class="vt"><b>${esc(v.t)}</b><span class="muted">${v.date.split('-').reverse().join('/')}${v.v===VERS[0].v?' · la plus récente':''}</span></span>${cur?`<span class="chip c-new">Affichée</span>`:''}</a>`}).join('')}</div>`:''}</div>`;
}
document.addEventListener('click',e=>{
  const ly=e.target.closest('[data-lay]');if(ly){setLayout(ly.dataset.lay);return;}
  if(e.target.closest('[data-vers]')){verOpen=!verOpen;renderTop();return;}
  if(verOpen&&!e.target.closest('.vwrap')){verOpen=false;renderTop();}
  const tm=e.target.closest('[data-tm]');if(tm){S.tree.mode=tm.dataset.tm;renderTree();return;}
  const tc=e.target.closest('[data-tc]');if(tc){const [id,d]=tc.dataset.tc.split('|');const n=allNodes(APRES).find(x=>x.id===id);S.tree.sel=id;goNode({...n.go,dtab:d});renderTree();return;}
  const th=e.target.closest('[data-th]');if(th){S.tree.sel='same';goNode({hash:th.dataset.th});renderTree();return;}
  const tn=e.target.closest('[data-tn]');if(tn){const id=tn.dataset.tn;const n=allNodes(APRES).concat(allNodes(AVANT)).find(x=>x.id===id);S.tree.sel=id;goNode(n.go);renderTree();return;}
});
document.addEventListener('change',e=>{if(e.target.id==='tbuser')setUser(e.target.value);});
document.addEventListener('keydown',e=>{if((e.key==='Enter'||e.key===' ')&&e.target.dataset&&e.target.dataset.tn){e.preventDefault();e.target.click();}if(e.key==='Escape'&&verOpen){verOpen=false;renderTop();}});
/* ======================= Messages ======================= */
function vMessages(){
  const c=S.convs.find(x=>x.id===S.conv);
  return `<div class="msgs">
    <div class="listcol">
      <div class="lh"><div style="font-size:18px;font-weight:500">Messages</div>
        <div class="rt" style="box-shadow:none;border:1px solid var(--line);padding:12px">
          <div style="flex:1;min-width:0">
            <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap"><span class="muted" style="font-size:13px">Votre délai de réponse</span>${NEW}</div>
            <div class="big">2 h 10</div>
            <div class="muted" style="font-size:12.5px">Moyenne des 30 derniers jours · objectif réseau : moins de 4 h</div>
          </div>
        </div>
        <div style="display:flex;align-items:center;gap:10px;font-size:13.5px">
          <span class="toggle" id="ownTog" role="switch" tabindex="0" aria-checked="${S.showOwners}" aria-label="Afficher le délai aux propriétaires"></span>
          <span>Afficher « Répond en 2 h en moyenne » aux propriétaires dans l’app</span>
        </div>
        <div class="muted" style="font-size:12.5px">Pour l’instant, seuls vous et Bénéteau voyez ce chiffre.</div>
      </div>
      <div class="boats">${S.convs.map(x=>`
        <button class="conv ${x.id===S.conv?'on':''}" data-conv="${x.id}">
          <span class="boat" style="all:unset"><span class="av" style="width:34px;height:34px;border-radius:50%;background:var(--line-2);display:grid;place-items:center;font-weight:600;color:var(--ink-2)">${x.name[0]}</span></span>
          <span class="nm"><b>${x.name}</b> <span style="display:inline;font-size:12px">· ${x.boat}</span><span>${x.last}</span></span>
          <span style="display:flex;flex-direction:column;align-items:flex-end;gap:4px"><span class="muted" style="font-size:12px">${x.ago}</span>${x.unread?'<span class="dot" style="width:10px;height:10px"></span>':''}</span>
        </button>`).join('')}</div>
    </div>
    <div class="thread">
      <div class="th"><b style="font-size:16px">${c.name}</b><span class="muted">${c.boat}</span>${c.unread?`<span class="chip c-orange" style="margin-left:auto">${ic('clock',13,2)} Reçu ${c.ago}. Répondre ?</span>`:''}</div>
      <div class="bubbles" id="bubbles">${c.msgs.map(m=>`<div class="bub ${m.me?'me':''}">${linkify(m.t)}<small>${m.h}</small></div>`).join('')}</div>
      <form class="composer" id="compose">
        <label for="reply" class="muted" style="position:absolute;left:-9999px">Votre réponse</label>
        <textarea id="reply" rows="3" placeholder="Écrire à ${c.name}…">${c.unread&&c.id==='c1'?'Bonjour Jean, c’est souvent la batterie de service quand le bateau reste au port. Je regarde les données du boîtier et je vous rappelle avant midi.':''}</textarea>
        <button class="btn btn-pri" type="submit">${ic('send',18)} Envoyer</button>
      </form>
    </div>
  </div>`;
}

/* ======================= Ma concession ======================= */
function vConcession(){
  const cr=statusCrit();
  const ok=cr.filter(c=>c.v>=c.seuil).length;
  const all=ok===3;
  return `
  <div class="top"><div class="h1">Ma concession</div>${NEW}</div>
  <div class="wrap">
    <section class="card"><div class="card-b">
      <div class="status-hero">
        <div class="medal ${all?'get':''}">${ic('award',36,1.6)}</div>
        <div style="flex:1;min-width:220px">
          <div class="muted" style="font-size:13px;text-transform:uppercase;letter-spacing:.05em;font-weight:600">Statut « Concession Seanapps » · T4 2026</div>
          <div style="font-size:22px;font-weight:600;margin:2px 0">${all?'Vous avez le statut ce trimestre':`${ok} critère${ok>1?'s':''} sur 3 atteint${ok>1?'s':''}`}</div>
          <div class="muted">${all?'Il sera affiché sur votre fiche dans l’app propriétaire à partir du 1er janvier.':'Revu le 31 décembre. Il vous reste 51 jours.'}</div>
        </div>
        <a class="btn btn-out" href="#dashboard">Voir ce qu’il reste à faire</a>
      </div>
      <div style="margin-top:14px">${cr.map(c=>`
        <div class="crit">
          <span class="ci ${c.v>=c.seuil?'ok':'no'}">${ic(c.v>=c.seuil?'check':'clock',16,2.2)}</span>
          <div><b style="font-weight:500">${c.k}</b><div class="muted" style="font-size:12.5px">${c.why}</div></div>
          <span style="font-variant-numeric:tabular-nums;font-weight:600">${c.v} % <span class="muted" style="font-weight:400">/ ${c.seuil} %</span></span>
          <div class="mbar"><i style="width:${c.v}%;background:${c.v>=c.seuil?'var(--green)':'var(--orange)'}"></i><u style="left:${c.seuil}%"></u></div>
        </div>`).join('')}</div>
    </div></section>
    <div class="grid g2">
      <section class="card"><div class="card-h"><h3>Ce que le statut apporte</h3><span class="chip c-grey" style="margin-left:auto">À définir avec Bénéteau</span></div>
        <div class="card-b">
          <div class="perk"><span class="pi">${ic('star',16)}</span><div><b style="font-weight:500">Badge sur la fiche concession</b><div class="muted" style="font-size:13px">Visible par les propriétaires dans l’app Seanapps.</div></div></div>
          <div class="perk"><span class="pi">${ic('zap',16)}</span><div><b style="font-weight:500">Support prioritaire</b><div class="muted" style="font-size:13px">Réponse de l’équipe Seanapps en moins de 24 h.</div></div></div>
          <div class="perk"><span class="pi">${ic('target',16)}</span><div><b style="font-weight:500">Mise en avant dans le réseau</b><div class="muted" style="font-size:13px">Concession recommandée aux nouveaux propriétaires de la région.</div></div></div>
        </div></section>
      <section class="card"><div class="card-h"><h3>Comment ça marche</h3></div>
        <div class="card-b" style="color:var(--ink-2);display:flex;flex-direction:column;gap:8px">
          <div>Le statut est revu chaque trimestre sur 3 critères. Il n’y a ni points ni classement entre concessions.</div>
          <div>Une absence ou un trimestre creux ne fait pas perdre le statut tout de suite : il est gardé un trimestre de plus.</div>
          <div class="muted" style="font-size:12.5px">Inspiré d’Airbnb Superhost et d’Etsy Star Seller.</div>
        </div></section>
    </div>
  </div>`;
}

/* ======================= Bilan du lundi ======================= */
function vBilan(){
  const h=health();
  return `
  <div class="top"><a class="btn btn-ghost btn-sm" href="#dashboard">${ic('back',16)} Tableau de bord</a><span class="muted">Aperçu de l’e-mail envoyé chaque lundi à 8 h</span>${NEW}</div>
  <div class="wrap">
    <article class="mail">
      <div class="mh"><span><b style="color:var(--ink)">Seanapps Pro</b> · Lundi 9 novembre, 08:00</span><span>Objet : Votre semaine · 11 tâches traitées, 3 à venir</span></div>
      <div class="mb">
        <div class="logo" style="padding:0;font-size:22px"><span class="p">Pro.</span><span class="s">seanapps</span></div>
        <div><div class="muted" style="font-size:13px">Semaine du 2 au 8 novembre</div><h2>Bonne semaine passée, Laurine.</h2></div>
        <div class="mrow">
          <div class="mstat"><b>6</b><span>inspections faites</span></div>
          <div class="mstat"><b>3</b><span>bateaux déclarés en stock</span></div>
          <div class="mstat"><b>2 h 10</b><span>délai de réponse moyen</span></div>
        </div>
        <div>
          <b>Cette semaine</b>
          <div class="mlist">
            <a href="#bateaux" data-go-boat="b3"><span>Contrôle à 1 an · Test Boat (en retard)</span><span>Faire →</span></a>
            <a href="#stock"><span>Déclarer le stock de novembre</span><span>Déclarer →</span></a>
            <a href="#bateaux" data-go-boat="b1"><span>Activer le boîtier · Princess 3</span><span>Activer →</span></a>
          </div>
        </div>
        ${regLeft().length?`<div><b>À régulariser : répondez directement depuis ce mail</b><div class="muted" style="font-size:13px;margin:2px 0 8px">Ces bateaux sont en stock depuis longtemps ou ont un statut qui se contredit.</div>
          <div class="mreg">${regLeft().slice(0,3).map(r=>`<div class="mregrow"><div><b>${esc(r.name)}</b><div class="muted" style="font-size:12.5px">${esc(r.reasons[0])}</div></div><div class="mregbtn"><a href="#stock" data-rmail="${r.id}|livre">${r.guess?'Confirmer la mise en service':'Livré au client'}</a><a href="#stock" data-rmail="${r.id}|stock">Toujours en stock</a></div></div>`).join('')}</div>
          ${regLeft().length>3?`<a href="#stock" class="linkbtn">Voir les ${regLeft().length} bateaux à régulariser →</a>`:''}</div>`:''}
        <div class="health ${h.ok?'ok':'warn'}"><div class="ico">${ic(h.ok?'check':'pulse',20,2.2)}</div><div><b>${h.ok?'Parc en bonne santé':'Parc à surveiller'}</b><span style="font-size:13px">Statut « Concession Seanapps » : ${statusCrit().filter(c=>c.v>=c.seuil).length} critères sur 3 atteints ce trimestre.</span></div></div>
        <a class="btn btn-pri" href="#dashboard" style="justify-content:center;padding:13px">Ouvrir Seanapps Pro</a>
        <div class="muted" style="font-size:12px">Vous recevez ce bilan car vous êtes administrateur de la concession. Vous pouvez le désactiver dans Paramètres › Notifications.</div>
      </div>
    </article>
  </div>`;
}

/* ======================= Écrans inchangés ======================= */

function vEmpty(title){
  return `<div class="top"><div class="h1">${title}</div></div><div class="wrap"><div class="empty"><b>Écran inchangé</b><div style="margin-top:6px">Cet écran reste comme dans Seanapps Pro aujourd’hui. Le prototype se concentre sur le tableau de bord par métier et les capteurs.</div><div style="margin-top:14px;display:flex;gap:10px;justify-content:center;flex-wrap:wrap"><a class="btn btn-out" href="#dashboard">Tableau de bord</a><a class="btn btn-pri" href="#capteurs">Voir les capteurs</a></div></div></div>`;
}

/* ======================= Rendu + événements ======================= */
function toast(t){const el=document.getElementById('toast');el.innerHTML=ic('check',18,2.4)+t;el.classList.add('show');clearTimeout(toast._t);toast._t=setTimeout(()=>el.classList.remove('show'),2600);}
function render(){
  const r=route();
  const views={dashboard:vDashboard,capteurs:vCapteurs,bateaux:vBateaux,messages:vMessages,concession:vConcession,bilan:vBilan,stock:vStock,
    clients:()=>vEmpty('Clients'),fleet:()=>vEmpty('Fleet'),notifications:()=>vEmpty('Notifications'),historique:()=>vEmpty('Historique'),partage:()=>vEmpty('Stock partagé'),services:()=>vEmpty('Services'),parametres:()=>vEmpty('Paramètres')};
  const bl=document.getElementById('blist'),bs=bl?bl.scrollTop:0;
  for(const k in CH)delete CH[k];
  hideTip();
  document.getElementById('view').innerHTML=(views[r]||vDashboard)();
  renderNav();bindCharts();if(typeof syncSearchBar==='function')syncSearchBar();if(typeof renderTree==='function')renderTree();if(document.getElementById('explorer')&&typeof renderExplorer==='function')renderExplorer();
  const nb=document.getElementById('blist');if(nb&&bs)nb.scrollTop=bs;
  document.getElementById('side').classList.remove('open');
}
function doneTask(id,msg){const t=S.tasks.find(x=>x.id===id);if(t&&!t.done){t.done=true;if(id==='t4'){S.boats.find(b=>b.id==='b1').steps[3]=true;}if(id==='t3'){S.convs[0].unread=false;}if(msg)toast(msg);}}
function checkAllDone(){if(S.tasks.every(t=>t.done))toast('Tout est traité pour aujourd’hui');}
function updateList(){const r=listRows();const b=document.getElementById('lbody');if(b)b.innerHTML=r.html;const c=document.getElementById('lcount');if(c)c.textContent=r.n;}

document.addEventListener('click',e=>{
  if(e.target.closest('.nav a[href="#capteurs"]')){S.capBoat=null;if(route()==='capteurs'){render();return;}}
  const cbt=e.target.closest('[data-capboat]');
  if(cbt&&cbt.dataset.capboat){S.capBoat=cbt.dataset.capboat;if(route()==='capteurs'){e.preventDefault();render();document.getElementById('main').scrollTop=0;}return;}
  if(e.target.closest('[data-capback]')){S.capBoat=null;render();return;}
  if(e.target.closest('[data-bfopen]')){S.bfOpen=!S.bfOpen;render();return;}
  const bp=e.target.closest('[data-bpage]');if(bp){if(bp.disabled)return;S.bpage=+bp.dataset.bpage;updateBoats();const l=document.getElementById('blist');if(l)l.scrollTop=0;return;}
  if(e.target.closest('[data-fold]')){S.ficheOpen=!S.ficheOpen;render();return;}
  const lt=e.target.closest('[data-loctog]');if(lt){const id=lt.dataset.loctog;S.loc[id]=!S.loc[id];render();toast(S.loc[id]?'Gestion locative activée : bateau disponible depuis Fleet':'Gestion locative désactivée');return;}
  if(e.target.closest('[data-bclear]')){S.bq='';S.bpage=0;render();return;}
  if(e.target.closest('[data-blist]')){S.listOpen=true;render();document.getElementById('main').scrollTop=0;return;}
  const fs=e.target.closest('[data-fsec]');if(fs){const k=fs.dataset.fsec;S.fsec[k]=!S.fsec[k];render();return;}
  const fx=e.target.closest('[data-fx]');if(fx){S.fx[fx.dataset.fx]=!S.fx[fx.dataset.fx];render();return;}
  const a=e.target.closest('[data-go-boat]');
  if(a&&a.dataset.goBoat){S.sel=a.dataset.goBoat;S.listOpen=false;S.ftab=a.dataset.ftab||null;if(route()==='bateaux'){render();return;}}
  const ft=e.target.closest('[data-ftab]');
  if(ft&&!ft.dataset.goBoat&&ft.dataset.ftab){S.ftab=ft.dataset.ftab;render();return;}
  const bf=e.target.closest('[data-bf]');if(bf){S.bf=bf.dataset.bf;S.bpage=0;render();return;}
  if(e.target.closest('[data-bmore]')){S.blim+=20;updateBoats();return;}
  if(e.target.closest('[data-cmore]')){S.clim+=15;render();return;}
  if(e.target.closest('[data-alall]')){S.alAll=!S.alAll;render();return;}
  if(e.target.closest('[data-oppall]')){S.oppAll=!S.oppAll;render();return;}
  const cf=e.target.closest('[data-cf]');if(cf){S.cf=cf.dataset.cf;S.clim=15;render();return;}
  const dv=e.target.closest('[data-dev]');if(dv){const k=dv.dataset.dev;S.dev=(route()==='capteurs'&&S.dev===k)?null:(k||null);if(route()==='capteurs'){render();if(S.dev){const z=document.querySelector('.zoom');if(z)z.scrollIntoView({block:'nearest'});}}return;}
  const zn=e.target.closest('[data-zone]');if(zn){S.zone[S.capBoat||S.sel]=zn.dataset.zone;render();const f=document.querySelector(`[data-zone="${zn.dataset.zone}"]`);if(f&&f.tagName!=='BUTTON')f.focus({preventScroll:true});return;}
  const cb=e.target.closest('[data-cb]');
  if(cb&&cb.dataset.cb){S.cb=cb.dataset.cb;if(cb.tagName==='BUTTON'||route()==='capteurs'){render();document.getElementById('main').scrollTop=0;if(cb.tagName==='BUTTON')return;}}
  const ro=e.target.closest('[data-role]');
  if(ro){if(S.user!=='directeur')return;S.role=ro.dataset.role;try{localStorage.setItem('sp-role',S.role)}catch(_){}render();return;}
  const tick=e.target.closest('[data-tick]');
  if(tick){doneTask(tick.dataset.tick);render();checkAllDone();return;}
  if(e.target.closest('#resetDay')){S.tasks.forEach(t=>t.done=t.id==='t5');const b1=S.boats.find(b=>b.id==='b1');b1.steps=[true,true,true,false,false];b1.status='Mise en service';S.convs[0].unread=true;render();return;}
  if(e.target.closest('#mineTog')){S.capAll=!S.capAll;render();return;}
  const dt=e.target.closest('[data-dtab]');
  if(dt){S.dtab[S.role]=S.dtab[S.role]===dt.dataset.dtab?null:dt.dataset.dtab;render();return;}
  const ac=e.target.closest('[data-acc]');
  if(ac){const k=ac.dataset.acc;const was=S.acc[k]!==undefined?S.acc[k]:ac.dataset.def==='1';S.acc[k]=!was;render();const el=document.querySelector(`[data-acc="${k}"]`);if(el)el.focus({preventScroll:true});return;}
  const bt=e.target.closest('[data-boat]');
  if(bt){S.sel=bt.dataset.boat;S.listOpen=false;S.fsec={};render();document.getElementById('main').scrollTop=0;return;}
  const st=e.target.closest('[data-step]');
  if(st){const b=sel();if(b.steps){const i=+st.dataset.step;if(i===3&&!b.steps[3]&&b.steps[2]){b.steps[3]=true;if(b.id==='b1')doneTask('t4');toast('Boîtier activé · il remonte bien ses données');render();}else if(i===3&&!b.steps[2]){toast('Rattachez d’abord le propriétaire');}}return;}
  if(e.target.closest('#mes')){const b=sel();b.steps[4]=true;b.status='Livré';toast(`Mise en service terminée · ${b.owner} a reçu son accès`);render();checkAllDone();return;}
  if(e.target.closest('[data-insp]')){doneTask('t1','Inspection enregistrée');render();checkAllDone();return;}
  if(e.target.closest('#declare')){doneTask('t2','Stock de novembre déclaré');render();checkAllDone();return;}
  const cv=e.target.closest('[data-conv]');
  if(cv){S.conv=cv.dataset.conv;render();return;}
  if(e.target.closest('#ownTog')){S.showOwners=!S.showOwners;render();toast(S.showOwners?'Délai affiché aux propriétaires':'Délai visible seulement par vous et Bénéteau');return;}
  if(e.target.closest('#menuBtn')){document.getElementById('side').classList.toggle('open');return;}
});
document.addEventListener('keydown',e=>{
  if((e.key===' '||e.key==='Enter')&&(e.target.id==='ownTog'||e.target.id==='mineTog'||(e.target.dataset&&e.target.dataset.zone&&e.target.tagName!=='BUTTON'))){e.preventDefault();e.target.dispatchEvent(new MouseEvent('click',{bubbles:true}));}
});
document.addEventListener('submit',e=>{
  if(e.target.id!=='compose')return;
  e.preventDefault();
  const ta=document.getElementById('reply');const v=ta.value.trim();if(!v)return;
  const c=S.convs.find(x=>x.id===S.conv);
  c.msgs.push({me:true,t:v,h:'À l’instant'});c.last='Vous : '+v;c.ago='à l’instant';
  if(c.unread){c.unread=false;if(c.id==='c1')doneTask('t3');}
  render();toast('Message envoyé');checkAllDone();
  const bb=document.getElementById('bubbles');if(bb)bb.scrollTop=bb.scrollHeight;
});
document.addEventListener('input',e=>{
  if(e.target.id==='sq'){S.q=e.target.value;updateList();return;}
  if(e.target.id!=='q')return;
  S.bq=e.target.value;S.bpage=0;updateBoats();
});
document.addEventListener('change',e=>{if(e.target.id==='sf'){S.fam=e.target.value;updateList();}if(e.target.id==='bsort'){S.bsort=e.target.value;S.bpage=0;updateBoats();}if(e.target.id==='devsel'){S.dev=e.target.value;S.cf='all';S.clim=15;render();}});
window.addEventListener('hashchange',()=>{closeSearch();render();document.getElementById('main').scrollTop=0;});
document.body.dataset.layout=S.layout;renderTop();render();tourBoot();


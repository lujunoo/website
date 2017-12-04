

(function(globals) {

  var django = globals.django || (globals.django = {});

  
  django.pluralidx = function(count) { return (count == 1) ? 0 : 1; };
  

  /* gettext library */

  django.catalog = django.catalog || {};
  
  var newcatalog = {
    "Afghanistan": "\u963f\u5bcc\u6c57",
    "Aland Islands": "\u5965\u5170",
    "Albania": "\u963f\u5c14\u5df4\u5c3c\u4e9a",
    "Algeria": "\u963f\u5c14\u53ca\u5229\u4e9a",
    "Andorra": "\u5b89\u9053\u5c14",
    "Angola": "\u5b89\u54e5\u62c9",
    "Anguilla": "\u5b89\u572d\u62c9",
    "Antarctica": "\u5357\u6781",
    "Antigua and Barbuda": "\u5b89\u63d0\u74dc\u548c\u5df4\u5e03\u8fbe",
    "Argentina": "\u963f\u6839\u5ef7",
    "Armenia": "\u4e9a\u7f8e\u5c3c\u4e9a",
    "Aruba": "\u963f\u9c81\u5df4",
    "Australia": "\u6fb3\u5927\u5229\u4e9a",
    "Austria": "\u5965\u5730\u5229",
    "Azerbaijan": "\u963f\u585e\u62dc\u7586",
    "Bahamas": "\u5df4\u54c8\u9a6c",
    "Bahrain": "\u5df4\u6797",
    "Bangladesh": "\u5b5f\u52a0\u62c9\u56fd",
    "Barbados": "\u5df4\u5df4\u591a\u65af",
    "Belarus": "\u767d\u4fc4\u7f57\u65af",
    "Belgium": "\u6bd4\u5229\u65f6",
    "Belize": "\u4f2f\u5229\u5179",
    "Benin": "\u8d1d\u5b81",
    "Bermuda": "\u767e\u6155\u5927\u7fa4\u5c9b",
    "Bhutan": "\u4e0d\u4e39",
    "Bolivia, Plurinational State of": "\u73bb\u5229\u7ef4\u4e9a",
    "Bonaire, Sint Eustatius and Saba": "\u535a\u5948\u5c14",
    "Bosnia and Herzegovina": "\u6ce2\u65af\u5c3c\u4e9a\u548c\u9ed1\u585e\u54e5\u7ef4\u90a3",
    "Botswana": "\u535a\u8328\u74e6\u7eb3",
    "Bouvet Island": "\u5e03\u97e6\u5c9b",
    "Brazil": "\u5df4\u897f",
    "British Indian Ocean Territory": "\u82f1\u5c6c\u5370\u5ea6\u6d0b\u9818\u5730",
    "Brunei Darussalam": "\u6c76\u83b1",
    "Bulgaria": "\u4fdd\u52a0\u5229\u4e9a",
    "Burkina Faso": "\u5e03\u57fa\u7eb3\u6cd5\u7d22",
    "Burundi": "\u5e03\u9686\u8fea",
    "Cambodia": "\u67ec\u57d4\u5be8",
    "Cameroon": "\u5580\u9ea6\u9686",
    "Canada": "\u52a0\u62ff\u5927",
    "Cape Verde": "\u4f5b\u5f97\u89d2",
    "Cayman Islands": "\u5f00\u66fc\u7fa4\u5c9b",
    "Central African Republic": "\u4e2d\u975e\u5171\u548c\u56fd",
    "Chad": "\u4e4d\u5f97",
    "Chile": "\u667a\u5229",
    "China": "\u4e2d\u56fd",
    "Christmas Island": "\u5723\u8bde\u5c9b",
    "Click to subscribe to the FF newsletter": "\u70b9\u51fb\u8ba2\u9605FF\u6700\u65b0\u54a8\u8be2",
    "Cocos (Keeling) Islands": "\u79d1\u79d1\u65af\uff08\u57fa\u6797\uff09\u7fa4\u5c9b",
    "Colombia": "\u54e5\u4f26\u6bd4\u4e9a",
    "Comoros": "\u79d1\u6469\u7f57",
    "Confirm Email": "\u786e\u8ba4\u90ae\u7bb1",
    "Confirm Password": "\u786e\u8ba4\u5bc6\u7801",
    "Confirm Zipcode": "\u786e\u8ba4\u90ae\u653f\u7f16\u7801",
    "Congo": "\u521a\u679c",
    "Congo, the Democratic Republic of the": "\u521a\u679c\u6c11\u4e3b\u5171\u548c\u56fd",
    "Cook Islands": "\u79d1\u514b\u7fa4\u5c9b(\u65b0)",
    "Costa Rica": "\u54e5\u65af\u8fbe\u9ece\u52a0",
    "Cote d'Ivoire": "\u79d1\u7279\u8fea\u74e6",
    "Country is required": "\u56fd\u5bb6\u5fc5\u586b",
    "Create Account": "\u521b\u5efa\u8d26\u6237",
    "Croatia": "\u514b\u7f57\u5730\u4e9a",
    "Cuba": "\u53e4\u5df4",
    "Cura\u00e7ao": "\u5e93\u62c9\u7d22\u5c9b",
    "Cyprus": "\u585e\u6d66\u8def\u65af",
    "Czech Republic": "\u6377\u514b\u5171\u548c\u56fd",
    "Denmark": "\u4e39\u9ea6",
    "Djibouti": "\u5409\u5e03\u63d0",
    "Dominica": "\u591a\u7c73\u5c3c\u52a0",
    "Dominican Republic": "\u591a\u7c73\u5c3c\u52a0\u5171\u548c\u56fd",
    "Ecuador": "\u5384\u74dc\u591a\u5c14",
    "Egypt": "\u57c3\u53ca",
    "El Salvador": "\u8428\u5c14\u74e6\u591a",
    "Email": "\u7535\u5b50\u90ae\u7bb1",
    "Emails must match": "\u4e24\u6b21\u7535\u5b50\u90ae\u4ef6\u8f93\u5165\u4e0d\u4e00\u81f4",
    "Equatorial Guinea": "\u8d64\u9053\u51e0\u5185\u4e9a",
    "Eritrea": "\u5384\u7acb\u7279\u91cc\u4e9a",
    "Estonia": "\u7231\u6c99\u5c3c\u4e9a",
    "Ethiopia": "\u57c3\u585e\u4fc4\u6bd4\u4e9a",
    "Falkland Islands (Malvinas)": "\u798f\u514b\u5170\u7fa4\u5c9b",
    "Faroe Islands": "\u6cd5\u7f57\u7fa4\u5c9b(\u4e39)",
    "Fiji": "\u6590\u6d4e",
    "Finland": "\u82ac\u5170",
    "First Name": "\u540d",
    "First name is required": "\u540d\u5b57\u5fc5\u586b",
    "First name may not be longer than 40 characters": "\u540d\u5b57\u4e0d\u80fd\u957f\u4e8e40\u4e2a\u5b57\u7b26",
    "Forgot Password": "\u5fd8\u8bb0\u5bc6\u7801",
    "France": "\u6cd5\u56fd",
    "French Guiana": "\u6cd5\u5c5e\u572d\u4e9a\u90a3",
    "French Polynesia": "\u6cd5\u5c5e\u6ce2\u91cc\u5c3c\u897f\u4e9a",
    "French Southern Territories": "\u6cd5\u5c5e\u5357\u90e8\u9886\u5730",
    "Gabon": "\u52a0\u84ec",
    "Gambia": "\u5188\u6bd4\u4e9a",
    "Georgia": "\u683c\u9c81\u5409\u4e9a",
    "Germany": "\u5fb7\u56fd",
    "Ghana": "\u52a0\u7eb3",
    "Gibraltar": "\u76f4\u5e03\u7f57\u9640(\u82f1)",
    "Greece": "\u5e0c\u814a",
    "Greenland": "\u683c\u9675\u5170\u5c9b",
    "Grenada": "\u683c\u6797\u7eb3\u8fbe",
    "Guadeloupe": "\u74dc\u5fb7\u7f57\u666e\u5c9b(\u6cd5)",
    "Guatemala": "\u5371\u5730\u9a6c\u62c9",
    "Guernsey": "\u6839\u897f",
    "Guinea": "\u51e0\u5185\u4e9a",
    "Guinea-Bissau": "\u51e0\u5185\u4e9a\u6bd4\u7ecd",
    "Guyana": "\u572d\u4e9a\u90a3",
    "Haiti": "\u6d77\u5730",
    "Heard Island and McDonald Islands": "\u8d6b\u5fb7\u5cf6\u548c\u9ea5\u514b\u5510\u7d0d\u7fa4\u5cf6",
    "Holy See (Vatican City State)": "\u68b5\u8482\u5188",
    "Honduras": "\u6d2a\u90fd\u62c9\u65af",
    "Hong Kong": "\u9999\u6e2f",
    "Hungary": "\u5308\u7259\u5229",
    "I have read and understood the Faraday Future": "\u6211\u5df2\u9605\u8bfb\u5e76\u7406\u89e3 Faraday Future",
    "I'm interested in reserving an FF 91": "\u6211\u6709\u610f\u9884\u8ba2 FF91",
    "Iceland": "\u51b0\u5c9b",
    "India": "\u5370\u5ea6",
    "Indonesia": "\u5370\u5ea6\u5c3c\u897f\u4e9a",
    "Invalid Verification Code.": "\u77ed\u4fe1\u9a8c\u8bc1\u7801\u9519\u8bef",
    "Iran, Islamic Republic of": "\u4f0a\u6717",
    "Iraq": "\u4f0a\u62c9\u514b",
    "Ireland": "\u7231\u5c14\u5170",
    "Isle of Man": "\u9a6c\u6069\u5c9b",
    "Israel": "\u4ee5\u8272\u5217",
    "Italy": "\u610f\u5927\u5229",
    "Jamaica": "\u7259\u4e70\u52a0",
    "Japan": "\u65e5\u672c",
    "Jersey": "\u6cfd\u897f",
    "Jordan": "\u7ea6\u65e6",
    "Kazakhstan": "\u54c8\u8428\u514b\u65af\u5766",
    "Kenya": "\u80af\u5c3c\u4e9a",
    "Kiribati": "\u57fa\u91cc\u5df4\u65af",
    "Korea, Democratic People's Republic of": "\u671d\u9c9c",
    "Korea, Republic of": "\u97e9\u56fd",
    "Kuwait": "\u79d1\u5a01\u7279",
    "Kyrgyzstan": "\u5409\u5c14\u5409\u65af\u65af\u5766",
    "Lao People's Democratic Republic": "\u8001\u631d",
    "Last Name": "\u59d3\u6c0f",
    "Last name is required": "\u59d3\u6c0f\u5fc5\u586b",
    "Last name may not be longer than 40 characters": "\u59d3\u6c0f\u4e0d\u80fd\u8d85\u8fc740\u4e2a\u5b57\u7b26",
    "Latvia": "\u62c9\u8131\u7ef4\u4e9a",
    "Lebanon": "\u9ece\u5df4\u5ae9",
    "Lesotho": "\u83b1\u7d22\u6258",
    "Liberia": "\u5229\u6bd4\u91cc\u4e9a",
    "Libya": "\u5229\u6bd4\u4e9a",
    "Liechtenstein": "\u5217\u652f\u6566\u58eb\u767b",
    "Lithuania": "\u7acb\u9676\u5b9b",
    "Log In": "\u767b\u5f55",
    "Login": "\u767b\u5f55",
    "Luxembourg": "\u5362\u68ee\u5821",
    "Macao": "\u6fb3\u95e8",
    "Macedonia, the former Yugoslav Republic of": "\u9a6c\u5176\u987f",
    "Madagascar": "\u9a6c\u8fbe\u52a0\u65af\u52a0",
    "Malawi": "\u9a6c\u62c9\u7ef4",
    "Malaysia": "\u9a6c\u6765\u897f\u4e9a",
    "Maldives": "\u9a6c\u5c14\u4ee3\u592b",
    "Mali": "\u9a6c\u91cc",
    "Malta": "\u9a6c\u8033\u4ed6",
    "Martinique": "\u9a6c\u63d0\u5c3c\u514b(\u6cd5)",
    "Mauritania": "\u6bdb\u91cc\u5854\u5c3c\u4e9a",
    "Mauritius": "\u6bdb\u91cc\u6c42\u65af",
    "Mayotte": "\u9a6c\u7ea6\u7279\u5c9b",
    "Mexico,MX": "\u58a8\u897f\u54e5",
    "Moldova, Republic of": "\u6469\u5c14\u591a\u74e6",
    "Monaco": "\u6469\u7eb3\u54e5",
    "Mongolia": "\u8499\u53e4",
    "Montenegro": "\u9ed1\u5c71\u5171\u548c\u56fd",
    "Montserrat": "\u8499\u7279\u585e\u62c9\u7279\u5c9b(\u82f1)",
    "Morocco": "\u6469\u6d1b\u54e5",
    "Mozambique": "\u83ab\u6851\u6bd4\u514b",
    "Must be 6 digits": "\u5fc5\u987b\u4e3a6\u4f4d\u6570\u5b57",
    "Must be at least 8 characters and include at least one number, uppercase and lower case letter.": "\u957f\u5ea6\u5fc5\u987b\u81f3\u5c11\u4e3a8\u4e2a\u5b57\u7b26\u5e76\u4e14\u81f3\u5c11\u542b\u6709\u4e00\u4e2a\u6570\u5b57\u3001\u4e00\u4e2a\u5927\u5199\u5b57\u6bcd\u548c\u4e00\u4e2a\u5c0f\u5199\u5b57\u6bcd\u3002",
    "Must have at least one lowercase character": "\u81f3\u5c11\u8981\u6709\u4e00\u4e2a\u5c0f\u5199\u5b57\u6bcd",
    "Must have at least one number": "\u81f3\u5c11\u8981\u6709\u4e00\u4e2a\u6570\u5b57",
    "Must have at least one uppercase character": "\u81f3\u5c11\u8981\u6709\u4e00\u4e2a\u5927\u5199\u5b57\u6bcd",
    "Must have eight or more characters": "\u81f3\u5c11\u8981\u67098\u4e2a\u5b57\u7b26",
    "Myanmar": "\u7f05\u7538",
    "Name": "\u59d3\u540d",
    "Namibia": "\u7eb3\u7c73\u6bd4\u4e9a",
    "Nauru": "\u7459\u9c81",
    "Nepal": "\u5c3c\u6cca\u5c14",
    "Netherlands": "\u8377\u5170",
    "New Caledonia": "\u65b0\u5580\u91cc\u591a\u5c3c\u4e9a\u7fa4\u5c9b(\u6cd5)",
    "New Zealand": "\u65b0\u897f\u5170",
    "Nicaragua": "\u5c3c\u52a0\u62c9\u74dc",
    "Niger": "\u5c3c\u65e5\u5c14",
    "Nigeria": "\u5c3c\u65e5\u5229\u4e9a",
    "Niue": "\u7ebd\u57c3\u5c9b(\u65b0)",
    "Norfolk Island": "\u8bfa\u798f\u514b\u5c9b(\u6fb3)",
    "Norway": "\u632a\u5a01",
    "Oman": "\u963f\u66fc",
    "Pakistan": "\u5df4\u57fa\u65af\u5766",
    "Palau": "\u5e15\u52b3(\u7f8e)",
    "Palestine": "\u5df4\u52d2\u65af\u5766",
    "Panama": "\u5df4\u62ff\u9a6c",
    "Papua New Guinea": "\u5df4\u5e03\u4e9a\u65b0\u51e0\u5185\u4e9a",
    "Paraguay": "\u5df4\u62c9\u572d",
    "Password": "\u5bc6\u7801",
    "Passwords must match": "\u4e24\u6b21\u5bc6\u7801\u4e0d\u4e00\u81f4",
    "Peru": "\u79d8\u9c81",
    "Philippines": "\u83f2\u5f8b\u5bbe",
    "Phone Number": "\u624b\u673a\u53f7\u7801",
    "Pitcairn": "\u76ae\u7279\u51ef\u6069\u7fa4\u5c9b",
    "Please enter a valid U.S./Canada zip code.": "\u8bf7\u8f93\u5165\u6709\u6548\u7f8e\u56fd/\u52a0\u62ff\u5927\u90ae\u653f\u7f16\u7801",
    "Please enter valid email": "\u8bf7\u8f93\u5165\u6709\u6548\u90ae\u7bb1",
    "Please enter valid firstname": "\u8bf7\u8f93\u5165\u6709\u6548\u7684\u540d\u5b57",
    "Please enter valid lastname": "\u8bf7\u8f93\u5165\u6709\u6548\u7684\u59d3\u6c0f",
    "Please provide a valid phone number": "\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u624b\u673a\u53f7",
    "Please subscribe on our China region site.": "\u8bf7\u79fb\u6b65\u4e2d\u56fd\u533a\u7f51\u7ad9\u8ba2\u9605\u3002",
    "Please subscribe on our world site.": "\u8bf7\u79fb\u6b65\u82f1\u6587\u533a\u7f51\u7ad9\u8ba2\u9605\u3002",
    "Poland": "\u6ce2\u5170",
    "Portugal": "\u8461\u8404\u7259",
    "Privacy Policy": "\u9690\u79c1\u653f\u7b56",
    "Puerto Rico": "\u6ce2\u591a\u9ece\u5404",
    "Qatar": "\u5361\u5854\u5c14",
    "Register to Pre-Order": "\u9884\u7ea6",
    "Reunion": "\u7559\u5c3c\u6c6a\u5c9b",
    "Romania": "\u7f57\u9a6c\u5c3c\u4e9a",
    "Russian Federation": "\u4fc4\u7f57\u65af",
    "Rwanda": "\u5362\u65fa\u8fbe",
    "SMS Verification Code": "\u77ed\u4fe1\u9a8c\u8bc1\u7801",
    "Saint Barth\u00e9lemy": "\u5723\u5df4\u6cf0\u52d2\u7c73",
    "Saint Helena, Ascension and Tristan da Cunha": "\u5723\u8d6b\u52d2\u62ff",
    "Saint Kitts and Nevis": "\u5723\u57fa\u8328\u548c\u5c3c\u7ef4\u65af\u8054\u90a6",
    "Saint Lucia": "\u5723\u5362\u897f\u4e9a",
    "Saint Martin (French part)": "\u5723\u9a6c\u4e01\u5c9b",
    "Saint Pierre and Miquelon": "\u5723\u76ae\u57c3\u5c14\u5c9b\u53ca\u5bc6\u514b\u9686\u5c9b",
    "Saint Vincent and the Grenadines": "\u5723\u6587\u68ee\u7279\u548c\u683c\u6797\u7eb3\u4e01\u65af",
    "Samoa": "\u8428\u6469\u4e9a",
    "San Marino": "\u5723\u9a6c\u529b\u8bfa",
    "Sao Tome and Principe": "\u5723\u591a\u7f8e\u548c\u666e\u6797\u897f\u6bd4",
    "Saudi Arabia": "\u6c99\u7279\u963f\u62c9\u4f2f",
    "Select Country": "\u9009\u62e9\u56fd\u5bb6",
    "Select a city": "\u9009\u62e9\u57ce\u5e02",
    "Select your country of residence": "\u8bf7\u9009\u62e9\u60a8\u6240\u5728\u7684\u56fd\u5bb6",
    "Send Again": "\u518d\u6b21\u53d1\u9001",
    "Send Code": "\u53d1\u9001\u77ed\u4fe1\u9a8c\u8bc1\u7801",
    "Senegal": "\u585e\u5185\u52a0\u5c14",
    "Serbia": "\u585e\u5c14\u7ef4\u4e9a",
    "Seychelles": "\u585e\u820c\u5c14",
    "Sierra Leone": "\u585e\u62c9\u5229\u6602",
    "Sign Up": "\u8ba2\u9605",
    "Singapore": "\u65b0\u52a0\u5761",
    "Sint Maarten (Dutch part)": "\u8377\u5c5e\u5723\u9a6c\u4e01",
    "Slovakia": "\u65af\u6d1b\u4f10\u514b",
    "Slovenia": "\u65af\u6d1b\u6587\u5c3c\u4e9a",
    "Solomon Islands": "\u6240\u7f57\u95e8\u7fa4\u5c9b",
    "Somalia": "\u7d22\u9a6c\u91cc",
    "South Africa": "\u5357\u975e",
    "South Georgia and the South Sandwich Islands": "\u5357\u4e54\u6cbb\u4e9a\u548c\u5357\u6851\u5a01\u5947\u7fa4\u5c9b",
    "South Sudan": "\u5357\u82cf\u4e39",
    "Spain": "\u897f\u73ed\u7259",
    "Sri Lanka": "\u65af\u91cc\u5170\u5361",
    "Submit": "\u63d0\u4ea4",
    "Subscribe": "\u8ba2\u9605",
    "Subscribe to FF Updates": "\u8ba2\u9605FF\u6700\u65b0\u8d44\u8baf",
    "Sudan": "\u82cf\u4e39",
    "Suriname": "\u82cf\u91cc\u5357\u5171\u548c\u56fd",
    "Svalbard and Jan Mayen": "\u65af\u74e6\u5df4\u548c\u626c\u9a6c\u5ef6",
    "Swaziland": "\u65af\u5a01\u58eb\u5170",
    "Sweden": "\u745e\u5178",
    "Switzerland": "\u745e\u58eb",
    "Syrian Arab Republic": "\u53d9\u5229\u4e9a",
    "Taiwan": "\u53f0\u6e7e",
    "Tajikistan": "\u5854\u5409\u514b\u65af\u5766",
    "Tanzania, United Republic of": "\u5766\u6851\u5c3c\u4e9a",
    "Terms of Use": "\u4f7f\u7528\u6761\u6b3e",
    "Thailand": "\u6cf0\u56fd",
    "This field is required": "\u6b64\u9879\u4e3a\u5fc5\u586b\u9879",
    "Timor-Leste": "\u4e1c\u5e1d\u6c76",
    "Togo": "\u591a\u54e5",
    "Tokelau": "\u6258\u514b\u52b3\u7fa4\u5c9b",
    "Tonga": "\u6c64\u52a0",
    "Trinidad and Tobago": "\u7279\u7acb\u5c3c\u8fbe\u548c\u591a\u5df4\u54e5",
    "Tunisia": "\u7a81\u5c3c\u65af",
    "Turkey": "\u571f\u8033\u5176",
    "Turkmenistan": "\u571f\u5e93\u66fc\u65af\u5766",
    "Turks and Caicos Islands": "\u7279\u514b\u65af\u548c\u51ef\u79d1\u65af\u7fa4\u5c9b",
    "Tuvalu": "\u56fe\u74e6\u5362",
    "Uganda": "\u4e4c\u5e72\u8fbe",
    "Ukraine": "\u4e4c\u514b\u5170",
    "United Arab Emirates": "\u963f\u62c9\u4f2f\u8054\u5408\u914b\u957f\u56fd",
    "United Kingdom": "\u82f1\u56fd",
    "United States": "\u7f8e\u56fd",
    "United States Minor Outlying Islands": "\u7f8e\u56fd\u672c\u571f\u5916\u5c0f\u5c9b\u5c7f",
    "Uruguay": "\u4e4c\u62c9\u572d",
    "Uzbekistan": "\u4e4c\u5179\u522b\u514b\u65af\u5766",
    "Vanuatu": "\u74e6\u52aa\u963f\u56fe",
    "Venezuela, Bolivarian Republic of": "\u59d4\u5185\u745e\u62c9",
    "Viet Nam": "\u8d8a\u5357",
    "Virgin Islands, British": "\u7ef4\u5c14\u4eac\u7fa4\u5c9b",
    "Wallis and Futuna": "\u74e6\u91cc\u65af\u548c\u5bcc\u58eb\u90a3\u7fa4\u5c9b",
    "Website User Registration Agreement & Terms of Use": "\u7f51\u7ad9\u7528\u6237\u6ce8\u518c\u534f\u8bae & \u4f7f\u7528\u6761\u6b3e",
    "Western Sahara": "\u897f\u6492\u54c8\u62c9",
    "Yemen": "\u4e5f\u95e8",
    "You must agree to the terms & conditions": "\u60a8\u5fc5\u987b\u63a5\u53d7\u6b64\u6761\u6b3e\u624d\u80fd\u7ee7\u7eed",
    "Zambia": "\u8d5e\u6bd4\u4e9a",
    "Zimbabwe": "\u6d25\u5df4\u5e03\u97e6",
    "Zipcode": "\u90ae\u653f\u7f16\u7801",
    "and": "\u548c",
    "send": "\u53d1\u9001"
  };
  for (var key in newcatalog) {
    django.catalog[key] = newcatalog[key];
  }
  

  if (!django.jsi18n_initialized) {
    django.gettext = function(msgid) {
      var value = django.catalog[msgid];
      if (typeof(value) == 'undefined') {
        return msgid;
      } else {
        return (typeof(value) == 'string') ? value : value[0];
      }
    };

    django.ngettext = function(singular, plural, count) {
      var value = django.catalog[singular];
      if (typeof(value) == 'undefined') {
        return (count == 1) ? singular : plural;
      } else {
        return value[django.pluralidx(count)];
      }
    };

    django.gettext_noop = function(msgid) { return msgid; };

    django.pgettext = function(context, msgid) {
      var value = django.gettext(context + '\x04' + msgid);
      if (value.indexOf('\x04') != -1) {
        value = msgid;
      }
      return value;
    };

    django.npgettext = function(context, singular, plural, count) {
      var value = django.ngettext(context + '\x04' + singular, context + '\x04' + plural, count);
      if (value.indexOf('\x04') != -1) {
        value = django.ngettext(singular, plural, count);
      }
      return value;
    };

    django.interpolate = function(fmt, obj, named) {
      if (named) {
        return fmt.replace(/%\(\w+\)s/g, function(match){return String(obj[match.slice(2,-2)])});
      } else {
        return fmt.replace(/%s/g, function(match){return String(obj.shift())});
      }
    };


    /* formatting library */

    django.formats = {
    "DATETIME_FORMAT": "Y\u5e74n\u6708j\u65e5 H:i",
    "DATETIME_INPUT_FORMATS": [
      "%Y/%m/%d %H:%M",
      "%Y-%m-%d %H:%M",
      "%Y\u5e74%n\u6708%j\u65e5 %H:%M",
      "%Y/%m/%d %H:%M:%S",
      "%Y-%m-%d %H:%M:%S",
      "%Y\u5e74%n\u6708%j\u65e5 %H:%M:%S",
      "%Y/%m/%d %H:%M:%S.%f",
      "%Y-%m-%d %H:%M:%S.%f",
      "%Y\u5e74%n\u6708%j\u65e5 %H:%n:%S.%f",
      "%Y-%m-%d"
    ],
    "DATE_FORMAT": "Y\u5e74n\u6708j\u65e5",
    "DATE_INPUT_FORMATS": [
      "%Y/%m/%d",
      "%Y-%m-%d",
      "%Y\u5e74%n\u6708%j\u65e5"
    ],
    "DECIMAL_SEPARATOR": ".",
    "FIRST_DAY_OF_WEEK": "1",
    "MONTH_DAY_FORMAT": "m\u6708j\u65e5",
    "NUMBER_GROUPING": "4",
    "SHORT_DATETIME_FORMAT": "Y\u5e74n\u6708j\u65e5 H:i",
    "SHORT_DATE_FORMAT": "Y\u5e74n\u6708j\u65e5",
    "THOUSAND_SEPARATOR": "",
    "TIME_FORMAT": "H:i",
    "TIME_INPUT_FORMATS": [
      "%H:%M",
      "%H:%M:%S",
      "%H:%M:%S.%f"
    ],
    "YEAR_MONTH_FORMAT": "Y\u5e74n\u6708"
  };

    django.get_format = function(format_type) {
      var value = django.formats[format_type];
      if (typeof(value) == 'undefined') {
        return format_type;
      } else {
        return value;
      }
    };

    /* add to global namespace */
    globals.pluralidx = django.pluralidx;
    globals.gettext = django.gettext;
    globals.ngettext = django.ngettext;
    globals.gettext_noop = django.gettext_noop;
    globals.pgettext = django.pgettext;
    globals.npgettext = django.npgettext;
    globals.interpolate = django.interpolate;
    globals.get_format = django.get_format;

    django.jsi18n_initialized = true;
  }

}(this));


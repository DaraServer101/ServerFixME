// import React, { useState } from 'react';
// import "./Location.css";
// import image1 from './icons8-google-maps-24.png';
// import logo from './meeting.svg'
// import Header from './Header';
// import Footer from './Footer';
// const Location = () => {
//     const [data] = useState([
//         {
//             id: 1,
//             picture: image1,
//             name: 'Sok Sakhorn Garage',
//             contact: '069868869',
//             location: 'Central Market',
//             mapLink: 'https://goo.gl/maps/9dgkmDff11RAr11aA',
//         },
//         {
//             id: 2,
//             picture: image1,
//             name: 'Automotive Analyst Garage ',
//             contact: '098911645',
//             location: 'Hanoi Boulevard',
//             mapLink: 'https://goo.gl/maps/wvteFp6c4URQZ3G27',
//         },
//         {
//             id: 3,
//             picture: image1,
//             name: 'E.M.C Car Repair Garage',
//             contact: '095 599 774',
//             location: 'Khan Sen Sok',
//             mapLink: 'https://goo.gl/maps/813bDAAtNPTbs1qU8',
//         },
//         {
//             id: 4,
//             picture: image1,
//             name: 'DL Car Repairing Garage',
//             contact: '017 609 758',
//             location: 'Trapeang Po Village, Sangkat Kork Roka, Khan Prek Por',
//             mapLink: 'https://goo.gl/maps/ui5bpCWBT17vApTW8',
//         },
//         {
//             id: 5,
//             picture: image1,
//             name: 'Win Win Car Repair Garage',
//             contact: '099322988',
//             location: 'Street 42P',
//             mapLink: 'https://goo.gl/maps/vK5zyDq4kFCzM4186',
//         },
//         {
//             id: 6 ,
//             picture: image1,
//             name: 'Worldwide Garage',
//             contact: '012776842',
//             location: '# 79, St,Confederation de la Russie Blvd (110) , 12102',
//             mapLink: 'https://goo.gl/maps/Khj1vRgerqqhYBJm9',
//         },
//         {
//             id: 7,
//             picture: image1,
//             name: 'cheang ti Garage ',
//             contact: '078363699',
//             location: 'Street 1015',
//             mapLink: 'https://goo.gl/maps/BNe9ZYQS4nTjADPF8',
//         },
//         {
//             id: 8,
//             picture: image1,
//             name: 'Ung Kheang Vehicle Repair Garage',
//             contact: '012480850',
//             location: 'No. 167-169Eo, Oknha Tep Phorn Street',
//             mapLink: 'https://goo.gl/maps/7SbdoEDJ4RHvS9Us9',
//         },
//         {
//             id: 9,
//             picture: image1,
//             name: 'Song Heng Car Repairing Garage',
//             contact: '069991890',
//             location: 'Krala Hom Kong (St. 118), corner of Udong (St. 53)',
//             mapLink: 'https://goo.gl/maps/xDjkk4WKHT7tzq5E6',
//         },
//         {
//             id: 10,
//             picture: image1,
//             name: 'Keut Kheng Garage',
//             contact: '078777787',
//             location: 'No. 155A, St. 430,Corner of Street 199',
//             mapLink: 'https://goo.gl/maps/MbANpNpXujJVoyP87',
//         },
//         {
//             id: 11,
//             picture: image1,
//             name: 'Vannak Sina Car Repair Shop',
//             contact: '067588873',
//             location: '2120 NR5, Phnom Penh',
//             mapLink: 'https://goo.gl/maps/BA5yDfEnhn6RPaPR6',
//         },
//         {
//             id: 12,
//             picture: image1,
//             name: 'Dararech Auto Repair Center',
//             contact: '086433977',
//             location: 'Kok 2 #201, Street 608',
//             mapLink: 'https://goo.gl/maps/v63zU9T1qfA8cAdB8',
//         }
//
//     ]);
//     const [searchTerm, setSearchTerm] = useState('');
//     const [filteredData, setFilteredData] = useState(data);
//     const [comments, setComments] = useState([]);
//     const [input, setInput] = useState('');
//     const [rating, setRating] = useState(0);
//
//     const handleSearch = (e) => {
//         setSearchTerm(e.target.value);
//         setFilteredData(data.filter((item) => {
//             return (
//                 item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                 item.contact.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                 item.location.toLowerCase().includes(searchTerm.toLowerCase())
//             );
//         }));
//     };
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setComments([...comments, input]);
//         setInput('');
//     }
//
//     const handleDelete = (index) => {
//         setComments(comments.filter((comment, i) => i !== index));
//     }
//
//     return (
//         <>
//             <Header/>
//         <div>
//             <header style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
//                 <img src={logo} alt="logo" />
//             </header>
//             <div style={{display: 'flex', justifyContent: 'center', marginTop: '20px'}}><p1>Welcome to our location page</p1></div>
//             <div style={{display: 'flex', justifyContent: 'center', marginTop: '20px'}}>
//                 <input
//                     type="text"
//                     placeholder="Search"
//                     value={searchTerm}
//                     onChange={handleSearch}
//                     style={{width: '50%', padding: '10px'}}
//                 />
//             </div>
//             <div className="flex-container">
//                 <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
//                     {filteredData.map((item) => (
//                         <div key={item.id} style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '25%', margin: '10px'}}>
//                             <img src={item.picture} alt={item.name} width="60" height="60" />
//                             <div style={{marginTop: '10px'}}>
//                                 <p>{item.name}</p>
//                                 <p>{item.contact}</p>
//                                 <p>{item.location}</p>
//                                 <a href={item.mapLink} target="_blank" rel="noopener noreferrer">View on Map</a>
//                             </div>
//                             <div className="rating">
//                                 {[1, 2, 3, 4, 5].map(value => (
//                                     <span
//                                         key={value}
//                                         onClick={() => setRating(value)}
//                                         className={rating >= value ? 'selected' : ''}
//                                     >
//                                         &#9733;
//                                     </span>))}
//                                 <br />
//                                 <small>Rated {rating} out of 5</small>
//                             </div>
//                             <div className="comments-section">
//                                 <form onSubmit={handleSubmit}>
//                                     <input type="text" value={input} onChange={e => setInput(e.target.value)} />
//                                     <button type="submit">Submit</button>
//                                 </form>
//                                 <div className="comments">
//                                     {comments.map((comment, index) => (
//                                         <div className="comment" key={index}>
//                                             {comment}
//                                             <button type="button" onClick={() => handleDelete(index)}>Delete</button>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             {/*<footer>*/}
//             {/*    <div className="footer-bander">Not sure with any thing ?</div>*/}
//             {/*    <a href="https://t.me/Neak_Sokkim" className="footer-button">Contact Us</a>*/}
//             {/*    <div className="footer-icon">*/}
//             {/*        <a href="https://www.facebook.com/teb.yuma">*/}
//             {/*            <img src={require('./icons8-facebook-32.png')} alt="Facebook Icon" />*/}
//             {/*        </a>*/}
//             {/*        <a href="https://www.youtube.com/watch?v=7a4fqd-yW5Q&t=2s">*/}
//             {/*            <img src={require('./icons8-youtube-32.png')} alt="Youtube Icon" />*/}
//             {/*        </a>*/}
//             {/*        <a href="https://www.tiktok.com/@edmcambodia/video/7188560871239453979?is_from_webapp=1&sender_device=pc&web_id=7195870172095251970">*/}
//             {/*            <img src={require('./icons8-tiktok-32.png')} alt="TikTok Icon" />*/}
//             {/*        </a>*/}
//             {/*        <a href="https://t.me/Neak_Sokkim">*/}
//             {/*            <img src={require('./icons8-telegram-app-32.png')} alt="Telegram Icon" />*/}
//             {/*        </a>*/}
//             {/*    </div>*/}
//             {/*</footer>*/}
//         </div>
//             <Footer/>
//         </>
//     );
// };
//
// export default Location;

/* eslint-disable no-unused-vars */
import React from "react";
import '../component/Ashtavinayak.css';
import Seater40 from "../assets/Images/bus40 Seater.jpg";

import AshtavinayakImg3 from "../assets/Images/sedan etios.jpeg";
import AshtavinayakImg1 from "../assets/Images/20seaterbus.jpeg";
import AshtavinayakImg2 from "../assets/Images/35 seater.jpg";
import AshtavinayakImg7 from "../assets/Images/27.jpg";
import AshtavinayakImg8 from "../assets/Images/17.jpg";

import AshtavinayakImg4 from "../assets/Images/force urbania.jpg";
import AshtavinayakImg5 from "../assets/Images/Innova Crysta.jpeg";
import AshtavinayakImg6 from "../assets/Images/Ertiga.jpeg";
import { useNavigate } from "react-router-dom";
import Ashtavinayak5 from "../assets/Images/happy (1).png";
import imgA from "../assets/Images/ImgA.jpeg";
import imgB from "../assets/Images/imgB.jpeg";
import imgC from "../assets/Images/imgC.jpeg";
import imgD from "../assets/Images/imgD.jpeg";
import imgE from "../assets/Images/imgE.jpeg";
import imgF from "../assets/Images/imgF.jpeg";
import imgG from "../assets/Images/imgG.jpeg";
import imgH from "../assets/Images/imgH.jpeg";
import temple1 from "../assets/Images/ashtavinayak-morgaon-mayureshwar-ganpati-temple.jpeg";
import temple2 from "../assets/Images/Shri Siddhivinayak - Siddhatek.png";
import temple3 from "../assets/Images/Ballaleshwar-Pali-Ganpati-Temple.jpg";
import temple4 from "../assets/Images/varadavinayak-temple-7.jpg";
import temple5 from "../assets/Images/chintamani-temple-theur-3.jpg";
import temple6 from "../assets/Images/Shri Girijatmaj - Lenyadri.jpg";
import temple7 from "../assets/Images/shri_vighneshwarNew.jpeg";
import temple8 from "../assets/Images/ranjangaon-ganpati-temple.jpg";

const tourPackages = [  
  {
    id: 1,
    title: "Force Urbania 12 seater ",
    description:
      "A divine  pilgrimage combining Ashtavinayak temples with visits 2 days and 1 night,12 or 17 seater.",
    price: "₹ starting at 2999",
    rant:"Rent:- ₹2999/person",
    // rantnonac:"Rent:- 38 rs/km",
    image: AshtavinayakImg4,
  },

  {
    id: 2,
    title: "17 Seater Bus ",
    description:
      "A divine pilgrimage combining Ashtavinayak temples with visits 2 days and 1 night.",
      rant:"Rent:- ₹2999/person",
      // rantnonac:"Rent:- 27 rs/km Non - A/C",
      
    image: AshtavinayakImg8,
  },
  {
    id: 9,
    title: "20 Seater Bus ",
    description:
      "A divine pilgrimage combining Ashtavinayak temples with visits 2 days and 1 night.",
      rant:"Rent:- ₹2999/person",
      // rantnonac:"Rent:- 30 rs/km Non - A/C",
      
    image: AshtavinayakImg1,
  },
  { 
    id: 3,
    title: "27 Seater Bus ",
    description:
      "A divine pilgrimage combining Ashtavinayak temples with visits 2 days and 1 night.",
      rant:"Rent:- ₹2999/person",
      // rantnonac:"Rent:- 35 rs/km Non - A/C",
      
    image:AshtavinayakImg2  ,
  },
  {
    id: 4,
    title: "35 Seater Bus ",
    description:
      "A divine pilgrimage combining Ashtavinayak temples with visits 2 days and 1 night.",
    price: "₹ starting at 2999",
    rant:"Rent:- ₹2999/person",
    // rantnonac:"Rent:- 46 rs/km Non - A/C",
    image: AshtavinayakImg7    ,
  },

  {
    id: 5,
    title: " 40 Seater Bus  ",
    description:
      "A divine pilgrimage combining Ashtavinayak temples with visits 2 days and 1 night.",
      rant:"Rent:- ₹2999/person A/C",
      // rantnonac:" Rent:- 65  rs/km Non - A/C",

    image: Seater40,
  },
  { 
    id: 6,
    title: "Innova Crysta  ",
    description:
      "A divine pilgrimage combining Ashtavinayak temples with visits 2 days and 1 night.",
      rant:" Rent:- 20 rs/km",

    image: AshtavinayakImg5,
  },
  {
    id: 7,
    title: "Ertiga ",
    description:
      "Experience the Ashtavinayak Yatra with 2 days and 1 night, guided tours, and luxury travel.",
    price: "₹ starting at 2999",
    rant:" Rent:- 14 rs/km",
    image: AshtavinayakImg6,
  },

  {
    id: 8,
    title: "Sedan Etios ",
    description:
      "A spiritual journey covering the 2 days and 1 night revered Ashtavinayak temples in Maharashtra with comfortable travel and stay.",
    price: "₹ starting at 2999",
    rant:" Rent:- 11 rs/km",
    image: AshtavinayakImg3,
  },
 
 
  

 
  
];

const Ashtavinayak = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Ashtavinayak Tour</title> */}
      {/* <link
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        rel="stylesheet"
      /> */}


      <div className="first-img">
        <img src={Ashtavinayak5} alt="Ganesha Logo" />
      </div>
      
      <div className="book-tour">
        <h1>"अष्टविनायक यात्रा: श्रद्धा के आठ चरण, गणपति के संग पावन सफर! " </h1>
      </div>
      <div>
      <div className="container2">
      {/* First Section */}
      <div className="section">
        <img src={temple1 || "/placeholder.svg"} alt="Shri Mayureshwar" />
        <div className="info">
          <h3>श्री मयूरेश्वर - मोरगाव</h3>
          <p>
            श्री मयूरेश्वर गणपती मोरगाव येथे स्थित आहे आणि अष्टविनायक यात्रेचा प्रारंभबिंदू मानला जातो. ही मूर्ती स्वयंभू असल्याचे मानले जाते
            आणि ती नागाच्या कळ्यांनी अलंकृत आहे. हा गणपती समृद्धी आणि ज्ञानाचे प्रतीक आहे. हे मंदिर सुंदर अंगण आणि सुबक कोरीव कामाने सुशोभित
            आहे.
          </p>
        </div>
      </div>
      <div className="section">
        <div className="info">
          <h3>श्री सिद्धिविनायक - सिद्धटेक</h3>
          <p>
            श्री सिद्धिविनायक गणपती सिद्धटेक येथे स्थित आहे आणि भक्तांच्या प्रयत्नांना यश प्रदान करतो असे मानले जाते. ही मूर्ती अद्वितीय आहे,
            कारण तिचा सोंड उजव्या बाजूला वळलेला आहे. हे मंदिर एका टेकडीवर वसलेले असून जवळच निसर्गरम्य नदी आहे. असे म्हटले जाते की भगवान
            विष्णूने मधु आणि कैटभ या राक्षसांचा पराभव करण्यासाठी या गणपतीची पूजा केली होती.
          </p>
        </div>
        <img src={temple2 || "/placeholder.svg"} alt="Shri Siddhivinayak" />
      </div>
      {/* Second Section */}
      <div className="section">
        <img src={temple3 || "/placeholder.svg"} alt="Shri Ballaleshwar" />
        <div className="info">
          <h3>श्री बल्लाळेश्वर - पाली</h3>
          <p>
            श्री बल्लाळेश्वर गणपती हे एकमेव मंदिर आहे जे भक्त बल्लाळच्या नावाने ओळखले जाते. पाली येथे स्थित असलेले हे मंदिर ऐतिहासिक महत्त्व आणि
            शांत वातावरणासाठी प्रसिद्ध आहे. हे मंदिर पूर्वाभिमुख असून, सूर्योदयाच्या वेळी सूर्यकिरण मूर्तीवर पडतात.
          </p>
        </div>
      </div>
      <div className="section">
        <div className="info">
          <h3>श्री वरदविनायक - माहाड</h3>
          <p>
            श्री वरदविनायक गणपती माहाड येथे स्थित आहे आणि तो भक्तांची मनोकामना पूर्ण करतो असे मानले जाते. ही मूर्ती जवळच्या तलावात
            सापडली आणि मंदिरात स्थापित करण्यात आली. हे मंदिर त्याच्या साधेपणा आणि सौंदर्यासाठी प्रसिद्ध आहे. हिंदू मंदिरांमध्ये दुर्मिळ असलेली
            गोष्ट म्हणजे भक्तांना मूर्तीला थेट स्पर्श करून पूजा करण्याची परवानगी येथे दिली जाते.
          </p>
        </div>
        <img src={temple4 || "/placeholder.svg"} alt="Shri Varadvinayak" />
      </div>
      {/* Remaining Ashtavinayak Ganpatis */}
      <div className="section">
        <img src={temple5 } alt="Shri Chintamani" />
        <div className="info">
          <h3>श्री चिंतामणी - थेऊर</h3>
          <p>
            महाराष्ट्रातील थेऊर येथे स्थित श्री चिंतामणी मंदिर हे अष्टविनायक गणपती मंदिरांपैकी एक आहे. या मंदिराचे नाव चिंतामणी रत्नावरून
            पडले आहे, जे चिंता दूर करून मानसिक शांती प्रदान करण्याचे प्रतीक आहे. असे मानले जाते की श्री गणेशाने ऋषी कपिलांसाठी हे रत्न पुन्हा
            मिळवले आणि त्यांना शांतता प्रदान केली. या मंदिराला पेशव्यांच्या काळातील समृद्ध इतिहास आहे. माधवराव पेशव्यांनी येथे येऊन गणपतीच्या
            चरणी प्रार्थना केली होती. श्री चिंतामणी गणपतीची मूर्ती मौल्यवान अलंकारांनी सुशोभित असून, मंदिरात एक शांत आणि भक्तिमय
            वातावरण असते. भक्त येथे मानसिक शांती आणि शहाणपणासाठी श्री गणेशाचे आशीर्वाद घेण्यासाठी येतात.
          </p>
        </div>
      </div>
      <div className="section">
        <div className="info">
          <h3>श्री गिरिजात्मज - लेण्याद्री</h3>
          <p>
            महाराष्ट्रातील लेण्याद्रीच्या गुंफांमध्ये स्थित श्री गिरिजात्मज मंदिर भगवान गणेशाला समर्पित आहे, जिथे त्याची पूजा देवी पार्वती
            (गिरिजा) यांचा पुत्र म्हणून केली जाते. हे अनोखे अष्टविनायक मंदिर प्राचीन बौद्ध गुंफांमध्ये वसलेले आहे, ज्यामुळे त्याला ऐतिहासिक म��त्त्व
            प्राप्त झाले आहे. भक्तांना या शांत टेकडीवरील मंदिर गाठण्यासाठी ३०७ पायऱ्या चढाव्या लागतात. हे मंदिर माता आणि पुत्र यांच्यातील
            दिव्य नात्याचे प्रतीक असून, कुटुंबाच्या कल्याणासाठी आणि सामर्थ्यासाठी भक्त येथे दर्शनाला येतात.
          </p>
        </div>
        <img src={temple6 || "/placeholder.svg"} alt="Shri Girijatmaj" />
      </div>
      <div className="section">
        <img src={temple7} alt="Shri Vigneshwar" />
        <div className="info">
          <h3>श्री विघ्नेश्वर - ओझर</h3>
          <p>
            महाराष्ट्रातील ओझर येथे स्थित श्री विघ्नेश्वर मंदिर भगवान गणेशाला विघ्नहर्ता म्हणून समर्पित आहे. हे मंदिर आपल्या अप्रतिम दगडी
            कोरीव कामासाठी, सोन्याच्या पत्र्याने मढवलेल्या गुम्बजासाठी, आणि सभोवतालच्या खोल तळ्यासाठी प्रसिद्ध आहे. पुराणानुसार, श्री
            गणेशाने येथे विघ्नासुर राक्षसाचा पराभव केला, जो अडथळ्यांवर विजयाचे प्रतीक मानले जाते. मंदिरातील शांत आणि पवित्र वातावरण
            भक्तांना यश आणि संरक्षणाच्या आशीर्वादासाठी आकर्षित करते. हे अष्टविनायक मंदिरांपैकी एक प्रमुख मंदिर आहे.
          </p>
        </div>
      </div>
      <div className="section">
        <div className="info">
          <h3>श्री महागणपती - रांजणगाव</h3>
          <p>
            रांजणगाव येथील श्री महागणपती मंदिर भगवान गणेशाच्या अत्यंत शक्तिशाली रूपाला समर्पित आहे. असे मानले जाते की भगवान शिवाने
            त्रिपुरासुर राक्षसाचा पराभव करण्यापूर्वी येथे गणेशाची पूजा केली होती. हे मंदिर पेशवा काळातील स्थापत्यशैलीने सजलेले आहे आणि येथे
            असलेली मूर्ती सामर्थ्य आणि विजयाचे प्रतीक मानली जाते. भक्त येथे यश, समृद्धी आणि अडथळे दूर करण्याच्या आशीर्वादासाठी दर्शनास
            येतात.
          </p>
        </div>
        <img src={temple8} alt="Shri Mahaganpati" />
      </div>
    </div>
{/*  */}
<div className="container">
        <div className="places">
          <h2>Explore All 8 Spiritual Places</h2>
          <div className="circle-container">
            <div className="line" />
            <div className="circle">
              <img src={imgA} alt="Place 1" />
              <div className="tooltip">Shri Mayureshwar</div>
            </div>
            <div className="circle">
              <img src={imgB} alt="Place 2" />
              <div className="tooltip">Shri Siddhivinayak </div>
            </div>
            <div className="circle">
              <img src={imgC} alt="Place 3" />
              <div className="tooltip">Shri Ballaleshwar </div>
            </div>
            <div className="circle">
              <img src={imgD} alt="Place 4" />
              <div className="tooltip">Shri Varadvinayak </div>
            </div>
            <div className="circle">
              <img src={imgE} alt="Place 5" />
              <div className="tooltip">Shri Chintamani </div>
            </div>
            <div className="circle">
              <img src={imgF} alt="Place 6" />
              <div className="tooltip">Shri Girijatmaj </div>
            </div>
            <div className="circle">
              <img src={imgG} alt="Place 7" />
              <div className="tooltip">Shri Vigneshwar </div>
            </div>
            <div className="circle">
              <img src={imgH} alt="Place 8" />
              <div className="tooltip">Shri Mahaganpati </div>
            </div>
          </div>
        </div>
      </div>
        <div className="containers">
          <div className="grid">
            {tourPackages.map((pkg) => (
              <div key={pkg.id} className="tour-card">
                <img src={pkg.image} alt={pkg.title} className="tour-image" />
                <h3 className="tour-title">{pkg.title}</h3>
                <p className="tour-description">{pkg.description}</p>
                <p className="tour-price">{pkg.rant}</p>
                <p className="tour-price">{pkg.rantnonac}</p>

                <button className="book-button" onClick={() => navigate("/")}>
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Ashtavinayak;



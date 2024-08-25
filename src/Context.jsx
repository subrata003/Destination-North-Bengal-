import React, { useContext, useReducer } from "react"
import { Reducer } from "./store/Reducer"

const AppContext = React.createContext()
const intialState = {
   banner: "",
   heading: "",
   name: "",
   para: "",
   reach: "",
   reachimg: "",
   reachtext: "",
   reachpara: "",
   img1: "",
   img2: "",
   img3: "",
   img4: "",
   img5: "",
   img6: "",
   img7: "",
   img8: "",
   img9: "",
   img10: ""
}

export const AppProvider = ({ children }) => {
   const [state, dispatch] = useReducer(Reducer, intialState)
   const updatedarjeeling = () => {
      return dispatch(
         {
            type: "darjeeling",
            payload: {
               banner: "https://wallpapercave.com/wp/wp6191565.jpg",
               heading: "Darjeeling",
               name: "Darjeeling,",
               para: "nestled in the foothills of the Himalayas in West Bengal, India, is a picturesque hill station renowned for its breathtaking vistas, lush tea gardens, and vibrant cultural heritage. Often referred to as the Queen of the Hills, Darjeeling offers stunning panoramic views of snow-capped peaks, including the majestic Kanchenjunga, the third-highest mountain in the world. The town's cool climate and charming colonial architecture add to its allure, making it a popular retreat for tourists seeking respite from the heat of the plains. The Darjeeling Himalayan Railway, a UNESCO World Heritage site, is a marvel of engineering that winds through the rugged terrain, offering an unforgettable journey. Darjeeling tea, celebrated globally for its unique flavor and aroma, is a cornerstone of the local economy and a symbol of the region's rich agricultural tradition. The vibrant local culture, influenced by a blend of Nepali, Tibetan, and British colonial heritage, is reflected in its festivals, cuisine, and the warmth of its people. Whether exploring the bustling markets, visiting serene monasteries, or simply soaking in the natural beauty, Darjeeling promises an enchanting experience that lingers long after the visit.",
               reach: "How we can reach Darjeeling",
               reachimg: "https://assets.telegraphindia.com/telegraph/2023/May/1683590136_new-project-8.jpg",
               reachtext: "Reaching Darjeeling,",
               reachpara: "the scenic hill station in West Bengal, is an adventure that adds to the charm of your travel experience. The nearest airport is Bagdogra Airport, located about 70 kilometers away, which is well-connected with major cities in India like Delhi, Kolkata, and Guwahati. From the airport, you can hire a taxi or take a shared jeep to Darjeeling, a journey that takes approximately 3-4 hours through winding mountain roads offering breathtaking views. Alternatively, New Jalpaiguri (NJP) is the closest major railway station, around 62 kilometers from Darjeeling. From NJP, you can either opt for a taxi or experience the iconic Darjeeling Himalayan Railway, popularly known as the Toy Train, which offers a picturesque and leisurely ride through the hills, though it takes about 7 hours. For those preferring road travel, Darjeeling is accessible by bus and private vehicle from nearby towns like Siliguri, Kalimpong, and Gangtok. The well-maintained roads, surrounded by lush tea gardens and panoramic vistas of the Himalayas, make the drive a memorable part of the trip.",
               img1: "https://teleanalysis.com/wp-content/uploads/2024/03/Explore-Darjeeling-Tourist-Places-Hidden-Gems.jpg",
               img2: "https://media.istockphoto.com/id/504541675/photo/historic-train.jpg?s=612x612&w=0&k=20&c=Jsrij5G1kRoe54YvPswpL9-VPc5MUiykvD7ogLUdVOs=",
               img3: "https://miro.medium.com/v2/resize:fit:1400/1*veC95kdYnLX4auFNmPyP8Q.png",
               img4: "https://oneday.travel/wp-content/uploads/one-day-darjeeling-local-sightseeing-tour-package-private-cab-header-1568x1045.jpg",
               img5: "https://curioustimes.in/wp-content/uploads/2024/04/Explore-Darjeeling.jpg",
               img6: "https://img.traveltriangle.com/apac/attachments/pictures/1088102/original/Darjeeling_Ropeway_is_a_ropeway_in_the_town_of_Darjeeling.jpg",
               img7: "https://www.indiatravel.app/wp-content/uploads/2024/02/places-to-visit-in-darjeeling.jpg",
               img8: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/449967271.jpg?k=92be7bd7ffa456a575e7f5e9c26ec2b21cbae366c4da7f08c2d3c5554f029919&o=&hp=1",
               img9: "https://i0.wp.com/www.chhuti.com/wp-content/uploads/2023/06/Trip_Darjeeling_Toy_Train_003.jpg?fit=1920%2C1080&ssl=1",
               img10: "https://www.indiatravel.app/wp-content/uploads/2024/02/darjeeling-himalayan-railway-1024x585.jpg"
            }
         }
      )
   }

   const updatesikkim = () => {
      return dispatch(
         {
            type: "sikkim",
            payload: {
               banner: "https://www.esikkimtourism.in/wp-content/uploads/2018/10/ravangla-bnnnr.jpg",
               heading: "Sikkim",
               name: "Sikkim,",
               para: "is a small, landlocked state in the Eastern Himalayas, located in the northern part of India. It shares borders with Nepal, Bhutan, and West Bengal. Sikkim has a rich cultural heritage and is known for its breathtaking natural beauty, including the Himalayan range, alpine lakes, and picturesque valleys. The state is also home to several ethnic groups, including the Lepcha, Limbu, and Bhutia communities. Sikkim is also an agricultural hub, producing a variety of crops such as potatoes, cardamom, and tea. It is a popular tourist destination, especially for trekking and adventure activities.",
               reach: "How we can reach Sikkim",
               reachimg: "https://www.prabhatkhabar.com/wp-content/uploads/2024/01/sikkim.jpeg",
               reachtext: "Reaching Sikkim,",
               reachpara: "a picturesque state in northeastern India, is well-connected by air, rail, and road, making it accessible for travelers from various parts of the country and abroad. The nearest airport is Bagdogra Airport in West Bengal, which is about 124 kilometers from Gangtok, Sikkim's capital. From Bagdogra, you can take a taxi or a shared jeep to Gangtok. Alternatively, there are helicopter services from Bagdogra to Gangtok, offering a quicker and scenic option. For those traveling by train, the nearest major railway station is New Jalpaiguri (NJP), also in West Bengal, around 148 kilometers from Gangtok. From NJP, taxis and shared jeeps are available for the journey to Sikkim. Road travel is another viable option, with well-maintained roads connecting Sikkim to neighboring states. Buses and private taxis operate from major cities like Siliguri and Darjeeling, providing a comfortable and scenic drive to Sikkim.",
               img1: "https://www.tripsavvy.com/thmb/LV9cMvf0PkFRA1hO6-CfTyFBxgs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-606222988-5a823cff1d64040037dfd9a1.jpg",
               img2: "https://ihplb.b-cdn.net/wp-content/uploads/2021/09/places-to-visit-in-sikkim-in-december.png",
               img3: "https://www.gosikkim.in/wp-content/uploads/2023/05/TRAVEL-TIPS-Sikkim-800x445.jpg",
               img4: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYsGor1_xTFPdNWzASFugEp1_TyZOWAooG3g&s",
               img5: "https://www.hindustantimes.com/ht-img/img/2023/12/01/1600x900/north_sikkim_bridge_lachen_chungthang_1700121054180_1701430818598.jpg",
               img6: "https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2023/11/Sikkim-Coolest-Places-min.jpg?fit=1200%2C676&ssl=1",
               img7: "https://images.thequint.com/thequint/2016-05/e2e00c02-e881-4fd7-a9f8-9dbb966358c8/sikkim-4-Cropped---Copy.jpg?auto=format,compress&fmt=webp&format=webp&w=1200&h=900&dpr=1.0",
               img8: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Vikramjit-Kakati-Rumtek.jpg/478px-Vikramjit-Kakati-Rumtek.jpg",
               img9: "https://1001things.org/wp-content/uploads/2019/02/Lingdum-6.jpg",
               img10: "https://media.assettype.com/outlooktraveller%2F2023-11%2F8a6b2722-c6b8-46a2-965b-c6206c724d97%2Fshutterstock_2155894593__1_.jpg"
            }
         }
      )
   }

   const updatedooars = () => {
      return dispatch(
         {
            type: "dooars",
            payload: {
               banner: "https://www.majestichimalayan.com/images/upload/1519460153dooars.jpg",
               heading: "Dooars",
               name: "Dooars,",
               para: "is a region located in the Indian states of West Bengal and Assam. It refers to the foothills of the Eastern Himalayas and the Brahmaputra Plains. The region is known for its natural beauty, with lush green forests, rolling hills, and numerous rivers. Dooars is also home to various tribes and communities, each with their unique culture and traditions. The region is a popular tourist destination, attracting visitors with its scenic beauty, adventure sports, and rich cultural heritage.",
               reach: "How we can reach Dooars",
               reachimg: "https://www.siliguricab.com/wp-content/uploads/2023/02/tusker3.jpeg",
               reachtext: "Reaching Dooars,",
               reachpara: "Reaching Dooars, a picturesque region in the foothills of the Eastern Himalayas, is a journey filled with scenic beauty and cultural richness. The most convenient way to reach Dooars is by train or flight to New Jalpaiguri (NJP) or Bagdogra Airport, both located near Siliguri in West Bengal. From NJP or Bagdogra, you can hire a taxi or take a bus to Dooars, which is approximately 70-100 kilometers away. The road trip from Siliguri to Dooars offers breathtaking views of tea gardens, lush forests, and meandering rivers, setting the perfect tone for your adventure. Whether you're visiting the wildlife sanctuaries, exploring the tea estates, or simply enjoying the serene landscapes, the journey to Dooars is as enchanting as the destination itself.",
               img1: "https://nomadicweekends.com/blog/wp-content/uploads/2019/03/24667756661_42d9b56c91_b.jpg",
               img2: "https://nomadicweekends.com/blog/wp-content/uploads/2019/03/Samsing-Dooars-in-Monsoon.jpg",
               img3: "https://www.jayantitravels.in/blog/images/post/17-08-23-Jayanti-Travels-Web-Blog-1-img-1.jpg",
               img4: "https://assets.telegraphindia.com/telegraph/2021/Sep/1631832735_jaldapara.jpg",
               img5: "https://www.sharmatours.in/ServerImage/206d4148-11fd-4d36-b58b-3317859379db.jpg",
               img6: "https://media-cdn.tripadvisor.com/media/photo-s/12/6e/47/7b/rainforest-dooars.jpg",
               img7: "https://www.getbengal.com/uploads/story_image/Chalsa-tourism.jpg",
               img8: "https://flyhighholiday.com/wp-content/uploads/2021/12/Dooars-1.jpg",
               img9: "https://northbengaltourism.com/blog/wp-content/uploads/2017/03/kuntal-nandi-photography-landscape-chilapata-dooars.jpg",
               img10: "https://media-cdn.tripadvisor.com/media/photo-s/15/73/9b/94/camping-de-dooars.jpg"
            }
         }
      )
   }

   const updatebhutan = () => {
      return dispatch(
         {
            type: "bhutan",
            payload: {
               banner: "https://www.authenticindiatours.com/app/uploads/2024/03/10-Customs-and-Traditions-in-Bhutan-banner-1400x550-c-default.jpg",
               heading: "Bhutan",
               name: "Bhutan,",
               para: "is a small, landlocked country located in the Eastern Himalayas between India and China. It is known for its pristine natural beauty, unique culture, and commitment to sustainable development. The country has a population of around 800,000 people and the official language is Dzongkha. Bhutan is home to a diverse range of flora and fauna, including the famed snow leopard and takin. The capital city is Thimphu, and the official currency is the Ngultrum. Known for its Gross National Happiness (GNH) index, Bhutan prioritizes the well-being and happiness of its citizens above economic growth.",
               reach: "How we can reach Bhutan",
               reachimg: "https://www.telegraph.co.uk/content/dam/Travel/2018/August/bhutan-dancers.jpg",
               reachtext: "Reaching Bhutan,",
               reachpara: "Bhutan is a small, landlocked country located in the Eastern Himalayas between India and China. It is known for its pristine natural beauty, unique culture, and commitment to sustainable development. The country has a population of around 800,000 people and the official language is Dzongkha. Bhutan is home to a diverse range of flora and fauna, including the famed snow leopard and takin. The capital city is Thimphu, and the official currency is the Ngultrum. Known for its Gross National Happiness (GNH) index, Bhutan prioritizes the well-being and happiness of its citizens above economic growth.",
               img1: "https://static.toiimg.com/photo/92890901.cms",
               img2: "https://lp-cms-production.imgix.net/2022-01/GettyRF_511875301.jpg?w=1440&h=810&fit=crop&auto=format&q=75",
               img3: "https://www.startravel.com.my/wp-content/uploads/2023/11/Butan-3.jpg",
               img4: "https://images.followalice.com/LYMth03VDX1xjGGrW9WG0/407a868f99d578f7585b8f38ff7d6c33/Ours._S._Buddha_dordenma_statue_with_monks_and_tourists_in_Thimphu__Bhutan.jpg?fit=fill&w=1600&h=1600&fm=jpg",
               img5: "https://traveltradejournal.com/wp-content/uploads/2024/04/Khamsum-Yuley-Namgyel-Choeten-Bhutan.png",
               img6: "https://www.asiaodysseytravel.com/images/asia-tours/bhutan-tours/khamsum-yulley-namgel-chorten-bhutan-700-3.jpg",
               img7: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/ca/a1/62/caption.jpg?w=500&h=400&s=1",
               img8: "https://www.andbeyond.com/wp-content/uploads/sites/5/10-things-you-didn%E2%80%99t-know-about-Bhutan.jpg",
               img9: "https://www.orfonline.org/public/uploads/seo/20240118154854.jpg",
               img10: "https://assets.cntraveller.in/photos/65f3e812adddac83c9212d27/16:9/w_1024%2Cc_limit/raimond-klavins--oIROktPXpA-unsplash.jpg"
            }
         }
      )
   }
   return (
      <AppContext.Provider value={{ ...state, updatedarjeeling,updatesikkim,updatedooars,updatebhutan }}>
         {children}
      </AppContext.Provider>
   )
}
export const useglobalcontext = () => {
   return useContext(AppContext)
}
export default AppContext;

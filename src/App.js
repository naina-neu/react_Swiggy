import React from "react";
import ReactDOM from "react-dom/client";
import swiggy_logo from "../swiggy_logo.png";

/**
 *
 * Header
 *    - Logo
 *    - Nav items
 * Body
 *    - Search
 *    - Restaurant Container
 *      - RestaurentCard
 *        - img
 *        - Name of Res, Star Rating, Cuisine, Delivery Title
 * Footer
 *    - Copyright
 *    - Links
 *    - Address
 *    - Contact
 *
 *
 */
const resList = [
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "298791",
          name: "Kabab Biryani Corner",
          cloudinaryImageId: "6ad23ea25d7f0dd202c3dbd660df2a46",
          locality: "Vivek Nagar",
          areaName: "Richmond Road",
          costForTwo: "₹200 for two",
          cuisines: ["Biryani", "Kebabs", "Chinese", "Indian"],
          avgRating: 3.8,
          parentId: "113069",
          avgRatingString: "3.8",
          totalRatingsString: "100+",
          sla: {
            deliveryTime: 31,
            lastMileTravel: 4.3,
            serviceability: "SERVICEABLE",
            slaString: "30-35 mins",
            lastMileTravelString: "4.3 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2024-04-04 05:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          aggregatedDiscountInfoV2: {
            header: "25% OFF",
            shortDescriptionList: [
              {
                discountType: "Percentage",
                operationType: "RESTAURANT",
              },
            ],
            descriptionList: [
              {
                meta: "25% off on all orders",
                discountType: "Percentage",
                operationType: "RESTAURANT",
              },
            ],
          },
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=298791&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "93498",
          name: "Behrouz Biryani",
          cloudinaryImageId: "a4ffed13eb197c6df43dfe1c756560e5",
          locality: "Rashtriya Vidyalaya Rd",
          areaName: "Jayanagar",
          costForTwo: "₹500 for two",
          cuisines: [
            "Biryani",
            "North Indian",
            "Kebabs",
            "Mughlai",
            "Lucknowi",
            "Hyderabadi",
            "Desserts",
            "Beverages",
          ],
          avgRating: 4.2,
          parentId: "1803",
          avgRatingString: "4.2",
          totalRatingsString: "1K+",
          sla: {
            deliveryTime: 31,
            lastMileTravel: 4.1,
            serviceability: "SERVICEABLE",
            slaString: "30-35 mins",
            lastMileTravelString: "4.1 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2024-04-04 03:00:00",
            opened: true,
          },
          badges: {
            textExtendedBadges: [
              {
                iconId: "guiltfree/GF_Logo_android_3x",
                shortDescription: "options available",
                fontColor: "#7E808C",
              },
            ],
          },
          isOpen: true,
          aggregatedDiscountInfoV2: {
            header: "50% OFF",
            shortDescriptionList: [
              {
                meta: "Use SWIGGY50",
                discountType: "Percentage",
                operationType: "RESTAURANT",
              },
            ],
            descriptionList: [
              {
                meta: "50% off up to ₹100 | Use code SWIGGY50",
                discountType: "Percentage",
                operationType: "RESTAURANT",
              },
            ],
          },
          type: "F",
          badgesV2: {
            entityBadges: {
              textExtendedBadges: {
                badgeObject: [
                  {
                    attributes: {
                      description: "",
                      shortDescription: "options available",
                      fontColor: "#7E808C",
                      iconId: "guiltfree/GF_Logo_android_3x",
                    },
                  },
                ],
              },
              textBased: {},
              imageBased: {},
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=93498&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "63048",
          name: "Sharief Bhai",
          cloudinaryImageId: "5015204e6868e99a2e4d84880af68c5a",
          locality: "Frazer Town",
          areaName: "Frazer Town",
          costForTwo: "₹400 for two",
          cuisines: [
            "Biryani",
            "Kebabs",
            "Mughlai",
            "Arabian",
            "South Indian",
            "Rolls & Wraps",
            "Street Food",
            "Fast Food",
            "Desserts",
            "Beverages",
          ],
          avgRating: 4.3,
          parentId: "5734",
          avgRatingString: "4.3",
          totalRatingsString: "10K+",
          sla: {
            deliveryTime: 31,
            lastMileTravel: 4.7,
            serviceability: "SERVICEABLE",
            slaString: "30-35 mins",
            lastMileTravelString: "4.7 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2024-04-04 03:01:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "Rxawards/_CATEGORY-Biryani.png",
                description: "Delivery!",
              },
            ],
          },
          isOpen: true,
          aggregatedDiscountInfoV2: {
            header: "40% OFF",
            shortDescriptionList: [
              {
                meta: "Use TRYNEW",
                discountType: "Percentage",
                operationType: "RESTAURANT",
              },
            ],
            descriptionList: [
              {
                meta: "40% off up to ₹80 | Use code TRYNEW",
                discountType: "Percentage",
                operationType: "RESTAURANT",
              },
            ],
          },
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "Rxawards/_CATEGORY-Biryani.png",
                      description: "Delivery!",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
              textBased: {},
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "4.0",
              ratingCount: "1K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=63048&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "575063",
          name: "Veg Daawat by Behrouz",
          cloudinaryImageId: "2b579171cefc545ce6479e21c0016798",
          locality: "Rashtriya Vidyalaya Road",
          areaName: "Jayanagar",
          costForTwo: "₹700 for two",
          cuisines: [
            "Biryani",
            "North Indian",
            "Kebabs",
            "Mughlai",
            "Lucknowi",
            "Hyderabadi",
            "Desserts",
            "Beverages",
          ],
          avgRating: 4,
          veg: true,
          parentId: "344904",
          avgRatingString: "4.0",
          totalRatingsString: "10+",
          sla: {
            deliveryTime: 28,
            lastMileTravel: 4.1,
            serviceability: "SERVICEABLE",
            slaString: "25-30 mins",
            lastMileTravelString: "4.1 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2024-04-04 03:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            ],
          },
          isOpen: true,
          aggregatedDiscountInfoV2: {
            header: "50% OFF",
            shortDescriptionList: [
              {
                meta: "Use SWIGGY50",
                discountType: "Percentage",
                operationType: "RESTAURANT",
              },
            ],
            descriptionList: [
              {
                meta: "50% off up to ₹100 | Use code SWIGGY50",
                discountType: "Percentage",
                operationType: "RESTAURANT",
              },
            ],
          },
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "v1695133679/badges/Pure_Veg111.png",
                      description: "pureveg",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=575063&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "224868",
          name: "Ambur Dum Biriyani",
          cloudinaryImageId: "t04etzr7nwfwal3afwtn",
          locality: "Binnamangala",
          areaName: "Indiranagar",
          costForTwo: "₹300 for two",
          cuisines: ["Indian", "Mughlai"],
          avgRating: 3.9,
          parentId: "31395",
          avgRatingString: "3.9",
          totalRatingsString: "1K+",
          sla: {
            deliveryTime: 33,
            lastMileTravel: 6.2,
            serviceability: "SERVICEABLE",
            slaString: "30-35 mins",
            lastMileTravelString: "6.2 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2024-04-10 00:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          aggregatedDiscountInfoV2: {
            header: "30% OFF",
            shortDescriptionList: [
              {
                meta: "Use TRYNEW",
                discountType: "Percentage",
                operationType: "RESTAURANT",
              },
            ],
            descriptionList: [
              {
                meta: "30% off up to ₹75 | Use code TRYNEW",
                discountType: "Percentage",
                operationType: "RESTAURANT",
              },
            ],
          },
          type: "F",
          badgesV2: {
            entityBadges: {
              textExtendedBadges: {},
              textBased: {},
              imageBased: {},
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=224868&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "170539",
          name: "Donne Biryani Adda",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/3/17/387fd175-df96-4e5d-a07e-2b44d18fbe42_1985a561-1b08-4538-a39f-f1c61ce2b3b1.jpg_compressed",
          locality: "Appareddy Palya",
          areaName: "Indiranagar",
          costForTwo: "₹200 for two",
          cuisines: ["Biryani", "South Indian", "Desserts", "Beverages"],
          avgRating: 3.7,
          parentId: "20115",
          avgRatingString: "3.7",
          totalRatingsString: "1K+",
          sla: {
            deliveryTime: 26,
            lastMileTravel: 6.2,
            serviceability: "SERVICEABLE",
            slaString: "25-30 mins",
            lastMileTravelString: "6.2 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2024-04-04 03:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          aggregatedDiscountInfoV2: {
            header: "40% OFF",
            shortDescriptionList: [
              {
                meta: "Use TRYNEW",
                discountType: "Percentage",
                operationType: "RESTAURANT",
              },
            ],
            descriptionList: [
              {
                meta: "40% off up to ₹80 | Use code TRYNEW",
                discountType: "Percentage",
                operationType: "RESTAURANT",
              },
            ],
          },
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=170539&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "440349",
          name: "Sultan dum biryani",
          cloudinaryImageId: "d5qph22phd4yrebcisie",
          locality: "1st Stage",
          areaName: "Indiranagar",
          costForTwo: "₹300 for two",
          cuisines: ["Biryani", "Desserts"],
          avgRating: 3.9,
          parentId: "265464",
          avgRatingString: "3.9",
          totalRatingsString: "100+",
          sla: {
            deliveryTime: 33,
            lastMileTravel: 6.2,
            serviceability: "SERVICEABLE",
            slaString: "30-35 mins",
            lastMileTravelString: "6.2 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2024-04-10 00:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          aggregatedDiscountInfoV2: {
            header: "30% OFF",
            shortDescriptionList: [
              {
                meta: "Use TRYNEW",
                discountType: "Percentage",
                operationType: "RESTAURANT",
              },
            ],
            descriptionList: [
              {
                meta: "30% off up to ₹75 | Use code TRYNEW",
                discountType: "Percentage",
                operationType: "RESTAURANT",
              },
            ],
          },
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=440349&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
];

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={swiggy_logo} alt="Swiggy Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, id } =
    resData.card.card?.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alit="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h4>{cuisines}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restaurant, index) => (
          <RestaurantCard key={index} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

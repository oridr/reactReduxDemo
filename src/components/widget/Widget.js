'use strict';

require('./widget.less');

import React from 'react'
import Profile from '../profile/Profile';
import Reputation from '../reputation/Reputation';
import Reviews from '../reviews/Reviews';

const socialInfo = {
	"facebook" : {
		"connections" : 230,
		"positions" : [{
			"company_name" : "E-Auction Maven, Inc.",
			"company_logo" : "https://scontent.xx.fbcdn.net/hprofile-xpf1/v/t1.0-1/c12.12.155.155/s50x50/1004501_670878189638393_554116428_n.jpg?oh=a48a62448963c418bc7b002a654aa473&oe=56F6C059",
			"title" : "President/CEO"
		}, {
			"company_name" : "Bubblefast, LLC",
			"company_logo" : "https://fbcdn-profile-a.akamaihd.net/static-ak/rsrc.php/v2/ym/r/t6iv9Q7G_NF.png"
		}
		],
		"education" : [{
			"degree" : "Journalism/Magazine Publishing",
			"school" : "Northwestern University",
			"school_type" : "Graduate School",
			"school_logo" : "https://scontent.xx.fbcdn.net/hprofile-xtf1/v/t1.0-1/p50x50/11149582_10153396860973343_3996235856434279051_n.jpg?oh=36257c46627d86c33d037f9a5ab37588&oe=56D9E0C8"
		}, {
			"degree" : "Liberal Arts",
			"school" : "DePaul University",
			"school_type" : "College",
			"school_logo" : "https://scontent.xx.fbcdn.net/hprofile-xfa1/v/t1.0-1/p50x50/420399_10150720852145803_928612832_n.jpg?oh=d4c16a29149ad479c3e75ed8794de343&oe=56E9C535"
		}
		],
		"languages" : []
	},
	"linkedin" : {
		"connections" : 46,
		"positions" : [{
			"company_name" : "e-Auction Maven, Inc.",
			"title" : "President",
			"start_date" : "2007-08-01"
		}
		],
		"education" : [{
			"school" : "DePaul University",
			"school_type" : "BA"
		}, {
			"school" : "Northwestern University",
			"school_type" : "MSJ"
		}
		],
		"languages" : [],
		"recommendations" : [{
			"content" : "Yetta is a very successful and accomplished eCommerce seller on multiple platforms. Her friendly, vivacious personality helps her share her experience with many.\n",
			"date_recommended" : "2015-04-09T15:53:48.246Z",
			"reviewer_id" : 226,
			"picture_url" : "http://graph.facebook.com/507302338/picture?height=100",
			"recommender_name" : "Kat Simpson"
		}
		]
	},
	"facebook_pages" : {},
	"twitter" : {}

};

const currentReviews = [{
	"review_content" : "fast delivery nice shirt",
	"marketplace_name" : "ebay",
	"reviewed_as_seller" : 1,
	"review_type" : "positive"
}, {
	"review_content" : "All fork tines deeply scratched so as to make eating with them unpleasant.",
	"marketplace_name" : "ebay",
	"reviewed_as_seller" : 1,
	"review_type" : "negative"
}, {
	"review_content" : "Thank you ",
	"marketplace_name" : "ebay",
	"reviewed_as_seller" : 1,
	"review_type" : "positive"
}];

const tabs = [{
	"name" : "ebay",
	"logo" : null,
	"total_reviews" : 16451,
	"score" : 99.7023809523809,
	"top_rated" : true,
	"characteristics" : [{
		"name" : "Communication",
		"score" : 57.0
	}, {
		"name" : "Communication",
		"score" : 93.0
	}, {
		"name" : "Item as described",
		"score" : 71.0
	}
	]
}, {
	"name" : "amazon",
	"logo" : null,
	"total_reviews" : 524,
	"score" : 100,
	"characteristics" : []
}, {
	"name" : "etsy",
	"logo" : null,
	"reviews" : [],
	"total_reviews" : 0,
	"score" : 0.0
}
];

let activeTab = 'ebay';
const onTabSelect = (tabName) => {
	console.log(tabName);
};

const Widget = () =>
	<div className="widget">
		<div className="widget__profile widget__area">
			<Profile displayName={"Yetta Matturro Wieland"} profileImage={"https://graph.facebook.com/1379557497/picture"} socialInfo={socialInfo} totalRating={-99.3354066227468} topSeller={true} />
		</div>
		<div className="widget__reputation widget__area">
			<Reputation tabs={ tabs } activeTab={ activeTab } onTabSelect={ onTabSelect } />
		</div>
		<div className="widget__review widget__area">
			<Reviews numberOfTotalReviews={10} currentReviews={currentReviews} currentPage={2} numberOfPages={5} />
		</div>
	</div>;

export default Widget;
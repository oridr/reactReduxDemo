'use strict';

require('./profile.less');

import React from 'react';
import RatingBubble from './ratingBubble/RatingBubble';

const Profile = ({ displayName, profileImage, socialInformation, totalRating, topSeller }) => {
	const ratingDescriptor = totalRating === 0 ? '' : (totalRating > 0 ? 'positive' : 'negative');
	const rating = Math.abs(totalRating).toFixed(1);

	return (
		<section className="profile">
			<div className="profile__details">
				<img className="profile__image" src={profileImage} />

				<div className="profile__ratingBubble">
					<RatingBubble rating={rating} ratingDescriptor={ratingDescriptor} />
				</div>

				{!!topSeller &&
					<div className="profile__topSeller"></div>
				}

				<h1 className="profile__header">{displayName}</h1>

				<h2 className="profile__rating">{`${rating}% ${ ratingDescriptor } feedback`}</h2>
			</div>
		</section>
	);
};

export default Profile;
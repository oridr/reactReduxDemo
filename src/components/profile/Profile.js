'use strict';

require('./profile.less');

import React, { PropTypes } from 'react';
import RatingBubble from './ratingBubble/RatingBubble';
import Social from './social/Social';

const Profile = ({ displayName, profileImage, socialInfo, totalRating, topSeller }) => {
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

				<Social socialInfo={socialInfo} />
			</div>
		</section>
	);
};

Profile.propTypes = {
	displayName: PropTypes.string.isRequired,
	profileImage: PropTypes.string.isRequired,
	socialInfo: PropTypes.object.isRequired,
	totalRating: PropTypes.number.isRequired,
	topSeller: PropTypes.bool
};

export default Profile;
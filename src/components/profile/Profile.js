'use strict';

require('./profile.less');

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import RatingBubble from './ratingBubble/RatingBubble';
import Social from './social/Social';

export const Profile = ({ displayName, profileImage, socialInfo, totalRating, topSeller }) => {
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
	topSeller: PropTypes.bool.isRequired
};

const mapStateToProps = ({ display_name, profile_image_link, social_information, total_rating, relevant_reputation, currentReputation }) => ({
	displayName: display_name,
	profileImage: profile_image_link,
	socialInfo: social_information,
	totalRating: total_rating,
	topSeller: !!relevant_reputation[currentReputation].top_rated
});

export default connect(mapStateToProps)(Profile);
'use strict';

import React from 'react';

const Profile = ({ displayName, profileImage, socialInformation, totalRating, topRated }) => {
	const ratingDescriptor = totalRating === 0 ? '' : (totalRating > 0 ? 'positive' : 'negative');

	return (
		<section className="profile">
			<img className="profile__image" src={profileImage}/>

			{!!topRated &&
				<div>topRated</div>
			}

			<h1 className="profile__header">{displayName}</h1>

			{topRated === undefined ||
				<h2 className="profile__subHeader">{`${totalRating}% ${ ratingDescriptor } feedback`}</h2>
			}
		</section>
	);
};

export default Profile;
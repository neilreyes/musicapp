import React, { Component } from 'react';

class Profile extends Component{
	render(){
		let artist = {
			name: '',
			followers: {total: ''},
			images: [{url:''},{url:''},{url:''}],
			genres: [],
		};

		artist = this.props.artist !== null ? this.props.artist : artist;

		return (
			<div className="Profile row">
				<figure className="col col-12 col-md-6">
					<img
						src={artist.images[0].url}
						alt="Profile"
						className="profile-image img-fluid rounded border-5"
					/>
				</figure>
				<div className="col col-12 col-md-6">
					<h1 className="artist-name">{artist.name}</h1>
					<span className="artist-followers-total">{artist.followers.total} followers</span>
					<ul className="Genres">
						<li>Genres</li>
						{artist.genres.map(
							(genre, key) => {
								return (
									<li key={key}>{genre}</li>
								)
							}
						)}
					</ul>
				</div>
			</div>
		);
	}
}

export default Profile;